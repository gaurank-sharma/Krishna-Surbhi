import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const GALLERY = [
  {
    title: 'Sanctuary Life',
    caption: 'Mornings, meadows, and the quiet rhythm of care.',
    image: 'https://media.istockphoto.com/id/937024792/photo/cow-on-green-field.jpg?s=612x612&w=0&k=20&c=CNdqxhUlDf5SOZOzMkUuJ_OTPSA1rUg_Q8FT5N5S2nw=',
    span: 'lg:row-span-2',
  },
  {
    title: 'Animal Stories',
    caption: 'Rescue, healing, and the journeys of our residents.',
    image: 'https://t3.ftcdn.net/jpg/06/09/01/64/360_F_609016495_8Ch0EJmvz4p7OzXWyVibrOL2LaQiDu2U.jpg',
    span: '',
  },
  {
    title: 'Community Events',
    caption: 'Gatherings, volunteers, and shared celebration.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
    span: '',
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-forest" />
              <span className="text-forest text-[10px] tracking-[0.3em] font-semibold uppercase">Gallery</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-dark leading-tight">
              Glimpses of the <em className="italic text-forest">sanctuary</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link to="/community"
              className="inline-flex items-center gap-2 border border-forest/25 text-forest text-[11px] tracking-wider font-semibold uppercase px-6 py-3 rounded-full hover:bg-forest hover:text-white transition-all flex-shrink-0">
              Explore Gallery <ArrowUpRight size={14} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:auto-rows-[260px]">
          {GALLERY.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1} className={item.span}>
              <Link
                to="/community"
                className={`relative block w-full h-full rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 ${item.span ? 'min-h-[300px] lg:min-h-0' : 'min-h-[260px]'}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-white drop-shadow-sm">{item.title}</h3>
                    <span className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-saffron group-hover:border-saffron transition-all">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mt-1.5 max-w-xs">{item.caption}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
