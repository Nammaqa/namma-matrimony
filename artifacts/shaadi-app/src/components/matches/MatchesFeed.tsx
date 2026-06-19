import ProfileCard from "./ProfileCard";
import type { Profile } from "@/data/profiles";

interface MatchesFeedProps {
  profiles: Profile[];
  shortlisted: number[];
  sentInterests: number[];
  acceptedConnections: number[];
  onShortlist: (id: number) => void;
  onSendInterest: (id: number) => void;
  onMarkViewed: (id: number) => void;
  activeTab: string;
}

export default function MatchesFeed({ profiles, shortlisted, sentInterests, acceptedConnections, onShortlist, onSendInterest, onMarkViewed, activeTab }: MatchesFeedProps) {
  const tabLabels: Record<string, string> = {
    "New Matches": "New Members Matching Your Preferences",
    "Today's": "Profiles Joined Today",
    "My Matches": "Your Connections & Mutual Matches",
    "Near Me": "Profiles Near Mumbai",
    "Recently Viewed": "Recently Viewed Profiles",
    "Shortlisted": "Your Shortlisted Profiles",
  };

  return (
    <div className="flex-1 w-full max-w-3xl pb-8" data-testid="matches-feed">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-base font-bold text-gray-900 font-serif">{tabLabels[activeTab] || "Matches"}</h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#8B1A4A]/10 text-[#8B1A4A] mt-1">
            {profiles.length} match{profiles.length !== 1 ? "es" : ""}
          </span>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center gap-2">
          <label className="text-xs text-gray-500 font-medium">Sort by:</label>
          <select className="text-sm bg-gray-50 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8B1A4A] text-gray-700">
            <option>Relevance</option>
            <option>Newest First</option>
            <option>Age: Low to High</option>
            <option>Income: High to Low</option>
          </select>
        </div>
      </div>

      {profiles.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">No profiles found</h3>
          <p className="text-gray-500 text-sm">Try adjusting your filters to see more matches</p>
        </div>
      ) : (
        <div className="space-y-4">
          {profiles.map(profile => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isShortlisted={shortlisted.includes(profile.id)}
              interestSent={sentInterests.includes(profile.id)}
              isAccepted={acceptedConnections.includes(profile.id)}
              onShortlist={() => onShortlist(profile.id)}
              onSendInterest={() => onSendInterest(profile.id)}
              onMarkViewed={() => onMarkViewed(profile.id)}
            />
          ))}
        </div>
      )}

      {profiles.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button className="bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 rounded-full font-bold shadow-sm transition-colors">
            Load More Matches
          </button>
        </div>
      )}
    </div>
  );
}
