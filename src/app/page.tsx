import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Users, BookOpen, Droplets, CheckCircle, Star } from 'lucide-react';
import { SITE_CONFIG, WORK_AREAS } from '@/lib/config';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import { SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: 'AROEHAN is a leading NGO in India working for rural development, tribal empowerment, education, health, and water conservation in Palghar, Maharashtra.',
  keywords: SITE_CONFIG.keywords,
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: 'AROEHAN is a leading NGO in India working for rural development and tribal empowerment in Palghar, Maharashtra.',
    url: SITE_CONFIG.url,
  },
};

const QUICK_LINKS = [
  { icon: <BookOpen size={22} />, label: 'Education', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: <Droplets size={22} />, label: 'Water',     color: 'bg-sky-50 text-sky-600 border-sky-100' },
  { icon: <Heart size={22} />,    label: 'Health',    color: 'bg-rose-50 text-rose-600 border-rose-100' },
  { icon: <Users size={22} />,    label: 'Women',     color: 'bg-purple-50 text-purple-600 border-purple-100' },
];

export default function HomePage() {
  return (
    <>
      <Hero
        label="NGO in India — Palghar, Maharashtra"
        title="Empowering Tribal & Rural Communities"
        subtitle="AROEHAN works with tribal and rural communities across Palghar district, creating lasting change through education, health, water conservation, and livelihood programs."
        image="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=80"
        fullHeight
        cta={[
  { label: 'Explore Our Work', href: '/our-work', variant: 'white' },
  { label: 'Donate Now', href: '/opportunity#donate', variant: 'primary' },
]}
      />

      <StatsBar />

      {/* ── Mission ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="mission-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <SectionHeader
                label="Our Mission"
                title="Creating empowered communities, one village at a time"
                subtitle="We believe every tribal and rural community deserves access to quality education, healthcare, clean water, and economic opportunity. For over two decades, AROEHAN has been walking alongside communities in Palghar to make that vision a reality."
              />
              <ul className="space-y-3 mb-8">
                {[
                  'Integrated, community-led development',
                  'Transparent fund utilization & impact reporting',
                  '80G tax exemption for all donations',
                ].map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-brand-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  Learn Our Story <ArrowRight size={15} />
                </Link>
                <Link href="/our-work" className="btn-secondary">
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {QUICK_LINKS.map((item) => (
                <div key={item.label} className="card p-6 group cursor-default">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110 ${item.color}`}>
                    {item.icon}
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                  <p className="text-xs text-gray-400 mt-1">Program area</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Work Areas ───────────────────────────────── */}
      <section className="py-20 md:py-28 gradient-light" aria-labelledby="work-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Six pillars of rural transformation"
            subtitle="Our integrated approach addresses the interconnected challenges facing tribal communities in Palghar."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORK_AREAS.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card transition-all duration-300 hover:shadow-card-md hover:-translate-y-1 group"
              >
                <span className="text-3xl mb-4 block">{area.icon}</span>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/our-work" className="btn-primary">
              View All Programs <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CSR Band ─────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-y border-gray-100" aria-labelledby="csr-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="CSR Partnership India"
                title="Partner with us for your CSR goals"
                subtitle="AROEHAN offers comprehensive CSR partnerships — from project adoption to employee engagement — aligned with SEBI and MCA guidelines."
              />
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Adopt a Project', 'Corporate Donation', 'Employee Volunteering', 'Payroll Giving'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-brand-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/opportunity" className="btn-primary">
                Explore CSR Opportunities <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-brand-50 rounded-3xl p-8 border border-brand-100">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-brand-400 fill-brand-400" />)}
                <span className="text-sm text-gray-500 ml-1">Trusted by 20+ corporates</span>
              </div>
              <blockquote className="text-gray-700 text-base italic leading-relaxed mb-4">
                "AROEHAN provided clear impact data and seamless reporting, making our CSR compliance effortless while genuinely transforming communities."
              </blockquote>
              <p className="text-sm font-semibold text-gray-800">CSR Head, Leading FMCG Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Donate CTA ───────────────────────────────── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        aria-labelledby="donate-cta"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-brand-900/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="tag text-brand-200 bg-white/15 border-white/20 mb-5 inline-flex">
            Donate NGO India
          </span>
          <h2 id="donate-cta" className="font-display text-3xl md:text-5xl text-white font-bold mb-5 text-shadow">
            Your giving can transform lives
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            All donations are eligible for 80G tax exemption. Every rupee goes directly to our programs in tribal villages.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/opportunity#donate" className="btn-primary">
              <Heart size={16} /> Donate Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-6 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-white/15 hover:border-white transition-all duration-200 backdrop-blur-sm">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
