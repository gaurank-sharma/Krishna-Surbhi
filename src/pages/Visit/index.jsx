import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { EXPERIENCES } from '../../data';
import { useModal } from '../../context/ModalContext';
import { MapPin, Clock, Phone, ChevronDown, Calendar, Users } from 'lucide-react';

const FAQS = [
  { q: 'Do I need to book in advance?', a: 'Yes, all experiences require prior booking. We limit group sizes to ensure quality and safety for both visitors and cows. Book at least 48 hours in advance.' },
  { q: 'Is the sanctuary suitable for children?', a: 'Absolutely. Our Family Sanctuary Day and Sanctuary Walk are specifically designed for children above 5 years. Younger children are welcome in adult-supervised settings.' },
  { q: 'What should I wear?', a: 'Comfortable, earth-toned clothing. Avoid bright colours which can startle the animals. Closed shoes are required. Loose, layered clothing is recommended as mornings can be cool.' },
  { q: 'Are the cows safe to be near?', a: 'Our cows are carefully selected for visitor interactions. They are gentle, habituated to human presence, and supervised by trained handlers at all times. Thousands of visitors have had safe, meaningful experiences.' },
  { q: 'Can I bring my own food?', a: 'We provide a sattvic (pure vegetarian) meal as part of most experiences. Outside food is not permitted, but guests with allergies or special diets should inform us in advance.' },
  { q: 'Is there accommodation on-site?', a: 'We have 4 simple, comfortable volunteer cottages. For overnight stays, please contact us directly. Accommodation is prioritised for multi-day volunteer programmes.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest/10">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-medium text-forest-dark text-sm md:text-base">{q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-forest/50 flex-shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-brown/65 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Visit() {
  const { openDonate } = useModal();

  return (
    <div className="bg-cream">
      <PageHero
        label="Plan Your Visit"
        title="Visit the Sanctuary"
        subtitle="Every visit is unique. Every experience is designed to slow you down and open your heart."
        image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=90"
      />

      {/* ── Experiences grid ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Experiences" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Choose your <em className="italic text-forest">sacred experience</em>
              </h2>
              <p className="text-brown/55 mt-4 max-w-xl mx-auto leading-relaxed">
                Each experience is thoughtfully crafted to create genuine connection between you and
                our resident cows.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {EXPERIENCES.map((exp, i) => (
              <FadeIn key={exp.title} delay={i * 0.08}>
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <p className="text-saffron text-[10px] tracking-widest font-bold uppercase mb-2">{exp.tagline}</p>
                    <h3 className="font-serif text-2xl text-forest-dark mb-3 leading-snug">{exp.title}</h3>
                    <p className="text-brown/65 text-sm leading-relaxed mb-5 flex-grow">{exp.desc}</p>

                    {/* Includes */}
                    <ul className="flex flex-col gap-1.5 mb-5">
                      {exp.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-brown/55 text-xs">
                          <span className="text-forest text-sm">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Meta + CTA */}
                    <div className="flex items-end justify-between pt-5 border-t border-forest/8">
                      <div>
                        <div className="flex items-center gap-1 text-forest/45 text-[10px] uppercase tracking-wider mb-0.5">
                          <Clock size={10} /> {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 text-forest/45 text-[10px] uppercase tracking-wider mb-1.5">
                          <Users size={10} /> {exp.groupSize}
                        </div>
                        <div className="text-forest font-semibold text-base">{exp.price}</div>
                      </div>
                      <button
                        onClick={() => openDonate({ title: `Book: ${exp.title}` })}
                        className="bg-forest text-white text-[10px] font-bold tracking-wider uppercase px-5 py-3 rounded-full hover:bg-forest-dark active:scale-95 transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plan your visit info ── */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="Getting Here" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                Plan your <em className="italic text-forest">visit</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock size={22} className="text-saffron" />,
                title: 'Visiting Hours',
                lines: ['Tuesday – Sunday', '7:00 AM – 6:00 PM', 'Closed on Mondays'],
              },
              {
                icon: <MapPin size={22} className="text-saffron" />,
                title: 'Location',
                lines: ['Village Rohtak Road', 'Rohtak, Haryana 124001', '~45 min from Delhi'],
              },
              {
                icon: <Phone size={22} className="text-saffron" />,
                title: 'Reservations',
                lines: ['+91 98000 00000', 'love@krishnasurbhi.org', 'Book 48 hrs in advance'],
              },
            ].map((info) => (
              <FadeIn key={info.title} delay={0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mx-auto mb-5">
                    {info.icon}
                  </div>
                  <h3 className="font-serif text-lg text-forest-dark mb-3">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-brown/60 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-cream">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="What to Expect" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                A typical <em className="italic text-forest">sanctuary visit</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Arrive & Settle', desc: 'A gentle welcome with herbal tea. Leave the noise of the world at the gate.' },
              { step: '02', title: 'Meet the Cows', desc: 'Your guide introduces you to the residents — their names, stories, and individual personalities.' },
              { step: '03', title: 'Be Present', desc: 'No agenda. Simply sit, breathe, and allow the connection to emerge naturally.' },
              { step: '04', title: 'Carry It Home', desc: 'Depart with a reflection journal entry, a cup of chai, and something you can\'t quite name.' },
            ].map((s) => (
              <FadeIn key={s.step} delay={0.1}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-forest/5">
                  <div className="font-serif text-6xl font-bold mb-4 leading-none" style={{ color: '#2D6A4F18' }}>{s.step}</div>
                  <h3 className="font-serif text-lg text-forest-dark mb-2">{s.title}</h3>
                  <p className="text-brown/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-beige/40">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="FAQ" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                Common <em className="italic text-forest">questions</em>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} {...faq} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section className="py-16 px-6 bg-forest-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Ready to visit?
            </h2>
            <p className="text-white/55 mb-8 leading-relaxed">
              Call us or fill in a request and our team will confirm your booking within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+919800000000" className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream transition-all">
                <Phone size={13} /> +91 98000 00000
              </a>
              <button
                onClick={() => openDonate({ title: 'Book a Visit' })}
                className="inline-flex items-center justify-center gap-2 bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-saffron/85 transition-all"
              >
                <Calendar size={13} /> Book Now
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
