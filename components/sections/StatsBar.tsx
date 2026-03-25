const STATS = [
  { value: '20+',     label: 'Years of Impact',  icon: '🏆' },
  { value: '50,000+', label: 'Lives Touched',     icon: '❤️' },
  { value: '150+',    label: 'Gram Panchayats',   icon: '🏘️' },
  { value: '6',       label: 'Focus Areas',        icon: '🎯' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100" aria-label="Impact Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-8 px-4 group hover:bg-brand-50 transition-colors duration-200">
              <span className="text-2xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-200">{stat.icon}</span>
              <p className="font-display font-bold text-3xl md:text-4xl text-brand-500 mb-1 tabular-nums">{stat.value}</p>
              <p className="text-xs font-mono tracking-widest uppercase text-gray-400 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
