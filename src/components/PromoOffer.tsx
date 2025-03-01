
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";

export default function PromoOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (
          prevTime.days === 0 &&
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 bg-gradient-to-b from-black to-minecraft-dark/80 relative overflow-hidden">
      {/* Animated sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
              size={20 + Math.random() * 10}
            />
          </div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#8E9196 0.5px, transparent 0.5px), linear-gradient(to right, #8E9196 0.5px, transparent 0.5px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-minecraft-secondary/30 shadow-[0_0_30px_rgba(94,66,227,0.2)]">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white animate-fade-up tracking-tight leading-tight">
            🔥 Limited-Time Opening Offer – 25% OFF! 🔥
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up [animation-delay:200ms]">
            Enjoy 25% off on all Minecraft hosting plans as part of our grand opening special!
          </p>

          <div className="grid grid-cols-4 gap-4 mb-8 max-w-xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className="bg-minecraft-dark/80 border border-minecraft-secondary/20 p-3 rounded-lg animate-fade-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-minecraft-primary to-minecraft-secondary hover:from-minecraft-primary/90 hover:to-minecraft-secondary/90 text-white px-8 py-7 text-lg rounded-lg flex items-center mx-auto gap-3 animate-fade-up [animation-delay:600ms] transform transition-all duration-300 hover:scale-105 font-semibold min-w-[220px] shadow-[0_0_20px_rgba(94,66,227,0.3)]"
          >
            <Clock className="w-5 h-5" />
            Claim 25% OFF Now
          </Button>
        </div>
      </div>
    </section>
  );
}
