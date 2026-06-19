import { useLocation } from "wouter";
import { Home, Users, Search, MessageCircle, User, LogOut, Crown, Settings } from "lucide-react";
import { useState } from "react";

interface BottomNavProps {
  setIsLoggedIn: (v: boolean) => void;
}

const navItems = [
  { icon: Home, label: "Home", path: "/dashboard/my-rishtey" },
  { icon: Users, label: "Matches", path: "/dashboard" },
  { icon: Search, label: "Search", path: "/dashboard/search" },
  { icon: MessageCircle, label: "Inbox", path: "/dashboard/inbox" },
  { icon: User, label: "Profile", path: null },
];

export default function BottomNav({ setIsLoggedIn }: BottomNavProps) {
  const [location, navigate] = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setShowMenu(false)}
        />
      )}

      {showMenu && (
        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-52 md:hidden">
          <button
            onClick={() => { navigate("/dashboard/profile"); setShowMenu(false); }}
            className="flex items-center gap-3 w-full px-4 py-3.5 hover:bg-gray-50 text-sm text-gray-700 font-medium"
          >
            <User className="w-4 h-4 text-[#8B1A4A]" />
            View Profile
          </button>
          <button
            onClick={() => { navigate("/dashboard/settings"); setShowMenu(false); }}
            className="flex items-center gap-3 w-full px-4 py-3.5 hover:bg-gray-50 text-sm text-gray-700 font-medium"
          >
            <Settings className="w-4 h-4 text-gray-500" />
            Settings
          </button>
          <button
            onClick={() => { navigate("/dashboard/premium"); setShowMenu(false); }}
            className="flex items-center gap-3 w-full px-4 py-3.5 hover:bg-amber-50 text-sm text-amber-700 font-medium"
          >
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            Upgrade to Premium
          </button>
          <div className="border-t border-gray-100" />
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3.5 hover:bg-red-50 text-sm text-red-600 font-medium"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path ? location === item.path || (item.path === "/dashboard" && location === "/dashboard") : showMenu;

            if (!item.path) {
              return (
                <button
                  key={item.label}
                  onClick={() => setShowMenu((v) => !v)}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                    showMenu ? "text-[#8B1A4A]" : "text-gray-400"
                  }`}
                  data-testid="bottom-nav-profile"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm transition-all ${
                    showMenu ? "bg-[#8B1A4A] text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    PS
                  </div>
                  <span className="text-[10px] font-semibold">Profile</span>
                </button>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => { navigate(item.path!); setShowMenu(false); }}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                  isActive ? "text-[#8B1A4A]" : "text-gray-400 hover:text-gray-600"
                }`}
                data-testid={`bottom-nav-${item.label.toLowerCase()}`}
              >
                <div className={`relative p-1.5 rounded-xl transition-all ${isActive ? "bg-[#8B1A4A]/10" : ""}`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.75} />
                  {item.label === "Inbox" && (
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">3</span>
                  )}
                </div>
                <span className={`text-[10px] font-semibold ${isActive ? "text-[#8B1A4A]" : ""}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
