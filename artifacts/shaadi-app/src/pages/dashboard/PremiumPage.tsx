import DashboardLayout from "@/components/matches/DashboardLayout";
import { Check, Crown, Star, Zap, Shield, MessageCircle, Eye, Search } from "lucide-react";

interface PremiumPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const plans = [
  {
    id: "silver",
    name: "Silver",
    icon: Star,
    duration: "3 Months",
    price: 1999,
    original: 3999,
    color: "gray",
    badge: "",
    features: [
      "Send up to 50 Interests",
      "View 100 Contact Numbers",
      "See who viewed your profile",
      "Advanced search filters",
      "Priority in search results",
      "WhatsApp support",
    ],
    cta: "Start Silver Plan",
  },
  {
    id: "gold",
    name: "Gold",
    icon: Crown,
    duration: "6 Months",
    price: 3499,
    original: 6999,
    color: "amber",
    badge: "Most Popular",
    features: [
      "Send Unlimited Interests",
      "View Unlimited Contact Numbers",
      "See who viewed & liked your profile",
      "All Silver features",
      "AI-powered match suggestions",
      "Dedicated relationship manager",
      "Horoscope matching report",
      "Video call feature",
    ],
    cta: "Start Gold Plan",
  },
  {
    id: "diamond",
    name: "Diamond",
    icon: Zap,
    duration: "12 Months",
    price: 5999,
    original: 11999,
    color: "blue",
    badge: "Best Value",
    features: [
      "Everything in Gold",
      "Personal matchmaking service",
      "Background verification",
      "Premium profile badge",
      "Featured in top search results",
      "Kundali matching service",
      "Priority 24/7 support",
      "Profile review by expert",
    ],
    cta: "Start Diamond Plan",
  },
];

const colorMap: Record<string, { card: string; badge: string; btn: string; icon: string }> = {
  gray: { card: "border-gray-200", badge: "bg-gray-100 text-gray-700", btn: "bg-gray-800 hover:bg-gray-900 text-white", icon: "bg-gray-100 text-gray-700" },
  amber: { card: "border-[#D4AF37] shadow-xl shadow-amber-100", badge: "bg-[#D4AF37] text-[#1A0A14]", btn: "bg-[#D4AF37] hover:bg-[#C4A030] text-[#1A0A14]", icon: "bg-amber-100 text-amber-700" },
  blue: { card: "border-blue-400 shadow-xl shadow-blue-100", badge: "bg-blue-600 text-white", btn: "bg-blue-600 hover:bg-blue-700 text-white", icon: "bg-blue-100 text-blue-700" },
};

const whyPremium = [
  { icon: MessageCircle, title: "Direct Connect", desc: "Message matches directly without restrictions" },
  { icon: Eye, title: "See Who Viewed You", desc: "Know exactly who's interested in your profile" },
  { icon: Search, title: "Advanced Matching", desc: "AI-powered compatibility scoring and recommendations" },
  { icon: Shield, title: "Verified Profiles", desc: "Access to identity-verified premium members only" },
];

export default function PremiumPage({ setIsLoggedIn }: PremiumPageProps) {
  return (
    <DashboardLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="premium-page">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#8B1A4A] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Crown className="h-4 w-4 text-[#D4AF37]" /> Premium Membership
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-3">Upgrade Your Love Journey</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Join lakhs of premium members who found their perfect partner faster with Namma Matrimony Premium</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const colors = colorMap[plan.color];
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl border-2 p-6 flex flex-col ${colors.card} ${plan.color === "amber" ? "scale-105" : ""}`}
                data-testid={`plan-${plan.id}`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${colors.badge}`}>
                    {plan.badge}
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors.icon}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{plan.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">₹{plan.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 line-through">₹{plan.original.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold mt-0.5">{Math.round((1 - plan.price / plan.original) * 100)}% off · ₹{Math.round(plan.price / parseInt(plan.duration))} per month</p>
                </div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${colors.btn}`}
                  data-testid={`btn-buy-${plan.id}`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#8B1A4A] to-[#4A0A23] rounded-2xl p-8 mb-12 text-white text-center">
          <h2 className="text-2xl font-serif font-bold mb-2">Why Go Premium?</h2>
          <p className="text-white/70 mb-8">Premium members get 4x more responses and find their match 3x faster</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyPremium.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="text-center">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <p className="font-semibold text-sm">{w.title}</p>
                  <p className="text-white/60 text-xs mt-1">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-5 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can upgrade your plan at any time. The remaining value of your current plan will be adjusted." },
              { q: "Is there a refund policy?", a: "We offer a 7-day satisfaction guarantee. If you're not satisfied, we'll refund your payment, no questions asked." },
              { q: "Are the contact numbers real?", a: "Absolutely. All profiles are manually verified. Contact numbers are linked to verified mobile numbers." },
              { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, and EMI options." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1.5">{faq.q}</p>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
