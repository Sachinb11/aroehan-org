import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import { SectionHeader, Card } from '@/components/ui';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AROEHAN, a leading rural development NGO in India working with tribal communities in Palghar, Maharashtra for over 20 years.',
  keywords: ['NGO in India', 'rural development NGO', 'tribal NGO Maharashtra', 'about AROEHAN'],
  openGraph: {
    title: 'About AROEHAN | NGO in India',
    description: 'Learn about AROEHAN, a leading rural development NGO in India working with tribal communities in Palghar, Maharashtra.',
    url: `${SITE_CONFIG.url}/about`,
  },
};

const TEAM = [
  { name: 'Rajendra Bharud', role: 'Founder & Director', initials: 'RB' },
  { name: 'Sunita Patil',    role: 'Program Head',       initials: 'SP' },
  { name: 'Amol Desai',      role: 'Finance Director',   initials: 'AD' },
  { name: 'Meera Wagh',      role: 'Field Coordinator',  initials: 'MW' },
];

const TRUSTEES = [
  { name: 'Dr. Vijay Mokashi', role: 'Chairperson' },
  { name: 'Priya Bharadwaj',   role: 'Vice Chairperson' },
  { name: 'Shyam Kale',        role: 'Treasurer' },
  { name: 'Anita Sontakke',    role: 'Secretary' },
];

const VALUES = [
  { title: 'Integrity',  desc: 'We hold ourselves to the highest standards of transparency and accountability.', icon: '⚖️' },
  { title: 'Tolerance',  desc: 'We celebrate diversity and foster an inclusive environment for all communities.', icon: '🤝' },
  { title: 'Justice',    desc: 'We advocate for equity and the rights of marginalized tribal communities.',       icon: '🌟' },
  { title: 'Community',  desc: 'We believe local communities are the agents of their own transformation.',       icon: '🏘️' },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        label="Our Story"
        title="Two decades of transforming rural lives"
        subtitle="Since our founding, AROEHAN has been a trusted partner for tribal communities in Palghar district, walking alongside them with dignity, purpose, and deep respect."
        image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* About */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <SectionHeader
              label="Who We Are"
              title="A movement rooted in community"
              subtitle="AROEHAN is a grassroots NGO in Palghar district, Maharashtra — one of the most underserved tribal regions in India. We work across education, health, nutrition, livelihood, water conservation, women's empowerment, and community governance."
            />
            <div className="space-y-5 pt-2">
              {[
                { border: 'border-brand-400', title: 'Our Vision', text: "To create an empowered cadre of tribal and rural youth who will initiate and sustain efforts of change in their communities, upholding the values of personal integrity, tolerance, and justice." },
                { border: 'border-brand-400', title: 'Our Approach', text: "We work with local communities, not for them. Every program is co-designed with community members to ensure relevance, ownership, and lasting impact." },
                { border: 'border-brand-400', title: 'Our Geography', text: "We operate across 100+ villages in Palghar district, reaching communities in Dahanu, Vikramgad, Jawhar, Mokhada, Talasari, and adjoining talukas." },
              ].map(item => (
                <div key={item.title} className={`border-l-4 ${item.border} pl-5 py-1`}>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 gradient-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Values" title="What guides us" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(v => (
              <Card key={v.title} className="text-center hover:border-brand-200">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section id="trustee" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Governance" title="Trustee Board" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {TRUSTEES.map(t => (
              <div key={t.name} className="text-center group">
                <div className="w-16 h-16 bg-brand-50 border-2 border-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="font-display font-bold text-brand-600 text-lg">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="The People" title="Core Team" align="center" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {TEAM.map(member => (
              <div key={member.name} className="text-center group">
                <div className="w-20 h-20 bg-brand-800/40 border border-brand-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-700/50 transition-colors">
                  <span className="font-display font-bold text-brand-300 text-xl">{member.initials}</span>
                </div>
                <p className="font-semibold text-sm text-white">{member.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-50 border-y border-brand-100 text-center">
        <div className="max-w-xl mx-auto px-4">
          <SectionHeader label="Get Involved" title="Join our mission" align="center" />
          <div className="flex flex-wrap gap-3 justify-center -mt-4">
            <Link href="/opportunity" className="btn-primary">Partner With Us <ArrowRight size={15} /></Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
