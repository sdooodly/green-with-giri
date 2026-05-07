export function EducationRibbon() {
  const items = [
    {
      title: 'Watering Rituals',
      desc: 'Intuitive schedules shaped by seasons, not calendars.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 6v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 12c0-4 6-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="18" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10 18h16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      title: 'Light Architecture',
      desc: 'Designing spaces where photons meet photosynthesis.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M18 4v4M18 28v4M4 18h4M28 18h4M8 8l3 3M25 25l3 3M8 28l3-3M25 11l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Soil Composition',
      desc: 'The living foundation beneath every thriving root system.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M6 28c2-4 6-6 12-6s10 2 12 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M8 24c1-2 4-4 10-4s9 2 10 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />
          <path d="M18 18v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 12c0-2 3-4 3-4s3 2 3 4" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="bg-forest py-20 px-6" aria-label="Plant care education">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item) => (
          <div key={item.title} className="text-center px-4">
            <div className="text-sage flex justify-center mb-4" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="font-serif text-lg font-semibold text-parchment mb-2">{item.title}</h3>
            <p className="text-sm text-parchment/60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
