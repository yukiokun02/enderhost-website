
import { BookOpen, Server, Users, GamepadIcon, CreditCard, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Server className="w-6 h-6 text-minecraft-secondary" />
              <span className="text-2xl font-bold text-white">BlockyHost</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    Minecraft Servers
                  </a>
                </li>
              </ul>
            </div>

            {/* Client Area */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Client Area</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                    <GamepadIcon className="w-4 h-4" />
                    Game Panel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Billing Area
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-center">
            Copyright © {new Date().getFullYear()} BlockyHost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
