import React from "react";
import { UserPlus, Search, Heart } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-[#8B1A4A] font-bold uppercase tracking-widest text-sm mb-2" data-testid="hiw-eyebrow">Simple & Easy</h3>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-16" data-testid="hiw-title">Your Journey to Forever</h2>
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] border-t-2 border-dashed border-gray-200 z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center max-w-xs group" data-testid="step-1">
            <div className="w-24 h-24 rounded-full bg-[#8B1A4A] text-white flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <UserPlus className="w-10 h-10" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-white font-bold flex items-center justify-center absolute top-0 right-1/4 shadow-md">1</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Create Your Profile</h4>
            <p className="text-gray-600">Add your details, preferences, family background and photos in minutes</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center max-w-xs group" data-testid="step-2">
            <div className="w-24 h-24 rounded-full bg-[#8B1A4A] text-white flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Search className="w-10 h-10" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-white font-bold flex items-center justify-center absolute top-0 right-1/4 shadow-md">2</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Discover Matches</h4>
            <p className="text-gray-600">Our smart algorithm finds the most compatible partners for you daily</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center max-w-xs group" data-testid="step-3">
            <div className="w-24 h-24 rounded-full bg-[#8B1A4A] text-white flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-white font-bold flex items-center justify-center absolute top-0 right-1/4 shadow-md">3</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Connect & Meet</h4>
            <p className="text-gray-600">Express interest, chat, video call, and plan your future together</p>
          </div>
        </div>
      </div>
    </section>
  );
}
