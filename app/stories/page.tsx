import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/navbar";
import PageHero from "@/components/PageHero";
import CommunityStoriesGrid from "@/components/stories/CommunityStorySection";
import FeaturedStorySection from "@/components/stories/FeaturedStorySection";

export default function storiesPage() { 
    return (
        <main>  
            <Navbar />            
            <PageHero
            breadcrumb="Home / Our Stories"
            heading={
                <>
                Real work.{" "}
                <span className="italic text-brand-accent">Real communities.</span>{" "}
                Lasting change.
                </>
            }
            description="Every community has a story. Through our programs, we work alongside people to create opportunities, strengthen communities, and protect the environment."
            />
            <FeaturedStorySection />
            <CommunityStoriesGrid />
            <FooterSection />
        </main>
    );
}