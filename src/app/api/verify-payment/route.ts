import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }

    // Payment verified — update order status in DB
    // await prisma.order.update({
    //   where: { razorpayOrderId: razorpay_order_id },
    //   data: {
    //     status: 'PAID',
    //     razorpayPaymentId: razorpay_payment_id,
    //     razorpaySignature: razorpay_signature,
    //   },
    // });

    return NextResponse.json({ success: true, message: 'Payment verified' });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
