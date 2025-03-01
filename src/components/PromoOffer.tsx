
import { Sparkles } from "lucide-react";

export default function PromoOffer() {
  return (
    <section className="py-2 sm:py-4 bg-black relative overflow-hidden">
      {/* Animated sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Sparkles
              className="text-yellow-300"
              size={16 + Math.random() * 8}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center py-2 sm:py-4">
          <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white tracking-tight leading-tight">
            🔥 Limited-Time Opening Offer – 25% OFF! 🔥
          </h2>

          <p className="text-sm md:text-lg text-white/90">
            Enjoy 25% off on all Minecraft hosting plans as part of our grand opening special!
          </p>
        </div>
      </div>
    </section>
  );
}
