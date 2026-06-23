import { useLocation } from "wouter";
import { CheckCircle } from "lucide-react";

interface RegisterCTAProps {
  setIsLoggedIn: (value: boolean) => void;
}

const bullets = [
  "Free Registration",
  "100% Verified Profiles",
  "Privacy Guaranteed",
  "Dedicated Support",
];

export default function RegisterCTA({ setIsLoggedIn }: RegisterCTAProps) {
  const [, navigate] = useLocation();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <section className="bg-gradient-to-br from-[#8B1A4A] to-[#4A0A23] py-20 px-4" data-testid="section-register">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6" data-testid="register-title">
            Begin Your Love Story Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg" data-testid="register-subtitle">
            Join 50 lakh+ happy couples who found their match on Namma Matrimony
          </p>

          <ul className="space-y-4 mb-10">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="bg-black/20 border-l-4 border-[#D4AF37] p-6 rounded-r-lg max-w-lg">
            <p className="font-serif italic text-xl mb-2">"The best decision I ever made."</p>
            <p className="text-sm font-semibold text-[#D4AF37]">— Kavita, Mumbai</p>
          </div>
        </div>

        <div className="w-full max-w-md" data-testid="register-card">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#8B1A4A] mb-6 text-center">Create Free Profile</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your full name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm transition-all" required />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm transition-all" required />
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm transition-all" required />

              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex-1 hover:bg-gray-100">
                  <input type="radio" name="gender" value="Male" className="text-[#8B1A4A]" required />
                  <span className="text-gray-700 text-sm">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex-1 hover:bg-gray-100">
                  <input type="radio" name="gender" value="Female" className="text-[#8B1A4A]" required />
                  <span className="text-gray-700 text-sm">Female</span>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm text-gray-700" required />
                <input type="text" placeholder="City" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm" required />
              </div>

              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm text-gray-700" required defaultValue="">
                <option value="" disabled>Religion</option>
                <option>Hindu</option><option>Muslim</option><option>Sikh</option>
                <option>Christian</option><option>Jain</option><option>Buddhist</option><option>Other</option>
              </select>

              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm text-gray-700" required defaultValue="">
                <option value="" disabled>Mother Tongue</option>
                <option>Hindi</option><option>Tamil</option><option>Telugu</option><option>Marathi</option>
                <option>Bengali</option><option>Punjabi</option><option>Gujarati</option><option>Malayalam</option>
                <option>Kannada</option><option>Urdu</option><option>Other</option>
              </select>

              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A] text-sm text-gray-700" required defaultValue="">
                <option value="" disabled>Profile Created By</option>
                <option>Self</option><option>Parent</option><option>Sibling</option><option>Friend</option><option>Relative</option>
              </select>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] hover:from-[#C4A02A] hover:to-[#A37B12] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1 mt-2"
                data-testid="btn-create-profile"
              >
                Create Free Profile & Find Matches →
              </button>
            </form>

            <div className="mt-5 text-center">
              <button
                onClick={handleLogin}
                className="text-gray-600 hover:text-[#8B1A4A] font-medium transition-colors text-sm"
                data-testid="link-login"
              >
                Already a member? <span className="text-[#8B1A4A] font-bold underline">Login here</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
