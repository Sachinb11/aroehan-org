import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import { SectionHeader } from '@/components/ui';
import ContactForm from '@/components/sections/ContactForm';
import { SITE_CONFIG } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AROEHAN — a leading NGO in India. Contact us for CSR partnerships, volunteering, or donations about our rural development work in Palghar.',
  keywords: ['contact NGO India', 'CSR partnership India', 'volunteer NGO India', 'donate NGO India'],
  openGraph: { title: 'Contact AROEHAN | NGO in India', description: 'Get in touch with AROEHAN.', url: `${SITE_CONFIG.url}/contact` },
};

const CARDS = [
  { icon: <MapPin size={20} />, title: 'Head Office',    lines: ['Bungalow No 7, Suriya Nagri Society', 'House No: 933, Kankradi Road', 'Dahanu Road – 401602'], color: 'bg-brand-50 text-brand-600 border-brand-100' },
  { icon: <MapPin size={20} />, title: 'Program Office', lines: ['Ma Manjil Building, Silvassa Road', 'Near Synthiko Foils Ltd.', 'Jambhul Vihir (East), Jawhar – 401603'], color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { icon: <Phone size={20} />,  title: 'Phone',          lines: ['+91 25202 99245', '+91 2529 295046'], color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: <Mail size={20} />,   title: 'Email',          lines: ['contact@aroehan.org'], color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { icon: <Clock size={20} />,  title: 'Office Hours',   lines: ['Monday – Friday', '9:00 AM – 6:00 PM IST'], color: 'bg-rose-50 text-rose-600 border-rose-100' },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        label="Contact Us"
        title="Let's connect & collaborate"
        subtitle="Whether you're a corporate partner, donor, volunteer, or community member — we'd love to hear from you."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <SectionHeader label="Get In Touch" title="We're here to help" subtitle="Reach out for any enquiries about partnerships, programs, or how you can support our work." />
              <div className="space-y-3">
                {CARDS.map(card => (
                  <div key={card.title} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:border-brand-200 hover:bg-brand-50/30 transition-all">
                    <div className={`w-10 h-10 border rounded-xl flex items-center justify-center shrink-0 ${card.color}`}>{card.icon}</div>
                    <div>
                      <p className="text-xs font-mono font-medium text-gray-400 mb-1 tracking-wide">{card.title}</p>
                      {card.lines.map(line => <p key={line} className="text-sm font-medium text-gray-800">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-xs font-mono text-gray-400 mb-3 tracking-wide">FOLLOW US</p>
                <div className="flex flex-wrap gap-2">
                  {[['LinkedIn', SITE_CONFIG.social.linkedin], ['Facebook', SITE_CONFIG.social.facebook], ['YouTube', SITE_CONFIG.social.youtube], ['Instagram', SITE_CONFIG.social.instagram], ['Twitter', SITE_CONFIG.social.twitter]].map(([label, href]) => (
                    <a key={label} href={href as string} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-medium text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-200">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-card-md">
              <h2 className="font-display font-semibold text-xl text-gray-900 mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-brand-50 border-t border-brand-100 relative overflow-hidden" aria-label="Location map">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-brand-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">Dahanu Road, Palghar District, Maharashtra</p>
            <a href="https://maps.google.com/?q=Dahanu+Road+Palghar+Maharashtra" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block btn-secondary py-2 px-4 text-xs">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
