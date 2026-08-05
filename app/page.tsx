import AboutUs from "../components/aboutUs";
import VisionSection from "@/components/visionMission";
import HeroSection from "../components/hero";
import Navbar from "../components/navbar";
import AreasWeWorkSection from "@/components/AreasSection";
import ImpactSection from "@/components/impactSection";
import FeaturedProgramSection from "@/components/FeaturedProgramSection";

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
        </main>
    );
}