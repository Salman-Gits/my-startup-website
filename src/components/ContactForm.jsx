import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Mail,
  Loader2,
  User,
  Phone,
  AlertCircle,
} from 'lucide-react';
import {
  siteConfig,
  serviceOptions,
  budgetOptions,
  apiBaseUrl,
} from '@/data/siteConfig';

const empty = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactForm({ onToast }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please tell us about your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || submitted) return; // prevent duplicate submissions
    if (!validate()) return;

    setLoading(true);

    const payload = {
      ...form,
      timestamp: new Date().toISOString(),
    };

    try {
      const endpoint = apiBaseUrl ? `${apiBaseUrl}/api/contact` : '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      onToast({
        type: 'success',
        message: "Thanks! We'll get back to you within 24 hours.",
      });
      setSubmitted(true);
      setForm(empty);
    } catch (err) {
      onToast({
        type: 'error',
        message: err.message || 'Failed to send. Please try again or WhatsApp us.',
      });
    } finally {
      setLoading(false);
    }
  };

  const sendViaWhatsApp = () => {
    if (!validate()) return;

    const msg = encodeURIComponent(
      `Hello! I found your website and I'm interested in your service.\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n` +
        `Service: ${form.service}\n` +
        `Budget: ${form.budget || 'Not specified'}\n` +
        `Message: ${form.message}`
    );
    window.open(
      `https://wa.me/917358653020?text=${msg}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:bg-ink-900 dark:text-white dark:placeholder-ink-500 ${
      errors[field]
        ? 'border-error-400 dark:border-error-500'
        : 'border-ink-200 dark:border-ink-700'
    }`;

  return (
    <section id="contact" className="section-pad bg-ink-50/50 dark:bg-ink-950">
      <div className="container-max">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
              Contact
            </p>
            <h2 className="heading-lg mt-3 text-ink-900 dark:text-white">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300">
              Tell us what you&apos;re building and let&apos;s talk. We usually
              reply within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">
                    {siteConfig.whatsappDisplay}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-4xl border border-ink-200 bg-white p-6 shadow-sm dark:border-ink-800 dark:bg-ink-900 sm:p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* name */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-200">
                  Name *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Your name"
                    className={`${inputClass('name')} pl-10`}
                    aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* email + phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-200">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      placeholder="you@email.com"
                      className={`${inputClass('email')} pl-10`}
                      aria-invalid={!!errors.email}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-200">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      placeholder="+91 99999 99999"
                      className={`${inputClass('phone')} pl-10`}
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                      <AlertCircle size={12} />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* service + budget */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-200">
                    Service *
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange('service')}
                    className={inputClass('service')}
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                      <AlertCircle size={12} />
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-200">
                    Budget (optional)
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={handleChange('budget')}
                    className={inputClass('budget')}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* message */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-ink-700 dark:text-ink-200">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell us about your project..."
                  className={`${inputClass('message')} resize-none`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-error-600 dark:text-error-400">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    'Sent! We\'ll be in touch'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20 sm:w-auto"
                >
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
