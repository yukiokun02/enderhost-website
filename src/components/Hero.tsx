
import { Button } from "@/components/ui/button";
import { Server, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/50" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 bg-minecraft-secondary/10 rounded-full animate-fade-up">
            <Server className="w-4 h-4 mr-2 text-minecraft-secondary" />
            <span className="text-sm font-medium text-minecraft-secondary">
              99.9% Uptime Guaranteed
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-minecraft-secondary to-minecraft-primary bg-clip-text text-transparent animate-fade-up [animation-delay:200ms]">
            Minecraft Server Hosting Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]">
            Deploy your Minecraft server in seconds with enterprise-grade hardware
            and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up [animation-delay:600ms]">
            <Button
              size="lg"
              className="bg-minecraft-secondary hover:bg-minecraft-dark text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Start Hosting Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-lg border-2 border-white/20 text-white hover:bg-white/10"
            >
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
