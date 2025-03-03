
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  const navigate = useNavigate();

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
      
      {/* Back button - repositioned for mobile */}
      <button 
        onClick={() => navigate("/")}
        className="absolute md:top-8 md:left-8 top-20 left-4 p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2 z-10"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>
      
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Terms of Service</h1>
          
          <div className="text-gray-300 space-y-8">
            {/* Introduction */}
            <div>
              <p className="mb-6 text-lg">
                Welcome to Ender Host! By accessing or using our services, you agree to the following terms and conditions. 
                Please read them carefully before purchasing or using any of our hosting services. These terms constitute a legally binding agreement between you (the customer) and Ender Host (the service provider).
              </p>
            </div>
            
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Server Usage Policy</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Our hosting services are designed for fair use only, which means using server resources in a reasonable manner consistent with the purchased plan specifications.</li>
                <li>Any illegal activities, including but not limited to DDoSing, crypto mining, distributing malware, hosting phishing websites, copyright infringement, or excessive resource usage beyond plan limits, will result in immediate termination of your account without refund.</li>
                <li>We reserve the right to suspend or terminate servers that violate our policies or disrupt the performance of our shared hosting infrastructure. Ender Host will make reasonable attempts to notify customers before taking action unless immediate action is necessary to protect our systems or other customers.</li>
                <li>Service usage must comply with all applicable local, state, national, and international laws and regulations. Users are responsible for ensuring their content and activities adhere to these laws.</li>
              </ul>
            </div>
            
            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. Refund and Cancellation Policy</h2>
              <p className="mb-4 text-lg">
                For detailed information about our refund and cancellation procedures, please visit our complete <Link to="/refund-policy" className="text-minecraft-secondary hover:underline">Refund Policy</Link> page. Here's a summary of key points:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Customers can request a full refund within 24 hours of purchase if the service is not delivered as advertised or is not functioning properly due to issues on our end. To request a refund, contact our support team through the official support channels with your order information.</li>
                <li>Refunds will not be provided for violations of our Terms of Service, or for service cancellations after the initial 24-hour period.</li>
                <li>For monthly subscriptions, you may cancel your service at any time through your client portal. No partial refunds will be issued for unused portions of the current billing period.</li>
                <li>For annual plans, no refunds will be provided after the initial 24-hour period, as these plans are offered at a significant discount compared to monthly pricing.</li>
                <li>Cancellations must be completed at least 24 hours before the next billing cycle to avoid being charged for the upcoming period.</li>
              </ul>
            </div>
            
            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. Payment and Late Fees</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Servers will be automatically suspended 1 day after a missed payment. During suspension, your server will be inaccessible, but your data will remain intact for a limited time.</li>
                <li>If payment is not received within 5 days of the due date, all server files will be deleted permanently without possibility of recovery. We send multiple reminders before deletion occurs, but it is ultimately the customer's responsibility to ensure timely payment.</li>
                <li>We accept payments via credit card, PayPal, and cryptocurrency. All prices are listed in USD unless otherwise specified.</li>
                <li>For customers with multiple services, partial payments will be applied to the oldest outstanding invoices first.</li>
                <li>Ender Host reserves the right to change pricing at any time, but existing customers will receive at least 30 days' notice before any price increases take effect on their accounts.</li>
              </ul>
            </div>
            
            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Liability and Backups</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>We take regular offsite backups of all server data as part of our disaster recovery plan, but customers are strongly encouraged to maintain their own regular backups of critical data. Our backup system is designed for disaster recovery purposes rather than individual file recovery.</li>
                <li>Ender Host is not responsible for any data loss, whether caused by hardware failure, software issues, or human error. Our maximum liability is limited to the amount paid for the service during the month in which the incident occurred.</li>
                <li>While we implement industry-standard security measures, we cannot guarantee absolute protection against sophisticated attacks, zero-day vulnerabilities, or security issues arising from customer-installed software. Customers are responsible for maintaining the security of their applications and access credentials.</li>
                <li>We do not provide compensation for downtime except as specified in our Service Level Agreement (SLA) for business-tier hosting plans.</li>
                <li>Customers indemnify and hold Ender Host harmless from any claims resulting from the customer's content or use of our services.</li>
              </ul>
            </div>
            
            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Community Guidelines</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Treat all users and staff members with respect in all communications, including support tickets, community forums, and social media interactions. We value constructive feedback but have zero tolerance for abusive language or behavior.</li>
                <li>Spamming, harassment, hate speech, or toxic behavior toward our staff or other community members may result in account suspension or termination without refund, at our sole discretion.</li>
                <li>Our support team aims to resolve all issues promptly and professionally. We expect customers to provide accurate information when reporting issues and to follow troubleshooting instructions when provided.</li>
                <li>When posting in our community forums or Discord server, please follow the channel-specific rules and keep discussions on-topic. Share knowledge freely and help foster a supportive community environment.</li>
                <li>We encourage reporting of bugs, security vulnerabilities, or policy violations through appropriate channels. Responsible disclosure of security issues is appreciated and may be eligible for recognition in our security acknowledgments.</li>
              </ul>
            </div>
            
            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Privacy Policy</h2>
              <p className="text-lg mb-3">
                By using our services, you agree to our <Link to="/privacy-policy" className="text-minecraft-secondary hover:underline">Privacy Policy</Link>, which outlines how we handle your data. Key points include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>We collect only the information necessary to provide our services, including contact details, payment information, and server usage statistics.</li>
                <li>Your personal data is never sold to third parties. We may share limited information with service providers who help us deliver our services (such as payment processors).</li>
                <li>We implement technical and organizational measures to protect your data against unauthorized access.</li>
                <li>You have the right to request a copy of your personal data or to have it deleted, subject to our legal obligations to maintain certain records.</li>
                <li>For a complete understanding of our data practices, please review our full Privacy Policy document available on our website.</li>
              </ul>
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
