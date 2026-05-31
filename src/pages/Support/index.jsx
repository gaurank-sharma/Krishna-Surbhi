import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { DONATE_TIERS } from '../../data';
import { useModal } from '../../context/ModalContext';
import { Check, ArrowRight, Heart, Leaf, Camera, Users, BookOpen, Stethoscope } from 'lucide-react';

const VOLUNTEER_ROLES = [
  { Icon: Heart, title: 'Animal Care Volunteer', desc: 'Feed, groom, and spend time with our residents. The most direct form of service.', commitment: 'Weekends or full weeks' },
  { Icon: Leaf, title: 'Farm & Garden', desc: 'Grow organic feed, maintain the sanctuary grounds, and support sustainable practices.', commitment: '2-day minimum' },
  { Icon: Camera, title: 'Creative & Media', desc: 'Help document stories, create content, and amplify our mission to the world.', commitment: 'Remote or on-site' },
  { Icon: Users, title: 'Healing Programme Support', desc: 'Assist our certified facilitators during cow therapy and meditation sessions.', commitment: 'Certification required' },
  { Icon: BookOpen, title: 'Education & Outreach', desc: 'Teach school children, lead awareness workshops, and build community engagement.', commitment: 'Flexible' },
  { Icon: Stethoscope, title: 'Veterinary Volunteers', desc: 'Support our vet team in routine check-ups, medication, and wound care.', commitment: 'Degree required' },
];

const IMPACT_BREAKDOWN = [
  { amount: '₹500', desc: 'Feeds one cow for a full month' },
  { amount: '₹1,500', desc: 'Provides veterinary care for one cow' },
  { amount: '₹5,000', desc: 'Supports one rescue operation' },
  { amount: '₹10,000', desc: 'Funds a week of cow therapy sessions' },
  { amount: '₹25,000', desc: 'Sponsors a cow\'s annual care' },
  { amount: '₹1,00,000', desc: 'Builds one section of a new sanctuary shelter' },
];

export default function Support() {
  const { openDonate } = useModal();

  return (
    <div className="bg-cream">
      <PageHero
        label="Support Our Mission"
        title="Every Rupee Rescues"
        subtitle="100% of your donation goes directly to the rescue, care, and healing of our sacred cows."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=90"
      />

      {/* ── Donation tiers ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Donate" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2 leading-tight">
                Choose how you'd like <br/>
                <em className="italic text-forest">to make a difference</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {DONATE_TIERS.map((tier, i) => (
              <FadeIn key={tier.id} delay={i * 0.1}>
                <div className={`rounded-3xl p-8 flex flex-col h-full ${tier.highlighted ? 'bg-forest text-white shadow-2xl shadow-forest/20 md:scale-105' : 'bg-white shadow-sm'}`}>
                  {tier.highlighted && (
                    <div className="bg-saffron text-white text-[9px] tracking-[0.25em] font-bold uppercase px-3 py-1 rounded-full w-fit mb-4">Most Popular</div>
                  )}
                  <div className="text-4xl mb-4">{tier.icon}</div>
                  <h3 className={`font-serif text-2xl mb-1 ${tier.highlighted ? 'text-white' : 'text-forest-dark'}`}>{tier.title}</h3>
                  <div className={`font-semibold text-xl mb-5 ${tier.highlighted ? 'text-saffron' : 'text-forest'}`}>{tier.amount}</div>
                  <p className={`text-sm leading-relaxed mb-6 flex-grow ${tier.highlighted ? 'text-white/70' : 'text-brown/65'}`}>{tier.description}</p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={13} className={`mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-saffron' : 'text-forest'}`} />
                        <span className={`text-xs leading-relaxed ${tier.highlighted ? 'text-white/65' : 'text-brown/60'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openDonate(tier)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-[11px] tracking-wider uppercase transition-all active:scale-95 ${
                      tier.highlighted
                        ? 'bg-saffron text-white hover:bg-saffron/85 shadow-lg'
                        : 'bg-forest text-white hover:bg-forest-dark'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Trust bar */}
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                '80G Tax Exemption',
                'FCRA Registered NGO',
                '100% Secure Donations',
                'Transparent Impact Reports',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-forest/60 text-sm">
                  <Check size={13} className="text-forest flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Where your money goes ── */}
      <section className="py-16 md:py-24 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="Transparency" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                What your <em className="italic text-forest">donation does</em>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {IMPACT_BREAKDOWN.map((item, i) => (
              <FadeIn key={item.amount} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-forest/5">
                  <div className="bg-saffron/10 rounded-xl px-3 py-2 flex-shrink-0">
                    <span className="font-serif text-saffron font-bold text-lg">{item.amount}</span>
                  </div>
                  <p className="text-brown/65 text-sm leading-relaxed pt-1.5">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Volunteer ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="Volunteer" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                Give your <em className="italic text-forest">time & heart</em>
              </h2>
              <p className="text-brown/55 mt-3 max-w-lg mx-auto">
                Volunteers are the lifeblood of Krishna Surbhi. We have 350+ active contributors —
                and always need more hearts.
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VOLUNTEER_ROLES.map((role, i) => (
              <FadeIn key={role.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-forest/6 hover:shadow-md transition-all h-full">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 flex items-center justify-center mb-4">
                    <role.Icon size={18} className="text-forest" />
                  </div>
                  <h3 className="font-serif text-lg text-forest-dark mb-2">{role.title}</h3>
                  <p className="text-brown/60 text-sm leading-relaxed mb-4">{role.desc}</p>
                  <div className="flex items-center gap-1.5 text-forest/50 text-[10px] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron flex-shrink-0" />
                    {role.commitment}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="text-center mt-10">
              <button
                onClick={() => openDonate({ title: 'Volunteer Application' })}
                className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest-dark transition-all"
              >
                Apply to Volunteer <ArrowRight size={14} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Corporate ── */}
      <section className="py-16 px-6 md:px-12 bg-forest-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-saffron" />
                <span className="text-saffron text-[10px] tracking-[0.28em] font-semibold uppercase">Corporate</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight">
                Partner with us for <em className="italic text-saffron">meaningful impact</em>
              </h2>
              <p className="text-white/55 leading-relaxed mb-6">
                Corporate partnerships with Krishna Surbhi offer genuine CSR impact, team-building
                experiences, and a brand story that resonates deeply with conscious consumers.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {['Named cow sponsorships', 'Corporate mindfulness days', 'Team volunteering packages', 'Co-branded impact campaigns', 'Annual impact reporting'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="text-saffron">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:corporate@krishnasurbhi.org" className="inline-flex items-center gap-2 bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-saffron/85 transition-all">
                Partner With Us <ArrowRight size={13} />
              </a>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=85"
                  alt="Corporate team at sanctuary"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
