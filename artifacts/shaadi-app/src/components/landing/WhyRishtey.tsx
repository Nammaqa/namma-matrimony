import React from "react";
import { ShieldCheck, Sparkles, Lock, SlidersHorizontal, HeartHandshake, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Verified Profiles",
    desc: "Every profile manually reviewed by our team",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Matching",
    desc: "Smart algorithm finds your most compatible partners",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    desc: "Control exactly who sees your profile and contact details",
  },
  {
    icon: SlidersHorizontal,
    title: "40+ Smart Filters",
    desc: "Age, religion, location, income, horoscope and more",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "Personal relationship managers available 24/7",
  },
  {
    icon: Star,
    title: "Kundali Matching",
    desc: "Traditional horoscope compatibility with modern insights",
  },
];

export default function WhyRishtey() {
  return (
    <section className="bg-[#1A0A14] py-24 px-4" data-testid="section-why-rishtey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8E7] to-[#D4AF37] mb-4" data-testid="why-title">
            Why Millions Choose Namma Matrimony
          </h2>
          <p className="text-[#D4AF37] text-lg opacity-80" data-testid="why-subtitle">The most trusted name in matrimony</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all group" data-testid={`why-card-${i}`}>
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-colors">
                <f.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#1A0A14] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
