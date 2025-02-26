
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function FloatingChat() {
  const { toast } = useToast();

  const handleChatClick = () => {
    toast({
      title: "Chat Support",
      description: "Our support team will be with you shortly!",
    });
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-8 right-8 p-4 bg-minecraft-primary rounded-full shadow-lg hover:bg-minecraft-accent transition-colors duration-300 text-white z-50"
      aria-label="Open chat"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
}
