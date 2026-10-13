import React, { useEffect, useState } from 'react';
import { SectionHeading } from './SectionHeading';

interface ContactSectionProps { initialService?: string; inquiryRequest?: number; }
type FormData = { name: string; email: string; company: string; service: string; budget: string; details: string; };
type RequiredField = 'name' | 'email' | 'details';
type FormErrors = Partial<Record<RequiredField, string>>;
const email = 'contact@samiben.design';
const emptyForm: FormData = { name: '', email: '', company: '', service: 'Website Design & Development', budget: '', details: '' };

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, inquiryRequest }) => {
  const [formData, setFormData] = useState<FormData>({ ...emptyForm });
  const [errors, setErrors] = useState<FormErrors>({});
  const [draftLink, setDraftLink] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    if (!initialService) return;
    const service = initialService.toLowerCase().includes('brand') ? 'Brand Identity & Visual Systems'
      : initialService.toLowerCase().includes('video') ? 'Social Media Video Editing & Scripting'
      : 'Website Design & Development';
    setFormData(previous => ({ ...previous, service }));
    setDraftLink('');
  }, [initialService, inquiryRequest]);

  const validate = (field: RequiredField, value: string) => {
    if (!value.trim()) return field === 'details' ? 'Tell me a little about your project.' : `Please enter your ${field}.`;
    if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Enter a valid email address.';
    if (field === 'details' && value.trim().length < 10) return 'Add a little more detail (at least 10 characters).';
    return undefined;
  };

  const change = (field: keyof FormData, value: string) => {
    setFormData(previous => ({ ...previous, [field]: value }));
    if (field in errors) setErrors(previous => ({ ...previous, [field]: validate(field as RequiredField, value) }));
  };

  const prepareInquiry = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    (['name', 'email', 'details'] as RequiredField[]).forEach(field => {
      const message = validate(field, formData[field]);
      if (message) nextErrors[field] = message;
    });
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`inquiry-${firstError}`)?.focus();
      return;
    }
    const body = [
      `Name: ${formData.name.trim()}`, `Email: ${formData.email.trim()}`,
      `Company: ${formData.company.trim() || 'Not specified'}`,
      `Service: ${formData.service}`, `Budget: ${formData.budget || 'Not specified'}`,
      '', 'Project details:', formData.details.trim(),
    ].join('\n');
    setDraftLink(`mailto:${email}?subject=${encodeURIComponent('Project inquiry — ' + formData.service)}&body=${encodeURIComponent(body)}`);
  };

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopyStatus('Email copied'); }
    catch { setCopyStatus('Please use the email link'); }
  };

  const labelClass = 'block font-mono text-[11px] tracking-wide mb-2';
  const error = (field: RequiredField) => errors[field] && <p id={`${field}-error`} role="alert" className="text-[12px] text-red-700 mt-2">{errors[field]}</p>;

  return (
    <section id="contact" className="section-padding surface-paper">
      <div className="site-container">
        <SectionHeading number="04" label="Contact" title="Let’s make something good.">
          Have a project in mind? Tell me what you’re thinking, and we’ll take it from there.
        </SectionHeading>
        <div className="site-grid gap-y-12 items-start">
          <div className="col-span-4 sm:col-span-6 lg:col-span-5 lg:pr-10">
            <h3 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.2]">A new website, a fresh identity, or your next story.</h3>
            <p className="mt-5 text-[16px] leading-[1.8] text-ink/75 max-w-[42ch]">I work with brands and creators on projects big and small. Share your goals, timeline, and a little context.</p>
            <div className="mt-8 pt-6 border-t border-ink/20">
              <span className="eyebrow mb-3">Prefer email?</span>
              <a href={`mailto:${email}`} className="text-[clamp(17px,1.8vw,24px)] font-medium hover:text-blue break-all">{email}</a>
              <div className="mt-3 flex items-center gap-4">
                <button type="button" onClick={copyEmail} className="nav-link text-[12px]">Copy email</button>
                <span role="status" className="text-[12px] text-ink/60">{copyStatus}</span>
              </div>
            </div>
            <dl className="mt-8 text-[12px] space-y-4">
              <div className="flex flex-wrap justify-between gap-2 border-b border-ink/15 pb-4"><dt className="font-mono text-ink/60">Based in</dt><dd>Algiers, GMT+1 / Remote</dd></div>
              <div className="flex flex-wrap justify-between gap-2 border-b border-ink/15 pb-4"><dt className="font-mono text-ink/60">Response time</dt><dd>Usually 24–48 hours</dd></div>
              <div className="flex flex-wrap justify-between gap-2"><dt className="font-mono text-ink/60">New projects</dt><dd>Ask about availability</dd></div>
            </dl>
          </div>
          <div className="col-span-4 sm:col-span-6 lg:col-span-7 border border-ink/20 bg-white p-6 sm:p-8 lg:p-10">
            <h3 className="font-serif text-[30px] leading-tight mb-7">Tell me about your project</h3>
            {draftLink ? (
              <div role="status" className="space-y-5">
                <span className="eyebrow">Ready for your email app</span>
                <p className="text-[16px] leading-relaxed">Your inquiry is ready. Open the draft, review it, and send it from your email app.</p>
                <a href={draftLink} className="btn-primary w-full">Open email draft <span aria-hidden="true">↗</span></a>
                <button type="button" className="nav-link" onClick={() => setDraftLink('')}>Edit your inquiry</button>
              </div>
            ) : (
              <form onSubmit={prepareInquiry} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inquiry-name" className={labelClass}>Name <span aria-hidden="true" className="accent">*</span></label>
                    <input id="inquiry-name" autoComplete="name" required value={formData.name} onChange={event => change('name', event.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className="form-input-editorial" placeholder="Your name" />
                    {error('name')}
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" className={labelClass}>Email <span aria-hidden="true" className="accent">*</span></label>
                    <input id="inquiry-email" type="email" autoComplete="email" required value={formData.email} onChange={event => change('email', event.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className="form-input-editorial" placeholder="you@company.com" />
                    {error('email')}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inquiry-company" className={labelClass}>Company <span className="text-ink/50">(optional)</span></label>
                    <input id="inquiry-company" autoComplete="organization" value={formData.company} onChange={event => change('company', event.target.value)} className="form-input-editorial" placeholder="Company or brand" />
                  </div>
                  <div>
                    <label htmlFor="inquiry-budget" className={labelClass}>Budget <span className="text-ink/50">(optional)</span></label>
                    <select id="inquiry-budget" value={formData.budget} onChange={event => change('budget', event.target.value)} className="form-input-editorial">
                      <option value="">Select a range</option><option>Under $2,500</option><option>$2,500 — $5,000</option><option>$5,000 — $10,000</option><option>$10,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="inquiry-service" className={labelClass}>What do you need? <span aria-hidden="true" className="accent">*</span></label>
                  <select id="inquiry-service" required value={formData.service} onChange={event => change('service', event.target.value)} className="form-input-editorial">
                    <option>Website Design & Development</option><option>Brand Identity & Visual Systems</option><option>Social Media Video Editing & Scripting</option><option>Other / Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="inquiry-details" className={labelClass}>Project details <span aria-hidden="true" className="accent">*</span></label>
                  <textarea id="inquiry-details" rows={4} required value={formData.details} onChange={event => change('details', event.target.value)} aria-invalid={!!errors.details} aria-describedby={errors.details ? 'details-error' : undefined} className="form-input-editorial resize-y leading-relaxed" placeholder="A little about your goals, timeline, and what you’d like to create…" />
                  {error('details')}
                </div>
                <div>
                  <button type="submit" className="btn-primary w-full">Prepare email inquiry <span aria-hidden="true">↗</span></button>
                  <p className="text-[11px] leading-relaxed text-ink/60 text-center mt-3">Review and send the draft from your email app.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
