import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode } from 'react';

export function Button({ variant = 'primary', href, onClick, children, className, type = 'button', disabled, external }:
  { variant?: 'primary'|'secondary'|'navy'|'white'|'ghost'; href?: string; onClick?: ()=>void; children: ReactNode; className?: string; type?: 'button'|'submit'|'reset'; disabled?: boolean; external?: boolean; }) {
  const cls = clsx(
    variant === 'primary'   && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'navy'      && 'btn-navy',
    variant === 'white'     && 'btn-white',
    variant === 'ghost'     && 'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-xl transition-colors',
    disabled && 'opacity-50 pointer-events-none',
    className
  );
  if (href) return external
    ? <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}

export function SectionHeader({ label, title, subtitle, align = 'left', light = false }:
  { label?: string; title: string; subtitle?: string; align?: 'left'|'center'; light?: boolean; }) {
  return (
    <div className={clsx('mb-10 md:mb-14', align === 'center' && 'text-center')}>
      {label && (
        <div className={clsx('mb-4', align === 'center' && 'flex justify-center')}>
          <span className={light ? 'tag-light' : 'tag'}>{label}</span>
        </div>
      )}
      <h2 className={clsx('section-title', light && 'text-white')}>{title}</h2>
      {subtitle && (
        <p className={clsx(
          'mt-4 text-base md:text-lg leading-relaxed max-w-2xl',
          align === 'center' && 'mx-auto',
          light ? 'text-white/70' : 'text-gray-500'
        )}>{subtitle}</p>
      )}
    </div>
  );
}

export function Card({ children, className, padded = true }:
  { children: ReactNode; className?: string; padded?: boolean; }) {
  return <div className={clsx('card', padded && 'p-6', className)}>{children}</div>;
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-700 border border-brand-100', className)}>
      {children}
    </span>
  );
}
