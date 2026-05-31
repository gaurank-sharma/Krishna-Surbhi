import { useState } from 'react';
import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { BLOG_POSTS } from '../../data';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'RESCUE STORY', 'RESEARCH', 'SANCTUARY NEWS', 'SPIRITUALITY', 'COMMUNITY'];

const EVENTS = [
  { title: 'Gau Puja & Community Gathering', date: 'June 15, 2026', time: '7:00 AM – 12:00 PM', desc: 'An annual celebration of our cows with traditional rituals, community lunch, and open sanctuary access.' },
  { title: 'Cow Therapy Certification Workshop', date: 'July 5–6, 2026', time: '9:00 AM – 5:00 PM (2 days)', desc: 'A 2-day intensive for therapists, wellness practitioners, and educators who wish to formally integrate cow-assisted therapy into their practice.' },
  { title: 'Volunteer Orientation Weekend', date: 'First Saturday monthly', time: '8:00 AM – 4:00 PM', desc: 'Our monthly orientation for new volunteers. Join the family and learn how to contribute.' },
];

export default function Community() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-cream">
      <PageHero
        label="Community"
        title="Stories from the Sanctuary"
        subtitle="Rescue stories, research, sanctuary news, and the voices of our growing community."
        image="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=90"
      />

      {/* ── Blog section ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <SectionLabel text="Stories & Updates" />
                <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                  From the <em className="italic text-forest">sanctuary</em>
                </h2>
              </div>
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] tracking-widest font-semibold uppercase px-3 py-1.5 rounded-full transition-all ${
                      activeCategory === cat
                        ? 'bg-forest text-white'
                        : 'bg-forest/8 text-forest/60 hover:bg-forest/15'
                    }`}
                  >
                    {cat === 'All' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.07}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9.5px] tracking-[0.28em] text-saffron font-bold uppercase">{post.category}</span>
                      <span className="text-brown/30 text-xs">·</span>
                      <span className="text-brown/45 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-[1.1rem] text-forest-dark leading-snug mb-3 group-hover:text-forest transition-colors flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-brown/55 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-forest/8">
                      <span className="text-forest/40 text-xs">{post.date}</span>
                      <button className="text-forest text-xs font-semibold flex items-center gap-1 group/link">
                        Read More <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-brown/40">
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-beige/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel text="Upcoming Events" centered />
              <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mt-2">
                Come be <em className="italic text-forest">with us</em>
              </h2>
            </div>
          </FadeIn>
          <div className="flex flex-col gap-5">
            {EVENTS.map((ev, i) => (
              <FadeIn key={ev.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md transition-shadow">
                  <div className="bg-saffron/10 rounded-xl px-5 py-4 text-center flex-shrink-0 min-w-[90px]">
                    <div className="text-saffron font-serif text-2xl font-bold leading-none">
                      {ev.date.split(',')[0].split(' ')[1] || '—'}
                    </div>
                    <div className="text-saffron/70 text-[10px] tracking-wider uppercase mt-0.5">
                      {ev.date.split(' ')[0]}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif text-xl text-forest-dark mb-1">{ev.title}</h3>
                    <div className="text-forest/50 text-xs mb-2">{ev.time}</div>
                    <p className="text-brown/60 text-sm leading-relaxed">{ev.desc}</p>
                  </div>
                  <button className="text-forest border border-forest/25 text-[10px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-forest hover:text-white transition-all flex-shrink-0">
                    Register
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest-dark">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=85" alt="Sanctuary" className="w-full h-full object-cover opacity-35" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto text-center px-6">
          <FadeIn>
            <div className="text-5xl mb-5">🐄</div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Join the <em className="italic text-saffron">community</em>
            </h2>
            <p className="text-white/55 mb-8 leading-relaxed">
              Monthly stories, sanctuary updates, events, and ways to help — delivered with love.
            </p>
            {!submitted ? (
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/25 text-white placeholder-white/40 px-5 py-3.5 rounded-full focus:outline-none focus:border-white/50 text-sm"
                />
                <button type="submit" className="bg-saffron text-white font-semibold text-[11px] tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-saffron/85 transition-all whitespace-nowrap">
                  Join Us
                </button>
              </form>
            ) : (
              <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6">
                <div className="text-3xl mb-2">🙏</div>
                <div className="text-white font-semibold">Thank you! Welcome to the family.</div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
