import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../../components/FadeIn';

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 md:py-36 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-forest" />
            <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Our Story</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Left — editorial text block */}
          <div className="md:col-span-5">
            <FadeIn direction="left">
              <h2 className="font-serif text-5xl md:text-6xl text-forest-dark leading-[1.05] mb-8">
                Born from one<br />rainy night<br />
                <em className="italic text-forest">and one choice</em>
              </h2>

              <p className="text-brown/65 leading-relaxed mb-5">
                January 2018. A highway outside Delhi. A truck driver's phone call at 2am. And a
                school teacher named Meena Devi who stopped her car, carried an injured calf to
                safety, and stayed until morning.
              </p>
              <p className="text-brown/65 leading-relaxed mb-10">
                That calf became Krishna Surbhi. That night became a sanctuary. And that one act
                of compassion has since rescued over 500 lives — and healed thousands of humans in
                the process.
              </p>

              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 text-forest font-semibold text-sm group"
              >
                Read our full story
                <span className="w-6 h-px bg-forest group-hover:w-10 transition-all duration-300" />
              </Link>
            </FadeIn>
          </div>

          {/* Center — large year element */}
          <div className="md:col-span-2 flex md:flex-col items-center justify-center gap-4">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1.2 }}
                  className="font-serif font-light leading-none text-forest/12 select-none"
                  style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', writingMode: 'vertical-rl' }}
                >
                  2018
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right — quote + image */}
          <div className="md:col-span-5">
            <FadeIn direction="right" delay={0.15}>

              {/* Pull quote */}
              <div className="bg-forest rounded-2xl p-8 mb-6">
                <div className="font-serif text-5xl text-saffron/40 leading-none mb-2 select-none">"</div>
                <blockquote className="font-serif text-xl text-white italic leading-relaxed mb-4">
                  Every cow that arrives frightened eventually becomes a teacher.
                </blockquote>
                <cite className="text-white/45 text-sm not-italic">
                  — Meena Devi, Founder
                </cite>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: '500+', label: 'Cows' },
                  { num: '7 yrs', label: 'Journey' },
                  { num: '12 ac', label: 'Land' },
                ].map((s) => (
                  <div key={s.label} className="bg-mint/50 rounded-xl p-4 text-center">
                    <div className="font-serif text-2xl text-forest-dark">{s.num}</div>
                    <div className="text-forest/50 text-[9px] tracking-widest uppercase mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
