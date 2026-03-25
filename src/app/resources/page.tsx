import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import { SectionHeader } from '@/components/ui';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Resources',
  description: "Reports, blog posts, success stories, news, and events from AROEHAN — a rural development NGO in India working in tribal communities in Palghar, Maharashtra.",
  keywords: ['rural development NGO reports', 'NGO in India news', 'tribal community stories', 'donate NGO India'],
  openGraph: { title: 'Resources | AROEHAN NGO', description: 'Reports, stories, news and events from AROEHAN NGO.', url: `${SITE_CONFIG.url}/resources` },
};

const REPORTS = [
  { title: 'Annual Report 2022–23',              type: 'Annual Report',  year: '2023', size: '4.2 MB' },
  { title: 'Annual Report 2021–22',              type: 'Annual Report',  year: '2022', size: '3.8 MB' },
  { title: 'Water Conservation Impact Study',    type: 'Impact Report',  year: '2022', size: '2.1 MB' },
  { title: 'Livelihood Program Assessment',      type: 'Assessment',     year: '2021', size: '1.7 MB' },
];
const STORIES = [
  {
    title: "From drought to abundance: How Savita transformed her village's water crisis",
    category: "Water Conservation",
    date: "January 2024" ,
    excerpt: "In a village that once walked kilometres for water, Savita and her women's group led the construction of a check dam that now sustains 300 families year-round."
  
  },
  {
    title: "First in her family to complete Class 10: Rekha's education journey",
    category: "Education",
    date: "December 2023",
    excerpt: "Growing up in a migrant tribal family, Rekha faced every obstacle imaginable. AROEHAN's scholarship and tutoring support helped her break the cycle."
  },
  {
    title: "Rice Mill cooperative gives landless women a steady income",
    category: "Livelihood",
    date: "November 2023",
    excerpt: "Twelve women from a Vikramgad village pooled their efforts to run a rice mill — now generating consistent monthly income for each family."
  }
];

const NEWS = [
  { title: 'AROEHAN partners with State Government on water conservation initiative', date: 'March 2024' },
  { title: 'New health center inaugurated in Jawhar taluka',                           date: 'February 2024' },
  { title: 'CSR partnership with leading FMCG company for livelihood programs',        date: 'January 2024' },
  { title: 'AROEHAN receives national recognition for tribal development work',        date: 'December 2023' },
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        label="Resources"
        title="Knowledge, stories & impact"
        subtitle="Explore our annual reports, success stories, field updates, and research — all grounded in two decades of community work."
        image="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1600&q=80"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />

      {/* Reports */}
      <section id="reports" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Reports" title="Annual reports & studies" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REPORTS.map(r => (
              <div key={r.title} className="card p-5 flex flex-col hover:border-brand-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-12 bg-brand-50 border border-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-brand-600 text-xs font-mono font-bold">PDF</span>
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-mono tracking-widest uppercase text-brand-500 mb-1">{r.type}</span>
                    <h3 className="text-sm font-semibold text-gray-800 leading-snug">{r.title}</h3>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-400 font-mono border-t border-gray-100 pt-3 mb-3">
                  <span>{r.year}</span><span>{r.size}</span>
                </div>
                <button className="btn-secondary py-2 text-xs justify-center">Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="blog" className="py-20 md:py-28 gradient-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Success Stories" title="Lives transformed" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORIES.map(story => (
              <article key={story.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-md hover:-translate-y-1 transition-all duration-300">
                <span className="inline-block text-[10px] font-mono tracking-widest uppercase text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full mb-4">{story.category}</span>
                <h3 className="font-display font-semibold text-base text-gray-900 leading-snug mb-3">{story.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{story.excerpt}</p>
                <p className="text-xs font-mono text-gray-300">{story.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="News" title="Latest from the field" />
          <div className="max-w-2xl space-y-1">
            {NEWS.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-4 border-b border-gray-100 last:border-0 group cursor-pointer hover:bg-brand-50/50 -mx-3 px-3 rounded-xl transition-colors">
                <span className="text-xs font-mono text-gray-400 shrink-0 mt-0.5 w-28">{item.date}</span>
                <p className="text-sm font-medium text-gray-700 group-hover:text-brand-700 transition-colors">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-14 bg-brand-50 border-t border-brand-100 text-center">
        <div className="max-w-lg mx-auto px-4">
          <SectionHeader label="Events" title="Upcoming programs & events" align="center" subtitle="Stay updated on our community events, CSR seminars, and fundraising initiatives." />
          <Link href="/contact" className="btn-primary -mt-4">Get Notified</Link>
        </div>
      </section>
    </>
  );
}
