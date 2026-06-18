import React from "react";
import { CheckCircle } from "lucide-react";

interface RegisterCTAProps {
  setIsLoggedIn: (value: boolean) => void;
}

export default function RegisterCTA({ setIsLoggedIn }: RegisterCTAProps) {
  const bullets = [
    "Free Registration",
    "100% Verified Profiles",
    "Privacy Guaranteed",
    "Dedicated Support",
  ];

  return (
    <section className="bg-gradient-to-br from-[#8B1A4A] to-[#4A0A23] py-20 px-4" data-testid="section-register">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6" data-testid="register-title">
            Begin Your Love Story Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg" data-testid="register-subtitle">
            Join 50 lakh+ happy couples who found their match on Rishtey
          </p>
          
          <ul className="space-y-4 mb-10">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-black/20 border-l-4 border-[#D4AF37] p-6 rounded-r-lg max-w-lg">
            <p className="font-serif italic text-xl mb-2">"The best decision I ever made."</p>
            <p className="text-sm font-semibold text-[#D4AF37]">— Kavita, Mumbai</p>
          </div>
        </div>
        
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl relative" data-testid="register-card">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl z-0 border border-white/60"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold text-[#8B1A4A] mb-6 text-center">Create Free Profile</h3>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
              <div className="space-y-4">
                <input type="text" placeholder="Your full name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all" required />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all" required />
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all" required />
                
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex-1 hover:bg-gray-100">
                    <input type="radio" name="gender" value="Male" className="text-[#8B1A4A] focus:ring-[#8B1A4A]" required />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex-1 hover:bg-gray-100">
                    <input type="radio" name="gender" value="Female" className="text-[#8B1A4A] focus:ring-[#8B1A4A]" required />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all text-gray-700" required />
                  <input type="text" placeholder="City" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all" required />
                </div>
                
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all text-gray-700" required defaultValue="">
                  <option value="" disabled>Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Christian">Christian</option>
                  <option value="Jain">Jain</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Other">Other</option>
                </select>
                
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all text-gray-700" required defaultValue="">
                  <option value="" disabled>Mother Tongue</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Urdu">Urdu</option>
                  <option value="Other">Other</option>
                </select>

                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] focus:border-transparent transition-all text-gray-700" required defaultValue="">
                  <option value="" disabled>Profile Created By</option>
                  <option value="Self">Self</option>
                  <option value="Parent">Parent</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Relative">Relative</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] hover:from-[#C4A02A] hover:to-[#A37B12] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1 mt-6" data-testid="btn-create-profile">
                Create Free Profile
              </button>
            </form>

            <div className="mt-6 text-center">
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="text-gray-600 hover:text-[#8B1A4A] font-medium transition-colors"
                data-testid="link-login"
              >
                Already a member? <span className="underline">Login here</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
