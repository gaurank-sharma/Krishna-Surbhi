import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const ease = [0.22, 1, 0.36, 1];

// Cinematic slideshow — sanctuary, cows, nature, community
const SLIDES = [
  { image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1920&q=90', alt: 'Sanctuary meadow at golden hour' },
  { image: 'https://media.istockphoto.com/id/937024792/photo/cow-on-green-field.jpg?s=1024x1024&w=0&k=20&c=CNdqxhUlDf5SOZOzMkUuJ_OTPSA1rUg_Q8FT5N5S2nw=', alt: 'A rescued cow grazing in open pasture' },
  { image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=90', alt: 'Dawn light breaking over the sanctuary' },
  { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=90', alt: 'Volunteers and community at the sanctuary' },
];

export default function HeroSection() {
  const { openDonate } = useModal();
  const [idx, setIdx] = useState(0);

  const go = useCallback((dir) => setIdx((p) => (p + dir + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ── Cinematic full-width slideshow ── */}
      <div className="absolute inset-0 z-0 bg-forest-dark">
        <AnimatePresence>
          <motion.img
            key={idx}
            src={SLIDES[idx].image}
            alt={SLIDES[idx].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.3, ease }, scale: { duration: 7.5, ease: 'linear' } }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
        </AnimatePresence>
        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/75" />
      </div>

      {/* ── Slider arrows ── */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/30 text-white/80 flex items-center justify-center backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/30 text-white/80 flex items-center justify-center backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Centered content — minimal text, strong typography ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <div className="w-8 h-px bg-saffron/70" />
          <span className="text-saffron text-[10.5px] tracking-[0.38em] uppercase font-bold">The Cow-Love Sanctuary</span>
          <div className="w-8 h-px bg-saffron/70" />
        </motion.div>

        {/* Vision headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease }}
          className="font-serif text-white leading-[0.98]"
          style={{ fontSize: 'clamp(2.9rem, 7.5vw, 6.5rem)' }}
        >
          Where rescued cows
          <br />
          <em className="italic" style={{ color: '#E07B2E' }}>are loved back to life</em>
        </motion.h1>

        {/* Sub-line — single, minimal */}
        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease }}
          className="text-white/75 text-base md:text-lg max-w-xl mx-auto mt-7 leading-relaxed"
        >
          A living sanctuary of sacred healing, nature, and open-hearted community
          in the heart of New Delhi.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
        >
          <Link to="/visit" className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream transition-all shadow-lg">
            Plan Your Visit <ArrowRight size={13} />
          </Link>
          <button onClick={() => openDonate()}
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/70 transition-all">
            Donate Now
          </button>
        </motion.div>
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === idx ? 'w-7 h-1.5 bg-saffron' : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
}
