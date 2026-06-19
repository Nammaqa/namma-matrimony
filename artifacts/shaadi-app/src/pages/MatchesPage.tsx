import { useState, useMemo } from "react";
import Navbar from "@/components/matches/Navbar";
import SubNav from "@/components/matches/SubNav";
import FilterSidebar from "@/components/matches/FilterSidebar";
import MatchesFeed from "@/components/matches/MatchesFeed";
import RightStrip from "@/components/matches/RightStrip";
import Dashboard from "@/components/matches/Dashboard";
import BottomNav from "@/components/matches/BottomNav";
import { allProfiles } from "@/data/profiles";

interface MatchesPageProps {
  setIsLoggedIn: (value: boolean) => void;
  sentInterests: number[];
  setSentInterests: (ids: number[]) => void;
  acceptedConnections: number[];
  setAcceptedConnections: (ids: number[]) => void;
  shortlisted: number[];
  setShortlisted: (ids: number[]) => void;
  recentlyViewed: number[];
  setRecentlyViewed: (ids: number[]) => void;
}

export interface Filters {
  verification: string[];
  religions: string[];
  maritalStatus: string[];
  education: string[];
  motherTongue: string[];
  states: string[];
  incomeMin: number;
  ageMin: number;
  ageMax: number;
}

const defaultFilters: Filters = {
  verification: [], religions: [], maritalStatus: [], education: [],
  motherTongue: [], states: [], incomeMin: 0, ageMin: 18, ageMax: 50,
};

export default function MatchesPage({
  setIsLoggedIn,
  sentInterests, setSentInterests,
  acceptedConnections, setAcceptedConnections,
  shortlisted, setShortlisted,
  recentlyViewed, setRecentlyViewed,
}: MatchesPageProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [activeTab, setActiveTab] = useState("New Matches");

  const handleMarkViewed = (id: number) => {
    setRecentlyViewed(prev => prev.includes(id) ? prev : [id, ...prev].slice(0, 20));
  };

  const handleShortlist = (id: number) => {
    setShortlisted(shortlisted.includes(id) ? shortlisted.filter(x => x !== id) : [...shortlisted, id]);
  };

  const handleSendInterest = (id: number) => {
    if (!sentInterests.includes(id)) setSentInterests([...sentInterests, id]);
  };

  const filteredProfiles = useMemo(() => {
    let list = [...allProfiles];

    if (activeTab === "Today's") {
      list = list.filter(p => p.isNewToday);
    } else if (activeTab === "My Matches") {
      list = list.filter(p => p.isMutualMatch || sentInterests.includes(p.id) || acceptedConnections.includes(p.id));
    } else if (activeTab === "Near Me") {
      list = list.filter(p => p.city === "Mumbai" || p.state === "Maharashtra");
    } else if (activeTab === "Recently Viewed") {
      list = list.filter(p => recentlyViewed.includes(p.id));
    } else if (activeTab === "Shortlisted") {
      list = list.filter(p => shortlisted.includes(p.id));
    }

    if (filters.verification.length > 0) {
      list = list.filter(p => filters.verification.some(v => {
        if (v === "profile") return p.verified.profile;
        if (v === "photo") return p.verified.photo;
        if (v === "id") return p.verified.id;
        if (v === "mobile") return p.verified.mobile;
        return false;
      }));
    }

    if (filters.religions.length > 0) list = list.filter(p => filters.religions.includes(p.religion));
    if (filters.maritalStatus.length > 0) list = list.filter(p => filters.maritalStatus.includes(p.maritalStatus));
    if (filters.states.length > 0) list = list.filter(p => filters.states.includes(p.state) || (p.isNRI && filters.states.includes("NRI")));
    list = list.filter(p => p.age >= filters.ageMin && p.age <= filters.ageMax);
    if (filters.incomeMin > 0) list = list.filter(p => p.incomeNum >= filters.incomeMin);

    return list;
  }, [filters, activeTab, shortlisted, recentlyViewed, sentInterests, acceptedConnections]);

  return (
    <div className="min-h-screen bg-[#FFF8F5] font-sans flex flex-col pb-16 md:pb-0" data-testid="matches-page">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <SubNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        shortlistedCount={shortlisted.length}
        recentlyViewedCount={recentlyViewed.length}
        sentInterestsCount={sentInterests.length}
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
        <div className="flex items-start gap-6 relative">
          <div className="hidden md:block shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          <MatchesFeed
            profiles={filteredProfiles}
            shortlisted={shortlisted}
            sentInterests={sentInterests}
            acceptedConnections={acceptedConnections}
            onShortlist={handleShortlist}
            onSendInterest={handleSendInterest}
            onMarkViewed={handleMarkViewed}
            activeTab={activeTab}
          />
          <RightStrip />
        </div>
      </main>

      <Dashboard
        sentInterestsCount={sentInterests.length}
        acceptedCount={acceptedConnections.length}
        shortlistedCount={shortlisted.length}
        recentlyViewedCount={recentlyViewed.length}
      />
      <BottomNav setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
