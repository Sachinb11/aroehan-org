import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for AROEHAN NGO website.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-2">
          <span className="tag">Legal</span>
        </div>
        <h1 className="section-title mt-4 mb-10">Terms & Conditions</h1>
        <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
          <p>By accessing and using the AROEHAN website, you accept and agree to be bound by these Terms and Conditions.</p>
          {[
            { title: 'Use of Website',        body: "This website is intended for informational purposes about AROEHAN's programs and for facilitating donations and volunteer applications. Misuse of the website for any unlawful purpose is strictly prohibited." },
            { title: 'Donations',             body: "All donations made through this website are voluntary contributions. AROEHAN is a registered charitable organization and donations are eligible for 80G tax exemption under the Income Tax Act, 1961. Donation receipts will be issued upon request." },
            { title: 'Intellectual Property', body: "All content on this website — including text, images, and logos — is the property of AROEHAN and may not be reproduced without prior written consent." },
            { title: 'Limitation of Liability', body: "AROEHAN shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website." },
          ].map(section => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
          <div>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">Contact</h2>
            <p>For queries about these terms, contact{' '}
              <a href="mailto:contact@aroehan.org" className="text-brand-600 hover:text-brand-700 underline">contact@aroehan.org</a>.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-100">
          <Link href="/" className="btn-secondary">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
