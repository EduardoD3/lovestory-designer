import { WeddingNavigation } from "@/components/wedding/WeddingNavigation";
import { HeroSection } from "@/components/wedding/HeroSection";
import { OurStory } from "@/components/wedding/OurStory";
import { EventDetails } from "@/components/wedding/EventDetails";
import { RSVPSection } from "@/components/wedding/RSVPSection";
import { GiftList } from "@/components/wedding/GiftList";
import { Gallery } from "@/components/wedding/Gallery";
import { MessagesSection } from "@/components/wedding/MessagesSection";
import { WeddingParty } from "@/components/wedding/WeddingParty";
import { GuestManual } from "@/components/wedding/GuestManual";
import { FAQSection } from "@/components/wedding/FAQSection";
import { ContactSection } from "@/components/wedding/ContactSection";
import { PetalParticles } from "@/components/wedding/PetalParticles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PetalParticles />
      <WeddingNavigation />
      <HeroSection />
      <OurStory />
      <EventDetails />
      <RSVPSection />
      <GiftList />
      <Gallery />
      <MessagesSection />
      <WeddingParty />
      <GuestManual />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
