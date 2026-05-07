'use client';

import type { Product, Badge } from '@/types';
import { formatINR } from '@/lib/format';
import { useCartStore } from '@/store/cart';

const badgeConfig: Record<Badge, { label: string; className: string }> = {
  beginner: { label: 'Beginner Friendly', className: 'bg-sage/20 text-forest-light' },
  'pet-safe': { label: 'Pet Safe', className: 'bg-terracotta/15 text-terracotta-dark' },
  rare: { label: 'Rare Find', className: 'bg-forest/10 text-forest' },
  'low-light': { label: 'Low Light', className: 'bg-ink/10 text-ink-light' },
};

export function PlantCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article
      role="listitem"
      className="group bg-parchment rounded-lg overflow-hidden border border-forest/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-parchment-dark overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="text-moss-light/50" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M24 8c-4 4-8 10-8 18 0 6 3.5 10 8 10s8-4 8-10c0-8-4-14-8-18z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M24 20v16" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        )}

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1 z-10">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={`text-[0.65rem] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm ${badgeConfig[badge].className}`}
              >
                {badgeConfig[badge].label}
              </span>
            ))}
          </div>
        )}

        {/* Add to cart overlay */}
        <button
          onClick={() => addItem(product)}
          className="absolute bottom-3 left-3 right-3 py-2.5 bg-forest/90 backdrop-blur-sm text-parchment text-xs font-medium rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:bg-forest z-10"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-serif text-sm font-semibold text-forest leading-tight">{product.name}</h3>
        <p className="text-xs italic text-ink-light mt-0.5">{product.latinName}</p>
        <p className="text-sm font-medium text-terracotta mt-2">{formatINR(product.priceInPaise)}</p>
      </div>
    </article>
  );
}
