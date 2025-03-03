
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Cpu, Cloud, HardDrive, Gauge, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";

const allPlans = [
  {
    name: "Getting Woods",
    price: 159,
    features: [
      "2GB RAM",
      "100% CPU",
      "10GB SSD",
      "1Gbps Bandwidth",
      "1 Cloud Backup",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "oak_planks",
    bgColor: "from-[#A0522D]/10 to-[#D2B48C]/10",
    orderLink: "https://billing.enderhost.in/order/getting-woods"
  },
  {
    name: "Getting an Upgrade",
    price: 349,
    features: [
      "4GB RAM",
      "200% CPU",
      "15GB SSD",
      "1Gbps Bandwidth",
      "1 Cloud Backup",
    ],
    popular: true,
    gradient: true,
    gradientClass: "from-minecraft-primary/60 to-minecraft-accent/60",
    stock: null,
    bgPattern: "crafting_table",
  },
  {
    name: "Stone Age",
    price: 529,
    features: [
      "6GB RAM",
      "250% CPU",
      "20GB SSD",
      "1Gbps Bandwidth",
      "2 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "cobblestone",
    bgColor: "from-[#808080]/10 to-[#A9A9A9]/10",
  },
  {
    name: "Acquire Hardware",
    price: 709,
    features: [
      "8GB RAM",
      "300% CPU",
      "25GB SSD",
      "1Gbps Bandwidth",
      "2 Cloud Backups",
    ],
    popular: true,
    gradient: true,
    gradientClass: "from-minecraft-secondary/60 to-minecraft-primary/60",
    stock: null,
    bgPattern: "redstone",
  },
  {
    name: "Isn't It Iron Pick?",
    price: 889,
    features: [
      "10GB RAM",
      "350% CPU",
      "30GB SSD",
      "1Gbps Bandwidth",
      "2 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "iron_ore",
    bgColor: "from-[#708090]/10 to-[#555555]/10",
  },
  {
    name: "Diamonds",
    price: 1059,
    features: [
      "12GB RAM",
      "400% CPU",
      "35GB SSD",
      "1Gbps Bandwidth",
      "3 Cloud Backups",
    ],
    popular: true,
    gradient: true,
    gradientClass: "from-minecraft-primary/60 to-minecraft-secondary/60",
    stock: null,
    bgPattern: "diamond_ore",
  },
  {
    name: "Ice Bucket Challenge",
    price: 1409,
    features: [
      "16GB RAM",
      "450% CPU",
      "40GB SSD",
      "1Gbps Bandwidth",
      "3 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "ice",
    bgColor: "from-[#ADD8E6]/10 to-[#F0F8FF]/10",
  },
  {
    name: "We Need to Go Deeper",
    price: 1759,
    features: [
      "20GB RAM",
      "450% CPU",
      "45GB SSD",
      "1Gbps Bandwidth",
      "3 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "netherrack",
    bgColor: "from-[#8B0000]/10 to-[#A52A2A]/10",
  },
  {
    name: "Hidden in the Depths",
    price: 2129,
    features: [
      "24GB RAM",
      "500% CPU",
      "50GB SSD",
      "1Gbps Bandwidth",
      "4 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "ancient_debris",
    bgColor: "from-[#8B4513]/10 to-[#D2691E]/10",
  },
  {
    name: "Cover Me with Debris",
    price: 2559,
    features: [
      "28GB RAM",
      "500% CPU",
      "55GB SSD",
      "1Gbps Bandwidth",
      "4 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "netherite",
    bgColor: "from-[#696969]/10 to-[#2F4F4F]/10",
  },
  {
    name: "The End",
    price: 2899,
    features: [
      "32GB RAM",
      "600% CPU",
      "80GB SSD",
      "Unmetered Bandwidth",
      "4 Cloud Backups",
    ],
    popular: true,
    gradient: true,
    gradientClass: "from-[#5E42E3]/60 to-[#2E3BCC]/60",
    stock: null,
    bgPattern: "end_stone",
  },
  {
    name: "Sky is the Limit",
    price: 3399,
    features: [
      "64GB RAM",
      "800% CPU",
      "100GB SSD",
      "Unmetered Bandwidth",
      "4 Cloud Backups",
    ],
    popular: false,
    gradient: false,
    stock: null,
    bgPattern: "elytra",
    bgColor: "from-[#87CEEB]/10 to-[#B0E0E6]/10",
  },
];

export default function Pricing() {
  const [showAllPlans, setShowAllPlans] = useState(false);
  const displayedPlans = showAllPlans ? allPlans : allPlans.slice(0, 6);

  // Function to get the appropriate icon for each feature
  const getFeatureIcon = (feature: string) => {
    if (feature.includes("RAM")) return <Gauge className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("CPU")) return <Cpu className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("SSD")) return <HardDrive className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("Bandwidth")) return <Signal className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("Backup")) return <Cloud className="w-5 h-5 flex-shrink-0" />;
    return <Check className="w-5 h-5 flex-shrink-0" />;
  };

  // Function to generate a Minecraft-themed background pattern
  const getMinecraftBackground = (pattern: string) => {
    switch (pattern) {
      case "oak_planks":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23A0522D' opacity='0.15'/%3E%3Crect x='25' y='0' width='1' height='100' fill='%238B4513' opacity='0.1'/%3E%3Crect x='50' y='0' width='1' height='100' fill='%238B4513' opacity='0.1'/%3E%3Crect x='75' y='0' width='1' height='100' fill='%238B4513' opacity='0.1'/%3E%3Crect x='0' y='25' width='100' height='1' fill='%238B4513' opacity='0.1'/%3E%3Crect x='0' y='50' width='100' height='1' fill='%238B4513' opacity='0.1'/%3E%3Crect x='0' y='75' width='100' height='1' fill='%238B4513' opacity='0.1'/%3E%3C/svg%3E")`;
      case "cobblestone":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23A9A9A9' opacity='0.08'/%3E%3Cpath d='M25,0 L35,0 L35,25 L50,25 L50,0 L75,0 L75,25 L100,25 L100,50 L75,50 L75,75 L100,75 L100,100 L50,100 L50,75 L25,75 L25,100 L0,100 L0,50 L25,50 Z' fill='%23808080' opacity='0.05'/%3E%3C/svg%3E")`;
      case "iron_ore":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23555555' opacity='0.08'/%3E%3Ccircle cx='25' cy='25' r='5' fill='%23C0C0C0' opacity='0.2'/%3E%3Ccircle cx='75' cy='75' r='5' fill='%23C0C0C0' opacity='0.2'/%3E%3Ccircle cx='50' cy='50' r='7' fill='%23C0C0C0' opacity='0.2'/%3E%3C/svg%3E")`;
      case "diamond_ore":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%232E3BCC' opacity='0.08'/%3E%3Cpath d='M50,20 L60,40 L50,60 L40,40 Z' fill='%235E42E3' opacity='0.2'/%3E%3Cpath d='M80,50 L90,70 L80,90 L70,70 Z' fill='%235E42E3' opacity='0.15'/%3E%3Cpath d='M20,50 L30,70 L20,90 L10,70 Z' fill='%235E42E3' opacity='0.15'/%3E%3C/svg%3E")`;
      case "crafting_table":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23A0522D' opacity='0.15'/%3E%3Crect x='0' y='0' width='50' height='50' fill='%238B4513' opacity='0.1'/%3E%3Crect x='50' y='50' width='50' height='50' fill='%238B4513' opacity='0.1'/%3E%3Ccircle cx='25' cy='25' r='10' fill='%232E3BCC' opacity='0.2'/%3E%3Crect x='65' y='15' width='20' height='20' fill='%232E3BCC' opacity='0.2'/%3E%3C/svg%3E")`;
      case "redstone":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23A52A2A' opacity='0.05'/%3E%3Cpath d='M10,10 L90,10 L90,90 L10,90 Z' stroke='%23FF0000' stroke-width='1' fill='none' opacity='0.1'/%3E%3Cpath d='M30,10 L30,90' stroke='%23FF0000' stroke-width='1' opacity='0.1'/%3E%3Cpath d='M50,10 L50,90' stroke='%23FF0000' stroke-width='1' opacity='0.1'/%3E%3Cpath d='M70,10 L70,90' stroke='%23FF0000' stroke-width='1' opacity='0.1'/%3E%3Cpath d='M10,30 L90,30' stroke='%23FF0000' stroke-width='1' opacity='0.1'/%3E%3Cpath d='M10,50 L90,50' stroke='%23FF0000' stroke-width='1' opacity='0.1'/%3E%3Cpath d='M10,70 L90,70' stroke='%23FF0000' stroke-width='1' opacity='0.1'/%3E%3C/svg%3E")`;
      case "ice":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23ADD8E6' opacity='0.08'/%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z' stroke='%23F0F8FF' stroke-width='1' fill='none' opacity='0.15'/%3E%3Cpath d='M30,30 L70,30 L70,70 L30,70 Z' stroke='%23F0F8FF' stroke-width='1' fill='none' opacity='0.15'/%3E%3Cpath d='M40,40 L60,40 L60,60 L40,60 Z' stroke='%23F0F8FF' stroke-width='1' fill='none' opacity='0.15'/%3E%3C/svg%3E")`;
      case "netherrack":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23A52A2A' opacity='0.08'/%3E%3Cpath d='M25,25 Q50,0 75,25 Q100,50 75,75 Q50,100 25,75 Q0,50 25,25 Z' fill='%238B0000' opacity='0.08'/%3E%3C/svg%3E")`;
      case "ancient_debris":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23D2691E' opacity='0.08'/%3E%3Cpath d='M25,25 L75,25 L75,75 L25,75 Z' stroke='%238B4513' stroke-width='2' fill='none' opacity='0.15'/%3E%3Cpath d='M30,30 L70,30 L70,70 L30,70 Z' stroke='%238B4513' stroke-width='2' fill='none' opacity='0.15'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23DAA520' opacity='0.2'/%3E%3C/svg%3E")`;
      case "netherite":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23696969' opacity='0.08'/%3E%3Cpath d='M25,25 L75,25 L75,75 L25,75 Z' stroke='%232F4F4F' stroke-width='2' fill='none' opacity='0.15'/%3E%3Cpath d='M35,35 L65,35 L65,65 L35,65 Z' stroke='%232F4F4F' stroke-width='2' fill='none' opacity='0.15'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23808080' opacity='0.2'/%3E%3C/svg%3E")`;
      case "end_stone":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23FFFDD0' opacity='0.08'/%3E%3Ccircle cx='25' cy='25' r='5' fill='%234B0082' opacity='0.15'/%3E%3Ccircle cx='75' cy='25' r='5' fill='%234B0082' opacity='0.15'/%3E%3Ccircle cx='25' cy='75' r='5' fill='%234B0082' opacity='0.15'/%3E%3Ccircle cx='75' cy='75' r='5' fill='%234B0082' opacity='0.15'/%3E%3Ccircle cx='50' cy='50' r='15' fill='%234B0082' opacity='0.15'/%3E%3C/svg%3E")`;
      case "elytra":
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='100' height='100' fill='%23B0E0E6' opacity='0.08'/%3E%3Cpath d='M30,20 Q50,0 70,20 L70,80 Q50,100 30,80 Z' stroke='%2387CEEB' stroke-width='2' fill='none' opacity='0.15'/%3E%3Cpath d='M40,30 Q50,20 60,30 L60,70 Q50,80 40,70 Z' stroke='%2387CEEB' stroke-width='1' fill='none' opacity='0.15'/%3E%3C/svg%3E")`;
      default:
        return "none";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-minecraft-dark to-black" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From beginner to expert, we have the perfect hosting solution for your Minecraft server
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(94,66,227,0.3)] animate-fade-up overflow-hidden ${
                plan.popular
                  ? "border-2 border-minecraft-secondary ring-2 ring-minecraft-secondary ring-opacity-20"
                  : "border border-white/10"
              } ${
                plan.gradient 
                  ? `bg-gradient-to-br ${plan.gradientClass} bg-black/80`
                  : "bg-gradient-to-br " + (plan.bgColor || "from-black/50 to-black/50")
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: plan.gradient ? '0 0 15px rgba(94, 66, 227, 0.2)' : 'none',
              }}
            >
              {/* Minecraft-themed background pattern */}
              <div 
                className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light"
                style={{ 
                  backgroundImage: plan.bgPattern ? getMinecraftBackground(plan.bgPattern) : 'none',
                  backgroundSize: '100px 100px',
                  backgroundRepeat: 'repeat'
                }}
              />
              
              {plan.gradient && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-minecraft-primary to-minecraft-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                  <span className={`${plan.gradient ? 'text-white/70' : 'text-gray-400'}`}>/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    {getFeatureIcon(feature)}
                    <span className={`${plan.gradient ? 'text-white/80' : 'text-gray-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.name === "Getting Woods" ? (
                <a href={plan.orderLink} target="_blank" rel="noopener noreferrer" className="block relative z-10">
                  <Button
                    className={`w-full py-6 text-lg flex items-center justify-center gap-2 transition-all duration-300 
                      bg-white hover:bg-white/90 text-minecraft-dark hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]`}
                  >
                    Get Started
                  </Button>
                </a>
              ) : (
                <Button
                  className={`w-full py-6 text-lg flex items-center justify-center gap-2 transition-all duration-300 
                    bg-white hover:bg-white/90 text-minecraft-dark hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-10`}
                >
                  Get Started
                </Button>
              )}
            </div>
          ))}
        </div>
        
        {/* View More/Less Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllPlans(!showAllPlans)}
            className="border-white/20 text-white hover:bg-white/10 inline-flex items-center gap-2 bg-gradient-to-r from-minecraft-primary/20 to-minecraft-secondary/20 hover:from-minecraft-primary/30 hover:to-minecraft-secondary/30"
          >
            {showAllPlans ? (
              <>
                Show Less Plans
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                View More Plans
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
