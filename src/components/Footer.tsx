
import { BookOpen, Server, Users, GamepadIcon, CreditCard, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/e1341b42-612c-4eb3-b5f9-d6ac7e41acf3.png" 
                alt="EnderHOST Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">Ender</span>
                <span className="text-minecraft-secondary">HOST</span>
              </span>
            </div>
            <p className="text-gray-400 text-base mb-6 max-w-md">
              Premium Minecraft server hosting with 24/7 support, instant setup, and powerful hardware.
            </p>
          </div>

          {/* Resources */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2 text-base">
                  <BookOpen className="w-5 h-5" />
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2 text-base">
                  <Server className="w-5 h-5" />
                  Minecraft Servers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2 text-base">
                  <Users className="w-5 h-5" />
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Client Area */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-6">Client Area</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2 text-base">
                  <MessageSquare className="w-5 h-5" />
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2 text-base">
                  <GamepadIcon className="w-5 h-5" />
                  Game Panel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2 text-base">
                  <CreditCard className="w-5 h-5" />
                  Billing Area
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary text-base">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary text-base">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 pt-10 border-t border-white/10 mt-6">
            <p className="text-gray-400 text-base">
              Copyright © {new Date().getFullYear()} EnderHOST. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
