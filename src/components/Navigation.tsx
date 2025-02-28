
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Server, MessageSquare, LogIn, UserPlus, Menu, X, IndianRupee } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

            {/* Navigation Links & Buttons - Desktop */}
            <div className="hidden md:flex items-center">
              {/* Nav Links - increased consistent spacing */}
              <div className="flex items-center space-x-6">
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
                  className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/10 px-4"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Button>
                <div className="w-4"></div> {/* Spacer */}
                <Button
                  className="bg-minecraft-secondary hover:bg-minecraft-dark text-white flex items-center gap-2 rounded-full px-6"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-gray-400 hover:text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[300px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="py-3 px-4 flex flex-col">
          <a
            href="#pricing"
            className="py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <IndianRupee className="w-4 h-4" />
            Pricing
          </a>
          <a
            href="#"
            className="py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <MessageSquare className="w-4 h-4" />
            Support
          </a>
          <a
            href="#"
            className="py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </a>
          <a
            href="#"
            className="mt-2 py-3 px-4 bg-minecraft-secondary hover:bg-minecraft-dark text-white rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
