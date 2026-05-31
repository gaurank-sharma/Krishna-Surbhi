import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { COWS } from '../../data';
import { useModal } from '../../context/ModalContext';
import { X, ArrowRight, Heart } from 'lucide-react';

const ALL_TAGS = ['All', ...new Set(COWS.map((c) => c.tag))];

/* ── Cow story modal ── */
function CowModal({ cow, onClose }) {
  const p = cow.palette;
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(27,67,50,0.82)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid sm:grid-cols-5">
          {/* Photo panel */}
          <div className="sm:col-span-2 relative overflow-hidden min-h-[260px]"
            style={{ background: `linear-gradient(145deg, ${p.bg} 0%, ${p.bgEnd} 100%)` }}
          >
            {!imgErr ? (
              <img
                src={cow.image}
                alt={cow.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => setImgErr(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">{p.emoji}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div
                className="text-[9px] tracking-[0.22em] font-bold uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: p.tagBg, color: p.tagText }}
              >
                {cow.tag}
              </div>
            </div>
          </div>

          {/* Story panel */}
          <div className="sm:col-span-3 p-7 flex flex-col">
            <div className="flex justify-between items-start mb-1">
              <h2 className="font-serif text-3xl" style={{ color: p.accent }}>{cow.name}</h2>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-forest/8 text-forest hover:bg-forest/15 transition-colors flex-shrink-0 ml-2">
                <X size={15} />
              </button>
            </div>
            <div className="text-brown/40 text-sm mb-4">{cow.age} · Rescued {cow.rescued}</div>
            <p className="text-brown/70 text-sm leading-relaxed flex-grow">{cow.fullStory}</p>
            <div className="mt-6 pt-5 border-t border-forest/8">
              <p className="text-forest-dark text-xs font-semibold mb-3">Support {cow.name}'s care</p>
              <div className="flex gap-2">
                <button
                  style={{ backgroundColor: p.accent }}
                  className="flex-1 text-white text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                >
                  <Heart size={11} fill="white" /> Adopt Her
                </button>
                <button
                  className="flex-1 border text-xs font-semibold py-3 rounded-xl hover:bg-forest/5 transition-colors"
                  style={{ borderColor: p.accent, color: p.accent }}
                >
                  Sponsor Feed
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Cow card: real photo + gradient fallback ── */
function CowCard({ cow, onClick, delay }) {
  const p = cow.palette;
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-400 bg-white"
    >
      {/* ── Photo area (real image or gradient fallback) ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: 260, background: `linear-gradient(145deg, ${p.bg} 0%, ${p.bgEnd} 100%)` }}
      >
        {!imgErr ? (
          <img
            src={cow.image}
            alt={cow.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl select-none group-hover:scale-110 transition-transform duration-500">
              {p.emoji}
            </span>
          </div>
        )}

        {/* Dark gradient at bottom for tag readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[9px] tracking-[0.22em] font-bold uppercase px-3 py-1.5 rounded-full shadow-sm"
            style={{ backgroundColor: p.tagBg + 'F2', color: p.tagText }}
          >
            {cow.tag}
          </span>
        </div>

        {/* Name overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
          <h3 className="font-serif text-2xl text-white leading-tight drop-shadow-sm">{cow.name}</h3>
          <div className="text-white/60 text-xs mt-0.5">{cow.age}</div>
        </div>
      </div>

      {/* ── Text section ── */}
      <div className="p-5">
        <p className="text-brown/65 text-xs leading-relaxed line-clamp-3">{cow.story}</p>
        <div
          className="mt-4 pt-3 border-t flex items-center justify-between"
          style={{ borderColor: p.accent + '18' }}
        >
          <span className="text-[9px] tracking-widest uppercase opacity-45" style={{ color: p.accent }}>
            Rescued {cow.rescued.split(' ')[1]}
          </span>
          <span
            className="text-xs font-semibold flex items-center gap-1 opacity-45 group-hover:opacity-90 transition-opacity"
            style={{ color: p.accent }}
          >
            Her story <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function MeetTheCows() {
  const [activeTag, setActiveTag] = useState('All');
  const [selectedCow, setSelectedCow] = useState(null);
  const { openDonate } = useModal();

  const filtered = activeTag === 'All' ? COWS : COWS.filter((c) => c.tag === activeTag);

  return (
    <div className="bg-cream">
      <AnimatePresence>
        {selectedCow && <CowModal cow={selectedCow} onClose={() => setSelectedCow(null)} />}
      </AnimatePresence>

      <PageHero
        label="500+ Residents"
        title="Meet the Family"
        subtitle="Each name, a rescue. Each story, a transformation. Each presence, a gift."
        image="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=90"
      />

      {/* ── Filter strip ── */}
      <div className="sticky top-[68px] z-30 bg-cream border-b border-forest/8 py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-2 pb-0.5 w-max">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-[10px] tracking-widest font-bold uppercase px-4 py-2 rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTag === tag ? 'bg-forest text-white' : 'bg-forest/8 text-forest/60 hover:bg-forest/14'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cow grid ── */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-brown/40 text-sm mb-8">
            Showing <span className="text-forest font-semibold">{filtered.length}</span> residents
          </p>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((cow, i) => (
                <CowCard key={cow.name} cow={cow} onClick={() => setSelectedCow(cow)} delay={i * 0.05} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Adopt CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }} className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-saffron text-[10px] tracking-[0.3em] font-semibold uppercase mb-4">Adoption Programme</div>
                <h2 className="font-serif text-4xl text-white leading-tight mb-4">
                  Give one of them <br /><em className="italic text-saffron">your name</em>
                </h2>
                <p className="text-white/55 leading-relaxed mb-8">
                  Adopt a cow for ₹2,000/month. Receive monthly stories, photos, and a certificate of adoption.
                </p>
                <button
                  onClick={() => openDonate({ title: 'Adopt a Cow', id: 'adopt' })}
                  className="inline-flex items-center gap-2 bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-saffron/85 transition-all"
                >
                  <Heart size={13} fill="white" /> Adopt a Cow — ₹2,000/mo
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {COWS.slice(0, 4).map((cow) => (
                  <div key={cow.name} className="rounded-2xl overflow-hidden relative h-28"
                    style={{ background: `linear-gradient(135deg, ${cow.palette.bg} 0%, ${cow.palette.bgEnd} 100%)` }}
                  >
                    {(() => {
                      const [err, setErr] = useState(false);
                      return !err ? (
                        <img src={cow.image} alt={cow.name} className="absolute inset-0 w-full h-full object-cover" onError={() => setErr(true)} />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl">{cow.palette.emoji}</span>
                        </div>
                      );
                    })()}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3">
                      <div className="font-serif text-sm text-white">{cow.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
