import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/navbar";
import ProgramsGrid from "@/components/programs/ProgramsGrid";
import ProgramsHero from "@/components/programs/ProgramsHero";

export default function ourProgramPage() {
    return (
        <main>
            <Navbar />
            <ProgramsHero />
            <ProgramsGrid />
            <FooterSection />
        </main>
    );
}