
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: 9.99,
    features: [
      "2GB RAM",
      "10 Player Slots",
      "SSD Storage",
      "Automatic Backups",
      "Basic Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 24.99,
    features: [
      "8GB RAM",
      "40 Player Slots",
      "SSD Storage",
      "Daily Backups",
      "Priority Support",
      "Custom Domain",
      "Mod Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 49.99,
    features: [
      "16GB RAM",
      "Unlimited Players",
      "NVMe Storage",
      "Hourly Backups",
      "24/7 Premium Support",
      "Custom Domain",
      "Mod Support",
      "Database Access",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-minecraft-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options to match your hosting needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 animate-fade-up ${
                plan.popular
                  ? "border-2 border-minecraft-primary ring-2 ring-minecraft-primary ring-opacity-20"
                  : "border border-gray-100"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-minecraft-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-minecraft-primary flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-6 text-lg ${
                  plan.popular
                    ? "bg-minecraft-primary hover:bg-minecraft-accent text-white"
                    : "bg-minecraft-light hover:bg-minecraft-primary/20 text-minecraft-primary"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
