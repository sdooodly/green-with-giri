'use client';

import { products } from '@/data/products';
import { PlantCard } from './PlantCard';

export function Catalog() {
  return (
    <section id="catalog" className="py-24 px-6 bg-cream" aria-label="Plant catalog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-forest mb-2">
            The Collection
          </h2>
          <p className="text-ink-light max-w-md mx-auto">
            Twenty specimens, each chosen for character, resilience, and quiet beauty.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" role="list">
          {products.map((product) => (
            <PlantCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
