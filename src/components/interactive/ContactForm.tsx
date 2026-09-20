import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    honeypot: '', // Spam honeypot trap
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      // Quietly succeed to fool bots without doing anything
      setStatus('success');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');

    // Simulate submission / Formspree or mailto fallback
    try {
      // In production, this can point to a free form endpoint like Formspree, Formkeep, or Netlify/Cloudflare functions
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please send an email directly to imanperera.dev@gmail.com.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      {/* Honeypot field (hidden from screen readers and legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="form-honeypot">Leave this blank</label>
        <input
          id="form-honeypot"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-200 mb-1">
            Your Name <span className="text-teal-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-3.5 py-2.5 rounded bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-200 mb-1">
            Email Address <span className="text-teal-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-3.5 py-2.5 rounded bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-org" className="block text-xs font-semibold text-slate-200 mb-1">
          Company / Organisation
        </label>
        <input
          id="contact-org"
          name="organization"
          type="text"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Acme Analytics / Talent Acquisition"
          className="w-full px-3.5 py-2.5 rounded bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-200 mb-1">
          Message or Internship Details <span className="text-teal-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="We have an internship opening starting next month in Data Analytics..."
          className="w-full px-3.5 py-2.5 rounded bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-950/80 border border-red-500 rounded text-red-200 text-xs" role="alert">
          {errorMessage}
        </div>
      )}

      {status === 'success' ? (
        <div className="p-4 bg-teal-950/80 border border-teal-500 rounded text-teal-200 text-sm text-center" role="status">
          ✓ Message received! Thank you for reaching out. I typically respond within 24 hours.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3 px-6 rounded bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
        </button>
      )}
    </form>
  );
}
