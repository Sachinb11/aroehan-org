import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  image?: string;
  fullHeight?: boolean;
  cta?: { label: string; href: string; variant?: 'primary' | 'white' | 'outline-white' | 'navy' }[];
  children?: ReactNode;
  centered?: boolean;
  breadcrumb?: { label: string; href?: string }[];
}

export default function Hero({
  title, subtitle, label,
  image = 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80',
  fullHeight = false, cta, children, centered = false, breadcrumb,
}: HeroProps) {
  return (
    <section
      className={clsx(
        'relative flex items-end overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[480px] md:min-h-[560px]'
      )}
      aria-label="Hero"
    >
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />
      {/* Orange bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 opacity-90" />

      {/* Content */}
      <div className={clsx(
        'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-28 md:pt-36',
        centered && 'text-center'
      )}>

        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-white/55">
              {breadcrumb.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={10} className="text-white/35" />}
                  {crumb.href
                    ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                    : <span className="text-brand-300">{crumb.label}</span>
                  }
                </li>
              ))}
            </ol>
          </nav>
        )}

        {label && (
          <div className={clsx('mb-4', centered && 'flex justify-center')}>
            <span className="tag-light">{label}</span>
          </div>
        )}

        <h1 className={clsx(
          'font-display font-bold text-white leading-tight mb-5 text-shadow',
          'text-4xl md:text-5xl lg:text-6xl',
          fullHeight && 'lg:text-[4.25rem]',
          centered && 'max-w-4xl mx-auto'
        )}>
          {title}
        </h1>

        {subtitle && (
          <p className={clsx(
            'text-white/85 text-base md:text-lg leading-relaxed mb-8 text-shadow-sm',
            centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          )}>
            {subtitle}
          </p>
        )}

        {cta && cta.length > 0 && (
          <div className={clsx('flex flex-wrap gap-3', centered && 'justify-center')}>
            {cta.map((btn) => (
              <Link key={btn.label} href={btn.href} className={
                btn.variant === 'white'         ? 'btn-white' :
                btn.variant === 'outline-white' ? 'btn-outline-white' :
                btn.variant === 'navy'          ? 'btn-navy' :
                'btn-primary'
              }>
                {btn.label}
              </Link>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
