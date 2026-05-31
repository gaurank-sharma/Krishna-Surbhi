import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { EXPERIENCES } from '../../data';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, Clock } from 'lucide-react';

const OVERLAYS = [
  'from-[#7A3318]/88',
  'from-[#1B4332]/88',
  'from-[#16304A]/88',
];

export default function VisitExperience() {
  const { openDonate } = useModal();
  const preview = EXPERIENCES.slice(0, 3);

  return (
    <section id="visit" className="py-24 md:py-32 scroll-mt-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Visit & Experience</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              Come as a visitor.<br />
              <em className="italic text-forest">Leave as a believer.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link to="/visit"
              className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-6 py-3 rounded-full hover:bg-forest hover:text-white transition-all flex-shrink-0">
              All Experiences <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>

        {/* Cinematic cards — real images, no emoji icons */}
        <div className="grid md:grid-cols-3 gap-5">
          {preview.map((exp, i) => (
            <FadeIn key={exp.title} delay={i * 0.1}>
              <div
                className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                style={{ height: 500 }}
                onClick={() => openDonate({ title: `Book: ${exp.title}` })}
              >
                {/* Background photo */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${OVERLAYS[i]} via-black/15 to-transparent`} />

                {/* Content — no emoji */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  {/* Top label */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/12 backdrop-blur-sm text-white text-[9px] tracking-[0.28em] font-bold uppercase px-3 py-1.5 rounded-full border border-white/18">
                      {exp.tagline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white mb-2 drop-shadow-sm leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-2">
                    {exp.desc}
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-white/45 text-[10px] uppercase tracking-wider mb-1">
                        <Clock size={10} /> {exp.duration}
                      </div>
                      <div className="text-white font-semibold text-lg">{exp.price}</div>
                    </div>
                    <button className="bg-white text-forest-dark text-[10px] font-bold tracking-wider uppercase px-5 py-3 rounded-full hover:bg-cream active:scale-95 transition-all shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-8 bg-forest-dark/5 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-8 text-sm">
              <div><span className="text-forest-dark font-semibold">Hours:</span><span className="text-brown/50 ml-1.5">Tue – Sun · 7am – 6pm</span></div>
              <div><span className="text-forest-dark font-semibold">Location:</span><span className="text-brown/50 ml-1.5">Sainik Farm, New Delhi</span></div>
              <div><span className="text-forest-dark font-semibold">Book 48h ahead</span></div>
            </div>
            <a href="tel:+919800000000" className="text-forest font-semibold text-sm">+91 98000 00000</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
