import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../../components/FadeIn';
import { COWS } from '../../data';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];
const STORIES = COWS.slice(0, 6);

export default function MeetTheCows() {
  const [idx, setIdx] = useState(0);
  const go = useCallback((dir) => setIdx((p) => (p + dir + STORIES.length) % STORIES.length), []);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % STORIES.length), 6500);
    return () => clearInterval(t);
  }, [idx]);

  const cow = STORIES[idx];

  return (
    <section id="meet-the-cows" className="pt-24 md:pt-32 pb-14 md:pb-16 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header — minimal */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Animal Stories</span>
              <div className="w-8 h-px bg-forest" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              Every rescue is a
              <br />
              <em className="italic text-forest">Journey of Hope</em>
            </h2>
          </div>
        </FadeIn>

        {/* Story slider */}
        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[460px] md:h-[560px] bg-forest-dark">
            <AnimatePresence>
              <motion.img
                key={idx}
                src={cow.image}
                alt={cow.name}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1.1, ease }, scale: { duration: 7, ease: 'linear' } }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/10 to-transparent" />

            {/* Content — right aligned like reference */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-end">
              <div className="px-8 md:pr-16 md:pl-0 max-w-lg text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <span className="inline-block bg-saffron text-white text-[9px] tracking-[0.24em] font-bold uppercase px-3 py-1.5 rounded-full mb-5">
                      {cow.tag} · Rescued {cow.rescued.split(' ')[1]}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4 drop-shadow-sm">
                      {cow.name}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed mb-7 line-clamp-4">
                      {cow.story}
                    </p>
                    <Link
                      to={`/meet-the-cows/${cow.id}`}
                      className="inline-flex items-center gap-2 bg-saffron text-white text-[11px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-saffron/85 active:scale-95 transition-all shadow-lg"
                    >
                      Read More <ArrowRight size={13} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Arrows (hidden on mobile — overlap the story copy in the small viewport) */}
            <button onClick={() => go(-1)} aria-label="Previous story"
              className="hidden md:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/30 text-white/80 items-center justify-center backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => go(1)} aria-label="Next story"
              className="hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-white/30 text-white/80 items-center justify-center backdrop-blur-sm hover:bg-white/15 hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
              {STORIES.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Story ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === idx ? 'w-7 h-1.5 bg-saffron' : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/70'}`} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Link to all */}
        <FadeIn delay={0.2}>
          <div className="text-center mt-10">
            <Link
              to="/meet-the-cows"
              className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-7 py-3.5 rounded-full hover:bg-forest hover:text-white transition-all"
            >
              Meet All Our Residents <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
