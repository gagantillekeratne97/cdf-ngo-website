import HowDonationHelpsSection from "@/components/donate/HowDonationHelpsSection";
import WhyItMattersSection from "@/components/donate/WhyItMattersSection";
import DonationHero from "@/components/donate/DonationHero";
import GivingOptionsSection from "@/components/donate/GivingOptionSection";
import QuestionsSection from "@/components/donate/QuestionsSection";
import ThankYouSection from "@/components/donate/ThankYouSection";

export default function DonatePage() {
  return (
    <main>      
      <DonationHero />
      <WhyItMattersSection />      
      <HowDonationHelpsSection />
      <GivingOptionsSection />
      <QuestionsSection />
      <ThankYouSection />      
    </main>
  );
}