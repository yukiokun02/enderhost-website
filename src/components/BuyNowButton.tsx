
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { generateSsoToken } from "@/services/whmcsService";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface BuyNowButtonProps {
  orderLink: string;
  className?: string;
}

export default function BuyNowButton({ orderLink, className }: BuyNowButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, userEmail } = useAuth();
  const navigate = useNavigate();
  
  const handleClick = async () => {
    // If not authenticated, redirect to auth page
    if (!isAuthenticated) {
      toast.info("Please sign in to continue with your purchase");
      navigate("/auth?redirect=" + encodeURIComponent(window.location.pathname + '#pricing'));
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Generate SSO token
      if (!userEmail) {
        throw new Error("User email not found");
      }
      
      const ssoUrl = await generateSsoToken(userEmail);
      
      if (ssoUrl) {
        // If we got a SSO URL, redirect to it
        window.location.href = ssoUrl;
      } else {
        // Fallback to regular order link
        window.location.href = orderLink;
      }
    } catch (error) {
      console.error("SSO redirect failed", error);
      // Fallback to regular order link if SSO fails
      window.location.href = orderLink;
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        "Buy Now"
      )}
    </Button>
  );
}
