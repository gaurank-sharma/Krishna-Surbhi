import { useParams, Navigate, Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import { VOLUNTEER_SPOTLIGHT } from '../../data';
import { ArrowLeft, Heart } from 'lucide-react';

// Generic sanctuary image — real photo of the volunteer pending the founder's on-site visit.
const FALLBACK_HERO_IMAGE = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=90';

export default function VolunteerProfile() {
  const { id } = useParams();
  const volunteer = VOLUNTEER_SPOTLIGHT.id === id ? VOLUNTEER_SPOTLIGHT : null;

  if (!volunteer) return <Navigate to="/community" replace />;

  return (
    <div className="bg-cream">
      <PageHero
        label="Volunteer Spotlight"
        title={volunteer.name}
        subtitle={volunteer.descriptor}
        image={FALLBACK_HERO_IMAGE}
      />

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Link to="/community" className="inline-flex items-center gap-1.5 text-forest/55 text-xs font-semibold uppercase tracking-wider mb-8 hover:text-forest transition-colors">
              <ArrowLeft size={12} /> Community
            </Link>

            {volunteer.isPlaceholder && (
              <div className="block w-fit bg-saffron/12 text-saffron text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
                Full interview & photos coming soon
              </div>
            )}

            <blockquote className="font-serif text-2xl md:text-3xl text-forest-dark leading-[1.4] italic mb-8 border-l-4 border-saffron pl-6">
              "{volunteer.quote}"
            </blockquote>

            <p className="text-brown/75 text-lg leading-relaxed mb-10">{volunteer.story}</p>

            <div className="flex items-center gap-4 flex-wrap pt-8 border-t border-forest/10">
              <Link
                to="/support"
                className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-forest-dark transition-colors"
              >
                <Heart size={13} fill="white" /> Join Our Volunteers
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-7 py-3.5 rounded-full hover:bg-forest hover:text-white transition-all"
              >
                Plan Your Visit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
