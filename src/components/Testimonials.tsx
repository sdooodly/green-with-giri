export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-forest" aria-label="Customer testimonials">
      <div className="max-w-2xl mx-auto text-center">
        <blockquote>
          <p className="font-serif text-[clamp(1.1rem,2.5vw,1.4rem)] italic text-parchment leading-relaxed mb-6">
            &ldquo;Every plant arrived wrapped like a gift from an old friend — with a handwritten
            note about its personality. Three years later, my monstera has taken over the living
            room, and I wouldn&rsquo;t have it any other way.&rdquo;
          </p>
          <footer>
            <cite className="not-italic text-sm text-parchment/60 tracking-wide">
              — Meera S., Bangalore
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
