import { ContactForm } from "@/components/contact-form/ContactForm";
import { DashboardSection } from "@/components/dashboard/DashboardSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { Footer } from "@/components/footer/Footer";
import { HeaderSection } from "@/components/header/HeaderSection";

import { HeroSection } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { MascotSection } from "@/components/mascot-section/MascotSection";
import SmothWrapper from "@/components/shared/SmothWrapper";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SmothWrapper>
         <HeaderSection/>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <MascotSection />
        <DashboardSection />
        <ContactForm />
        <Footer />
      </SmothWrapper>
    </div>
  );
}
