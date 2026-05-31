import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { Sun, Leaf, Heart, Users, Sparkles } from 'lucide-react';

const PILLARS = [
  { word: 'Sacred', desc: 'Ancient wisdom, cow reverence & spiritual roots', Icon: Sun },
  { word: 'Natural', desc: 'Eco-conscious, organic & earth-connected living', Icon: Leaf },
  { word: 'Compassionate', desc: 'Rescue-driven, welfare-focused & empathetic', Icon: Heart },
  { word: 'Community', desc: 'Volunteers, visitors, supporters & advocates', Icon: Users },
  { word: 'Healing', desc: 'Cow therapy, meditation & emotional restoration', Icon: Sparkles },
];

export default function BrandPillars() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-forest-dark">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest/25 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-saffron/8 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-saffron" />
              <span className="text-saffron text-[10px] tracking-[0.3em] font-semibold uppercase">Who We Are</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Five values.<br />
              <em className="italic text-saffron">One sanctuary.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/62 leading-relaxed max-w-sm">
              Every decision we make — from how we rescue to how we welcome visitors — is guided by these five pillars.
            </p>
          </FadeIn>
        </div>

        {/* Pillars with Lucide icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {PILLARS.map(({ word, desc, Icon }, i) => (
            <FadeIn key={word} delay={i * 0.08}>
              <div className="group bg-white/6 border border-white/8 rounded-2xl p-6 hover:bg-white/10 hover:border-white/16 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-saffron/15 flex items-center justify-center mb-5 group-hover:bg-saffron/25 transition-colors">
                  <Icon size={18} className="text-saffron" />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{word}</h3>
                <p className="text-white/65 text-xs leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 pt-10 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-serif text-xl md:text-2xl italic text-white/70 max-w-2xl leading-relaxed">
              "The website should feel Warm. Peaceful. Authentic. Emotional. Modern yet Grounded."
            </p>
            <Link to="/our-story" className="text-saffron text-sm font-semibold flex items-center gap-2 flex-shrink-0 group">
              Our full story
              <span className="w-6 h-px bg-saffron group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
