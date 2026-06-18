import React from "react";
import Navbar from "@/components/matches/Navbar";
import SubNav from "@/components/matches/SubNav";
import FilterSidebar from "@/components/matches/FilterSidebar";
import MatchesFeed from "@/components/matches/MatchesFeed";
import RightStrip from "@/components/matches/RightStrip";
import Dashboard from "@/components/matches/Dashboard";

interface MatchesPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

export default function MatchesPage({ setIsLoggedIn }: MatchesPageProps) {
  return (
    <div className="min-h-screen bg-[#FFF8F5] font-sans flex flex-col" data-testid="matches-page">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <SubNav />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
        <div className="flex items-start gap-6 relative">
          
          <div className="hidden md:block shrink-0">
            <FilterSidebar />
          </div>
          
          <MatchesFeed />
          
          <RightStrip />
          
        </div>
      </main>

      <Dashboard />
    </div>
  );
}
