
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, CreditCard, Check, Cpu, HardDrive, MemoryStick, Server, CloudLightning } from "lucide-react";
import { createMinecraftServer } from "@/services/pterodactylService";

const billingFormSchema = z.object({
  serverName: z.string().min(3, "Server name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  country: z.string().min(1, "Please select a country"),
  state: z.string().min(1, "Please enter your state/province"),
  city: z.string().min(1, "Please enter your city"),
  address: z.string().min(3, "Please enter your address"),
  zipCode: z.string().min(3, "Please enter a valid zip/postal code"),
  // Making payment method optional for testing
  paymentMethod: z.string().optional(),
});

type BillingFormValues = z.infer<typeof billingFormSchema>;

export default function Billing() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const form = useForm<BillingFormValues>({
    resolver: zodResolver(billingFormSchema),
    defaultValues: {
      serverName: "",
      email: "",
      password: "",
      country: "",
      state: "",
      city: "",
      address: "",
      zipCode: "",
      paymentMethod: "none", // Set default to "none" for testing
    },
  });

  useEffect(() => {
    if (location.state?.plan) {
      setSelectedPlan(location.state.plan);
    } else {
      toast.error("Please select a plan first");
      navigate("/");
    }
  }, [location.state, navigate]);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    const userEmail = localStorage.getItem("userEmail");
    
    if (authStatus === "true" && userEmail) {
      setIsAuthenticated(true);
      form.setValue("email", userEmail);
    }
  }, [form]);

  const onSubmit = async (data: BillingFormValues) => {
    if (!selectedPlan) {
      toast.error("Please select a plan first");
      return;
    }

    setIsLoading(true);
    try {
      // Skip payment processing for testing
      
      await createMinecraftServer({
        name: data.serverName,
        plan: selectedPlan,
      }, data.email);
      
      if (!isAuthenticated) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", data.email);
      }
      
      toast.success("Your Minecraft server has been created successfully!");
      
      navigate("/");
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("Failed to complete your order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-minecraft-secondary mx-auto mb-4" />
          <p className="text-white">Loading your plan details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative">
      <div 
        className="fixed inset-0 opacity-10 mix-blend-soft-light pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#8E9196 0.5px, transparent 0.5px), linear-gradient(to right, #8E9196 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity justify-center">
            <img 
              src="/lovable-uploads/e1341b42-612c-4eb3-b5f9-d6ac7e41acf3.png" 
              alt="EnderHOST Logo" 
              className="w-12 h-12"
            />
            <span className="font-bold text-2xl">
              <span className="text-white">Ender</span>
              <span className="text-minecraft-secondary">HOST</span>
            </span>
          </a>
          <h1 className="mt-6 text-3xl font-bold text-white">Complete Your Order</h1>
          <p className="mt-2 text-gray-400">You're just a few steps away from your new Minecraft server</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-black/50 border border-white/10 text-white backdrop-blur-md shadow-lg overflow-hidden">
              <CardHeader className="bg-minecraft-secondary/20 border-b border-white/10">
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">{selectedPlan.name}</h3>
                    <p className="text-gray-400">{selectedPlan.players} players</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MemoryStick className="h-4 w-4 text-minecraft-secondary" />
                      <span className="text-gray-300">{selectedPlan.features[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-minecraft-secondary" />
                      <span className="text-gray-300">{selectedPlan.features[1]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-4 w-4 text-minecraft-secondary" />
                      <span className="text-gray-300">{selectedPlan.features[2]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CloudLightning className="h-4 w-4 text-minecraft-secondary" />
                      <span className="text-gray-300">{selectedPlan.features[3]}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white">₹{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span className="text-minecraft-secondary">₹{selectedPlan.price}/month</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="bg-black/50 border border-white/10 text-white backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle>Checkout</CardTitle>
                <CardDescription className="text-gray-400">
                  {isAuthenticated 
                    ? "Complete your order using your account information" 
                    : "Create an account or sign in to complete your order"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Server className="h-5 w-5" /> 
                        Server Details
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="serverName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Server Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="My Awesome Server" 
                                {...field} 
                                className="bg-white/5 border-white/10 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <CreditCard className="h-5 w-5" /> 
                        Account Information
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your@email.com" 
                                {...field} 
                                disabled={isAuthenticated}
                                className="bg-white/5 border-white/10 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      {!isAuthenticated && (
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input 
                                  type="password" 
                                  placeholder="••••••••" 
                                  {...field} 
                                  className="bg-white/5 border-white/10 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <h3 className="text-lg font-medium">Billing Address</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-gray-900 border-white/10 text-white">
                                  <SelectItem value="IN">India</SelectItem>
                                  <SelectItem value="US">United States</SelectItem>
                                  <SelectItem value="UK">United Kingdom</SelectItem>
                                  <SelectItem value="CA">Canada</SelectItem>
                                  <SelectItem value="AU">Australia</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State/Province</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="State" 
                                  {...field} 
                                  className="bg-white/5 border-white/10 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="City" 
                                  {...field} 
                                  className="bg-white/5 border-white/10 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ZIP/Postal Code</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="ZIP Code" 
                                  {...field} 
                                  className="bg-white/5 border-white/10 text-white"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Street Address" 
                                {...field} 
                                className="bg-white/5 border-white/10 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-minecraft-secondary hover:bg-minecraft-dark text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Complete Order
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <p className="text-sm text-gray-400">
                  Your server will be created instantly after checkout
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
