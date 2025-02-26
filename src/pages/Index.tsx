
import FloatingChat from "@/components/FloatingChat";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <FloatingChat />
    </div>
  );
};

export default Index;
