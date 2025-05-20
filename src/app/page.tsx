import { ContactForm } from "@/components/contact-form/ContactForm";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { Footer } from "@/components/footer/Footer";
import { HeaderSection } from "@/components/header/HeaderSection";

import { HeroSection } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import Integrate from "@/components/integratemodules/Integrate";
import { MascotSection } from "@/components/mascot-section/MascotSection";
import { PanelSection } from "@/components/panel/PanelSection";
import SmothWrapper from "@/components/shared/SmothWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <SmothWrapper>
        <HeaderSection />
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <MascotSection />
        <Integrate />
        <PanelSection />
        <ContactForm />
        <Footer />
      </SmothWrapper>
    </div>
  );
}
