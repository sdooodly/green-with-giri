import { NextResponse } from 'next/server';
import { products } from '@/data/products';

// GET /api/products — returns all products
// In production, replace with: prisma.product.findMany()
export async function GET() {
  return NextResponse.json(products);
}
