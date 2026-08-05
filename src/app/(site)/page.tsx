import HeroSection from "@/components/home/HeroSection";
import QuickLinks from "@/components/home/QuickLinks";
import TrustPoints from "@/components/home/TrustPoints";
import CurriculumPreview from "@/components/home/CurriculumPreview";
import AdmissionBanner from "@/components/home/AdmissionBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <TrustPoints />
      <CurriculumPreview />
      <AdmissionBanner />
    </>
  );
}
