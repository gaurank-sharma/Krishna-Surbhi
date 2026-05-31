import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const ease = [0.22, 1, 0.36, 1];

const TICKER_WORDS = ['RESCUE', 'HEAL', 'MEDITATE', 'CONNECT', 'TRANSFORM', 'SACRED', 'NOURISH', 'COMMUNITY', 'RESTORE', 'PROTECT'];

export default function HeroSection() {
  const { openDonate } = useModal();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-dark">
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1920&q=90"
          alt="Pastoral sanctuary at golden hour"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
          style={{ filter: 'brightness(0.8) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/45 to-transparent" />
      </div>

      {/* Vertical label — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3"
      >
        <span className="text-white/25 text-[9px] tracking-[0.35em] uppercase font-medium" style={{ writingMode: 'vertical-rl' }}>
          Haryana · India · Est. 2018
        </span>
        <div className="w-px h-16 bg-white/15" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-14 pb-24 md:pb-32">

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
          className="flex items-center gap-3 mb-8">
          <span className="text-saffron text-[10px] tracking-[0.36em] uppercase font-bold">The Cow-Love Sanctuary</span>
          <div className="w-16 h-px bg-saffron/55" />
          <span className="text-white/35 text-[10px] tracking-[0.2em] uppercase">NGO · Haryana</span>
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.h1 initial={{ y: '105%' }} animate={{ y: 0 }}
            transition={{ delay: 0.42, duration: 1, ease }}
            className="font-serif leading-[0.95] text-white"
            style={{ fontSize: 'clamp(3.8rem, 10vw, 8.5rem)' }}>
            Moo. <em className="not-italic" style={{ color: '#E07B2E' }}>Meditate.</em>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1 initial={{ y: '105%' }} animate={{ y: 0 }}
            transition={{ delay: 0.56, duration: 1, ease }}
            className="font-serif leading-[0.95] text-white italic"
            style={{ fontSize: 'clamp(3.8rem, 10vw, 8.5rem)' }}>
            Hug. Heal.
          </motion.h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="text-white/58 max-w-[380px] leading-relaxed text-[1rem]">
            500+ rescued cows. A sanctuary of sacred healing. A place where every visitor leaves quietly transformed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/visit" className="inline-flex items-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-7 py-4 rounded-full hover:bg-cream transition-all shadow-md">
              Plan Your Visit <ArrowRight size={13} />
            </Link>
            <button onClick={() => openDonate()}
              className="inline-flex items-center gap-2 border border-white/30 text-white text-[11px] tracking-wider uppercase px-7 py-4 rounded-full hover:bg-white/10 hover:border-white/60 transition-all">
              Donate Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrolling text ticker — no emojis */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden py-3">
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {Array(5).fill(TICKER_WORDS).flat().map((word, i) => (
            <span key={i} className="text-white/35 text-[9px] tracking-[0.35em] uppercase font-semibold">
              {word}
              <span className="mx-4 text-white/15">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
