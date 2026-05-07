'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFading(false);
      }, 600); // fade-out duration
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-24 px-6 bg-forest" aria-label="Customer testimonials">
      <div className="max-w-2xl mx-auto text-center">
        <blockquote
          className={`transition-opacity duration-600 ${fading ? 'opacity-0' : 'opacity-100'}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] italic text-parchment leading-relaxed mb-6">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer>
            <cite className="not-italic text-sm text-parchment/60 tracking-wide">
              — {testimonial.author}, {testimonial.location}
            </cite>
          </footer>
        </blockquote>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8" aria-hidden="true">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFading(true);
                setTimeout(() => {
                  setCurrent(idx);
                  setFading(false);
                }, 400);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-terracotta w-6' : 'bg-parchment/30 hover:bg-parchment/50'
              }`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
