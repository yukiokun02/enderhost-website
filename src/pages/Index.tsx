
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ServerTypes from "@/components/ServerTypes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PromoOffer from "@/components/PromoOffer";
import UptimeStats from "@/components/UptimeStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden pt-16 relative">
      {/* Global Grid Pattern */}
      <div 
        className="fixed inset-0 grid-background"
        style={{ 
          zIndex: 0
        }}
      />
      
      <Navigation />
      <Hero />
      <PromoOffer />
      <Pricing />
      <UptimeStats />
      <Features />
      <ServerTypes />
      <Footer />
    </div>
  );
};

export default Index;
