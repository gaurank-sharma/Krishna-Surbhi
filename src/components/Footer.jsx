import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const FOOTER_LINKS = {
  Explore: [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Meet the Cows', href: '/meet-the-cows' },
    { label: 'Visit & Experience', href: '/visit' },
    { label: 'Community Blog', href: '/community' },
  ],
  Support: [
    { label: 'Adopt a Cow', href: '/support' },
    { label: 'Sponsor Feed', href: '/support' },
    { label: 'Volunteer', href: '/support' },
    { label: 'Corporate Partnerships', href: '/support' },
  ],
};

export default function Footer() {
  const { openDonate } = useModal();

  return (
    <footer className="bg-forest-dark pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/15">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-white font-bold text-sm">KS</span>
              </div>
              <div>
                <div className="font-serif text-lg text-white leading-tight">Krishna Surbhi</div>
                <div className="text-white/60 text-[8px] tracking-[0.24em] uppercase">The Cow-Love Sanctuary</div>
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              A living sanctuary of rescued cows, sacred healing, and open-hearted community in Haryana, India.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button key={label} aria-label={label}
                  className="w-9 h-9 bg-white/12 rounded-full flex items-center justify-center text-white/70 hover:bg-saffron hover:text-white transition-all">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-saffron text-[10px] tracking-[0.28em] font-bold uppercase mb-5">{heading}</h5>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link to={href} className="text-white/75 text-sm hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h5 className="text-saffron text-[10px] tracking-[0.28em] font-bold uppercase mb-5">Contact</h5>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2.5 text-white/75 text-sm">
                <MapPin size={14} className="text-saffron mt-0.5 flex-shrink-0" />
                <span>Sainik Farm, Delhi 110062, India </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-saffron flex-shrink-0" />
                <a href="tel:+919800000000" className="text-white/75 text-sm hover:text-white transition-colors">+91 98000 00000</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-saffron flex-shrink-0" />
                <a href="mailto:love@krishnasurbhi.org" className="text-white/75 text-sm hover:text-white transition-colors">love@krishnasurbhi.org</a>
              </li>
            </ul>
            <button onClick={() => openDonate()}
              className="mt-6 w-full bg-saffron text-white text-xs font-bold tracking-wider uppercase py-3 rounded-xl hover:bg-saffron/85 transition-colors">
              Donate Now
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2026 Krishna Surbhi — The Cow-Love Sanctuary. All rights reserved.</p>
          <p>Presented with care by <span className="text-saffron font-medium">BeeBark</span></p>
        </div>
      </div>
    </footer>
  );
}
