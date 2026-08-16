import ContactPageSection from "@/components/contact/ContactPageSection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/navbar";
import PageHero from "@/components/PageHero";


export default function ContactPage() {
  return (
    <main>
        <Navbar />    
      <PageHero
        breadcrumb="Home / Contact Us"
        heading={
          <>
            Let's work together for{" "}
            <span className="italic text-brand-accent">stronger communities.</span>
          </>
        }
        description="Whether you want to learn more about our programs, collaborate with us, support our work, or get involved, we'd love to hear from you."
      />
      <ContactPageSection />
      <FooterSection />
    </main>
  );
}