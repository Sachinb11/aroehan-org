'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, Send, CheckCircle } from 'lucide-react';

export default function VolunteerForm() {
  const [form, setForm]         = useState({ name: '', email: '', subject: '', message: '' });
  const [file, setFile]         = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-brand-600" />
        </div>
        <h3 className="font-display text-xl text-gray-900 mb-2">Application received!</h3>
        <p className="text-gray-500 text-sm max-w-xs">Our team will reach out to you soon. Thank you for volunteering!</p>
        <button onClick={() => { setSubmitted(false); setForm({ name:'', email:'', subject:'', message:'' }); setFile(null); }}
          className="mt-5 text-sm text-brand-600 hover:text-brand-700 underline underline-offset-2">
          Submit another
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
          <Label htmlFor="vol-name">Your Name *</Label>
          <input id="vol-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Full name" className="input" />
        </div>
        <div>
          <Label htmlFor="vol-email">Email Address *</Label>
          <input id="vol-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="input" />
        </div>
      </div>
      <div>
        <Label htmlFor="vol-subject">Area of Interest *</Label>
        <select id="vol-subject" name="subject" required value={form.subject} onChange={handleChange} className="input">
          <option value="">Select an area</option>
          <option>Teaching / Education</option>
          <option>Skill Building</option>
          <option>Documentation</option>
          <option>Technology Training</option>
          <option>Fundraising</option>
          <option>Healthcare Support</option>
          <option>Agriculture / Livelihood</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <Label htmlFor="vol-message">Message (Optional)</Label>
        <textarea id="vol-message" name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Tell us about yourself and why you'd like to volunteer…" className="input resize-none" />
      </div>
      <div>
        <Label htmlFor="vol-cv">Upload CV / Resume</Label>
        <label htmlFor="vol-cv"
          className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-brand-400 hover:bg-brand-50/50 transition-all group">
          <Upload size={16} className="text-gray-400 group-hover:text-brand-500 shrink-0" />
          <span className="text-sm text-gray-400 group-hover:text-brand-600">
            {file ? file.name : 'Click to upload PDF, DOC, DOCX (max 5MB)'}
          </span>
          <input id="vol-cv" type="file" accept=".pdf,.doc,.docx" onChange={handleFile} className="sr-only" />
        </label>
      </div>
      <button type="submit" disabled={loading}
        className="btn-primary w-full justify-center mt-2 disabled:opacity-50 disabled:pointer-events-none">
        {loading ? (
          <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Submitting…</>
        ) : (
          <><Send size={15} />Submit Application</>
        )}
      </button>
    </form>
  );
}
