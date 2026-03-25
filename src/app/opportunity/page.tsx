import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Users, Heart, CheckCircle } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import { SectionHeader, Card } from '@/components/ui';
import VolunteerForm from '@/components/sections/VolunteerForm';
import { SITE_CONFIG, CAUSES } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Opportunity — CSR, Volunteer & Donate',
  description: 'Partner with AROEHAN for CSR in India. Adopt a project, make corporate donations, engage employees, volunteer, or donate to support tribal communities in Palghar. 80G tax exemption available.',
  keywords: ['CSR partnership India', 'donate NGO India', 'volunteer NGO India', 'NGO in India', 'rural development NGO'],
  openGraph: {
    title: 'Opportunity | AROEHAN — CSR, Volunteer & Donate',
    description: 'Partner with AROEHAN for CSR in India.',
    url: `${SITE_CONFIG.url}/opportunity`,
  },
};

const CSR_OPTIONS = [
  {
    icon: <Building2 size={26} />,
    title: 'Adopt a Project',
    desc: "Adopt one or more of our projects across Palghar district in education, health, nutrition, livelihood, water conservation, or governance. AROEHAN handles monitoring, programmatic direction, and impact reporting.",
    cta: 'Explore Projects',
    href: '/our-work',
    color: 'bg-brand-50 text-brand-600 border-brand-100',
  },
  {
    icon: <Heart size={26} />,
    title: 'Corporate Donations',
    desc: "Make a lump-sum donation toward a specific cause — water conservation, agriculture, education, health, women's empowerment, or community governance. We direct your donation per your preference.",
    cta: 'Choose a Cause',
    href: '#causes',
    color: 'bg-rose-50 text-rose-600 border-rose-100',
  },
];

const ENGAGEMENT = [
  { title: 'Payroll Giving',        desc: 'Encourage employees to contribute a monthly amount from their salary. You can also offer a matching grant to amplify impact.', icon: '💳' },
  { title: 'Corporate Volunteering', desc: 'Your employees can volunteer at our projects — teaching, skill-building, documentation, technology training, fundraising, and more.', icon: '🤝' },
];

