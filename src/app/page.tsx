import { FeaturesSection } from "@/components/features/FeaturesSection";
import { Footer } from "@/components/footer/Footer";

import { HeroSection } from "@/components/hero/Hero";
import SmothWrapper from "@/components/shared/SmothWrapper";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SmothWrapper>
        <HeroSection/>
        <FeaturesSection/>
        <Footer/>
      </SmothWrapper>
    </div>
  );
}
