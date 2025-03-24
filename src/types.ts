// src/types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  cost_price: number;
  discount_percentage: number;
  media_urls: string[];
  price: number; // Added explicitly for selling price
  glowType?: 'tools' | 'sportswear' | 'gadgets' | 'clothing' | 'cta' | 'new'; // Optional glow type
}