import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight } from 'lucide-react';

const EXPERIENCE_CARDS = [
  {
    title: 'Cow Hugging Therapy',
    desc: 'Sit, breathe, and gently embrace our calmest cows. A documented way to lower stress and restore deep calm.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80',
    cta: 'Book Now',
    to: '/visit',
  },
  {
    title: 'Meditation & Spiritual Workshops',
    desc: 'Greet the sunrise among the herd with guided meditation, Vedic ritual, and spiritual workshops.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=700&q=80',
    cta: 'Book Now',
    to: '/visit',
  },
  {
    title: 'Tree Plantation Activities',
    desc: 'Plant native trees that shade our herds and restore the land — a living mark of your visit for decades.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80',
    cta: 'Join In',
    to: '/visit',
  },
  {
    title: 'Animal Welfare & Sanctuary Life',
    desc: 'Walk among 500+ rescued cows, learn their stories, and witness the daily rhythm of lifelong care.',
    image: 'https://media.istockphoto.com/id/937024792/photo/cow-on-green-field.jpg?s=612x612&w=0&k=20&c=CNdqxhUlDf5SOZOzMkUuJ_OTPSA1rUg_Q8FT5N5S2nw=',
    cta: 'Meet the Cows',
    to: '/meet-the-cows',
  },
  {
    title: 'Visit The Sanctuary',
    desc: 'Spend a day in stillness and beauty. Tours, family days, and quiet mornings open to all who seek peace.',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80',
    cta: 'Plan a Visit',
    to: '/visit',
  },
];

export default function VisitExperience() {
  return (
    <section id="visit" className="pt-14 md:pt-16 pb-24 md:pb-32 scroll-mt-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Experience Krishna Surbhi</span>
              <div className="w-8 h-px bg-forest" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              Come as a visitor.<br />
              <em className="italic text-forest">Leave as a believer.</em>
            </h2>
          </div>
        </FadeIn>

        {/* Card grid — image · title · description · CTA */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {EXPERIENCE_CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={(i % 3) * 0.08}>
              <Link to={card.to} className="group block">
                <div className="overflow-hidden rounded-xl mb-5 aspect-[4/3] bg-forest-dark/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-2xl text-forest-dark text-center mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-brown/65 text-sm leading-relaxed mb-4">
                  {card.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-saffron text-[11px] font-bold tracking-wider uppercase">
                  {card.cta}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          ))}

          {/* Community prompt fills the 6th cell */}
          <FadeIn delay={0.16}>
            <div className="h-full min-h-[260px] rounded-xl bg-forest-dark flex flex-col items-center justify-center text-center p-8">
              <h3 className="font-serif text-2xl text-white mb-3 leading-snug">Come get involved</h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-xs">
                Tree plantation drives, cottages under construction, volunteers who show up again and
                again — see how the sanctuary is really built.
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 bg-saffron text-white text-[11px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-saffron/85 active:scale-95 transition-all"
              >
                See How to Help <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
