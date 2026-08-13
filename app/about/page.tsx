import Navbar from "@/components/navbar";
import AboutPageHero from "./AboutPageHero";
import OurStorySection from "./OurStorySection";
import VisionMissionSection from "./VisionMissionSection";
import LeadershipSection from "./LeadershipSection";
import RegistrationSection from "./RegistrationSection";
import FooterSection from "@/components/FooterSection";

export default function AboutUs() {
    return (                        
        <main>
            <Navbar />            
            <AboutPageHero />
            <OurStorySection />
            <VisionMissionSection />
            <LeadershipSection />
            <RegistrationSection />
            <FooterSection />
        </main>
    )
}