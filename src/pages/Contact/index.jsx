import { useState } from 'react';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="bg-cream">
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Questions, bookings, partnerships — we'd love to hear from you."
        image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=90"
      />

      {/* ── Contact content ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <FadeIn direction="left">
            <SectionLabel text="Reach Out" />
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
              We love hearing <br />
              <em className="italic text-forest">from you</em>
            </h2>
            <p className="text-brown/70 leading-relaxed mb-10">
              Whether you want to book a visit, enquire about adoption, volunteer, or simply want to
              know more — our team responds within 24 hours.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {[
                {
                  icon: <MapPin size={20} className="text-saffron" />,
                  label: 'Find Us',
                  lines: ['Village Rohtak Road', 'Rohtak, Haryana 124001', 'India'],
                },
                {
                  icon: <Phone size={20} className="text-saffron" />,
                  label: 'Call Us',
                  lines: ['+91 98000 00000', '+91 12345 67890'],
                },
                {
                  icon: <Mail size={20} className="text-saffron" />,
                  label: 'Email Us',
                  lines: ['love@krishnasurbhi.org', 'volunteer@krishnasurbhi.org'],
                },
                {
                  icon: <Clock size={20} className="text-saffron" />,
                  label: 'Office Hours',
                  lines: ['Monday – Saturday', '9:00 AM – 6:00 PM IST'],
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs tracking-widest font-bold text-forest/60 uppercase mb-1">{item.label}</div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-forest-dark text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-mint flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">📍</div>
                <div className="font-serif text-forest-dark text-lg">Krishna Surbhi Sanctuary</div>
                <div className="text-forest/55 text-sm mt-1">Rohtak, Haryana</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-forest text-xs font-semibold border border-forest/25 px-4 py-2 rounded-full hover:bg-forest hover:text-white transition-all"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-forest/6 h-fit sticky top-24">
              {!sent ? (
                <>
                  <h3 className="font-serif text-2xl text-forest-dark mb-1">Send a Message</h3>
                  <p className="text-brown/55 text-sm mb-7">We'll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Meena Devi"
                          className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@email.com"
                          className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98000 00000"
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark focus:outline-none focus:border-forest transition-colors bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option>Book a Visit</option>
                        <option>Adopt a Cow</option>
                        <option>Volunteer</option>
                        <option>Donation Enquiry</option>
                        <option>Corporate Partnership</option>
                        <option>Media Enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] tracking-widest uppercase text-forest/60 font-semibold">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what's on your heart..."
                        className="border border-forest/18 rounded-xl px-4 py-3 text-sm text-forest-dark placeholder-brown/35 focus:outline-none focus:border-forest transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-forest text-white font-semibold text-[11px] tracking-wider uppercase py-4 rounded-xl hover:bg-forest-dark active:scale-95 transition-all mt-1"
                    >
                      Send Message 🙏
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="text-5xl mb-5">🐄</div>
                  <h3 className="font-serif text-2xl text-forest-dark mb-2">Thank you, {form.name}!</h3>
                  <p className="text-brown/60 text-sm leading-relaxed max-w-xs mx-auto">
                    Your message has been received. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); }}
                    className="mt-6 text-forest text-xs font-semibold border border-forest/25 px-5 py-2 rounded-full hover:bg-forest/5 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
