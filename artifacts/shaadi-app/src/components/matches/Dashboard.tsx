import { useLocation } from "wouter";
import { Heart, Users, Star, Bookmark, ArrowRight, Check } from "lucide-react";
import { allProfiles, profilePhotos } from "@/data/profiles";

interface DashboardProps {
  sentInterestsCount: number;
  acceptedCount: number;
  shortlistedCount: number;
  recentlyViewedCount: number;
}

export default function Dashboard({ sentInterestsCount, acceptedCount, shortlistedCount, recentlyViewedCount }: DashboardProps) {
  const [, navigate] = useLocation();
  const recommended = allProfiles.slice(5, 12);

  return (
    <div className="w-full py-12 border-t border-gray-200 bg-white" data-testid="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900">My Activity</h2>
          <button onClick={() => navigate("/dashboard/inbox")} className="text-sm text-[#8B1A4A] font-semibold hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-testid="dashboard-stats">
          <div
            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 flex flex-col gap-2 border border-pink-100 cursor-pointer hover:-translate-y-1 transition-transform"
            onClick={() => navigate("/dashboard/inbox")}
          >
            <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{sentInterestsCount}</div>
            <div className="text-xs font-semibold text-gray-500">Interests Sent</div>
          </div>

          <div
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 flex flex-col gap-2 border border-emerald-100 cursor-pointer hover:-translate-y-1 transition-transform"
            onClick={() => navigate("/dashboard/inbox")}
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{acceptedCount}</div>
            <div className="text-xs font-semibold text-gray-500">Connections</div>
          </div>

          <div
            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 flex flex-col gap-2 border border-amber-100 cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{shortlistedCount}</div>
            <div className="text-xs font-semibold text-gray-500">Shortlisted</div>
          </div>

          <div
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 flex flex-col gap-2 border border-blue-100 cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{recentlyViewedCount}</div>
            <div className="text-xs font-semibold text-gray-500">Profiles Viewed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative overflow-hidden" data-testid="dashboard-completeness">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B1A4A]/5 rounded-bl-full pointer-events-none" />
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-5">Profile Completeness</h3>
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="3.5" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8B1A4A" strokeWidth="3.5" strokeDasharray="78, 100" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">78%</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase">Complete</span>
                </div>
              </div>
              <ul className="flex-1 space-y-2 text-sm">
                {[["Basic Details", true], ["Photos", true], ["Education", true], ["Horoscope", false], ["Family Details", false], ["Partner Preferences", false]].map(([label, done]) => (
                  <li key={label as string} className={`flex items-center gap-2 ${done ? "text-gray-700" : "text-gray-400"}`}>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-emerald-100 text-emerald-600" : "border-2 border-gray-200"}`}>
                      {done && <Check className="w-2.5 h-2.5" />}
                    </span>
                    <span className="text-xs font-medium">{label as string}</span>
                    {!done && (
                      <button onClick={() => navigate("/dashboard/profile")} className="ml-auto text-[10px] text-[#8B1A4A] font-bold hover:underline">+ Add</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm" data-testid="dashboard-quick-actions">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { icon: Heart, label: "View Interests Received", sub: "People who sent you interest", path: "/dashboard/inbox", color: "pink" },
                { icon: Users, label: "View Connections", sub: `${acceptedCount} accepted connection${acceptedCount !== 1 ? "s" : ""}`, path: "/dashboard/inbox", color: "emerald" },
                { icon: Star, label: "Browse Shortlisted", sub: `${shortlistedCount} profile${shortlistedCount !== 1 ? "s" : ""} saved`, path: "/dashboard", color: "amber" },
                { icon: Bookmark, label: "Recently Viewed", sub: `${recentlyViewedCount} profile${recentlyViewedCount !== 1 ? "s" : ""} visited`, path: "/dashboard", color: "blue" },
              ].map(({ icon: Icon, label, sub, path, color }) => (
                <button key={label} onClick={() => navigate(path)} className={`w-full flex items-center gap-3 p-3 rounded-xl hover:bg-${color}-50 border border-transparent hover:border-${color}-100 text-left transition-all group`}>
                  <div className={`w-9 h-9 rounded-full bg-${color}-100 text-${color}-600 flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[#8B1A4A] transition-colors">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 ml-auto group-hover:text-[#8B1A4A] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div data-testid="dashboard-recommended">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-serif font-bold text-gray-900">Recommended for You</h3>
            <button onClick={() => navigate("/dashboard")} className="text-sm text-[#8B1A4A] font-semibold hover:underline">See All →</button>
          </div>
          <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
            {recommended.map(match => {
              const photo = profilePhotos[match.photoIdx % 6];
              return (
                <div key={match.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden min-w-[180px] shrink-0 group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/dashboard/view/${match.id}`)}>
                  <div className="h-44 w-full overflow-hidden relative">
                    <img src={photo} alt={match.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 text-white">
                      <div className="font-bold text-sm leading-tight">{match.name.split(" ")[0]}, {match.age}</div>
                      <div className="text-xs opacity-80">{match.city}</div>
                    </div>
                    {match.lastActive === "Online Now" && (
                      <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500 mb-2 truncate">{match.profession}</p>
                    <button className="w-full bg-[#8B1A4A]/8 hover:bg-[#8B1A4A] text-[#8B1A4A] hover:text-white border border-[#8B1A4A]/20 py-1.5 rounded-lg text-xs font-bold transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
