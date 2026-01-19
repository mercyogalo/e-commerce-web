'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown, Globe } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const shopItems = ['All Products', 'New Arrivals', 'Best Sellers', 'Sale'];
  const categoryItems = ['Chairs', 'Nightstands', 'Book Beds', 'Flower Pot', 'Throws / Rugs', 'Side Tables'];
  const productItems = ['Product Detail', 'Product Grid', 'Product List'];
  const pagesItems = ['About Us', 'Contact', 'FAQ', 'Privacy Policy'];
  const blogItems = ['Blog Grid', 'Blog Detail', 'Blog List'];

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-beige border-b border-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <p className="text-brown">Sale on modern furniture and ready for challenges this is</p>
            <div className="flex items-center gap-4">
              <select className="bg-transparent border-none text-brown text-sm cursor-pointer">
                <option>EN</option>
                <option>ES</option>
                <option>FR</option>
              </select>
              <select className="bg-transparent border-none text-brown text-sm cursor-pointer">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-brown">
            Karigari
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-brown transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-brown transition-colors"
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
              >
                Shop <ChevronDown className="w-4 h-4" />
              </button>
              {isShopOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsShopOpen(true)}
                  onMouseLeave={() => setIsShopOpen(false)}
                >
                  {shopItems.map((item) => (
                    <Link
                      key={item}
                      href="/shop"
                      className="block px-4 py-2 text-gray-700 hover:bg-beige hover:text-brown transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-brown transition-colors"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                Categories <ChevronDown className="w-4 h-4" />
              </button>
              {isCategoriesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  {categoryItems.map((item) => (
                    <Link
                      key={item}
                      href={`/shop?category=${item}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-beige hover:text-brown transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-brown transition-colors"
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
              >
                Product <ChevronDown className="w-4 h-4" />
              </button>
              {isProductOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsProductOpen(true)}
                  onMouseLeave={() => setIsProductOpen(false)}
                >
                  {productItems.map((item) => (
                    <Link
                      key={item}
                      href="/products/1"
                      className="block px-4 py-2 text-gray-700 hover:bg-beige hover:text-brown transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-brown transition-colors"
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              {isPagesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsPagesOpen(true)}
                  onMouseLeave={() => setIsPagesOpen(false)}
                >
                  {pagesItems.map((item) => (
                    <Link
                      key={item}
                      href={item === 'Contact' ? '/contact' : '#'}
                      className="block px-4 py-2 text-gray-700 hover:bg-beige hover:text-brown transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-brown transition-colors"
                onMouseEnter={() => setIsBlogOpen(true)}
                onMouseLeave={() => setIsBlogOpen(false)}
              >
                Blog <ChevronDown className="w-4 h-4" />
              </button>
              {isBlogOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onMouseLeave={() => setIsBlogOpen(false)}
                >
                  {blogItems.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-beige hover:text-brown transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-700 hover:text-brown transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/login" className="p-2 text-gray-700 hover:text-brown transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <button className="relative p-2 text-gray-700 hover:text-brown transition-colors">
              <Heart className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-brown text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-brown transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-brown text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-brown">Home</Link>
            <Link href="/shop" className="block py-2 text-gray-700 hover:text-brown">Shop</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-brown">Contact</Link>
            <Link href="/login" className="block py-2 text-gray-700 hover:text-brown">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
