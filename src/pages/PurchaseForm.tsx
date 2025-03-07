
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PurchaseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serverName: "",
    name: "",
    email: "",
    password: "",
    plan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Here you would typically handle form submission, API calls, etc.
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Grid background overlay */}
      <div
        className="fixed inset-0 grid-background"
        style={{
          zIndex: 0,
          opacity: 0.06,
          backgroundSize: "35px 35px",
        }}
      />

      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Form header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Purchase Your Minecraft Server
              </h1>
              <p className="text-gray-400">
                Fill in the details below to get started.
              </p>
            </div>

            {/* Purchase form */}
            <div className="bg-black/50 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Server Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="serverName"
                    className="text-sm font-medium text-white/90"
                  >
                    Server Name
                  </label>
                  <Input
                    id="serverName"
                    name="serverName"
                    placeholder="Enter your preferred server name"
                    value={formData.serverName}
                    onChange={handleChange}
                    className="bg-black/70 border-white/10 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white/90"
                  >
                    Your Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/70 border-white/10 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white/90"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/70 border-white/10 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-white/90"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-black/70 border-white/10 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                {/* Plan Selection */}
                <div className="space-y-2">
                  <label
                    htmlFor="plan"
                    className="text-sm font-medium text-white/90"
                  >
                    Select a Plan
                  </label>
                  <Select
                    onValueChange={(value) => handleSelectChange("plan", value)}
                  >
                    <SelectTrigger
                      id="plan"
                      className="w-full bg-black/70 border-white/10 text-white"
                    >
                      <SelectValue placeholder="Select a Plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-white/10 text-white">
                      <SelectItem value="basic">Basic - ₹159/month</SelectItem>
                      <SelectItem value="standard">Standard - ₹349/month</SelectItem>
                      <SelectItem value="premium">Premium - ₹709/month</SelectItem>
                      <SelectItem value="diamonds">Diamonds - ₹1059/month</SelectItem>
                      <SelectItem value="sky">Sky is the Limit - ₹3399/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Payment Methods Info */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">
                    Payment Methods
                  </label>
                  <div className="bg-black/70 border border-white/10 rounded-md p-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/lovable-uploads/cb954d69-7821-4704-9097-55b6924a4a9f.png" 
                          alt="UPI" 
                          className="h-8 object-contain" 
                        />
                        <span className="text-white">UPI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img 
                          src="/lovable-uploads/d388e7a8-1138-4512-be96-e93b72c348ee.png" 
                          alt="Credit/Debit Card" 
                          className="h-8 object-contain" 
                        />
                        <span className="text-white">Credit/Debit Card</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">We support these payment methods for your convenience.</p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-6 mt-6 bg-gradient-to-r from-minecraft-primary to-minecraft-secondary hover:from-minecraft-primary/90 hover:to-minecraft-secondary/90 text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(94,66,227,0.3)]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Additional info */}
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>
                By proceeding, you agree to our{" "}
                <Link
                  to="/terms-of-service"
                  className="text-minecraft-secondary hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/refund-policy"
                  className="text-minecraft-secondary hover:underline"
                >
                  Refund Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-black/50 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © {new Date().getFullYear()} EnderHOST<sup className="text-xs">®</sup>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PurchaseForm;
