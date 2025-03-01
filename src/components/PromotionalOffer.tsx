
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromotionalOffer() {
  return (
    <section className="py-16 bg-gradient-to-r from-minecraft-dark/80 to-black relative overflow-hidden">
      {/* Animated sparkle particles in the background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse" style={{ animationDelay: "1.5s" }}>
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </div>
      </div>
      
      {/* Diagonal gradient accent */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(94, 66, 227, 0.3) 0%, rgba(46, 59, 204, 0.3) 100%)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl border border-minecraft-secondary/30 p-8 md:p-10 shadow-[0_0_30px_rgba(94,66,227,0.2)]">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center gap-2">
              <span className="text-yellow-400 animate-pulse">🔥</span>
              Limited-Time Opening Offer – 25% OFF!
              <span className="text-yellow-400 animate-pulse">🔥</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Enjoy 25% off on all Minecraft hosting plans as part of our grand opening special!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-3 transform transition-all duration-300 hover:scale-105 shadow-xl font-semibold min-w-[220px]"
              >
                Claim Your 25% Off Now
              </Button>
              
              <div className="text-white/70 text-sm mt-1 animate-pulse">
                Offer ends soon! 🕒
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