export default function OpportunityPage() {
  return (
    <>
      <Hero
        label="CSR Partnership India"
        title="Join hands with AROEHAN"
        subtitle="Whether you're a corporation seeking CSR impact, an individual who wants to donate, or a professional who wants to volunteer — there's a meaningful way to contribute."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Opportunity' }]}
       cta={[
       { label: 'Explore Our Work', href: '/our-work', variant: 'white' },
      { label: 'Donate Now', href: '/opportunity#donate', variant: 'primary' },
      ]}
      />

      {/* CSR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Corporate & CSR Opportunities"
            title="Make your CSR mandate count"
            subtitle="AROEHAN works with local projects across Palghar district in areas that align with SEBI and MCA CSR guidelines. We offer end-to-end project management, impact measurement, and compliance reporting."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {CSR_OPTIONS.map(opt => (
              <div key={opt.title} className="card p-8 flex flex-col hover:border-brand-200">
                <div className={`w-12 h-12 border rounded-2xl flex items-center justify-center mb-5 ${opt.color}`}>
                  {opt.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{opt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{opt.desc}</p>
                <Link href={opt.href} className="btn-secondary self-start">
                  {opt.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          {/* Benefits */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-gray-900 mb-5">What your CSR partnership includes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Dedicated project manager', 'Quarterly impact reports', '80G tax exemption certificates', 'Field visits & employee engagement', 'Co-branding opportunities', 'FCRA & regulatory compliance'].map(b => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle size={15} className="text-brand-500 shrink-0" />
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 gradient-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Employee Engagement" title="Connect your team to purpose" subtitle="Meaningful employee engagement programs that build team cohesion and create real community impact." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENT.map(item => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-card">
                <span className="text-4xl mb-5 block">{item.icon}</span>
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section id="causes" className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Causes to Support"
            title="Experience the joy of giving"
            subtitle="We invite you to contribute toward any of the following activities. Every amount creates measurable impact."
            align="center"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAUSES.map(cause => (
              <article key={cause.category} className="border border-white/10 rounded-2xl p-6 hover:border-brand-500/50 hover:bg-white/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cause.icon}</span>
                  <h3 className="font-display font-semibold text-base text-white group-hover:text-brand-300 transition-colors">{cause.category}</h3>
                </div>
                <ul className="space-y-3">
                  {cause.items.map(item => (
                    <li key={item.label} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-gray-400">{item.label}</span>
                      <span className="text-xs font-mono font-medium text-brand-400 bg-brand-400/10 border border-brand-400/20 px-2.5 py-1 rounded-full shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="#donate" className="btn-primary"><Heart size={16} /> Donate to a Cause</Link>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeader label="Volunteer NGO India" title="Give your skills, change lives" subtitle="We welcome professionals, students, and passionate individuals to volunteer with AROEHAN." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '📚', area: 'Teaching & Education' },
                  { icon: '💻', area: 'Technology & Docs' },
                  { icon: '💰', area: 'Fundraising' },
                  { icon: '🎨', area: 'Creative & Comms' },
                  { icon: '🌱', area: 'Agriculture' },
                  { icon: '❤️', area: 'Healthcare Support' },
                ].map(item => (
                  <div key={item.area} className="flex items-center gap-3 p-3 bg-brand-50 border border-brand-100 rounded-xl hover:bg-brand-100 transition-colors">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{item.area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card-md">
              <h2 className="font-display font-semibold text-xl text-gray-900 mb-6">Volunteer Application</h2>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-20 md:py-28 gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag text-brand-200 bg-white/15 border-white/20 mb-5 inline-flex">Donate NGO India</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
                Support our mission with a donation
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                All donations to AROEHAN are eligible for <strong className="text-brand-300">tax exemption under Section 80G</strong> of the Income Tax Act, 1961.
              </p>
              <ul className="space-y-3 mb-8">
                {['100% transparent fund utilization', 'Regular impact reports to donors', '80G certificate issued promptly', 'FCRA registered organization'].map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle size={15} className="text-brand-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="https://rzp.io/l/aroehan" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Heart size={16} /> Donate Online
              </a>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-card-lg text-center w-full max-w-xs">
                <div className="w-44 h-44 bg-brand-50 rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-brand-200">
                  <svg viewBox="0 0 100 100" className="w-32 h-32 opacity-50" fill="none">
                    <rect x="10" y="10" width="30" height="30" rx="3" stroke="#198754" strokeWidth="4" fill="none"/>
                    <rect x="60" y="10" width="30" height="30" rx="3" stroke="#198754" strokeWidth="4" fill="none"/>
                    <rect x="10" y="60" width="30" height="30" rx="3" stroke="#198754" strokeWidth="4" fill="none"/>
                    <rect x="17" y="17" width="16" height="16" rx="1" fill="#198754"/>
                    <rect x="67" y="17" width="16" height="16" rx="1" fill="#198754"/>
                    <rect x="17" y="67" width="16" height="16" rx="1" fill="#198754"/>
                    <rect x="60" y="50" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="72" y="50" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="84" y="50" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="60" y="62" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="84" y="62" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="60" y="74" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="72" y="74" width="8" height="8" rx="1" fill="#198754"/>
                    <rect x="84" y="74" width="8" height="8" rx="1" fill="#198754"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-700">Scan to Donate via UPI</p>
                <p className="text-xs text-gray-400 mt-1 font-mono">bit.ly/AROEHAN</p>
              </div>
              <div className="w-full max-w-xs bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-5">
                <p className="text-xs font-mono text-brand-300 mb-3 tracking-widest uppercase">Bank Transfer</p>
                <div className="space-y-2 text-sm text-white/70">
                  {[['Account', 'AROEHAN'], ['Bank', 'Axis Bank'], ['Details', 'contact@aroehan.org']].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/40 text-xs">{k}</span>
                      <span className="font-medium text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters placeholder */}
      <section className="py-12 bg-white border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono tracking-widest uppercase text-gray-400 mb-6">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-gray-100 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
