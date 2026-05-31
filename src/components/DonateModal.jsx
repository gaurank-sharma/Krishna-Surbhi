import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function DonateModal() {
  const { donateModal, closeDonate } = useModal();
  const { open, tier } = donateModal;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(27,67,50,0.75)' }}
          onClick={closeDonate}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cream rounded-3xl p-8 md:p-12 max-w-lg w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDonate}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-forest/10 text-forest hover:bg-forest/20 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-forest/8 flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3 className="font-serif text-3xl text-forest-dark mb-1 leading-tight">
              {tier?.title || 'Support Krishna Surbhi'}
            </h3>
            <p className="text-brown/60 text-sm mb-8 leading-relaxed">
              Your generosity directly feeds, heals, and protects our sacred cows.
            </p>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                closeDonate();
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="border border-forest/20 bg-white rounded-xl px-4 py-3.5 text-sm text-forest-dark placeholder-brown/40 focus:outline-none focus:border-forest transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="border border-forest/20 bg-white rounded-xl px-4 py-3.5 text-sm text-forest-dark placeholder-brown/40 focus:outline-none focus:border-forest transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                className="border border-forest/20 bg-white rounded-xl px-4 py-3.5 text-sm text-forest-dark placeholder-brown/40 focus:outline-none focus:border-forest transition-colors"
              />

              <div className="grid grid-cols-3 gap-2.5 mt-1">
                {['₹500', '₹1,000', '₹2,500'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className="border border-forest/25 text-forest text-sm py-3 rounded-xl hover:bg-forest hover:text-white hover:border-forest transition-all font-medium"
                  >
                    {amt}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Or enter custom amount (₹)"
                className="border border-forest/20 bg-white rounded-xl px-4 py-3.5 text-sm text-forest-dark placeholder-brown/40 focus:outline-none focus:border-forest transition-colors"
              />

              <button
                type="submit"
                className="mt-2 bg-forest text-white font-semibold tracking-wider uppercase text-sm py-4 rounded-xl hover:bg-forest-dark transition-colors"
              >
                Donate with Love
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
