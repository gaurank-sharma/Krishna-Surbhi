import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { COWS } from '../../data';
import { ArrowRight } from 'lucide-react';

function CowPreviewCard({ cow, size = 'normal', delay = 0 }) {
  const p = cow.palette;
  const [imgErr, setImgErr] = useState(false);
  const isFeatured = size === 'featured';

  return (
    <FadeIn delay={delay} className="h-full">
      <Link to="/meet-the-cows" className="block h-full">
        <div className="rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400 bg-white h-full flex flex-col">

          {/* Photo area */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              height: isFeatured ? 340 : 200,
              background: `linear-gradient(145deg, ${p.bg} 0%, ${p.bgEnd} 100%)`
            }}
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
                <span className={`select-none ${isFeatured ? 'text-8xl' : 'text-6xl'}`}>{p.emoji}</span>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span
                className="text-[9px] tracking-[0.22em] font-bold uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: p.tagBg + 'F0', color: p.tagText }}
              >
                {cow.tag}
              </span>
            </div>

            {/* Name on image */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
              <h3 className={`font-serif text-white drop-shadow-sm ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                {cow.name}
              </h3>
              <div className="text-white/55 text-xs mt-0.5">{cow.age}</div>
            </div>
          </div>

          {/* Text area */}
          <div className={`flex-grow flex flex-col ${isFeatured ? 'p-6' : 'p-5'}`}>
            <p className={`text-brown/65 leading-relaxed flex-grow ${isFeatured ? 'text-sm' : 'text-xs line-clamp-2'}`}>
              {cow.story}
            </p>
            <div className="mt-3 pt-3 border-t flex items-center justify-between" style={{ borderColor: p.accent + '18' }}>
              <span className="text-[9px] tracking-widest uppercase opacity-40" style={{ color: p.accent }}>
                Since {cow.rescued.split(' ')[1]}
              </span>
              <ArrowRight
                size={13}
                className="opacity-30 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all"
                style={{ color: p.accent }}
              />
            </div>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function MeetTheCows() {
  const featured = COWS[0];
  const secondary = COWS.slice(1, 4);

  return (
    <section id="meet-the-cows" className="py-24 md:py-32 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Meet the Family</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              500+ souls,<br />
              <em className="italic text-forest">every one rescued</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              to="/meet-the-cows"
              className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-6 py-3 rounded-full hover:bg-forest hover:text-white transition-all flex-shrink-0"
            >
              Meet All Residents <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>

        {/* Editorial grid — featured tall left + 3 right */}
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {/* Featured — spans all rows on left */}
          <div className="md:row-span-2">
            <CowPreviewCard cow={featured} size="featured" delay={0} />
          </div>
          {/* 3 secondary in right 2 cols */}
          <div className="md:col-span-2 grid sm:grid-cols-3 md:grid-cols-3 gap-5">
            {secondary.map((cow, i) => (
              <CowPreviewCard key={cow.name} cow={cow} size="normal" delay={0.08 * (i + 1)} />
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex items-center justify-between bg-forest/5 rounded-2xl px-7 py-5">
            <p className="text-forest-dark/55 text-sm">
              <strong className="text-forest-dark">496 more cows</strong> are waiting to share their stories.
            </p>
            <Link
              to="/meet-the-cows"
              className="inline-flex items-center gap-2 bg-forest text-white text-[11px] font-bold tracking-wider uppercase px-6 py-3 rounded-full hover:bg-forest-dark transition-colors"
            >
              See All Cows
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
