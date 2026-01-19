'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Breadcrumb from '@/components/Breadcrumb';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link
            href="/"
            className="inline-block bg-brown text-white px-8 py-3 rounded-lg hover:bg-brown/90 transition-colors font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
      
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const price = item.product.salePrice || item.product.price;
            return (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="bg-white border border-gray-200 rounded-lg p-6 flex gap-6"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{item.product.name}</h3>
                  {item.selectedColor && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-600">Color:</span>
                      <div
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-beige transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-beige transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-brown">
                        ${(price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">${price.toFixed(2)} each</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors self-start"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-beige rounded-lg p-6 sticky top-8">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {getTotalPrice() > 100 ? 'Free' : '$9.99'}
                </span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-brown">
                  ${(getTotalPrice() + (getTotalPrice() > 100 ? 0 : 9.99)).toFixed(2)}
                </span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-brown text-white text-center py-3 rounded-lg hover:bg-brown/90 transition-colors font-semibold"
            >
              Proceed to Checkout
            </Link>
            <Link
              href="/"
              className="block w-full text-center py-3 text-brown hover:underline mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
