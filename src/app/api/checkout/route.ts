import { NextRequest, NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';
import { products } from '@/data/products';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body as { items: { productId: string; quantity: number }[] };

    // Calculate total from server-side product data (never trust client prices)
    let totalInPaise = 0;
    for (const item of items) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        return NextResponse.json({ error: 'Invalid product' }, { status: 400 });
      }
      if (item.quantity > product.stock) {
        return NextResponse.json({ error: `${product.name} is out of stock` }, { status: 400 });
      }
      totalInPaise += product.priceInPaise * item.quantity;
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: totalInPaise, // Razorpay expects paise
      currency: 'INR',
      receipt: `order_${Date.now()}`,
      notes: {
        itemCount: items.length.toString(),
      },
    });

    // In production: save order to DB via Prisma here
    // await prisma.order.create({ ... })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
