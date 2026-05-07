'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cart';

export function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-parchment/95 backdrop-blur-md border-b border-forest/[0.08] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className={`flex items-center gap-2 font-serif text-lg font-semibold transition-colors ${scrolled ? 'text-forest' : 'text-parchment'}`}>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M14 2C14 2 6 8 6 16c0 5.5 3.5 10 8 10s8-4.5 8-10c0-8-8-14-8-14z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M14 10v14" stroke="currentColor" strokeWidth="1.2" />
            <path d="M14 14c-2-2-4-2-5-1" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <path d="M14 18c2-2 4-2 5-1" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
          Green with Giri
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-6">
            <li><a href="#catalog" className={`text-sm font-medium transition-colors ${scrolled ? 'text-ink-light hover:text-forest' : 'text-parchment/80 hover:text-parchment'}`}>Shop</a></li>
            <li><a href="#education" className={`text-sm font-medium transition-colors ${scrolled ? 'text-ink-light hover:text-forest' : 'text-parchment/80 hover:text-parchment'}`}>Care Guides</a></li>
            <li><a href="#gallery" className={`text-sm font-medium transition-colors ${scrolled ? 'text-ink-light hover:text-forest' : 'text-parchment/80 hover:text-parchment'}`}>Gallery</a></li>
            <li><a href="#testimonials" className={`text-sm font-medium transition-colors ${scrolled ? 'text-ink-light hover:text-forest' : 'text-parchment/80 hover:text-parchment'}`}>Stories</a></li>
          </ul>

          <button
            aria-label={`Shopping cart with ${totalItems} items`}
            className={`relative p-2 transition-colors ${scrolled ? 'text-forest hover:text-terracotta' : 'text-parchment hover:text-terracotta-light'}`}
            onClick={() => document.getElementById('cart-drawer')?.classList.toggle('translate-x-full')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-parchment text-xs font-semibold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
