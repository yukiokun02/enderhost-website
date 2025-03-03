
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Cpu, Cloud, HardDrive, Gauge, Signal, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Group plans into categories
const planCategories = [
  {
    id: "vanilla",
    name: "PLAY VANILLA",
    description: "Ideal for groups looking to run a small server with a few plugins.",
    color: "bg-blue-800",
    textColor: "text-blue-400",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    gradient: "from-blue-900/70 to-blue-800/60",
    plans: [
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
        icon: "🌲",
        players: "3+ Players",
        popular: false,
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
        icon: "🪓",
        players: "5+ Players",
        popular: false,
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
        icon: "🪨",
        players: "8+ Players",
        popular: true,
        mostPopular: true,
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
        icon: "⛏️",
        players: "15+ Players",
        popular: false,
      },
    ],
    included: [
      "Unlimited Player Slots",
      "Automatic Backups",
      "Instant Setup"
    ]
  },
  {
    id: "modpacks",
    name: "PLAY WITH MODPACKS",
    description: "Recommended plans to play a Minecraft Modpack.",
    color: "bg-red-900",
    textColor: "text-red-500",
    buttonColor: "bg-red-500 hover:bg-red-600",
    gradient: "from-red-900/70 to-red-800/60",
    plans: [
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
        icon: "⛏️",
        players: "20+ Players",
        popular: false,
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
        icon: "💎",
        players: "25+ Players",
        popular: true,
        mostPopular: true,
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
        icon: "🧊",
        players: "30+ Players",
        popular: false,
      },
    ],
    included: [
      "Unlimited Player Slots",
      "Modpack Installer",
      "Instant Setup"
    ]
  },
  {
    id: "community",
    name: "START A COMMUNITY SERVER",
    description: "Ideal for larger servers that will install many plugins and have many players at the same time.",
    color: "bg-green-900",
    textColor: "text-green-500",
    buttonColor: "bg-green-500 hover:bg-green-600",
    gradient: "from-green-900/70 to-green-800/60",
    plans: [
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
        icon: "🔥",
        players: "40+ Players",
        popular: false,
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
        icon: "🌋",
        players: "50+ Players",
        popular: false,
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
        icon: "🌌",
        players: "60+ Players",
        popular: true,
        mostPopular: true,
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
        icon: "✨",
        players: "100+ Players",
        popular: false,
      },
    ],
    included: [
      "Unlimited Player Slots",
      "Plugin Manager",
      "Instant Setup",
      "Priority Support"
    ]
  }
];

export default function Pricing() {
  // Function to get the appropriate icon for each feature
  const getFeatureIcon = (feature: string) => {
    if (feature.includes("RAM")) return <Gauge className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("CPU")) return <Cpu className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("SSD")) return <HardDrive className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("Bandwidth")) return <Signal className="w-5 h-5 flex-shrink-0" />;
    if (feature.includes("Backup")) return <Cloud className="w-5 h-5 flex-shrink-0" />;
    return <Check className="w-5 h-5 flex-shrink-0" />;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-minecraft-dark to-black relative z-10" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your Perfect Minecraft Server
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From beginner to expert, we have the perfect hosting solution for your Minecraft server
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-24">
          {planCategories.map((category) => (
            <div key={category.id} className={`rounded-3xl overflow-hidden relative`}>
              {/* Category Header */}
              <div className={`p-8 ${category.color} bg-opacity-20`} 
                   style={{backgroundImage: `linear-gradient(to right, ${category.gradient})`}}>
                <h3 className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${category.textColor}`}>{category.name}</span>
                </h3>
                <p className="text-white/80 mt-2">{category.description}</p>
              </div>
              
              {/* Plans Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(category.plans.length, 4)} gap-4 p-4 bg-black/50 backdrop-blur-sm`}>
                {category.plans.map((plan) => (
                  <div 
                    key={plan.name}
                    className={`relative rounded-xl p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(94,66,227,0.3)] ${
                      plan.mostPopular
                        ? "border-2 border-opacity-50 shadow-lg"
                        : "border border-white/10"
                    }`}
                    style={{
                      borderColor: plan.mostPopular ? (category.textColor.includes('blue') ? '#3B82F6' : 
                                                      category.textColor.includes('red') ? '#EF4444' : 
                                                      '#10B981') : 'rgba(255,255,255,0.1)',
                      backgroundColor: plan.mostPopular ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)'
                    }}
                  >
                    {plan.mostPopular && (
                      <div className="absolute -top-3 right-4 rotate-2 z-10">
                        <div className="bg-gradient-to-r from-minecraft-primary to-minecraft-secondary text-white text-xs font-medium px-3 py-1 rounded-full">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{plan.icon}</span>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-sm text-white/80">{plan.players}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                    
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-white">₹{plan.price}</span>
                      <span className="text-white/70 ml-1">/month</span>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          {getFeatureIcon(feature)}
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.name === "Getting Woods" ? (
                      <a href={plan.orderLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                          className={`w-full py-5 font-medium flex items-center justify-center gap-2 transition-all duration-300 
                            ${category.buttonColor} text-white`}
                        >
                          Add To Cart
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className={`w-full py-5 font-medium flex items-center justify-center gap-2 transition-all duration-300 
                          ${category.buttonColor} text-white`}
                      >
                        Add To Cart
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Features included with all plans in this category */}
              <div className="px-8 py-4 bg-black/70 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <div className="text-white/90 font-medium">INCLUDED ON ALL SERVERS:</div>
                  {category.included.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/70">
                      <Check className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
