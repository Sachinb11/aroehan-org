'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

type FormState = { name: string; email: string; phone: string; subject: string; message: string; };

export default function ContactForm() {
  const [form, setForm]           = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-brand-600" />
        </div>
        <h3 className="font-display text-xl text-gray-900 mb-2">Message sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs">Our team will get back to you within 1–2 business days.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', subject:'', message:'' }); }}
          className="mt-5 text-sm text-brand-600 hover:text-brand-700 underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const Label = ({ htmlFor, children }: { htmlFor: string; children: string }) => (
    <label htmlFor={htmlFor} className="block text-xs font-medium text-gray-600 mb-1.5 tracking-wide">{children}</label>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="con-name">Name *</Label>
          <input id="con-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className="input" />
        </div>
        <div>
          <Label htmlFor="con-email">Email *</Label>
          <input id="con-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="input" />
        </div>
      </div>
      <div>
        <Label htmlFor="con-phone">Phone (optional)</Label>
        <input id="con-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="input" />
      </div>
      <div>
        <Label htmlFor="con-subject">Subject *</Label>
        <select id="con-subject" name="subject" required value={form.subject} onChange={handleChange} className="input">
          <option value="">Select a subject</option>
          <option>CSR Partnership</option>
          <option>Corporate Donation</option>
          <option>Volunteering</option>
          <option>General Enquiry</option>
          <option>Media / Press</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <Label htmlFor="con-message">Message *</Label>
        <textarea id="con-message" name="message" rows={5} required value={form.message} onChange={handleChange}
          placeholder="Tell us how we can help…" className="input resize-none" />
      </div>
      <button type="submit" disabled={loading}
        className="btn-primary w-full justify-center mt-2 disabled:opacity-50 disabled:pointer-events-none">
        {loading ? (
          <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>Sending…</>
        ) : (
          <><Send size={15} />Send Message</>
        )}
      </button>
    </form>
  );
}
