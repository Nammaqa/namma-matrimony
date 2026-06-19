import { useLocation } from "wouter";
import bgImage from "@/assets/images/hero-bg.png";

interface HeroProps {
  setIsLoggedIn: (v: boolean) => void;
}

export default function Hero({ setIsLoggedIn }: HeroProps) {
  const [, navigate] = useLocation();

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-16 pb-12" data-testid="section-hero">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Indian Wedding" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1A4A]/90 to-[#4A0A23]/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#1A0A14] text-sm font-bold mb-6 shadow-lg" data-testid="hero-badge">
          Trusted by 50 Lakh+ Families Across India
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md max-w-4xl" data-testid="hero-title">
          Find Your Perfect Life Partner
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow" data-testid="hero-subtitle">
          India's most trusted matrimonial platform — connecting hearts with love, tradition, and care
        </p>

        <div className="w-full max-w-4xl glass-card rounded-2xl p-4 md:p-6 mb-12 shadow-2xl" data-testid="hero-search-form">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Looking For</label>
              <select className="bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none">
                <option>Bride</option>
                <option>Groom</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Age</label>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue={21} min={18} max={70} className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                <span className="text-white/80">to</span>
                <input type="number" defaultValue={30} min={18} max={70} className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Religion</label>
              <select className="bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none">
                <option>Hindu</option><option>Muslim</option><option>Sikh</option>
                <option>Christian</option><option>Jain</option><option>Buddhist</option><option>Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-white/80 uppercase mb-1">Location</label>
              <input type="text" placeholder="Enter city or state" className="bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
            </div>
            <div className="flex flex-col justify-end">
              <button onClick={scrollToRegister} className="w-full bg-gradient-to-r from-[#8B1A4A] to-[#C72E6C] hover:from-[#7A1540] hover:to-[#B5255F] text-white font-bold rounded-lg px-4 py-2.5 shadow-lg transition-all active:scale-95">
                Find My Match
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <button onClick={scrollToRegister} className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#C4A030] text-[#1A0A14] font-bold rounded-xl shadow-lg transition-all hover:-translate-y-0.5" data-testid="btn-register-hero">
            Register Free — It Takes 2 Minutes
          </button>
          <button onClick={handleLogin} className="px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all" data-testid="btn-login-hero">
            Already a Member? Login
          </button>
        </div>
      </div>
    </section>
  );
}
