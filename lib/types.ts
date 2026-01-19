export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  shortDescription: string;
  colors: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  SKU: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
}
