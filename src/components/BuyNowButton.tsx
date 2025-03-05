
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BuyNowButtonProps {
  plan: any;
  buttonColor: string;
}

export function BuyNowButton({ plan, buttonColor }: BuyNowButtonProps) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/billing", { state: { plan } });
  };

  return (
    <Button
      onClick={handleBuyNow}
      className={`w-full py-5 font-medium flex items-center justify-center gap-2 transition-all duration-300 
        ${buttonColor} text-white hover:scale-105`}
    >
      Buy Now
    </Button>
  );
}
