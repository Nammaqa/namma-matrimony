import React from "react";
import bgImage from "@/assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-16 pb-12" data-testid="section-hero">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Indian Wedding" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A4A]/90 to-[#4A0A23]/90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#1A0A14] text-sm font-bold mb-6 shadow-lg" data-testid="hero-badge">
          Trusted by 50 Lakh+ Families
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md max-w-4xl" data-testid="hero-title">
          Find Your Perfect Life Partner
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow" data-testid="hero-subtitle">
          India's most trusted matrimonial platform connecting hearts across the world
        </p>
        
        <div className="w-full max-w-4xl glass-card rounded-2xl p-4 md:p-6 mb-12 shadow-2xl" data-testid="hero-search-form">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Looking For</label>
              <select className="bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" data-testid="input-looking-for">
                <option value="bride">Bride</option>
                <option value="groom">Groom</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Age</label>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue={21} min={18} max={70} className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" data-testid="input-age-from" />
                <span className="text-white/80">to</span>
                <input type="number" defaultValue={30} min={18} max={70} className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" data-testid="input-age-to" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Religion</label>
              <select className="bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" data-testid="input-religion">
                <option>Hindu</option>
                <option>Muslim</option>
                <option>Sikh</option>
                <option>Christian</option>
                <option>Jain</option>
                <option>Buddhist</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Location</label>
              <input type="text" placeholder="Enter city or state" className="bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" data-testid="input-location" />
            </div>
            
            <div className="flex flex-col justify-end">
              <button className="w-full bg-gradient-to-r from-[#8B1A4A] to-[#C72E6C] hover:from-[#7A1540] hover:to-[#B5255F] text-white font-bold rounded-lg px-4 py-2.5 shadow-lg transform transition active:scale-95 flex items-center justify-center gap-2" data-testid="btn-find-match">
                Find My Match
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl" data-testid="hero-stats">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">50L+</div>
            <div className="text-sm font-medium text-white/90">Profiles</div>
          </div>
          <div className="text-center border-l border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">5L+</div>
            <div className="text-sm font-medium text-white/90">Couples Married</div>
          </div>
          <div className="text-center md:border-l border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">150+</div>
            <div className="text-sm font-medium text-white/90">Countries</div>
          </div>
          <div className="text-center border-l border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">24/7</div>
            <div className="text-sm font-medium text-white/90">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
