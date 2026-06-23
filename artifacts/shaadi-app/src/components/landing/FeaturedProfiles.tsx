import { useLocation } from "wouter";
import { Shield, Heart, Users, Star, Lock, Globe } from "lucide-react";

interface FeaturedProfilesProps {
  setIsLoggedIn: (v: boolean) => void;
}

const communities = [
  { emoji: "🕉️", label: "Hindu Matrimony", desc: "Brahmin, Kshatriya, Vaishya & more", gradient: "from-orange-50 to-amber-50", border: "border-orange-100", icon: "text-orange-500", religion: "Muslim" },
  { emoji: "☪️", label: "Muslim Matrimony", desc: "Sunni, Shia, Hanafi & more", gradient: "from-green-50 to-emerald-50", border: "border-green-100", icon: "text-green-600", religion: "Muslim" },
  { emoji: "🙏", label: "Sikh Matrimony", desc: "Jat, Khatri, Arora & more", gradient: "from-blue-50 to-indigo-50", border: "border-blue-100", icon: "text-blue-600", religion: "Muslim" },
  { emoji: "✝️", label: "Christian Matrimony", desc: "Catholic, Protestant, Orthodox", gradient: "from-purple-50 to-violet-50", border: "border-purple-100", icon: "text-purple-600", religion: "Muslim" },
  { emoji: "🌍", label: "NRI Matches", desc: "USA, UK, Canada, UAE & more", gradient: "from-sky-50 to-cyan-50", border: "border-sky-100", icon: "text-sky-600" },
  { emoji: "💎", label: "Jain & Other", desc: "Shwetambar, Digambar & more", gradient: "from-pink-50 to-rose-50", border: "border-pink-100", icon: "text-pink-600", religion: "Muslim" },
];

const trustFeatures = [
  { icon: Shield, label: "Every Profile Verified", desc: "Our team reviews each profile before it goes live", color: "text-blue-500 bg-blue-50" },
  { icon: Lock, label: "100% Privacy", desc: "You control who can see your contact details", color: "text-purple-500 bg-purple-50" },
  { icon: Heart, label: "Smart Compatibility", desc: "Our algorithm matches based on 40+ preferences", color: "text-rose-500 bg-rose-50" },
  { icon: Users, label: "Dedicated Support", desc: "Personal relationship managers available 24/7", color: "text-emerald-500 bg-emerald-50" },
  { icon: Star, label: "Kundali Matching", desc: "Traditional horoscope with modern insights", color: "text-amber-500 bg-amber-50" },
  { icon: Globe, label: "Global Reach", desc: "Connect with profiles from across the world", color: "text-indigo-500 bg-indigo-50" },
];

export default function FeaturedProfiles({ setIsLoggedIn }: FeaturedProfilesProps) {
  const [, navigate] = useLocation();

  const handleCommunityClick = (religion?: string) => {
    setIsLoggedIn(true);
    if (religion) {
      navigate(`/dashboard?religion=${religion}`);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <section className="bg-[#FFF8F5] py-20 px-4" data-testid="section-communities">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-2">Find Your Community</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Browse by Religion & Community</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We have verified profiles from every community across India and worldwide. Find someone who shares your values and traditions.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
            {communities.map((c) => (
              <button
                key={c.label}
                onClick={() => handleCommunityClick(c.religion)}
                className={`bg-gradient-to-br ${c.gradient} border ${c.border} rounded-2xl p-6 text-left hover:shadow-lg hover:-translate-y-1 transition-all group`}
                data-testid={`community-card-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h4 className="font-serif font-bold text-gray-900 mb-1 group-hover:text-[#8B1A4A] transition-colors">{c.label}</h4>
                <p className="text-xs text-gray-500">{c.desc}</p>
                <div className="mt-3 text-xs font-bold text-[#8B1A4A] group-hover:underline">Browse Profiles →</div>
              </button>
            ))}
          </div>
  // ...

          <div className="text-center">
            <button onClick={() => handleCommunityClick()} className="bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] hover:from-[#C4A02A] hover:to-[#A37B12] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1" data-testid="btn-browse-all">
              Login to Browse All Communities
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4" data-testid="section-trust">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-[#8B1A4A] font-bold uppercase tracking-widest text-sm mb-2">Why Namma Matrimony</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Built on Trust, Powered by Care</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{f.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
