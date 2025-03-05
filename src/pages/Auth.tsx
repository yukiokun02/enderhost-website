import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, Link } from "react-router-dom";
import { 
  LogIn, 
  UserPlus, 
  Loader2, 
  Mail, 
  X, 
  Eye, 
  EyeOff, 
  User, 
  Lock, 
  ChevronLeft 
} from "lucide-react";
import { toast } from "sonner";

const mockedAuth = {
  signInWithEmail: (email: string, password: string) => 
    new Promise<void>((resolve) => setTimeout(resolve, 1500)),
  signUpWithEmail: (fullName: string, username: string, email: string, password: string) => 
    new Promise<void>((resolve) => setTimeout(resolve, 1500)),
};

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();
  
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signInEmail || !signInPassword) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsLoading(true);
    try {
      await mockedAuth.signInWithEmail(signInEmail, signInPassword);
      
      localStorage.setItem("isAuthenticated", "true");
      
      toast.success("Successfully signed in");
      
      navigate("/");
    } catch (error) {
      toast.error("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !username || !signUpEmail || !signUpPassword || !confirmPassword) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (signUpPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (!agreeToTerms) {
      toast.error("You must agree to the Terms & Conditions and Privacy Policy");
      return;
    }
    
    setIsLoading(true);
    try {
      await mockedAuth.signUpWithEmail(fullName, username, signUpEmail, signUpPassword);
      
      localStorage.setItem("isAuthenticated", "true");
      
      toast.success("Account created successfully");
      
      navigate("/");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      <div 
        className="fixed inset-0 opacity-10 mix-blend-soft-light pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#8E9196 0.5px, transparent 0.5px), linear-gradient(to right, #8E9196 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>
      
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
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
        </div>
        
        <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(94,66,227,0.1)]">
          <div className="flex mb-8 border-b border-white/10">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex items-center gap-2 py-3 px-4 font-medium transition-colors ${
                activeTab === "signin"
                  ? "text-white border-b-2 border-minecraft-secondary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex items-center gap-2 py-3 px-4 font-medium transition-colors ${
                activeTab === "signup"
                  ? "text-white border-b-2 border-minecraft-secondary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </button>
          </div>
          
          {activeTab === "signin" ? (
            <form onSubmit={handleSignIn}>
              <h1 className="text-2xl font-bold text-white mb-2">Welcome Back!</h1>
              <p className="text-gray-400 mb-6">Sign in to access your Minecraft servers</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Email Address / Username"
                    className="pl-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input
                    type={showSignInPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 pr-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    onClick={() => setShowSignInPassword(!showSignInPassword)}
                  >
                    {showSignInPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-500 bg-white/5 text-minecraft-secondary focus:ring-minecraft-secondary"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="#" className="text-sm font-medium text-minecraft-secondary hover:text-white transition-colors">
                      Forgot password?
                    </a>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-minecraft-secondary hover:bg-minecraft-dark text-white flex items-center justify-center gap-3 py-6 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(94,66,227,0.3)] mt-6"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      <span>Sign In</span>
                    </>
                  )}
                </Button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-minecraft-secondary hover:text-white transition-colors font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignUp}>
              <h1 className="text-2xl font-bold text-white mb-2">Create Your Account</h1>
              <p className="text-gray-400 mb-6">Join us and start hosting your Minecraft servers</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Username"
                    className="pl-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="pl-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input
                    type={showSignUpPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-10 pr-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                  >
                    {showSignUpPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="pl-10 pr-10 py-6 bg-white/5 border-white/10 rounded-xl text-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-500 bg-white/5 text-minecraft-secondary focus:ring-minecraft-secondary"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                    I agree to the{" "}
                    <Link to="/terms-of-service" className="text-minecraft-secondary hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="text-minecraft-secondary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-minecraft-secondary hover:bg-minecraft-dark text-white flex items-center justify-center gap-3 py-6 rounded-xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(94,66,227,0.3)] mt-6"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span>Sign Up</span>
                    </>
                  )}
                </Button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signin")}
                    className="text-minecraft-secondary hover:text-white transition-colors font-medium"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
