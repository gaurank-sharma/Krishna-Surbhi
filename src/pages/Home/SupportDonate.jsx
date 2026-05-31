import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { useModal } from '../../context/ModalContext';
import { Check, ArrowRight, Heart, Leaf, Gift } from 'lucide-react';
import { DONATE_TIERS } from '../../data';

const TIER_ICONS = { adopt: Heart, sponsor: Leaf, onetime: Gift };

export default function SupportDonate() {
  const { openDonate } = useModal();

  return (
    <section id="support" className="py-24 md:py-32 scroll-mt-20" style={{ backgroundColor: '#F5F8F5' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Support the Mission</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              Every rupee<br />
              <em className="italic text-forest">rescues a life</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-brown/55 leading-relaxed max-w-sm">
              100% of your donation goes to rescue operations, veterinary care, daily feeding, and the wellbeing of our 500+ residents.
            </p>
            <div className="flex gap-5 mt-5 flex-wrap">
              {['80G Tax Exempt', 'FCRA Registered', 'Secure Payments'].map((t) => (
                <span key={t} className="text-forest/50 text-xs flex items-center gap-1.5">
                  <Check size={11} className="text-forest" /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {DONATE_TIERS.map((tier, i) => {
            const Icon = TIER_ICONS[tier.id] || Gift;
            return (
              <FadeIn key={tier.id} delay={i * 0.1}>
                <div className={`rounded-3xl p-8 flex flex-col h-full relative overflow-hidden ${
                  tier.highlighted ? 'text-white shadow-2xl' : 'bg-white shadow-sm border border-forest/8'
                }`}
                  style={tier.highlighted ? { background: 'linear-gradient(145deg, #2D6A4F 0%, #1B4332 100%)' } : {}}>

                  {tier.highlighted && (
                    <div className="absolute top-5 right-5 bg-saffron text-white text-[8.5px] tracking-[0.22em] font-bold uppercase px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Icon box — no emoji */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    tier.highlighted ? 'bg-white/12' : 'bg-forest/8'
                  }`}>
                    <Icon size={22} className={tier.highlighted ? 'text-saffron' : 'text-forest'} />
                  </div>

                  <h3 className={`font-serif text-2xl mb-1 ${tier.highlighted ? 'text-white' : 'text-forest-dark'}`}>
                    {tier.title}
                  </h3>
                  <div className={`font-semibold text-xl mb-5 ${tier.highlighted ? 'text-saffron' : 'text-forest'}`}>
                    {tier.amount}
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 flex-grow ${tier.highlighted ? 'text-white/65' : 'text-brown/60'}`}>
                    {tier.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={12} className={`mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-saffron' : 'text-forest'}`} />
                        <span className={`text-xs leading-relaxed ${tier.highlighted ? 'text-white/60' : 'text-brown/55'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => openDonate(tier)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-[11px] tracking-wider uppercase transition-all active:scale-[0.98] ${
                      tier.highlighted ? 'bg-saffron text-white hover:bg-saffron/85' : 'bg-forest text-white hover:bg-forest-dark'
                    }`}>
                    {tier.cta}
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 text-center">
            <Link to="/support" className="inline-flex items-center gap-2 text-forest/55 text-sm hover:text-forest transition-colors">
              See all ways to help — volunteer, corporate partnerships, events
              <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
