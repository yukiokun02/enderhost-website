
import FloatingChat from "@/components/FloatingChat";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-16">
      <Navigation />
      <Hero />
      <Pricing />
      <Features />
      <Stats />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
