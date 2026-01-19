'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CartItem } from '@/lib/types';

interface OrderData {
  items: CartItem[];
  total: number;
  timestamp: number;
}

export default function ConfirmationPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [orderId] = useState(() => `ORD-${Date.now()}`);
  const [orderDate] = useState(() => new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }));

  useEffect(() => {
    // Get order data from localStorage
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      try {
        setOrderData(JSON.parse(lastOrder));
        // Clear the stored order after displaying
        localStorage.removeItem('lastOrder');
      } catch (error) {
        console.error('Error parsing order data:', error);
      }
    }
  }, []);

  if (!orderData) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">No order found</h1>
        <Link
          href="/"
          className="inline-block bg-brown text-white px-8 py-3 rounded-lg hover:bg-brown/90 transition-colors font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const shipping = orderData.total > 100 ? 0 : 9.99;
  const total = orderData.total + shipping;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 text-lg">
          Thank you for your purchase. Your order has been confirmed.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Order Details</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Order ID</span>
            <span className="font-semibold">{orderId}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Date</span>
            <span className="font-semibold">{orderDate}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Total Paid</span>
            <span className="font-bold text-brown text-lg">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <div className="space-y-3">
            {orderData.items.map((item) => {
              const price = item.product.salePrice || item.product.price;
              return (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex justify-between py-2 border-b">
                  <div>
                    <p className="font-semibold">{item.product.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity} × ${price.toFixed(2)}
                    </p>
                  </div>
                  <span className="font-semibold">${(price * item.quantity).toFixed(2)}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-beige p-6 rounded-lg">
          <h3 className="font-semibold mb-2">What's Next?</h3>
          <p className="text-gray-600 text-sm">
            You will receive an email confirmation with your order details and tracking information 
            once your order ships. We'll keep you updated every step of the way!
          </p>
        </div>
      </div>

      <div className="text-center">
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
