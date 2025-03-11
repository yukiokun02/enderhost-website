import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string | string[];
}

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'faq' | 'troubleshooting'>('faq');
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);
  
  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = element;
    
    if (
      (scrollTop === 0 && e.deltaY < 0) || 
      (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0)
    ) {
      return;
    }
    
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const faqs: FAQ[] = [
    {
      question: "What is Ender Host?",
      answer: "Ender Host is a Minecraft server hosting company that provides high-performance, affordable, and reliable game server hosting. We offer powerful hardware, DDoS protection, and easy-to-use control panels for a seamless gaming experience."
    },
    {
      question: "How do I purchase a Minecraft server?",
      answer: "You can purchase a server by visiting our website, selecting a plan that suits your needs, and completing the checkout process. Once payment is confirmed, your server will be set up automatically."
    },
    {
      question: "How long does it take for my server to be activated?",
      answer: "Most servers are activated instantly after payment. However, in rare cases, it may take up to 10-15 minutes. If your server is not activated after this period, please open a support ticket."
    },
    {
      question: "Do you offer free trials?",
      answer: "Currently, we do not offer free trials, but we do have affordable plans that you can try out."
    },
    {
      question: "What control panel do you provide?",
      answer: "We provide the Pterodactyl Panel, which allows you to manage your server, upload plugins, change settings, and much more."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes! You can upgrade your server at any time from your client dashboard. Just select the new plan, and your server will be upgraded without losing any data."
    },
    {
      question: "Can I install custom plugins and mods?",
      answer: "Yes! We support modded Minecraft servers (e.g., Forge, Fabric) and plugin-based servers (e.g., Spigot, Paper). You can upload your own plugins and mods via the Pterodactyl Panel."
    },
    {
      question: "What versions of Minecraft do you support?",
      answer: "We support all Minecraft versions, including Java Edition and Bedrock Edition."
    },
    {
      question: "Do you provide DDoS protection?",
      answer: "Yes, all our servers come with DDoS protection to ensure smooth gameplay without interruptions."
    },
    {
      question: "What happens if I don't renew my server?",
      answer: "If you do not renew your server before the expiration date, it will be suspended. After a few days, it will be permanently deleted."
    }
  ];

  const troubleshooting: FAQ[] = [
    {
      question: "My server is not starting. What should I do?",
      answer: [
        "Try the following steps:",
        "• Check the console in the Pterodactyl Panel for error messages.",
        "• Ensure you have selected the correct Minecraft version.",
        "• If you are using mods, check for mod conflicts.",
        "• Make sure your server has enough RAM allocated.",
        "• Restart your server and try again.",
        "• If the issue persists, contact support."
      ]
    },
    {
      question: "I can't connect to my server. What's wrong?",
      answer: [
        "• Ensure your server is online in the Pterodactyl Panel.",
        "• Check if you are using the correct IP address and port.",
        "• If you are using a custom domain, make sure your DNS records are set correctly.",
        "• Restart your router and try again.",
        "• Check if your firewall is blocking the connection."
      ]
    },
    {
      question: "My server is lagging. How can I fix it?",
      answer: [
        "• Reduce the number of plugins or mods running.",
        "• Lower the view distance in the server settings.",
        "• Allocate more RAM if possible.",
        "• Check if your internet connection is stable.",
        "• Upgrade to a higher performance plan if needed."
      ]
    },
    {
      question: "I installed a mod/plugin, and my server crashed. What should I do?",
      answer: [
        "• Remove the mod/plugin and restart the server.",
        "• Check for compatibility with your Minecraft version.",
        "• Read the console log for any error messages.",
        "• Try installing the latest version of the mod/plugin."
      ]
    },
    {
      question: "My world got corrupted. Can I restore it?",
      answer: [
        "• If you have backups enabled, restore the latest backup from your panel.",
        "• If backups are not available, you may try using MCEdit or region fixer tools.",
        "• Regularly back up your world to avoid future issues."
      ]
    },
    {
      question: "I forgot my Pterodactyl Panel password. How can I reset it?",
      answer: "You can reset your password by clicking on the \"Forgot Password\" option on the login page and following the instructions sent to your email."
    },
    {
      question: "How do I change my server's settings (difficulty, gamemode, etc.)?",
      answer: [
        "• Log in to your Pterodactyl Panel.",
        "• Open your server's settings.",
        "• Edit the server.properties file.",
        "• Save changes and restart the server."
      ]
    },
    {
      question: "My server is stuck on \"Starting...\" What do I do?",
      answer: [
        "• Wait a few minutes, as it may take time to load.",
        "• Check for any console errors.",
        "• Ensure that all plugins and mods are correctly installed.",
        "• If the issue persists, contact support."
      ]
    },
    {
      question: "How do I install a custom world?",
      answer: [
        "• Upload your world folder via the Pterodactyl Panel's file manager or use an SFTP client.",
        "• Edit the server.properties file and set the level-name to your world folder's name.",
        "• Restart the server to apply the changes."
      ]
    },
    {
      question: "My players are getting \"You are not whitelisted\" error. How do I fix this?",
      answer: [
        "• Log in to your Pterodactyl Panel.",
        "• Go to the console and type: whitelist add <playername>",
        "• If you want to disable whitelist, type: whitelist off"
      ]
    }
  ];

  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <div className="mt-1 space-y-1">
          {answer.map((line, i) => (
            <p key={i} className="text-sm text-gray-300">{line}</p>
          ))}
        </div>
      );
    }
    return <p className="mt-1 text-sm text-gray-300">{answer}</p>;
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 p-4 bg-minecraft-secondary rounded-full shadow-lg hover:bg-minecraft-primary transition-colors duration-300 text-white z-50"
        aria-label="Support Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 w-full max-w-md max-h-[500px] rounded-lg overflow-hidden shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              <div className="bg-minecraft-primary p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">EnderHOST Support</h3>
                <button 
                  onClick={toggleChat}
                  className="text-white hover:text-gray-300"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-minecraft-dark/80 backdrop-blur-lg p-1 flex">
                <button 
                  onClick={() => setActiveSection('faq')}
                  className={cn(
                    "flex-1 py-2 text-sm font-medium rounded-md transition-colors", 
                    activeSection === 'faq' 
                      ? "bg-minecraft-secondary text-white" 
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  FAQs
                </button>
                <button 
                  onClick={() => setActiveSection('troubleshooting')}
                  className={cn(
                    "flex-1 py-2 text-sm font-medium rounded-md transition-colors", 
                    activeSection === 'troubleshooting' 
                      ? "bg-minecraft-secondary text-white" 
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  Troubleshooting
                </button>
              </div>

              <div 
                className="flex-1 overflow-y-auto bg-black/70 backdrop-blur-md p-4" 
                onWheel={handleWheel}
                style={{ overscrollBehavior: 'contain' }}
              >
                <div className="space-y-3">
                  {activeSection === 'faq' ? (
                    faqs.map((faq, index) => (
                      <div 
                        key={index} 
                        className="border border-white/10 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-4 py-3 flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <h4 className="text-left text-sm font-medium text-white">{faq.question}</h4>
                          {expandedFaqs.includes(index) ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        {expandedFaqs.includes(index) && (
                          <div className="px-4 py-3 bg-black/30">
                            {renderAnswer(faq.answer)}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    troubleshooting.map((item, index) => (
                      <div 
                        key={index} 
                        className="border border-white/10 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-4 py-3 flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <h4 className="text-left text-sm font-medium text-white">{item.question}</h4>
                          {expandedFaqs.includes(index) ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        {expandedFaqs.includes(index) && (
                          <div className="px-4 py-3 bg-black/30">
                            {renderAnswer(item.answer)}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="bg-minecraft-dark/80 backdrop-blur-lg p-3 text-center">
                <p className="text-xs text-gray-400">
                  Need more help? <a href="https://discord.gg/bsGPB9VpUY" target="_blank" rel="noopener noreferrer" className="text-minecraft-secondary hover:underline">Join our Discord</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
