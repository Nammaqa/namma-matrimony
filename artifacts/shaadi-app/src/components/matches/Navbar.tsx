import { Link, useLocation } from "wouter";
import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

interface NavbarProps {
  setIsLoggedIn: (value: boolean) => void;
}

const navLinks = [
  {
    label: "My Matrimony",
    href: "/dashboard/my-rishtey",
    testId: "nav-link-my-rishtey",
  },
  { label: "Matches", href: "/dashboard", testId: "nav-link-matches" },
  { label: "Search", href: "/dashboard/search", testId: "nav-link-search" },
  { label: "Premium", href: "/dashboard/inbox", testId: "nav-link-premium" },
  { label: "Inbox", href: "/dashboard/premium", testId: "nav-link-inbox" },
];

export default function Navbar({ setIsLoggedIn }: NavbarProps) {
  const [location, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") return location === "/dashboard";
    return location.startsWith(href);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-[#8B1A4A] text-white border-b border-[#D4AF37]/30 shadow-md"
      data-testid="navbar"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-testid="logo"
          >
            <span className="text-2xl font-serif font-bold tracking-tight text-[#D4AF37]">
              Namma Matrimony
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors pb-0.5 ${
                  isActive(link.href)
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold"
                    : "hover:text-[#D4AF37]"
                }`}
                data-testid={link.testId}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/dashboard/premium">
            <button
              className="hidden sm:inline-flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] px-4 text-xs font-bold text-white transition-transform hover:scale-105 shadow-md"
              data-testid="btn-upgrade"
            >
              UPGRADE
            </button>
          </Link>

          <Link to="/dashboard/inbox">
            <div
              className="relative cursor-pointer hover:text-[#D4AF37] transition-colors"
              data-testid="notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
            </div>
          </Link>

          <div className="relative" data-testid="user-menu">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Avatar className="h-9 w-9 border-2 border-[#D4AF37]/50">
                <AvatarFallback className="bg-[#4A0A23] text-[#D4AF37] font-bold text-xs">
                  PS
                </AvatarFallback>
              </Avatar>
              <ChevronDown
                className={`h-4 w-4 text-white/80 transition-transform ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-xl bg-white py-2 shadow-2xl ring-1 ring-black/10 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">
                    Priya Sharma
                  </p>
                  <p className="text-xs text-gray-500">priya@example.com</p>
                </div>
                <Link
                  to="/dashboard/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 w-full"
                  data-testid="menu-view-profile"
                >
                  View Profile
                </Link>
                <Link
                  to="/dashboard/my-rishtey"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 w-full"
                  data-testid="menu-dashboard"
                >
                  My Dashboard
                </Link>
                <Link
                  to="/dashboard/settings"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 w-full"
                  data-testid="menu-settings"
                >
                  Settings
                </Link>
                <div className="border-t border-gray-100 mt-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-medium"
                    data-testid="menu-logout"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
