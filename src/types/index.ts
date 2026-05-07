export interface Product {
  id: string;
  name: string;
  latinName: string;
  description?: string;
  priceInPaise: number;
  imageUrl?: string;
  badges: Badge[];
  stock: number;
}

export type Badge = 'beginner' | 'pet-safe' | 'rare' | 'low-light';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

export interface RazorpayPaymentResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}
