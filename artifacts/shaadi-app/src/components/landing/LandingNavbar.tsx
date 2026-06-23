import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";

interface LandingNavbarProps {
  setIsLoggedIn: (value: boolean) => void;
}

export default function LandingNavbar({ setIsLoggedIn }: LandingNavbarProps) {
  const [, navigate] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const targets = {
      "how-it-works": "success-stories",
      "success-stories": "why-rishtey",
      "why-rishtey": "register",
      register: "how-it-works",
    };
    const targetId = targets[id as keyof typeof targets] || id;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#8B1A4A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-md"
      data-testid="landing-navbar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2" data-testid="landing-logo">
          <button
            onClick={() => navigate("/dashboard/search")}
            className="text-2xl font-serif font-bold tracking-tight text-[#D4AF37] hover:opacity-90 transition-opacity"
          >
            Namma Matrimony
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <button
            onClick={() => scrollTo("how-it-works")}
            className="hover:text-[#D4AF37] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("success-stories")}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Success Stories
          </button>
          <button
            onClick={() => scrollTo("why-rishtey")}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Why Namma Matrimony
          </button>
          <button
            onClick={() => scrollTo("register")}
            className="hover:text-[#D4AF37] transition-colors"
          >
            Register Free
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLogin}
            className="px-5 py-2 text-sm font-semibold text-white border border-white/40 rounded-full hover:bg-white/10 transition-all"
            data-testid="landing-nav-login"
          >
            Login
          </button>
          <button
            onClick={() => scrollTo("register")}
            className="px-5 py-2 text-sm font-bold text-[#8B1A4A] bg-[#D4AF37] rounded-full hover:bg-[#C4A030] transition-all shadow-md"
            data-testid="landing-nav-register"
          >
            Register Free
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-btn"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#6A1238] border-t border-white/10 px-4 py-4 space-y-3">
          <button
            onClick={() => scrollTo("how-it-works")}
            className="block w-full text-left text-white/90 py-2 hover:text-[#D4AF37] text-sm"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("success-stories")}
            className="block w-full text-left text-white/90 py-2 hover:text-[#D4AF37] text-sm"
          >
            Success Stories
          </button>
          <button
            onClick={() => scrollTo("why-rishtey")}
            className="block w-full text-left text-white/90 py-2 hover:text-[#D4AF37] text-sm"
          >
            Why Namma Matrimony
          </button>
          <button
            onClick={() => scrollTo("register")}
            className="block w-full text-left text-white/90 py-2 hover:text-[#D4AF37] text-sm"
          >
            Register Free
          </button>
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleLogin}
              className="flex-1 py-2 text-sm font-semibold text-white border border-white/40 rounded-full hover:bg-white/10"
            >
              Login
            </button>
            <button
              onClick={() => scrollTo("register")}
              className="flex-1 py-2 text-sm font-bold text-[#8B1A4A] bg-[#D4AF37] rounded-full hover:bg-[#C4A030]"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
