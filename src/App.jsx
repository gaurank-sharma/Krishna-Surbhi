import { Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import DonateModal from './components/DonateModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import MeetTheCows from './pages/MeetTheCows';
import CowProfile from './pages/CowProfile';
import VolunteerProfile from './pages/VolunteerProfile';
import Visit from './pages/Visit';
import Support from './pages/Support';
import Community from './pages/Community';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ModalProvider>
      <div className="bg-cream font-sans text-forest-dark min-h-screen">
        <ScrollToTop />
        <Navbar />
        <DonateModal />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/meet-the-cows" element={<MeetTheCows />} />
            <Route path="/meet-the-cows/:id" element={<CowProfile />} />
            <Route path="/volunteers/:id" element={<VolunteerProfile />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/support" element={<Support />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}
