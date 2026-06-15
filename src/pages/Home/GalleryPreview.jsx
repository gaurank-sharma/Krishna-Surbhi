import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const GALLERY = [
  {
    title: 'Sanctuary Life',
    label: 'Daily Rhythm',
    image: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fpeppara-wildlife-sanctuary-1728034213_31e2787ce708cafe4552.webp&w=3840&q=75',
    // organic leaf shape — top-left / bottom-right rounded
    shape: 'rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-[2rem] rounded-bl-[2rem]',
    offset: 'lg:mt-0',
    labelPos: 'top',
  },
  {
    title: 'Animal Stories',
    label: 'Rescue & Healing',
    image: 'https://img.magnific.com/free-photo/landscape-forest-covered-greenery-with-pelicans-standing-ground-sunlight_181624-16435.jpg?semt=ais_hybrid&w=740&q=80',
    // mirrored leaf — top-right / bottom-left rounded
    shape: 'rounded-tr-[6rem] rounded-bl-[6rem] rounded-tl-[2rem] rounded-br-[2rem]',
    offset: 'lg:mt-16',
    labelPos: 'bottom',
  },
  {
    title: 'Community Events',
    label: 'Gatherings',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
    shape: 'rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-[2rem] rounded-bl-[2rem]',
    offset: 'lg:mt-0',
    labelPos: 'top',
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Minimal header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-forest" />
                <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Gallery</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
                Glimpses of the <em className="italic text-forest">sanctuary</em>
              </h2>
            </div>
            <Link to="/community"
              className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-6 py-3 rounded-full hover:bg-forest hover:text-white transition-all flex-shrink-0">
              Explore Gallery <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>

        {/* Organic, staggered image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {GALLERY.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12} className={item.offset}>
              <Link
                to="/community"
                className={`relative block w-full aspect-[4/5] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 ${item.shape}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1100ms]"
                  loading="lazy"
                />
                {/* soft overlay for legibility */}
                <div className={`absolute inset-0 ${item.labelPos === 'top'
                  ? 'bg-gradient-to-b from-black/55 via-black/10 to-black/30'
                  : 'bg-gradient-to-t from-black/60 via-black/10 to-black/30'}`} />

                <div className={`absolute inset-x-0 px-8 ${item.labelPos === 'top' ? 'top-8' : 'bottom-8'}`}>
                  <h3 className="font-serif text-4xl md:text-[2.75rem] text-white leading-none drop-shadow-md">
                    {item.title}
                  </h3>
                  <span className="block text-white/85 text-[10px] tracking-[0.3em] uppercase font-semibold mt-3">
                    {item.label}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
