import React from "react";
import { Heart, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavbarProps {
  setIsLoggedIn: (value: boolean) => void;
}

export default function Navbar({ setIsLoggedIn }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#8B1A4A] text-white border-b border-[#D4AF37]/30 shadow-md" data-testid="navbar">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2" data-testid="logo">
            <Heart className="h-7 w-7 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-2xl font-serif font-bold tracking-tight">Rishtey</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-[#D4AF37] transition-colors" data-testid="nav-link-my-rishtey">My Rishtey</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" data-testid="nav-link-matches">Matches</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" data-testid="nav-link-search">Search</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" data-testid="nav-link-inbox">Inbox</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors" data-testid="nav-link-premium">Premium</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:inline-flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] px-4 text-xs font-bold text-white transition-transform hover:scale-105 shadow-md" data-testid="btn-upgrade">
            UPGRADE
          </button>
          
          <div className="relative cursor-pointer hover:text-[#D4AF37] transition-colors" data-testid="notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
          </div>

          <div className="relative group" data-testid="user-menu">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <Avatar className="h-9 w-9 border-2 border-[#D4AF37]/50">
                <AvatarFallback className="bg-[#4A0A23] text-[#D4AF37] font-bold text-xs">PS</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-white/80" />
            </div>
            
            <div className="absolute right-0 top-full mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-testid="menu-view-profile">View Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-testid="menu-settings">Settings</a>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium border-t border-gray-100 mt-1" 
                data-testid="menu-logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
