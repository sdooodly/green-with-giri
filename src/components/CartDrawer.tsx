'use client';

import { useCartStore } from '@/store/cart';
import { formatINR } from '@/lib/format';

export function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
        }),
      });

      const data = await res.json();

      if (!data.orderId) {
        alert('Failed to create order. Please try again.');
        return;
      }

      // Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: 'INR',
        name: 'Green with Giri',
        description: 'Botanical order',
        order_id: data.orderId,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          // Verify payment on server
          await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });
          clearCart();
          alert('Payment successful! Your plants are on their way 🌿');
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#1a3a2a',
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <aside
      id="cart-drawer"
      className="fixed top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl z-[60] translate-x-full transition-transform duration-300 flex flex-col"
      aria-label="Shopping cart"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-forest/10">
        <h2 className="font-serif text-xl font-semibold text-forest">Your Cart</h2>
        <button
          onClick={() => document.getElementById('cart-drawer')?.classList.add('translate-x-full')}
          className="text-ink-light hover:text-forest transition-colors"
          aria-label="Close cart"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {items.length === 0 ? (
          <p className="text-ink-light text-sm text-center mt-12">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.product.id} className="flex gap-4 p-3 bg-parchment rounded-lg">
              <div className="w-16 h-16 bg-parchment-dark rounded flex items-center justify-center shrink-0">
                <svg className="text-moss-light/40" width="24" height="24" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M24 8c-4 4-8 10-8 18 0 6 3.5 10 8 10s8-4 8-10c0-8-4-14-8-18z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-sm font-semibold text-forest truncate">{item.product.name}</h3>
                <p className="text-xs text-terracotta font-medium">{formatINR(item.product.priceInPaise)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-6 h-6 rounded bg-parchment-dark text-ink text-xs flex items-center justify-center hover:bg-forest/10"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-6 h-6 rounded bg-parchment-dark text-ink text-xs flex items-center justify-center hover:bg-forest/10"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="ml-auto text-ink-light/60 hover:text-terracotta text-xs"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="p-6 border-t border-forest/10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-ink">Total</span>
            <span className="text-lg font-semibold text-forest">{formatINR(totalPrice())}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-3.5 bg-terracotta text-parchment font-medium text-sm rounded hover:bg-terracotta-dark transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* Razorpay script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </aside>
  );
}
