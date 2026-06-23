import { useState } from "react";
import { useLocation } from "wouter";
import { Heart, CheckCircle2, X, Clock, ArrowLeft } from "lucide-react";
import { allProfiles, profilePhotos } from "@/data/profiles";
import Navbar from "@/components/matches/Navbar";
import BottomNav from "@/components/matches/BottomNav";

interface InterestsPageProps {
  setIsLoggedIn: (v: boolean) => void;
}

const receivedProfiles = allProfiles.filter((p) => [1, 3, 5, 7, 9].includes(p.id));
const sentProfiles = allProfiles.filter((p) => [2, 4, 6].includes(p.id));
const acceptedProfiles = allProfiles.filter((p) => [1].includes(p.id));

type Tab = "received" | "sent" | "accepted";

export default function InterestsPage({ setIsLoggedIn }: InterestsPageProps) {
  const [activeTab, setActiveTab] = useState<Tab>("received");
  const [, navigate] = useLocation();

  const [dismissed, setDismissed] = useState<number[]>([]);
  const [accepted, setAccepted] = useState<number[]>([1]);

  const profiles = activeTab === "received"
    ? receivedProfiles
    : activeTab === "sent"
    ? sentProfiles
    : acceptedProfiles;

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "received", label: "Interests Received", count: receivedProfiles.filter((p) => !dismissed.includes(p.id)).length },
    { key: "sent", label: "Interests Sent", count: sentProfiles.length },
    { key: "accepted", label: "Accepted", count: acceptedProfiles.length },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F5] pb-20 md:pb-0" data-testid="interests-page">
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      <div className="max-w-3xl mx-auto px-4 py-6">
        <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-[#8B1A4A] font-semibold hover:opacity-80 mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Matches
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#8B1A4A] flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-gray-900 text-2xl">Interests</h1>
            <p className="text-gray-500 text-sm">Manage your connections and interest requests</p>
          </div>
        </div>

        <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-[#8B1A4A] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              data-testid={`interests-tab-${tab.key}`}
            >
              {tab.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                activeTab === tab.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {profiles.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
            <Heart className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <h3 className="font-serif font-bold text-gray-700 text-lg mb-2">No interests yet</h3>
            <p className="text-gray-400 text-sm mb-4">
              {activeTab === "received" ? "When someone sends you an interest, it'll appear here." :
               activeTab === "sent" ? "Go to matches and send interest to connect with profiles." :
               "Accepted interests will appear here."}
            </p>
            <button onClick={() => navigate("/dashboard")} className="bg-[#8B1A4A] text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              Browse Matches
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {profiles.map((profile) => {
              const photo = profilePhotos[profile.photoIdx % 6];
              const isAccepted = accepted.includes(profile.id);

              return (
                <div key={profile.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4" data-testid={`interest-card-${profile.id}`}>
                  <div
                    className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 cursor-pointer"
                    onClick={() => navigate(`/dashboard/view/${profile.id}`)}
                  >
                    <img src={photo} alt={profile.name} className="w-full h-full object-cover object-top" />
                    {profile.lastActive === "Online Now" && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h3
                        className="font-semibold text-gray-900 cursor-pointer hover:text-[#8B1A4A] transition-colors"
                        onClick={() => navigate(`/dashboard/view/${profile.id}`)}
                      >
                        {profile.name}
                      </h3>
                      {profile.verified.profile && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50 shrink-0" />}
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{profile.age} yrs · {profile.profession} · {profile.city}</p>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      {activeTab === "received" ? "Sent you an interest · 2 hours ago" :
                       activeTab === "sent" ? "Interest sent · Pending" :
                       "Accepted · Mutual Match!"}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    {activeTab === "received" && !isAccepted && (
                      <>
                        <button
                          onClick={() => setAccepted((a) => [...a, profile.id])}
                          className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                          data-testid={`btn-accept-${profile.id}`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" /> Accept
                        </button>
                        <button
                          onClick={() => setDismissed((d) => [...d, profile.id])}
                          className="flex items-center gap-1 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
                          data-testid={`btn-decline-${profile.id}`}
                        >
                          <X className="w-3.5 h-3.5" /> Decline
                        </button>
                      </>
                    )}
                    {activeTab === "received" && isAccepted && (
                      <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-green-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Accepted
                      </span>
                    )}
                    {activeTab === "sent" && (
                      <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200">
                        <Clock className="w-3.5 h-3.5" /> Pending
                      </span>
                    )}
                    {activeTab === "accepted" && (
                      <button
                        onClick={() => navigate(`/dashboard/view/${profile.id}`)}
                        className="flex items-center gap-1 bg-[#8B1A4A] text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                      >
                        <Heart className="w-3.5 h-3.5" /> Message
                      </button>
                    )}
                    <button
                      onClick={() => navigate(`/dashboard/view/${profile.id}`)}
                      className="text-[10px] text-[#8B1A4A] font-semibold text-center hover:underline"
                    >
                      View Profile →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <BottomNav setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
