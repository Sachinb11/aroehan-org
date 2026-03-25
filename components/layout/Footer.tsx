import Link from 'next/link';
import { Linkedin, Facebook, Youtube, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA strip */}
      <div className="bg-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-xl text-white font-semibold">Ready to make a difference?</p>
            <p className="text-brand-100 text-sm mt-0.5">Your support transforms tribal communities in Palghar.</p>
          </div>
          <Link href="/opportunity#donate" className="btn-white shrink-0">
            <Heart size={15} /> Donate Now
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center group-hover:bg-brand-400 transition-colors">
                <span className="font-display font-black text-white text-base">A</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">AROEHAN</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering tribal and rural communities in Palghar, Maharashtra through integrated development programs since 2001.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: SITE_CONFIG.social.linkedin,  Icon: Linkedin,  label: 'LinkedIn' },
                { href: SITE_CONFIG.social.facebook,  Icon: Facebook,  label: 'Facebook' },
                { href: SITE_CONFIG.social.youtube,   Icon: Youtube,   label: 'YouTube' },
                { href: SITE_CONFIG.social.instagram, Icon: Instagram, label: 'Instagram' },
                { href: SITE_CONFIG.social.twitter,   Icon: Twitter,   label: 'Twitter' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 bg-navy-800 border border-navy-700 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-all duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-5 tracking-[0.12em] uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:w-2 transition-all duration-200 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-5 tracking-[0.12em] uppercase">Our Programs</h3>
            <ul className="space-y-3">
              {['Education', 'Health & Nutrition', 'Water Conservation', 'Livelihood', 'Women Empowerment', 'Local Governance'].map(item => (
                <li key={item}>
                  <Link href="/our-work" className="text-sm text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-brand-500 group-hover:w-2 transition-all duration-200 shrink-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-5 tracking-[0.12em] uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400 leading-relaxed">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brand-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-brand-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">{SITE_CONFIG.phone}</a>
              </li>
            </ul>
            <div className="mt-5 px-4 py-3 bg-navy-900/60 border border-navy-800 rounded-xl">
              <p className="text-xs text-brand-400 font-mono tracking-wide">80G Tax Exemption</p>
              <p className="text-xs text-gray-500 mt-0.5">All donations eligible — IT Act 1961</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} AROEHAN. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">Terms & Conditions</Link>
          </div>
          <p className="text-xs text-gray-700">Made with ❤️ for tribal communities</p>
        </div>
      </div>
    </footer>
  );
}
