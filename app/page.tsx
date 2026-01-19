'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Truck, Shield, Headphones, Tag } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';
import ProductCard from '@/components/ProductCard';
import { products, categories, heroImages } from '@/lib/mockData';

export default function HomePage() {
  const topSellingProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
        <ImageSlider images={heroImages} className="w-full h-full" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Modern Wooden Chair
            </h1>
            <p className="text-xl md:text-2xl mb-8">Elegant design meets comfort</p>
            <Link
              href="/shop"
              className="inline-block bg-brown text-white px-8 py-3 rounded-lg hover:bg-brown/90 transition-colors font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Home Decor Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Home Decor Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.name}`}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {category.isNew && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-brown px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-brown transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Truck className="w-8 h-8 text-brown" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping & Returns</h3>
              <p className="text-gray-600 text-sm">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-brown" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Money Back Guarantee</h3>
              <p className="text-gray-600 text-sm">30-day money back guarantee</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Headphones className="w-8 h-8 text-brown" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Online Support 24/7</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer support</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Tag className="w-8 h-8 text-brown" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Regular Sales</h3>
              <p className="text-gray-600 text-sm">Exclusive deals and discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
              alt="Promotion 1"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Get Save 35% Off First Order</h3>
                <Link
                  href="/shop"
                  className="inline-block bg-white text-brown px-6 py-2 rounded-lg hover:bg-beige transition-colors font-semibold"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=600&fit=crop"
              alt="Promotion 2"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Handmade Pottery Ceramics Art</h3>
                <Link
                  href="/shop"
                  className="inline-block bg-white text-brown px-6 py-2 rounded-lg hover:bg-beige transition-colors font-semibold"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop"
              alt="Promotion 3"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Quilted Quilt With Dots Home Decor</h3>
                <Link
                  href="/shop"
                  className="inline-block bg-white text-brown px-6 py-2 rounded-lg hover:bg-beige transition-colors font-semibold"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Top Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
