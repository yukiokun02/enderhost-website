
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-16 relative">
      {/* Global Grid Pattern */}
      <div 
        className="fixed inset-0 opacity-10 mix-blend-soft-light pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#8E9196 0.5px, transparent 0.5px), linear-gradient(to right, #8E9196 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Terms of Service</h1>
          
          <div className="text-gray-300 space-y-8">
            {/* Introduction */}
            <div>
              <p className="mb-6">
                Welcome to Ender Host! By accessing or using our services, you agree to the following terms and conditions. 
                Please read them carefully before purchasing or using any of our hosting services.
              </p>
            </div>
            
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Server Usage Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Our hosting services are for fair use only.</li>
                <li>Any illegal activities, including DDoSing, crypto mining, or excessive resource usage, will result in immediate termination without refund.</li>
                <li>We reserve the right to suspend or terminate servers that violate our policies.</li>
              </ul>
            </div>
            
            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. Refund and Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Customers can request a full refund within 24 hours of purchase if the service is not delivered or is not functioning properly.</li>
                <li>Refunds will not be provided for violations of our Terms of Service.</li>
              </ul>
            </div>
            
            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. Payment and Late Fees</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Servers will be suspended 1 day after a missed payment.</li>
                <li>If payment is not received within 5 days, all server files will be deleted permanently.</li>
              </ul>
            </div>
            
            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Liability and Backups</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We take regular offsite backups, but customers are responsible for their own data.</li>
                <li>We are not responsible for any data loss.</li>
              </ul>
            </div>
            
            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Community Guidelines</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Treat all users and staff members with respect.</li>
                <li>Spamming, harassment, or toxic behavior may result in account suspension.</li>
              </ul>
            </div>
            
            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Privacy Policy</h2>
              <p>
                By using our services, you agree to our Privacy Policy, which outlines how we handle your data.
              </p>
            </div>
            
            {/* Last updated */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
