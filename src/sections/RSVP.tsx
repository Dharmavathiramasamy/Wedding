import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { weddingData } from '@/data/weddingData';
import { DividerOrnament } from '@/components/Ornaments';
import ShareButton from '@/components/ShareButton';

interface RsvpForm {
  name: string;
  email: string;
  phone: string;
  guests: string;
  events: string[];
  dietary: string;
  message: string;
}

const EVENT_OPTIONS = weddingData.events.map((e) => e.name);

export default function RSVP() {
  const [form, setForm] = useState<RsvpForm>({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    events: [],
    dietary: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RsvpForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RsvpForm, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (form.events.length === 0) newErrors.events = 'Please select at least one event';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const toggleEvent = (event: string) => {
    setForm((prev) => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter((ev) => ev !== event)
        : [...prev.events, event],
    }));
  };

  const updateField = (field: keyof RsvpForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="rsvp" className="wedding-section bg-gradient-to-b from-ivory-100 to-blush-100">
      <div className="text-center mb-12">
        <span className="section-label">Will you join us?</span>
        <h2 className="section-title">RSVP</h2>
        <DividerOrnament className="mt-4" />
        <p className="font-sans text-sm text-brown-300 mt-4 flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4 text-champagne-400" />
          Please respond by {weddingData.rsvp.deadline}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="glass-card rounded-3xl p-10 text-center shadow-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-sage-200 flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle2 className="w-8 h-8 text-brown-500" />
              </motion.div>
              <h3 className="font-display text-2xl text-brown-500 mb-2">Thank You, {form.name}!</h3>
              <p className="font-serif text-brown-400 mb-2">
                We've received your RSVP and are overjoyed that you'll be joining us.
              </p>
              <p className="font-serif text-sm text-brown-300 mb-6">
                A confirmation will be sent to {form.email}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', phone: '', guests: '1', events: [], dietary: '', message: '' });
                }}
                className="text-sm text-champagne-400 hover:text-champagne-500 font-sans underline"
              >
                Submit another response
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-6 md:p-10 shadow-medium space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-sans text-brown-400 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-champagne-100 focus:border-champagne-300 focus:ring-2 focus:ring-champagne-200/30 outline-none transition-all font-sans text-brown-500"
                  placeholder="Your full name"
                />
                {errors.name && <FieldError message={errors.name} />}
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-sans text-brown-400 mb-1.5">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-champagne-100 focus:border-champagne-300 focus:ring-2 focus:ring-champagne-200/30 outline-none transition-all font-sans text-brown-500"
                    placeholder="you@example.com"
                  />
                  {errors.email && <FieldError message={errors.email} />}
                </div>
                <div>
                  <label className="block text-sm font-sans text-brown-400 mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-champagne-100 focus:border-champagne-300 focus:ring-2 focus:ring-champagne-200/30 outline-none transition-all font-sans text-brown-500"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <FieldError message={errors.phone} />}
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-sans text-brown-400 mb-1.5">Number of Guests</label>
                <select
                  value={form.guests}
                  onChange={(e) => updateField('guests', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-champagne-100 focus:border-champagne-300 outline-none transition-all font-sans text-brown-500"
                >
                  {['1', '2', '3', '4', '5+'].map((n) => (
                    <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>

              {/* Events attending */}
              <div>
                <label className="block text-sm font-sans text-brown-400 mb-2">Events Attending *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EVENT_OPTIONS.map((event) => (
                    <button
                      key={event}
                      type="button"
                      onClick={() => toggleEvent(event)}
                      className={`px-4 py-2.5 rounded-xl border text-sm font-sans transition-all ${
                        form.events.includes(event)
                          ? 'border-champagne-300 bg-champagne-100 text-brown-500'
                          : 'border-champagne-100 bg-white/40 text-brown-300 hover:border-champagne-200'
                      }`}
                    >
                      {event}
                    </button>
                  ))}
                </div>
                {errors.events && <FieldError message={errors.events} />}
              </div>

              {/* Dietary */}
              <div>
                <label className="block text-sm font-sans text-brown-400 mb-1.5">Dietary Preferences</label>
                <input
                  type="text"
                  value={form.dietary}
                  onChange={(e) => updateField('dietary', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-champagne-100 focus:border-champagne-300 outline-none transition-all font-sans text-brown-500"
                  placeholder="e.g., Vegetarian, Vegan, Allergies..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-sans text-brown-400 mb-1.5">Message for the Couple</label>
                <textarea
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-champagne-100 focus:border-champagne-300 outline-none transition-all font-sans text-brown-500 resize-none"
                  placeholder="Share your wishes and blessings..."
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <motion.button
                  type="submit"
                  className="px-10 py-3.5 rounded-full bg-champagne-300 text-white font-sans text-sm tracking-wide hover:bg-champagne-400 transition-colors shadow-gold w-full sm:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send RSVP
                </motion.button>
                <ShareButton />
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 mt-1.5 text-blush-500">
      <AlertCircle className="w-3.5 h-3.5" />
      <span className="text-xs font-sans">{message}</span>
    </div>
  );
}
