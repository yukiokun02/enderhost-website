
import { Button } from "@/components/ui/button";
import { Server, MessageSquare, LogIn, UserPlus } from "lucide-react";

export default function Navigation() {
  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="mx-auto max-w-7xl bg-black/80 backdrop-blur-md border border-white/10 rounded-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Company Name */}
            <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/e1341b42-612c-4eb3-b5f9-d6ac7e41acf3.png" 
                alt="EnderHOST Logo" 
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">
                <span className="text-white">Ender</span>
                <span className="text-minecraft-secondary">HOST</span>
              </span>
            </a>

            {/* Navigation Links & Buttons */}
            <div className="flex items-center">
              {/* Nav Links - increased consistent spacing */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors px-1">
                  Pricing
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-1">
                  <MessageSquare className="w-4 h-4" />
                  Support
                </a>
              </div>

              {/* Auth Buttons - increased spacing and consistent alignment */}
              <div className="flex items-center ml-6">
                <Button
                  variant="ghost"
                  className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/10 px-4"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Button>
                <div className="w-4"></div> {/* Spacer */}
                <Button
                  className="bg-minecraft-secondary hover:bg-minecraft-dark text-white flex items-center gap-2 rounded-full px-6"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Up</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
