'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Minus, Plus, ChevronDown } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/mockData';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/" className="text-brown hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const displayPrice = product.salePrice || product.price;
  const hasSale = !!product.salePrice;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: product.category, href: `/shop?category=${product.category}` },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Left: Images */}
        <div>
          <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-brown' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 25vw, 12.5vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.reviewCount} reviews)</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            {hasSale && (
              <span className="text-2xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
            )}
            <span className="text-3xl font-bold text-brown">${displayPrice.toFixed(2)}</span>
          </div>

          <p className="text-gray-600 mb-6">{product.shortDescription}</p>

          {/* Color Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Color</label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color ? 'border-brown scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Stock Info */}
          <div className="mb-6">
            <span className={`font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 rounded-lg hover:bg-beige transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="p-2 border border-gray-300 rounded-lg hover:bg-beige transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="w-full bg-brown text-white py-3 rounded-lg hover:bg-brown/90 transition-colors font-semibold"
            >
              Add to Cart
            </button>
            <div className="flex gap-4">
              <button className="flex-1 border-2 border-brown text-brown py-3 rounded-lg hover:bg-beige transition-colors font-semibold">
                Buy Now
              </button>
              <button className="p-3 border-2 border-gray-300 rounded-lg hover:bg-beige transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6 space-y-2 text-sm text-gray-600">
            <div className="flex">
              <span className="font-semibold w-24">SKU:</span>
              <span>{product.SKU}</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Category:</span>
              <Link href={`/shop?category=${product.category}`} className="text-brown hover:underline">
                {product.category}
              </Link>
            </div>
            <div className="flex">
              <span className="font-semibold w-24">Tags:</span>
              <div className="flex gap-2 flex-wrap">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-brown">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="mb-16">
        <div className="space-y-4">
          <button
            onClick={() => toggleAccordion('description')}
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-beige rounded-lg hover:bg-beige/80 transition-colors"
          >
            <span className="font-semibold text-lg">Description</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openAccordion === 'description' ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openAccordion === 'description' && (
            <div className="px-6 py-4 bg-white border border-gray-200 rounded-lg mb-4">
              <p className="text-gray-600">{product.description}</p>
            </div>
          )}

          <button
            onClick={() => toggleAccordion('shipping')}
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-beige rounded-lg hover:bg-beige/80 transition-colors"
          >
            <span className="font-semibold text-lg">Shipping Info</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openAccordion === 'shipping' ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openAccordion === 'shipping' && (
            <div className="px-6 py-4 bg-white border border-gray-200 rounded-lg mb-4">
              <p className="text-gray-600">
                Free shipping on orders over $100. Standard shipping takes 5-7 business days. 
                Express shipping available for an additional fee. All items are carefully packaged 
                to ensure safe delivery.
              </p>
            </div>
          )}

          <button
            onClick={() => toggleAccordion('reviews')}
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-beige rounded-lg hover:bg-beige/80 transition-colors"
          >
            <span className="font-semibold text-lg">Reviews ({product.reviewCount})</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openAccordion === 'reviews' ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openAccordion === 'reviews' && (
            <div className="px-6 py-4 bg-white border border-gray-200 rounded-lg mb-4">
              <p className="text-gray-600">
                Customer reviews and ratings will be displayed here. This product has an average 
                rating of {product.rating} stars based on {product.reviewCount} reviews.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
