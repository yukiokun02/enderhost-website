
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus, Loader2, Mail, X, Globe, MessageSquare } from "lucide-react";
import { toast } from "sonner";

// Mocked authentication for demo purposes
// In a real app, you would connect this to a proper auth provider
const mockedAuth = {
  signInWithGoogle: () => new Promise<void>((resolve) => setTimeout(resolve, 1500)),
  signInWithDiscord: () => new Promise<void>((resolve) => setTimeout(resolve, 1500)),
};

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();

  const handleAuth = async (provider: "google" | "discord") => {
    setIsLoading(true);
    try {
      if (provider === "google") {
        await mockedAuth.signInWithGoogle();
      } else {
        await mockedAuth.signInWithDiscord();
      }
      
      // Set auth state in localStorage (for demo purposes)
      localStorage.setItem("isAuthenticated", "true");
      
      // Show success toast
      toast.success(`Successfully signed ${activeTab === "signin" ? "in" : "up"}`);
      
      // Navigate back to home page
      navigate("/");
    } catch (error) {
      toast.error("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      {/* Global Grid Pattern */}
      <div 
        className="fixed inset-0 opacity-10 mix-blend-soft-light pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#8E9196 0.5px, transparent 0.5px), linear-gradient(to right, #8E9196 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Back button */}
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 p-2 text-gray-400 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="/lovable-uploads/e1341b42-612c-4eb3-b5f9-d6ac7e41acf3.png" 
              alt="EnderHOST Logo" 
              className="w-12 h-12"
            />
            <span className="font-bold text-2xl">
              <span className="text-white">Ender</span>
              <span className="text-minecraft-secondary">HOST</span>
            </span>
          </a>
        </div>
        
        {/* Auth card */}
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(94,66,227,0.1)]">
          {/* Tabs */}
          <div className="flex mb-8 border-b border-white/10">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex items-center gap-2 py-3 px-4 font-medium transition-colors ${
                activeTab === "signin"
                  ? "text-white border-b-2 border-minecraft-secondary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex items-center gap-2 py-3 px-4 font-medium transition-colors ${
                activeTab === "signup"
                  ? "text-white border-b-2 border-minecraft-secondary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </button>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-2">
            {activeTab === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-gray-400 mb-6">
            {activeTab === "signin" 
              ? "Sign in to access your Minecraft servers" 
              : "Join us and start hosting your Minecraft servers"}
          </p>
          
          {/* Auth buttons */}
          <div className="space-y-4">
            <Button
              onClick={() => handleAuth("google")}
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-200 text-black flex items-center justify-center gap-3 py-6 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(94,66,227,0.3)] group"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Globe className="w-5 h-5 text-red-500" />
                  <span>Continue with Google</span>
                </>
              )}
            </Button>
            
            <Button
              onClick={() => handleAuth("discord")}
              disabled={isLoading}
              className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white flex items-center justify-center gap-3 py-6 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(94,66,227,0.3)] group"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <MessageSquare className="w-5 h-5" />
                  <span>Continue with Discord</span>
                </>
              )}
            </Button>
            
            {/* Future email option - disabled for now */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-black px-2 text-gray-500">or</span>
              </div>
            </div>
            
            <Button
              disabled={true}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 flex items-center justify-center gap-2 py-6 rounded-xl opacity-60 cursor-not-allowed"
            >
              <Mail className="w-5 h-5" />
              <span>Continue with Email (coming soon)</span>
            </Button>
          </div>
          
          {/* Additional info */}
          <p className="text-gray-500 text-xs mt-8 text-center">
            By {activeTab === "signin" ? "signing in" : "signing up"}, you agree to our{" "}
            <a href="#" className="text-minecraft-secondary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-minecraft-secondary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
