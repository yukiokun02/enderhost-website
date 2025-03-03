
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
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
      "Basic DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
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
      "Basic DDoS Protection",
    ],
    popular: false,
    gradient: true,
    gradientClass: "from-minecraft-primary/60 to-minecraft-accent/60",
    stock: null,
  },
  {
    name: "Stone Age",
    price: 529,
    features: [
      "6GB RAM",
      "250% CPU",
      "20GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
  {
    name: "Acquire Hardware",
    price: 709,
    features: [
      "8GB RAM",
      "300% CPU",
      "25GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: true,
    gradient: true,
    gradientClass: "from-minecraft-secondary/60 to-minecraft-primary/60",
    stock: null,
  },
  {
    name: "Isn't It Iron Pick?",
    price: 889,
    features: [
      "10GB RAM",
      "350% CPU",
      "30GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
  {
    name: "Diamonds",
    price: 1059,
    features: [
      "12GB RAM",
      "400% CPU",
      "35GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: true,
    gradientClass: "from-minecraft-primary/60 to-minecraft-secondary/60",
    stock: null,
  },
  {
    name: "Ice Bucket Challenge",
    price: 1409,
    features: [
      "16GB RAM",
      "450% CPU",
      "40GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
  {
    name: "We Need to Go Deeper",
    price: 1759,
    features: [
      "20GB RAM",
      "450% CPU",
      "45GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
  {
    name: "Hidden in the Depths",
    price: 2129,
    features: [
      "24GB RAM",
      "500% CPU",
      "50GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
  {
    name: "Cover Me with Debris",
    price: 2559,
    features: [
      "28GB RAM",
      "500% CPU",
      "55GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
  {
    name: "The End",
    price: 2899,
    features: [
      "32GB RAM",
      "600% CPU",
      "80GB SSD",
      "Unmetered Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: true,
    gradientClass: "from-[#5E42E3]/60 to-[#2E3BCC]/60",
    stock: null,
  },
  {
    name: "Sky is the Limit",
    price: 3399,
    features: [
      "64GB RAM",
      "800% CPU",
      "100GB SSD",
      "Unmetered Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
    gradient: false,
    stock: null,
  },
];

export default function Pricing() {
  const [showAllPlans, setShowAllPlans] = useState(false);
  const displayedPlans = showAllPlans ? allPlans : allPlans.slice(0, 6);

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
              className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(94,66,227,0.3)] animate-fade-up ${
                plan.popular
                  ? "border-2 border-minecraft-secondary ring-2 ring-minecraft-secondary ring-opacity-20"
                  : "border border-white/10"
              } ${
                plan.gradient 
                  ? `bg-gradient-to-br ${plan.gradientClass} bg-black/80`
                  : "bg-black/50"
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: plan.gradient ? '0 0 15px rgba(94, 66, 227, 0.2)' : 'none'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-minecraft-primary to-minecraft-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                  <span className={`${plan.gradient ? 'text-white/70' : 'text-gray-400'}`}>/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.gradient ? 'text-white' : 'text-minecraft-secondary'} flex-shrink-0`} />
                    <span className={`${plan.gradient ? 'text-white/80' : 'text-gray-400'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.name === "Getting Woods" ? (
                <a href={plan.orderLink} target="_blank" rel="noopener noreferrer" className="block">
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
                    bg-white hover:bg-white/90 text-minecraft-dark hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]`}
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
