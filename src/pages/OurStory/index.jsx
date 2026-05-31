import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { TIMELINE } from '../../data';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const TEAM = [
  {
    name: 'Meena Devi',
    role: 'Founder & Director',
    bio: 'Former school teacher who gave up her career to rescue cows after a chance encounter on a highway. She has not looked back since.',
  },
  {
    name: 'Dr. Arvind Sharma',
    role: 'Chief Veterinarian',
    bio: '22 years of large-animal veterinary medicine. Joined Krishna Surbhi after retiring from a prestigious practice to "do work that truly matters."',
  },
  {
    name: 'Sunita Kapoor',
    role: 'Head of Healing Programmes',
    bio: 'Certified trauma therapist and mindfulness facilitator. Developed our Cow Therapy framework after her own healing experience at the sanctuary.',
  },
];

export default function OurStory() {
  const { openDonate } = useModal();

  return (
    <div className="bg-cream w-full h-full object-contain">
      <PageHero
        label="Krishna Surbhi"
        title="Our Story"
        subtitle="One highway. One frightened calf. One woman who stopped. Everything else followed."
        image="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=90"
      />

      {/* ── Founding Story ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://static.boredpanda.com/blog/wp-content/uploads/2026/05/Screenshot-2026-05-29-at-09.53.44.jpg"
                  alt="Founder with cow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-saffron text-white rounded-2xl px-5 py-4 shadow-xl hidden sm:block">
                <div className="font-serif text-3xl font-light leading-none">2018</div>
                <div className="text-white/80 text-[10px] mt-1 leading-snug">Where it<br/>all began</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <SectionLabel text="The Beginning" />
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight mb-6">
              A highway, a calf, <br/>
              <em className="italic text-forest">and a life changed forever</em>
            </h2>
            <p className="text-brown/75 leading-relaxed mb-5">
              It was January 2018 and Meena Devi was driving home through the outskirts of Rohtak when
              headlights caught something in the rain. A calf — no more than three months old — lay
              injured in the middle of the road, too weak to move.
            </p>
            <p className="text-brown/75 leading-relaxed mb-5">
              She stopped her car. She carried the calf to safety. She stayed with her through the night,
              calling veterinary helplines until someone answered. By morning, Meena had not only saved
              one life — she had found her purpose.
            </p>
            <p className="text-brown/75 leading-relaxed mb-8">
              "I remember thinking: if this one calf needed me so much, how many others were out there?
              I couldn't unsee it. I couldn't unfeel it. So I just kept going."
            </p>
            <blockquote className="border-l-4 border-saffron pl-5 py-1 mb-8">
              <p className="font-serif text-xl italic text-forest-dark leading-relaxed">
                "I didn't set out to build a sanctuary. I set out to save one life. And then another.
                And another. The sanctuary built itself."
              </p>
              <cite className="text-forest/50 text-sm mt-2 block not-italic">— Meena Devi, Founder</cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 md:py-24 px-6 bg-forest-dark">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-saffron" />
                <span className="text-saffron text-[10.5px] tracking-[0.3em] font-semibold uppercase">Mission & Vision</span>
                <div className="w-8 h-px bg-saffron" />
              </div>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🎯',
                heading: 'Our Mission',
                text: 'To rescue, rehabilitate, and provide lifelong sanctuary to abused and abandoned cows in India — and to share the profound healing power of the human-bovine bond with all who seek it.',
              },
              {
                icon: '🌟',
                heading: 'Our Vision',
                text: 'A world where every cow is treated with sacred reverence, and where the ancient wisdom of the human-animal connection is accessible to all who need healing, belonging, and peace.',
              },
            ].map((item) => (
              <FadeIn key={item.heading} delay={0.1}>
                <div className="bg-white/8 border border-white/12 rounded-2xl p-8 h-full">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <h3 className="font-serif text-2xl text-white mb-4">{item.heading}</h3>
                  <p className="text-white/55 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-cream">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="Our Journey" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2">
                Seven years of <em className="italic text-forest">sacred work</em>
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-forest/15 md:-translate-x-px" />

            {TIMELINE.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <FadeIn key={item.year} delay={i * 0.08}>
                  <div className={`relative flex gap-8 mb-10 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>

                    {/* Desktop: spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-saffron border-2 border-cream -translate-x-1.5 md:-translate-x-1.5 z-10" />

                    {/* Card */}
                    <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isRight ? 'md:pl-10' : 'md:pr-10'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-forest/6 hover:shadow-md transition-shadow">
                        <span className="inline-block bg-saffron text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl text-forest-dark mb-2">{item.title}</h3>
                        <p className="text-brown/65 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 md:py-28 px-6 md:px-12" style={{ backgroundColor: '#edf7ef' }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel text="The People" centered />
              <h2 className="font-serif text-4xl md:text-5xl text-forest-dark mt-2">
                The hearts behind <em className="italic text-forest">the sanctuary</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="text-center group">
                  {/* Generic user silhouette avatar — no real photos */}
                  <div className="w-28 h-28 rounded-full mx-auto mb-5 shadow-md ring-4 ring-mint group-hover:ring-saffron/40 transition-all overflow-hidden bg-[#E8EEE8] flex items-center justify-center">
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      {/* Background */}
                      <rect width="120" height="120" fill="#D4DED4" />
                      {/* Head */}
                      <circle cx="60" cy="42" r="22" fill="#9BAEAB" />
                      {/* Body / shoulders */}
                      <ellipse cx="60" cy="105" rx="38" ry="28" fill="#9BAEAB" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-forest-dark mb-1">{person.name}</h3>
                  <div className="text-saffron text-xs tracking-widest uppercase font-semibold mb-3">{person.role}</div>
                  <p className="text-brown/60 text-sm leading-relaxed max-w-xs mx-auto">{person.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85"
            alt="Sanctuary at golden hour"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
              Be part of <em className="italic text-saffron">this story</em>
            </h2>
            <p className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Whether you visit, volunteer, donate, or simply share our mission — you become part of
              Krishna Surbhi's living story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/visit"
                className="inline-flex items-center justify-center gap-2 bg-white text-forest-dark font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream transition-all"
              >
                Visit Us <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => openDonate()}
                className="inline-flex items-center justify-center gap-2 bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-saffron/85 transition-all"
              >
                🙏 Donate Now
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
