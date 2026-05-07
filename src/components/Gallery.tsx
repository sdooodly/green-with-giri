import { galleryItems } from '@/data/gallery';

const heightMap = {
  tall: 'h-80',
  medium: 'h-56',
  short: 'h-44',
};

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-parchment" aria-label="Customer plant gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-forest mb-2">
            In the Wild
          </h2>
          <p className="text-ink-light">Your plants, thriving in their forever homes.</p>
        </div>

        <div className="masonry-1 md:masonry-2 lg:masonry-3" role="list">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="break-inside-avoid mb-4 rounded-lg overflow-hidden relative group"
            >
              {/* Placeholder image */}
              <div
                className={`${heightMap[item.height]} w-full bg-gradient-to-br from-moss/[0.12] to-terracotta/[0.08] bg-parchment-dark`}
              />

              {/* Hover caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-parchment text-xs">
                  <span className="font-medium">{item.username}</span> — &ldquo;{item.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
