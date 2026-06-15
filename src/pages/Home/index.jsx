import HeroSection from './HeroSection';
import MeetTheCows from './MeetTheCows';
import VisitExperience from './VisitExperience';
import BuildSanctuary from './BuildSanctuary';
import GalleryPreview from './GalleryPreview';
import FounderMessage from './FounderMessage';
import SupportDonate from './SupportDonate';

// Homepage kept deliberately clean and focused — the exact flow from the
// design guide: an immersive sanctuary experience, not a traditional NGO site.
export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Animal Stories */}
      <MeetTheCows />

      {/* Experience Krishna Surbhi */}
      <VisitExperience />

      {/* Build Krishna Surbhi */}
      <BuildSanctuary />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Founder Message */}
      <FounderMessage />

      {/* Donation CTA */}
      <SupportDonate />
    </>
  );
}
