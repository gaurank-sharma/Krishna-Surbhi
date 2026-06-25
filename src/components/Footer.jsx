import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const FOOTER_LINKS = {
  'About Krishna Surbhi': [
    { label: 'About Us', href: '/our-story' },
    { label: 'Vision & Mission', href: '/our-story' },
    { label: 'Founder Message', href: '/our-story' },
    { label: 'Animal Welfare', href: '/meet-the-cows' },
  ],
  Experiences: [
    { label: 'Cow Hugging Therapy', href: '/visit' },
    { label: 'Spiritual Workshops', href: '/visit' },
    { label: 'Meditation Programs', href: '/visit' },
    { label: 'Tree Plantation', href: '/visit' },
  ],
  Community: [
    { label: 'Build Krishna Surbhi', href: '/support' },
    { label: 'Volunteer Opportunities', href: '/support' },
    { label: 'Contribute Your Skills', href: '/support' },
    { label: 'Community Initiatives', href: '/community' },
  ],
  Support: [
    { label: 'Donate Now', href: '/support' },
    { label: 'Visit The Sanctuary', href: '/visit' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/community' },
  ],
};

/* Custom Krishna Surbhi sanctuary silhouette — a unique visual signature.
   The processed PNG sits on the light page background and its forest-toned
   ground baseline merges seamlessly into the dark footer body below.
   Scales with width, so it stays intact on every screen size. */
function SanctuarySilhouette() {
  return (
    <div className="w-full leading-[0]" style={{ backgroundColor: '#F5F8F5' }}>
      <img
        src="/footer-silhouette.png"
        alt=""
        aria-hidden="true"
        className="w-full block select-none pointer-events-none"
        style={{ marginBottom: -1 }}
      />
    </div>
  );
}

export default function Footer() {
  const { openDonate } = useModal();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer className="relative">
      {/* Custom sanctuary silhouette signature — rises out of the footer body */}
      <SanctuarySilhouette />

      <div className="bg-forest-dark px-6 md:px-12 pt-12 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 pb-14 border-b border-white/15">

            {/* Brand + newsletter */}
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2.5 mb-5 w-fit">
                <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-white font-bold text-sm">KS</span>
                </div>
                <div>
                  <div className="font-serif text-lg text-white leading-tight">Krishna Surbhi</div>
                  <div className="text-white/60 text-[8px] tracking-[0.24em] uppercase">The Cow-Love Sanctuary</div>
                </div>
              </Link>
              <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-xs">
                A living sanctuary of rescued cows, sacred healing, and open-hearted community in
                Sainik Farm, New Delhi.
              </p>

              {/* Newsletter signup */}
              <p className="text-saffron text-[10px] tracking-[0.28em] font-bold uppercase mb-3">Newsletter</p>
              {!done ? (
                <form
                  onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                  className="flex items-center gap-2 mb-6 max-w-xs"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-grow bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-white placeholder-white/50 text-sm focus:outline-none focus:border-saffron/60 transition-colors"
                  />
                  <button type="submit" aria-label="Subscribe"
                    className="w-10 h-10 flex-shrink-0 bg-saffron rounded-full flex items-center justify-center text-white hover:bg-saffron/85 transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <p className="text-mint text-sm mb-6">Thank you — welcome to the family.</p>
              )}

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
          </div>

          {/* Contact strip */}
          <div className="py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-10 border-b border-white/15">
            <div className="flex items-start gap-2.5 text-white/75 text-sm">
              <MapPin size={15} className="text-saffron mt-0.5 flex-shrink-0" />
              <span>Sainik Farm, New Delhi 110062, India</span>
            </div>
            <a href="tel:+919800000000" className="flex items-center gap-2.5 text-white/75 text-sm hover:text-white transition-colors">
              <Phone size={15} className="text-saffron flex-shrink-0" /> +91 98000 00000
            </a>
            <a href="mailto:love@krishnasurbhi.org" className="flex items-center gap-2.5 text-white/75 text-sm hover:text-white transition-colors">
              <Mail size={15} className="text-saffron flex-shrink-0" /> love@krishnasurbhi.org
            </a>
            <button onClick={() => openDonate()}
              className="md:ml-auto bg-saffron text-white text-xs font-bold tracking-wider uppercase px-7 py-3 rounded-full hover:bg-saffron/85 transition-colors">
              Donate Now
            </button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>© 2026 Krishna Surbhi — The Cow-Love Sanctuary. All rights reserved.</p>
            <p>Presented with care by <span className="text-saffron font-medium">BeeBark</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
