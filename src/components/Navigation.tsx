
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Server, MessageSquare, LogIn, Menu, X, IndianRupee, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(auth === "true");
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    toast.success("Successfully signed out");
    
    window.dispatchEvent(new Event("storage"));
  };

  const navigateToAuth = () => {
    navigate("/auth");
    const currentTab = localStorage.getItem("authTab") || "signin";
    localStorage.setItem("authTab", currentTab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="mx-auto max-w-7xl bg-black/80 backdrop-blur-md border border-white/10 rounded-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
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

            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-6">
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors px-1">
                  Pricing
                </a>
                <a href="https://discord.gg/bsGPB9VpUY" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 px-1" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4" />
                  Support
                </a>
              </div>

              <div className="flex items-center ml-6">
                {isAuthenticated ? (
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/10 px-4"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </Button>
                ) : (
                  <Button
                    onClick={navigateToAuth}
                    className="bg-minecraft-secondary hover:bg-minecraft-dark text-white flex items-center gap-2 rounded-full px-6"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In / Up</span>
                  </Button>
                )}
              </div>
            </div>

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
            href="https://discord.gg/bsGPB9VpUY"
            className="py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-4 h-4" />
            Support
          </a>
          
          {isAuthenticated ? (
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          ) : (
            <button
              onClick={navigateToAuth}
              className="mt-2 py-3 px-4 bg-minecraft-secondary hover:bg-minecraft-dark text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Sign In / Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
