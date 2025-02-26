
import { Button } from "@/components/ui/button";
import { Server, MessageSquare, LogIn, UserPlus } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Company Name */}
          <a href="/" className="flex items-center space-x-2 text-minecraft-primary hover:text-minecraft-accent transition-colors">
            <Server className="w-6 h-6" />
            <span className="font-bold text-lg">BlockyHost</span>
          </a>

          {/* Navigation Links & Buttons */}
          <div className="flex items-center space-x-8">
            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#pricing" className="text-gray-600 hover:text-minecraft-primary transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-minecraft-primary transition-colors flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                Support
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-minecraft-primary hover:bg-minecraft-light/50"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
              <Button
                className="bg-minecraft-primary hover:bg-minecraft-accent text-white flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Up</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
