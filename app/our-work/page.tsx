import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import { SectionHeader, Card } from '@/components/ui';
import { SITE_CONFIG, WORK_AREAS } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Our Work',
  description: "Explore AROEHAN's programs in education, health, water conservation, livelihood, and women's empowerment across Palghar district.",
  keywords: ['rural development NGO', 'NGO programs India', 'tribal community programs', 'CSR partnership India'],
  openGraph: {
    title: 'Our Work | AROEHAN NGO',
    description: "Explore AROEHAN's programs across Palghar.",
    url: `${SITE_CONFIG.url}/our-work`,
  },
};

const PROJECTS = [
  { title: 'Jal Jeevan',    area: 'Water Conservation', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',  desc: 'Building check dams, wells, and rainwater harvesting structures to address seasonal water scarcity in tribal villages.', impact: '15 check dams built' },
  { title: 'Shiksha Dhara', area: 'Education',           image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', desc: 'Holistic education support including tutoring, school infrastructure, and scholarships for tribal children.',              impact: '2,000+ students supported' },
  { title: 'Aarogya Gram',  area: 'Health & Nutrition',  image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',  desc: 'Community health programs including nutrition camps, maternal health support, and early childhood care.',              impact: '5,000+ health screenings' },
  { title: 'Swayam Shakti', area: 'Women Empowerment',   image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', desc: 'Self-help groups (SHGs) for tribal women providing microfinance, skill training, and leadership development.',           impact: '200+ active SHGs' },
  { title: 'Hari Krishi',   area: 'Agriculture',         image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80', desc: 'Improving crop yields through training, better seeds, lift irrigation, and allied livelihood options.',                  impact: '3,000+ farmers supported' },
  { title: 'Gram Swaraj',   area: 'Governance',          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80', desc: 'Building community capacity for local governance, accountability, and participatory development planning.',             impact: '50+ gram sabhas strengthened' },
];

export default function OurWorkPage() {
  return (
    <>
      <Hero
        label="Our Work"
        title="Programs driving real change"
        subtitle="Six interconnected program areas creating systemic change for tribal and rural communities in Palghar."
        image="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1600&q=80"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Work' }]}
      />

      {/* Focus Areas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Focus Areas" title="Six pillars of transformation" subtitle="Our integrated model ensures progress in one area reinforces gains in others." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORK_AREAS.map(area => (
              <Card key={area.title} className="hover:border-brand-200">
                <span className="text-3xl mb-3 block">{area.icon}</span>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="gallery" className="py-20 md:py-28 gradient-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Portfolio" title="Our flagship programs" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map(project => (
              <article key={project.title} className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden group hover:shadow-card-md hover:-translate-y-1 transition-all duration-300">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                  role="img"
                  aria-label={project.title}
                />
                <div className="p-5">
                  <span className="inline-flex items-center text-[10px] font-mono font-medium tracking-widest uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3">{project.area}</span>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.desc}</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-400" />
                    <span className="text-xs font-mono text-gray-400 font-medium">{project.impact}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="videos" className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <SectionHeader label="Media" title="Photo & Video Gallery" align="center" subtitle="See our work in action — photos and videos from the field across Palghar district." />
          <Link href="https://www.youtube.com/channel/UCSC5dfxxMp9wleeVDxukIXg" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Watch on YouTube
          </Link>
        </div>
      </section>
    </>
  );
}
