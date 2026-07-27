import { useParams, Navigate, Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import { COWS } from '../../data';
import { ArrowRight, ArrowLeft, Heart } from 'lucide-react';

// Generic sanctuary image used as the hero backdrop for cows whose own
// photos haven't been captured yet (see cow.isPlaceholder in data/index.js).
const FALLBACK_HERO_IMAGE = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=90';

function OtherCowCard({ cow }) {
  return (
    <Link to={`/meet-the-cows/${cow.id}`} className="group block">
      <div
        className="aspect-[4/3] rounded-xl overflow-hidden relative mb-3"
        style={{ background: `linear-gradient(145deg, ${cow.palette.bg} 0%, ${cow.palette.bgEnd} 100%)` }}
      >
        {!cow.isPlaceholder && (
          <img
            src={cow.image}
            alt={cow.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <h3 className="font-serif text-lg text-white leading-tight">{cow.name}</h3>
        </div>
      </div>
      <span className="text-xs font-semibold flex items-center gap-1" style={{ color: cow.palette.accent }}>
        Her story <ArrowRight size={11} />
      </span>
    </Link>
  );
}

export default function CowProfile() {
  const { id } = useParams();
  const cow = COWS.find((c) => c.id === id);

  if (!cow) return <Navigate to="/meet-the-cows" replace />;

  const p = cow.palette;
  const heroImage = cow.isPlaceholder ? FALLBACK_HERO_IMAGE : cow.image;
  const others = COWS.filter((c) => c.id !== id).slice(0, 4);
  const subtitle = cow.isPlaceholder ? 'Details coming soon' : `${cow.age} · Rescued ${cow.rescued}`;

  return (
    <div className="bg-cream">
      <PageHero
        label={cow.tag}
        title={cow.name}
        subtitle={subtitle}
        image={heroImage}
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Link to="/meet-the-cows" className="inline-flex items-center gap-1.5 text-forest/55 text-xs font-semibold uppercase tracking-wider mb-8 hover:text-forest transition-colors">
              <ArrowLeft size={12} /> All Residents
            </Link>

            {cow.isPlaceholder && (
              <div className="block w-fit bg-saffron/12 text-saffron text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Full story & photos coming soon
              </div>
            )}

            <p className="text-brown/75 text-lg leading-relaxed mb-10">{cow.fullStory}</p>

            <div className="flex items-center gap-4 flex-wrap pt-8 border-t border-forest/10">
              <Link
                to="/support"
                style={{ backgroundColor: p.accent }}
                className="inline-flex items-center gap-2 text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <Heart size={13} fill="white" /> Ways to Support {cow.name}
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-7 py-3.5 rounded-full hover:bg-forest hover:text-white transition-all"
              >
                Meet {cow.name} in Person
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Other residents ── */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl text-forest-dark mb-8">
              Meet more of the <em className="italic text-forest">family</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((c, i) => (
              <FadeIn key={c.id} delay={i * 0.06}>
                <OtherCowCard cow={c} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
