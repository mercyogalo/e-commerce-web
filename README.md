# Karigari - Modern Furniture E-Commerce Website

A modern, production-ready e-commerce furniture website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Full E-Commerce Functionality**
  - Product browsing and filtering
  - Product detail pages with image galleries
  - Shopping cart with localStorage persistence
  - Checkout flow
  - Order confirmation

- 🎨 **Modern Design**
  - Clean, minimalist UI
  - Warm furniture-store aesthetic
  - Fully responsive (mobile-first)
  - Smooth transitions and animations

- 📱 **Responsive Design**
  - Optimized for all screen sizes
  - Mobile-friendly navigation
  - Touch-friendly interactions

- 🛒 **Shopping Features**
  - Add to cart functionality
  - Quantity management
  - Color selection
  - Cart badge with item count
  - Persistent cart state

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **Mock Data** (No API calls)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── products/[id]/     # Product detail page
│   ├── login/             # Login page
│   ├── signup/            # Sign up page
│   ├── contact/           # Contact page
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout page
│   ├── confirmation/      # Order confirmation
│   └── shop/              # Shop/Product listing
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── ProductCard.tsx   # Product card component
│   ├── ImageSlider.tsx   # Image slider component
│   ├── Accordion.tsx     # Accordion component
│   └── Breadcrumb.tsx    # Breadcrumb navigation
├── contexts/              # React contexts
│   └── CartContext.tsx   # Shopping cart context
├── lib/                   # Utilities and data
│   ├── types.ts          # TypeScript types
│   └── mockData.ts       # Mock product data
└── public/                # Static assets
```

## Pages

- **Home** (`/`) - Hero slider, categories, features, promotional banners, top products
- **Shop** (`/shop`) - Product listing with category filters
- **Product Detail** (`/products/[id]`) - Product details, image gallery, add to cart
- **Login** (`/login`) - User login with image slider
- **Sign Up** (`/signup`) - User registration
- **Contact** (`/contact`) - Contact form and FAQs
- **Cart** (`/cart`) - Shopping cart with order summary
- **Checkout** (`/checkout`) - Shipping and payment forms
- **Confirmation** (`/confirmation`) - Order confirmation page

## Design System

### Colors

- **Beige**: `#F5F1E8`
- **Cream**: `#FFF8F0`
- **Brown**: `#8B6F47`
- **Charcoal**: `#2C2C2C`

### Typography

- Font: Inter (Google Fonts)
- Clean sans-serif styling

## Features Implemented

✅ Responsive navigation with dropdown menus
✅ Product browsing and filtering
✅ Product detail pages with image galleries
✅ Shopping cart with localStorage
✅ Checkout flow
✅ Order confirmation
✅ Image sliders
✅ Form validation
✅ Accordion FAQs
✅ Breadcrumb navigation
✅ Mobile-responsive design

## Cart Functionality

The shopping cart uses React Context and localStorage for persistence:
- Cart state persists across page reloads
- Add/remove items
- Update quantities
- Color selection
- Dynamic cart badge count

## Notes

- All product images use Unsplash placeholders
- Mock data only (no API integration)
- Cart data stored in browser localStorage
- Form submissions are handled client-side (no backend)

## Build for Production

```bash
npm run build
npm start
```

## License

This project is for demonstration purposes.
