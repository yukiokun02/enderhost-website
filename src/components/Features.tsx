
import { Shield, Database, Settings, Headphones, Zap, Server } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One-Click Deploy",
    description: "Get your server running in seconds with our automated setup",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection against attacks, included free",
  },
  {
    icon: Database,
    title: "Automated Backups",
    description: "Daily backups with instant restoration capabilities",
  },
  {
    icon: Settings,
    title: "Custom Control Panel",
    description: "Intuitive dashboard for complete server management",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert assistance available around the clock",
  },
  {
    icon: Server,
    title: "Performance Metrics",
    description: "Real-time monitoring of your server's health",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with grid and gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-minecraft-dark/70 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Everything You Need to Run Your Server
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to give you the best possible hosting
            experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-white/10 hover:border-minecraft-secondary/50 transition-all duration-300 hover:shadow-lg group animate-fade-up bg-black/50 backdrop-blur-xl card-blur"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-minecraft-primary/10 to-minecraft-secondary/10 flex items-center justify-center mb-4 group-hover:from-minecraft-primary/20 group-hover:to-minecraft-secondary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-minecraft-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
