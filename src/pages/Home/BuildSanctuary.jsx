import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowRight } from 'lucide-react';

const CONTRIBUTIONS = [
  {
    title: 'Design',
    roles: 'Architects · Interior & Landscape Designers',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Create',
    roles: 'Artists · Photographers · Filmmakers · Writers',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Serve',
    roles: 'Volunteers · Animal Lovers · Community',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Support',
    roles: 'Donations · Sponsorships · Resources',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BuildSanctuary() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Build Krishna Surbhi</span>
              <div className="w-8 h-px bg-forest" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight mb-4">
              A sanctuary built by <em className="italic text-forest">many hands</em>
            </h2>
            <p className="text-brown/60 leading-relaxed">
              Krishna Surbhi is not built by one person — it grows through everyone who brings their
              skills, ideas, and resources. Find the way that's yours.
            </p>
          </div>
        </FadeIn>

        {/* Image cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {CONTRIBUTIONS.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <Link to="/support" className="group block text-center">
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-forest/8 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-square rounded-xl overflow-hidden bg-forest-dark/5">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-forest-dark mt-5 mb-1.5">{c.title}</h3>
                <p className="text-brown/55 text-xs leading-relaxed px-2">{c.roles}</p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTAs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 bg-forest text-white font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest-dark transition-all"
            >
              Contribute Your Skills <ArrowRight size={14} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center justify-center gap-2 border border-forest/30 text-forest font-semibold text-[11px] tracking-wider uppercase px-8 py-4 rounded-full hover:bg-forest hover:text-white transition-all"
            >
              See Ways to Help
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
