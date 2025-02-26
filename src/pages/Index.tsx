
import FloatingChat from "@/components/FloatingChat";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-16">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <FloatingChat />
    </div>
  );
};

export default Index;
