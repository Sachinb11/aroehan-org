'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/config';
import clsx from 'clsx';

export default function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled]             = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const linkCls = clsx(
    'nav-link px-3 py-2 rounded-lg transition-all duration-200',
    scrolled
      ? 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'
      : 'text-white/90 hover:text-white hover:bg-white/10'
  );

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass shadow-sm border-b border-gray-100' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-btn group-hover:bg-brand-600 transition-colors duration-200">
              <span className="font-display font-black text-white text-base leading-none">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={clsx(
                'font-display font-bold text-lg tracking-tight transition-colors duration-300',
                scrolled ? 'text-navy-950' : 'text-white'
              )}>AROEHAN</span>
              <span className={clsx(
                'text-[9px] font-mono tracking-[0.2em] uppercase transition-colors duration-300',
                scrolled ? 'text-brand-500' : 'text-white/60'
              )}>Empowering Communities</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className={clsx(linkCls, 'flex items-center gap-1')}
                    >
                      {item.label}
                      <ChevronDown size={12} className={clsx('transition-transform duration-200', activeDropdown === item.label && 'rotate-180')} />
                    </button>
                    {activeDropdown === item.label && (
                      <div
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 shadow-card-lg rounded-2xl py-2 animate-slide-down overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link key={child.label} href={child.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-300 shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className={linkCls}>{item.label}</Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/contact" className={clsx(linkCls, 'text-sm')}>Contact</Link>
            <Link href="/opportunity#donate" className="btn-primary text-xs px-4 py-2.5 gap-1.5 ml-1">
              <Heart size={13} /> Donate Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={clsx('lg:hidden p-2 rounded-lg transition-colors', scrolled ? 'text-navy-900 hover:bg-gray-100' : 'text-white hover:bg-white/10')}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        'lg:hidden fixed inset-0 top-16 md:top-20 z-40 transition-all duration-300',
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={clsx(
          'absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="flex-1 overflow-y-auto py-6 px-5">
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown size={14} className={clsx('transition-transform duration-200', activeDropdown === item.label && 'rotate-180')} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="mt-1 ml-3 pl-3 border-l-2 border-brand-100 space-y-0.5">
                          {item.children.map((child) => (
                            <Link key={child.label} href={child.href}
                              className="block px-3 py-2.5 text-sm text-gray-500 hover:text-brand-700 rounded-lg transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >{child.label}</Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href}
                      className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >{item.label}</Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="p-5 border-t border-gray-100 space-y-3">
            <Link href="/opportunity#donate" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
              <Heart size={15} /> Donate Now
            </Link>
            <Link href="/contact" className="btn-secondary w-full" onClick={() => setMobileOpen(false)}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
