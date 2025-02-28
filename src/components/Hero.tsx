
import { Button } from "@/components/ui/button";
import { Server, Zap, LifeBuoy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Keeping the same one */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/9de719a9-cca7-4faa-bc79-f87f3245bd99.png")',
          backgroundPosition: '50% 20%'
        }}
      />
      
      {/* Enhanced overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-minecraft-dark via-black/85 to-black/40" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-black/70 rounded-full animate-fade-up backdrop-blur-md border border-minecraft-secondary/50 shadow-lg">
            <Server className="w-4 h-4 mr-2 text-minecraft-secondary" />
            <span className="text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              99.9% Uptime Guaranteed
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white animate-fade-up [animation-delay:200ms] tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Next-Level Minecraft Hosting<br />
            <span className="bg-gradient-to-r from-minecraft-light to-minecraft-secondary bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Fast, Reliable, Unstoppable</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto animate-fade-up [animation-delay:400ms] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            Deploy your Minecraft server in seconds with enterprise-grade hardware
            and 24/7 support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up [animation-delay:600ms]">
            <Button
              size="lg"
              className="bg-gradient-to-r from-minecraft-primary to-minecraft-secondary hover:from-minecraft-primary/90 hover:to-minecraft-secondary/90 text-white px-8 py-7 text-lg rounded-lg flex items-center gap-3 transform transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-xl font-semibold min-w-[220px]"
            >
              <Zap className="w-5 h-5" />
              Start Hosting Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-7 text-lg rounded-lg border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-minecraft-secondary/70 hover:scale-105 shadow-lg flex items-center gap-3 font-semibold min-w-[220px]"
            >
              <LifeBuoy className="w-5 h-5" />
              Support
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center animate-fade-up [animation-delay:700ms]">
              <div className="text-3xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">24/7</div>
              <div className="text-sm text-gray-200">Live Support</div>
            </div>
            <div className="flex flex-col items-center animate-fade-up [animation-delay:800ms]">
              <div className="text-3xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">5s</div>
              <div className="text-sm text-gray-200">Deployment Time</div>
            </div>
            <div className="flex flex-col items-center animate-fade-up [animation-delay:900ms] col-span-2 sm:col-span-1 mx-auto">
              <div className="text-3xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Global</div>
              <div className="text-sm text-gray-200">Server Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
