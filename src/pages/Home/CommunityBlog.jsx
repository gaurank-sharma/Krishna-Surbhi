import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { BLOG_POSTS } from '../../data';
import { ArrowRight } from 'lucide-react';

const CAT_COLORS = {
  'RESCUE STORY': { bg: '#FDE8C0', text: '#8B4513' },
  'RESEARCH': { bg: '#C8DDE8', text: '#1A4D6B' },
  'SANCTUARY NEWS': { bg: '#D0EDD5', text: '#1B4332' },
  'SPIRITUALITY': { bg: '#E0D0F0', text: '#4A2878' },
  'COMMUNITY': { bg: '#E8D5C0', text: '#6B3E20' },
};

export default function CommunityBlog() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <section id="community" className="py-24 md:py-32 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Community & Stories</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              From the <em className="italic text-forest">sanctuary</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              to="/community"
              className="hidden md:inline-flex items-center gap-2 text-forest/55 text-sm hover:text-forest transition-colors"
            >
              All stories <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>

        {/* Editorial layout — featured large + 2 small */}
        <div className="grid md:grid-cols-5 gap-5">

          {/* Featured article */}
          <FadeIn className="md:col-span-3">
            <Link to="/community">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-forest/8 to-mint/50 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-20 select-none">🐄</span>
                  </div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      {CAT_COLORS[featured.category] && (
                        <span
                          className="text-[9px] tracking-[0.28em] font-bold uppercase px-3 py-1.5 rounded-full"
                          style={{ backgroundColor: CAT_COLORS[featured.category].bg, color: CAT_COLORS[featured.category].text }}
                        >
                          {featured.category}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-7 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl text-forest-dark leading-snug mb-3 group-hover:text-forest transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-brown/60 text-sm leading-relaxed mb-5 flex-grow">{featured.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-forest/40 pt-4 border-t border-forest/8">
                    <span>{featured.date}</span>
                    <span className="text-forest font-semibold flex items-center gap-1">
                      Read <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </FadeIn>

          {/* Secondary articles */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {rest.slice(0, 2).map((post, i) => {
              const catColor = CAT_COLORS[post.category] || { bg: '#D0EDD5', text: '#1B4332' };
              return (
                <FadeIn key={post.slug} delay={0.1 + i * 0.1}>
                  <Link to="/community">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                      <div className="p-6 flex flex-col flex-grow">
                        <span
                          className="text-[9px] tracking-[0.28em] font-bold uppercase px-3 py-1.5 rounded-full w-fit mb-3"
                          style={{ backgroundColor: catColor.bg, color: catColor.text }}
                        >
                          {post.category}
                        </span>
                        <h3 className="font-serif text-lg text-forest-dark leading-snug mb-2 group-hover:text-forest transition-colors flex-grow">
                          {post.title}
                        </h3>
                        <p className="text-brown/55 text-sm leading-relaxed line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-forest/35 pt-3 border-t border-forest/8">
                          <span>{post.date} · {post.readTime}</span>
                          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform text-forest/50" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Community join strip */}
        <FadeIn delay={0.25}>
          <div className="mt-10 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ background: 'linear-gradient(135deg, #EEF8F0 0%, #D8F3DC 100%)' }}
          >
            <div>
              <div className="font-serif text-xl text-forest-dark mb-0.5">350+ active volunteers & counting</div>
              <div className="text-forest/55 text-sm">Every weekend, people come to help, stay, and belong.</div>
            </div>
            <div className="flex gap-3">
              <Link to="/support" className="bg-forest text-white text-[11px] font-bold tracking-wider uppercase px-6 py-3 rounded-full hover:bg-forest-dark transition-colors">
                Volunteer
              </Link>
              <Link to="/community" className="border border-forest/25 text-forest text-[11px] font-bold tracking-wider uppercase px-6 py-3 rounded-full hover:bg-forest/5 transition-colors">
                Our Blog
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
