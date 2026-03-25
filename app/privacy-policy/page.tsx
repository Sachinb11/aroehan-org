import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for AROEHAN NGO website.',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-2">
          <span className="tag">Legal</span>
        </div>
        <h1 className="section-title mt-4 mb-10">Privacy Policy</h1>
        <div className="space-y-8 text-gray-600">
          {[
            { heading: null, body: "AROEHAN (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard data submitted through this website." },
            { heading: 'Information We Collect', body: "We collect information you voluntarily provide through contact forms, volunteer applications, and donation transactions — including your name, email address, phone number, and any messages you send." },
            { heading: 'How We Use Your Information', body: "Your information is used solely to respond to enquiries, process donations, coordinate volunteering, and send organizational updates (with your consent). We do not sell or share your data with third parties." },
            { heading: 'Data Security', body: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, or destruction." },
            { heading: 'Contact', body: null },
          ].map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">{section.heading}</h2>
              )}
              {section.body && <p className="text-sm leading-relaxed">{section.body}</p>}
              {section.heading === 'Contact' && (
                <p className="text-sm leading-relaxed">
                  For any privacy-related queries, contact us at{' '}
                  <a href="mailto:contact@aroehan.org" className="text-brand-600 hover:text-brand-700 underline">contact@aroehan.org</a>.
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-gray-100">
          <Link href="/" className="btn-secondary">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
