
import { Button } from "@/components/ui/button";
import { Server, MessageSquare, LogIn, UserPlus } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Company Name */}
          <a href="/" className="flex items-center space-x-2 text-white hover:text-minecraft-secondary transition-colors">
            <Server className="w-6 h-6" />
            <span className="font-bold text-lg">BlockyHost</span>
          </a>

          {/* Navigation Links & Buttons */}
          <div className="flex items-center space-x-8">
            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/10 border-white/20"
              >
                Contact us
              </Button>
              <div className="relative">
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-minecraft-secondary rounded-full text-xs flex items-center justify-center text-white">0</span>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  🛒
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
