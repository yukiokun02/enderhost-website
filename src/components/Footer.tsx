
import { BookOpen, Server, Users, GamepadIcon, CreditCard, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col max-w-xl mx-auto">
          {/* Company Info */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/e1341b42-612c-4eb3-b5f9-d6ac7e41acf3.png" 
                alt="EnderHOST Logo" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">
                <span className="text-white">Ender</span>
                <span className="text-minecraft-secondary">HOST</span>
              </span>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Resources</h3>
            <ul className="space-y-3">
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Tutorials
                </a>
              </li>
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Minecraft Servers
                </a>
              </li>
            </ul>
          </div>

          {/* Client Area */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Client Area</h3>
            <ul className="space-y-3">
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Support
                </a>
              </li>
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                  <GamepadIcon className="w-4 h-4" />
                  Game Panel
                </a>
              </li>
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Billing Area
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Legal</h3>
            <ul className="space-y-3">
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary">
                  Terms of Service
                </a>
              </li>
              <li className="flex justify-center">
                <a href="#" className="text-gray-400 hover:text-minecraft-secondary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 text-center">
              Copyright © {new Date().getFullYear()} EnderHOST. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
