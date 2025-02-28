
import { Server, Cube, GamepadIcon } from "lucide-react";

const serverTypes = [
  {
    name: "Vanilla",
    description: "Original Minecraft experience",
    icon: Cube,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Bukkit",
    description: "Plugin support for servers",
    icon: Server,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Spigot",
    description: "Optimized Bukkit fork",
    icon: GamepadIcon,
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "Paper",
    description: "High performance Spigot fork",
    icon: Server,
    color: "from-red-500 to-red-700",
  },
  {
    name: "Purpur",
    description: "Paper fork with more features",
    icon: Cube,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Forge",
    description: "Mod support for Minecraft",
    icon: GamepadIcon,
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Fabric",
    description: "Lightweight modern modding",
    icon: Server,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Quilt",
    description: "Community-driven modding API",
    icon: Cube,
    color: "from-pink-500 to-pink-700",
  },
];

export default function ServerTypes() {
  return (
    <section className="py-16 bg-gradient-to-b from-minecraft-dark/70 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your Minecraft Server Type
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We support all major Minecraft server platforms to fit your unique gameplay needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
          {serverTypes.map((type, index) => (
            <div
              key={type.name}
              className="flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-minecraft-secondary/50 transition-all duration-300 animate-fade-up hover:shadow-[0_0_15px_rgba(94,66,227,0.2)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mb-3`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-center">{type.name}</h3>
              <p className="text-gray-400 text-xs text-center">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
