import { Link } from "wouter";
import DashboardLayout from "@/components/matches/DashboardLayout";
import { Eye, Heart, Users, Star, ArrowRight, Bell, MessageCircle, Search } from "lucide-react";
import profile1 from "@/assets/images/profile1.png";
import profile2 from "@/assets/images/profile2.png";
import profile3 from "@/assets/images/profile3.png";
import profile4 from "@/assets/images/profile4.png";
import profile5 from "@/assets/images/profile5.png";
import profile6 from "@/assets/images/profile6.png";

interface MyRishteyPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const stats = [
  { icon: Eye, label: "Profile Views", value: "47", sub: "this week", color: "blue" },
  { icon: Heart, label: "Interests Received", value: "23", sub: "pending", color: "rose" },
  { icon: Users, label: "Mutual Matches", value: "8", sub: "new today", color: "purple" },
  { icon: Star, label: "Profile Score", value: "87%", sub: "excellent", color: "amber" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
};

const activity = [
  { img: profile5, name: "Neha V", action: "liked your profile", time: "1 hour ago", type: "like" },
  { img: profile6, name: "Sunita R", action: "viewed your profile", time: "3 hours ago", type: "view" },
  { img: profile1, name: "Priya S", action: "sent you an interest", time: "Yesterday", type: "interest" },
  { img: profile2, name: "Ananya P", action: "accepted your interest", time: "2 days ago", type: "accept" },
];

const recommended = [
  { img: profile1, name: "Priya S", age: 26, city: "Mumbai" },
  { img: profile2, name: "Ananya P", age: 24, city: "Ahmedabad" },
  { img: profile3, name: "Deepa N", age: 28, city: "Kochi" },
  { img: profile4, name: "Fatima K", age: 25, city: "Hyderabad" },
  { img: profile5, name: "Neha V", age: 27, city: "Delhi" },
];

const completeness = [
  { label: "Basic Details", done: true },
  { label: "Photos", done: true },
  { label: "Education Details", done: true },
  { label: "Career Information", done: true },
  { label: "Horoscope Details", done: false },
  { label: "Family Details", done: false },
  { label: "Partner Preferences", done: false },
];

export default function MyRishteyPage({ setIsLoggedIn }: MyRishteyPageProps) {
  return (
    <DashboardLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="my-namma-matrimony-page">
        <div className="mb-8 bg-gradient-to-r from-[#8B1A4A] to-[#4A0A23] rounded-2xl p-6 text-white flex items-center justify-between">
          <div>
            <p className="text-white/70 text-sm font-medium">Welcome back</p>
            <h1 className="text-2xl font-serif font-bold mt-1">Good Morning, Priya! 👋</h1>
            <p className="text-white/80 text-sm mt-1">You have <span className="font-bold text-[#D4AF37]">23 new interests</span> and <span className="font-bold text-[#D4AF37]">18 new matches</span> today.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <Link to="/dashboard/inbox">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all">
                <MessageCircle className="h-4 w-4" /> Inbox
              </button>
            </Link>
            <Link to="/dashboard/search">
              <button className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C4A030] text-[#1A0A14] px-4 py-2 rounded-xl text-sm font-bold transition-all">
                <Search className="h-4 w-4" /> Search Matches
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className={`bg-white rounded-2xl border p-5 flex items-start gap-4 shadow-sm ${colorMap[s.color].split(" ")[2]}`} data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className={`rounded-xl p-3 ${colorMap[s.color]}`}><Icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800 font-serif">Profile Completeness</h2>
              <span className="text-[#8B1A4A] font-bold text-lg">78%</span>
            </div>
            <div className="relative flex items-center justify-center mb-5">
              <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#F3E8EE" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#8B1A4A" strokeWidth="12"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.78} ${2 * Math.PI * 50}`}
                  strokeLinecap="round" />
              </svg>
              <div className="absolute text-center">
                <p className="text-2xl font-bold text-[#8B1A4A]">78%</p>
                <p className="text-xs text-gray-400">Complete</p>
              </div>
            </div>
            <div className="space-y-2">
              {completeness.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`h-4 w-4 rounded-full flex items-center justify-center text-xs ${item.done ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"}`}>
                      {item.done ? "✓" : "○"}
                    </span>
                    <span className={item.done ? "text-gray-700" : "text-gray-400"}>{item.label}</span>
                  </div>
                  {!item.done && (
                    <Link to="/dashboard/profile">
                      <button className="text-xs text-[#8B1A4A] font-semibold hover:underline">+ Add</button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800 font-serif">Recent Activity</h2>
              <Bell className="h-4 w-4 text-gray-400" />
            </div>
            <div className="space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src={a.img} alt={a.name} className="h-10 w-10 rounded-full object-cover shrink-0 border border-gray-100" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800"><span className="font-semibold">{a.name}</span> {a.action}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                  <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
                    a.type === "like" ? "bg-rose-50 text-rose-600" :
                    a.type === "interest" ? "bg-purple-50 text-purple-600" :
                    a.type === "accept" ? "bg-green-50 text-green-600" :
                    "bg-blue-50 text-blue-600"
                  }`}>{a.type}</span>
                </div>
              ))}
            </div>
            <Link to="/dashboard/inbox">
              <button className="mt-4 w-full text-sm text-[#8B1A4A] font-semibold flex items-center justify-center gap-1 hover:underline">
                View All Activity <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-800 font-serif">Recommended for You</h2>
            <Link to="/dashboard">
              <button className="text-sm text-[#8B1A4A] font-semibold flex items-center gap-1 hover:underline">
                See All <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {recommended.map((r, i) => (
              <div key={i} className="shrink-0 w-40 rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={r.img} alt={r.name} className="h-36 w-full object-cover" />
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-900 truncate">{r.name}, {r.age}</p>
                  <p className="text-xs text-gray-500">{r.city}</p>
                  <Link to="/dashboard">
                    <button className="mt-2 w-full text-xs font-bold text-white bg-[#8B1A4A] py-1.5 rounded-lg hover:bg-[#7A1540] transition-colors">
                      Connect
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
