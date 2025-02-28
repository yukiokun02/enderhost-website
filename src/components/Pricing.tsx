
import { useState } from "react";
import { Check, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const allPlans = [
  {
    name: "Getting Woods",
    price: 9.99,
    features: [
      "2GB RAM",
      "100% CPU",
      "10GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Getting an Upgrade",
    price: 14.99,
    features: [
      "4GB RAM",
      "200% CPU",
      "15GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Stone Age",
    price: 19.99,
    features: [
      "6GB RAM",
      "250% CPU",
      "20GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Acquire Hardware",
    price: 24.99,
    features: [
      "8GB RAM",
      "300% CPU",
      "25GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: true,
  },
  {
    name: "Isn't It Iron Pick?",
    price: 29.99,
    features: [
      "10GB RAM",
      "350% CPU",
      "30GB SSD",
      "1Gbps Bandwidth",
      "Basic DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Diamonds",
    price: 34.99,
    features: [
      "12GB RAM",
      "400% CPU",
      "35GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Ice Bucket Challenge",
    price: 44.99,
    features: [
      "16GB RAM",
      "450% CPU",
      "40GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "We Need to Go Deeper",
    price: 54.99,
    features: [
      "20GB RAM",
      "450% CPU",
      "45GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Hidden in the Depths",
    price: 64.99,
    features: [
      "24GB RAM",
      "500% CPU",
      "50GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Cover Me with Debris",
    price: 74.99,
    features: [
      "28GB RAM",
      "500% CPU",
      "55GB SSD",
      "1Gbps Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "The End",
    price: 99.99,
    features: [
      "32GB RAM",
      "600% CPU",
      "80GB SSD",
      "Unmetered Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "Sky is the Limit",
    price: 149.99,
    features: [
      "64GB RAM",
      "800% CPU",
      "100GB SSD",
      "Unmetered Bandwidth",
      "Advanced DDoS Protection",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [showAllPlans, setShowAllPlans] = useState(false);
  const displayedPlans = showAllPlans ? allPlans : allPlans.slice(0, 6);

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background with grid and gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark to-black grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              className={`relative rounded-2xl bg-black/50 p-8 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 animate-fade-up card-blur ${
                plan.popular
                  ? "border-2 border-minecraft-secondary ring-2 ring-minecraft-secondary ring-opacity-20"
                  : "border border-white/10"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
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
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-minecraft-secondary flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-6 text-lg flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-minecraft-primary to-minecraft-secondary hover:from-minecraft-dark hover:to-minecraft-secondary text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
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
