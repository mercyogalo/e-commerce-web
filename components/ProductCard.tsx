'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const displayPrice = product.salePrice || product.price;
  const hasSale = !!product.salePrice;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {hasSale && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Sale
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-brown transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            {hasSale && (
              <span className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</span>
            )}
            <span className="text-brown font-bold text-lg">${displayPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
