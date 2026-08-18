import Navbar from "@/components/navbar";
import AboutPageHero from "./AboutPageHero";
import OurStorySection from "./OurStorySection";
import VisionMissionSection from "./VisionMissionSection";
import LeadershipSection from "./LeadershipSection";
import RegistrationSection from "./RegistrationSection";
import FooterSection from "@/components/FooterSection";
import ObjectivesSection from "./ObjectivesSection";
import JourneyOfUsSection from "@/components/milestoneSection";

export default function AboutUs() {
    return (                        
        <main>
            <Navbar />            
            <AboutPageHero />
            <OurStorySection />
            <VisionMissionSection />
            <ObjectivesSection />
            <JourneyOfUsSection />
            <LeadershipSection />
            <RegistrationSection />
            <FooterSection />
        </main>
    )
}