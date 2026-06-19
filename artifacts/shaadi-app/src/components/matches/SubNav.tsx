import { allProfiles } from "@/data/profiles";

interface SubNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  shortlistedCount: number;
  recentlyViewedCount: number;
  sentInterestsCount: number;
}

export default function SubNav({ activeTab, onTabChange, shortlistedCount, recentlyViewedCount, sentInterestsCount }: SubNavProps) {
  const totalProfiles = allProfiles.length;
  const todayCount = allProfiles.filter((p) => p.isNewToday).length;
  const myMatchesCount = allProfiles.filter((p) => p.isMutualMatch).length + sentInterestsCount;
  const nearMeCount = allProfiles.filter((p) => p.city === "Mumbai" || p.state === "Maharashtra").length;

  const tabs = [
    { name: "New Matches", count: totalProfiles.toString() },
    { name: "Today's", count: todayCount.toString() },
    { name: "My Matches", count: myMatchesCount > 0 ? myMatchesCount.toString() : "0" },
    { name: "Near Me", count: nearMeCount.toString() },
    { name: "Recently Viewed", count: recentlyViewedCount > 0 ? recentlyViewedCount.toString() : "0" },
    { name: "Shortlisted", count: shortlistedCount > 0 ? shortlistedCount.toString() : "0" },
  ];

  return (
    <div className="sticky top-16 z-40 w-full bg-white border-b border-gray-200 shadow-sm" data-testid="subnav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            const hasData = parseInt(tab.count) > 0;
            return (
              <button
                key={tab.name}
                onClick={() => onTabChange(tab.name)}
                className={`flex items-center gap-1.5 whitespace-nowrap py-3.5 px-2 text-sm transition-all ${
                  isActive
                    ? "border-b-2 border-[#8B1A4A] text-[#8B1A4A] font-bold"
                    : "border-b-2 border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900 font-medium"
                }`}
                data-testid={`subnav-tab-${tab.name.toLowerCase().replace(/['\s]+/g, "-")}`}
              >
                {tab.name}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-[#8B1A4A] text-white"
                      : hasData
                      ? "bg-gray-100 text-gray-600"
                      : "bg-gray-50 text-gray-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
