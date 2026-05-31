import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS } from '../data';
import { useModal } from '../context/ModalContext';

function CowLogo({ light }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill={light ? 'rgba(255,255,255,0.18)' : '#1B4332'} />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontSize="14" fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="600" fill="white">KS</text>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openDonate } = useModal();
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isTransparent ? 'bg-transparent' : 'bg-cream shadow-md border-b border-forest/8'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <CowLogo light={isTransparent} />
          <div>
            <div className={`font-serif text-[1.08rem] leading-tight font-semibold transition-colors ${isTransparent ? 'text-white' : 'text-forest-dark'}`}>
              Krishna Surbhi
            </div>
            <div className={`text-[7.5px] tracking-[0.28em] uppercase transition-colors ${isTransparent ? 'text-white/55' : 'text-forest/45'}`}>
              The Cow-Love Sanctuary
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link key={label} to={href}
                className={`text-[11px] tracking-widest uppercase font-medium transition-colors relative group ${
                  isTransparent ? 'text-white/75 hover:text-white' : active ? 'text-forest-dark' : 'text-forest/60 hover:text-forest-dark'
                }`}>
                {label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-saffron transition-all duration-200 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => openDonate()}
            className="hidden md:flex items-center gap-1.5 bg-saffron text-white text-[10px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-saffron/85 active:scale-95 transition-all">
            <Heart size={11} fill="white" /> Donate
          </button>
          <button className="lg:hidden p-1.5" onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
            {menuOpen
              ? <X className={isTransparent ? 'text-white' : 'text-forest-dark'} size={22} />
              : <Menu className={isTransparent ? 'text-white' : 'text-forest-dark'} size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="lg:hidden bg-cream border-t border-forest/10 overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} to={href}
                  className={`text-sm py-3 border-b border-forest/8 transition-colors ${pathname === href ? 'text-forest font-semibold' : 'text-forest-dark/70'}`}>
                  {label}
                </Link>
              ))}
              <button onClick={() => openDonate()} className="mt-3 bg-saffron text-white text-sm font-semibold py-3.5 rounded-xl">
                Donate Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
