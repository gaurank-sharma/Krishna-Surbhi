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

/* Custom monochrome Krishna Surbhi sanctuary silhouette — a unique visual signature.
   Includes trees, cows & calves, a temple, animal shelters, a meditating figure,
   birds, and community — drawn as a single calm horizon band. */
function SanctuarySilhouette() {
  return (
    <div className="w-full overflow-hidden" style={{ height: 132, color: 'rgba(216,243,220,0.45)' }} aria-hidden="true">
      <svg viewBox="0 0 1200 160" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* birds */}
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M150 34 q8 -8 16 0 q8 -8 16 0" />
          <path d="M205 22 q6 -6 12 0 q6 -6 12 0" />
          <path d="M980 30 q8 -8 16 0 q8 -8 16 0" />
          <path d="M1040 20 q6 -6 12 0 q6 -6 12 0" />
        </g>

        {/* large tree (left) */}
        <g>
          <rect x="92" y="92" width="9" height="58" />
          <circle cx="96" cy="78" r="30" />
          <circle cx="72" cy="92" r="22" />
          <circle cx="120" cy="92" r="22" />
        </g>

        {/* small tree */}
        <g>
          <rect x="190" y="112" width="6" height="38" />
          <circle cx="193" cy="104" r="18" />
        </g>

        {/* community group (people) */}
        <g transform="translate(250,108)">
          <circle cx="0" cy="0" r="9" /><rect x="-8" y="6" width="16" height="36" rx="6" />
          <circle cx="22" cy="-4" r="9" /><rect x="14" y="2" width="16" height="40" rx="6" />
          <circle cx="44" cy="0" r="8" /><rect x="37" y="6" width="14" height="36" rx="6" />
        </g>

        {/* temple with shikhara */}
        <g transform="translate(360,40)">
          <path d="M40 0 C 18 40, 14 70, 14 70 L 66 70 C 66 70, 62 40, 40 0 Z" />
          <circle cx="40" cy="-8" r="6" />
          <rect x="6" y="70" width="68" height="40" />
          <rect x="0" y="106" width="80" height="44" />
          <rect x="32" y="120" width="16" height="30" fill="rgba(27,67,50,1)" />
        </g>

        {/* meditating figure */}
        <g transform="translate(480,96)">
          <circle cx="20" cy="0" r="11" />
          <path d="M20 12 C 2 16, -6 40, -6 54 L 46 54 C 46 40, 38 16, 20 12 Z" />
        </g>

        {/* cow (large) */}
        <g transform="translate(560,84)">
          <ellipse cx="40" cy="34" rx="40" ry="22" />
          <rect x="8" y="52" width="7" height="22" />
          <rect x="24" y="52" width="7" height="22" />
          <rect x="52" y="52" width="7" height="22" />
          <rect x="68" y="52" width="7" height="22" />
          <ellipse cx="84" cy="20" rx="15" ry="12" />
          <path d="M74 12 q-6 -12 -1 -16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M94 12 q6 -12 1 -16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M2 34 q-12 4 -10 18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* calf */}
        <g transform="translate(648,112)">
          <ellipse cx="22" cy="18" rx="22" ry="13" />
          <rect x="6" y="28" width="5" height="14" />
          <rect x="16" y="28" width="5" height="14" />
          <rect x="30" y="28" width="5" height="14" />
          <rect x="38" y="28" width="5" height="14" />
          <ellipse cx="46" cy="10" rx="9" ry="7" />
        </g>

        {/* animal shelter (hut) */}
        <g transform="translate(740,78)">
          <path d="M0 30 L 45 0 L 90 30 Z" />
          <rect x="8" y="30" width="74" height="42" />
          <rect x="36" y="44" width="18" height="28" fill="rgba(27,67,50,1)" />
        </g>

        {/* second cow */}
        <g transform="translate(860,90)">
          <ellipse cx="38" cy="30" rx="38" ry="20" />
          <rect x="8" y="46" width="6" height="20" />
          <rect x="22" y="46" width="6" height="20" />
          <rect x="50" y="46" width="6" height="20" />
          <rect x="64" y="46" width="6" height="20" />
          <ellipse cx="80" cy="18" rx="13" ry="11" />
          <path d="M71 11 q-5 -11 -1 -14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M89 11 q5 -11 1 -14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* trees (right cluster) */}
        <g>
          <rect x="1010" y="100" width="8" height="50" />
          <circle cx="1014" cy="88" r="26" />
          <rect x="1080" y="110" width="6" height="40" />
          <circle cx="1083" cy="100" r="20" />
          <rect x="1130" y="96" width="9" height="54" />
          <circle cx="1134" cy="82" r="28" />
          <circle cx="1112" cy="96" r="20" />
          <circle cx="1156" cy="96" r="20" />
        </g>

        {/* ground line */}
        <rect x="0" y="150" width="1200" height="10" />
      </svg>
    </div>
  );
}

export default function Footer() {
  const { openDonate } = useModal();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-forest-dark relative">
      {/* Custom sanctuary silhouette signature */}
      <SanctuarySilhouette />

      <div className="px-6 md:px-12 pt-16 md:pt-20 pb-8">
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
