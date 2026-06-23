import React from "react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0D0508] text-gray-400 pt-16 pb-8 px-4" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-serif font-bold text-[#D4AF37]">Namma Matrimony</span>
          </div>
          <p className="text-white/60 font-serif italic">Where Hearts Find Home</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">About</h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Namma Matrimony is India's most trusted matrimonial platform. We blend traditional values with modern technology to help you find your perfect life partner.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Home</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">How It Works</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Success Stories</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Premium Plans</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Communities</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Hindu Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Muslim Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Sikh Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Christian Matrimony</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">NRI Matches</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Help Center</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Safety Tips</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Terms of Use</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors pointer-events-none">Report Abuse</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-center md:text-right">
            © 2025 NammaMatrimony.com · All rights reserved · Made with love for India
          </div>
        </div>
      </div>
    </footer>
  );
}
