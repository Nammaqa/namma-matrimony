import React from "react";
import { Heart } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0D0508] text-gray-400 pt-16 pb-8 px-4" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-3xl font-serif font-bold text-[#D4AF37]">Rishtey</span>
          </div>
          <p className="text-white/60 font-serif italic">Where Hearts Find Home</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">About</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Rishtey is India's most trusted matrimonial platform. We blend traditional values with modern technology to help you find your perfect life partner.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Premium Plans</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Communities</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Hindu Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Muslim Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Sikh Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Christian Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">NRI Matches</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Report Abuse</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1A0A14] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A0A14] transition-all">
              <SiInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1A0A14] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A0A14] transition-all">
              <SiFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1A0A14] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A0A14] transition-all">
              <SiX className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1A0A14] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A0A14] transition-all">
              <SiYoutube className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-xs text-center md:text-right">
            © 2025 Rishtey.com · All rights reserved · Made with love for India
          </div>
        </div>
      </div>
    </footer>
  );
}
