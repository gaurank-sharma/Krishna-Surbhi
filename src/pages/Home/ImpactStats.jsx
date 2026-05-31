import { motion } from 'framer-motion';
import { STATS } from '../../data';

export default function ImpactStats() {
  return (
    <section className="bg-forest-dark py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="px-8 first:pl-0 last:pr-0 text-center md:text-left"
            >
              <div
                className="font-serif font-light leading-none mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#E07B2E' }}
              >
                {stat.num}
              </div>
              <div className="text-white/65 text-[10px] tracking-[0.28em] uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
