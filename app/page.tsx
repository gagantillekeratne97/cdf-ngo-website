import AboutUs from "../components/aboutUs";
import VisionSection from "@/components/visionMission";
import HeroSection from "../components/hero";
import Navbar from "../components/navbar";
import AreasWeWorkSection from "@/components/AreasSection";
import ImpactSection from "@/components/impactSection";
import FeaturedProgramSection from "@/components/FeaturedProgramSection";
import JourneyOfUsSection from "@/components/milestoneSection";
import PartnersSection from "@/components/PartnerSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <main>                            
            <Navbar />
            <HeroSection />
            <AboutUs />                        
            <VisionSection /> 
            <AreasWeWorkSection />
            <ImpactSection /> 
            <FeaturedProgramSection />            
            <JourneyOfUsSection />
            <PartnersSection />
            <GetInvolvedSection />
            <ContactSection />            
        </main>
    );
}