import { motion } from 'framer-motion';

export default function PageHero({ label, title, subtitle, image, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <section className="relative h-[62vh] min-h-[420px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-forest-dark">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/35 to-forest-dark/30" />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full ${isCenter ? 'text-center' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && (
            <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
              <div className="w-8 h-px bg-saffron flex-shrink-0" />
              <span className="text-saffron text-[10px] tracking-[0.3em] font-semibold uppercase">
                {label}
              </span>
              {isCenter && <div className="w-8 h-px bg-saffron flex-shrink-0" />}
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-3 max-w-3xl">
            {title}
          </h1>

          {subtitle && (
            <p className={`text-white/60 text-base leading-relaxed ${isCenter ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom breadcrumb strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-cream/95 backdrop-blur-sm border-t border-forest/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2.5 flex items-center gap-2 text-xs text-forest/40">
          <a href="/" className="hover:text-forest transition-colors">Home</a>
          <span>/</span>
          <span className="text-forest/65">{typeof title === 'string' ? title : label}</span>
        </div>
      </div>
    </section>
  );
}
