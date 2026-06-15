import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">

        {/* Founder portrait — generic silhouette, no random photo */}
        <FadeIn direction="left" className="md:col-span-4">
          <div className="relative max-w-[260px] mx-auto md:mx-0">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl ring-8 ring-white bg-[#E8EEE8] flex items-center justify-center">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="120" height="120" fill="#D4DED4" />
                <circle cx="60" cy="42" r="22" fill="#9BAEAB" />
                <ellipse cx="60" cy="105" rx="38" ry="28" fill="#9BAEAB" />
              </svg>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-[10px] tracking-widest uppercase font-bold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
              Founder
            </div>
          </div>
        </FadeIn>

        {/* Message */}
        <FadeIn direction="right" delay={0.15} className="md:col-span-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-forest" />
            <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">A Message from Our Founder</span>
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-forest-dark leading-[1.4] italic mb-6">
            "I didn't set out to build a sanctuary. I set out to save one life. And then another.
            And another. The sanctuary built itself — and now it belongs to everyone who loves it."
          </blockquote>
          <p className="text-brown/70 leading-relaxed mb-7 max-w-xl">
            What began with a single frightened calf on a rain-soaked night has grown into a living
            home for rescued cows, a place of healing for people, and a community bound by compassion.
            This is your invitation to be part of it.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <div className="font-serif text-xl text-forest-dark">Meena Devi</div>
              <div className="text-saffron text-xs tracking-widest uppercase font-semibold">Founder &amp; Director</div>
            </div>
            <Link
              to="/our-story"
              className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-6 py-3 rounded-full hover:bg-forest hover:text-white transition-all ml-auto"
            >
              Read Our Story <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
