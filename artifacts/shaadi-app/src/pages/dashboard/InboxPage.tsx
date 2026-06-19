import { useState } from "react";
import { useLocation } from "wouter";
import { Search, CheckCircle2, X, Clock, Heart, Users, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { allProfiles, profilePhotos } from "@/data/profiles";
import Navbar from "@/components/matches/Navbar";
import BottomNav from "@/components/matches/BottomNav";

interface InboxPageProps {
  setIsLoggedIn: (value: boolean) => void;
  sentInterests: number[];
  acceptedConnections: number[];
  setAcceptedConnections: (ids: number[]) => void;
}

type Tab = "Received" | "Accepted" | "Requests" | "Sent" | "Deleted";

const receivedIds = [1, 3, 5, 7, 9, 12, 21];
const deletedIds: number[] = [];

export default function InboxPage({ setIsLoggedIn, sentInterests, acceptedConnections, setAcceptedConnections }: InboxPageProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Received");
  const [searchQ, setSearchQ] = useState("");
  const [declined, setDeclined] = useState<number[]>([]);
  const [deleted, setDeleted] = useState<number[]>([]);
  const [, navigate] = useLocation();

  const receivedProfiles = allProfiles.filter(p => receivedIds.includes(p.id) && !declined.includes(p.id) && !deleted.includes(p.id));
  const acceptedProfiles = allProfiles.filter(p => acceptedConnections.includes(p.id) && !deleted.includes(p.id));
  const sentProfiles = allProfiles.filter(p => sentInterests.includes(p.id) && !deleted.includes(p.id));
  const deletedProfiles = allProfiles.filter(p => deleted.includes(p.id));

  const tabs: { key: Tab; label: string; count: number; icon: typeof Heart }[] = [
    { key: "Received", label: "Received", count: receivedProfiles.length, icon: Heart },
    { key: "Accepted", label: "Accepted", count: acceptedProfiles.length, icon: CheckCircle2 },
    { key: "Requests", label: "Requests", count: sentProfiles.length, icon: Users },
    { key: "Sent", label: "Sent", count: sentProfiles.length, icon: MessageSquare },
    { key: "Deleted", label: "Deleted", count: deletedProfiles.length, icon: X },
  ];

  const currentProfiles = activeTab === "Received" ? receivedProfiles
    : activeTab === "Accepted" ? acceptedProfiles
    : activeTab === "Requests" || activeTab === "Sent" ? sentProfiles
    : deletedProfiles;

  const filtered = currentProfiles.filter(p =>
    p.name.toLowerCase().includes(searchQ.toLowerCase()) ||
    p.city.toLowerCase().includes(searchQ.toLowerCase()) ||
    p.profession.toLowerCase().includes(searchQ.toLowerCase())
  );

  const handleAccept = (id: number) => {
    if (!acceptedConnections.includes(id)) setAcceptedConnections([...acceptedConnections, id]);
    setDeclined(d => d.filter(x => x !== id));
  };

  const handleDecline = (id: number) => {
    setDeclined(d => [...d, id]);
  };

  const handleDelete = (id: number) => {
    setDeleted(d => [...d, id]);
  };

  const handleRestore = (id: number) => {
    setDeleted(d => d.filter(x => x !== id));
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] pb-20 md:pb-0" data-testid="inbox-page">
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#8B1A4A] flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-gray-900 text-2xl">Connections</h1>
            <p className="text-gray-500 text-sm">Manage all your connection requests and accepted profiles</p>
          </div>
        </div>

        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30 shadow-sm"
            placeholder="Search by name, city, or profession..."
          />
        </div>

        <div className="flex bg-white rounded-2xl shadow-sm border border-gray-100 p-1 mb-6 overflow-x-auto no-scrollbar gap-1">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex-1 ${activeTab === tab.key ? "bg-[#8B1A4A] text-white shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`}
                data-testid={`inbox-tab-${tab.key.toLowerCase()}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
                {tab.count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeTab === tab.key ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
            <div className="text-5xl mb-4">
              {activeTab === "Received" ? "💌" : activeTab === "Accepted" ? "🤝" : activeTab === "Deleted" ? "🗑️" : "📤"}
            </div>
            <h3 className="font-serif font-bold text-gray-700 text-lg mb-2">
              {activeTab === "Received" ? "No interest requests received yet" :
               activeTab === "Accepted" ? "No accepted connections yet" :
               activeTab === "Deleted" ? "Deleted items are empty" :
               "No requests sent yet"}
            </h3>
            <p className="text-gray-400 text-sm mb-5">
              {activeTab === "Received" ? "When someone sends you interest, it'll appear here." :
               activeTab === "Accepted" ? "Accept interest requests to see connections here." :
               activeTab === "Deleted" ? "Profiles you delete will appear here." :
               "Go to matches and send interest to connect with profiles."}
            </p>
            <button onClick={() => navigate("/dashboard")} className="bg-[#8B1A4A] text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
              Browse Matches
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(profile => {
              const photo = profilePhotos[profile.photoIdx % 6];
              const isAccepted = acceptedConnections.includes(profile.id);

              return (
                <div key={profile.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-testid={`inbox-card-${profile.id}`}>
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative shrink-0 cursor-pointer" onClick={() => navigate(`/dashboard/view/${profile.id}`)}>
                      <img src={photo} alt={profile.name} className="w-16 h-16 rounded-xl object-cover object-top border border-gray-100" />
                      {profile.lastActive === "Online Now" && (
                        <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="font-serif font-bold text-gray-900 cursor-pointer hover:text-[#8B1A4A] transition-colors" onClick={() => navigate(`/dashboard/view/${profile.id}`)}>
                          {profile.name}
                        </h3>
                        {profile.verified.profile && <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                        {isAccepted && activeTab === "Accepted" && (
                          <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">✓ Connected</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{profile.age} yrs · {profile.profession} · {profile.city}, {profile.isNRI ? profile.country : profile.state}</p>
                      <p className="text-xs text-gray-400">{profile.religion} · {profile.education}</p>
                      <div className="flex items-center gap-3 mt-1.5 text-[10px] text-gray-400">
                        <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" />
                          {activeTab === "Received" ? "Sent you interest · 2h ago" :
                           activeTab === "Accepted" ? "Connected · Mutual Match" :
                           activeTab === "Deleted" ? "Deleted" :
                           "Interest sent · Pending response"}
                        </span>
                        <span className="text-gray-300">·</span>
                        <span>{profile.motherTongue}</span>
                        <span className="text-gray-300">·</span>
                        <span>{profile.income}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      {activeTab === "Received" && !isAccepted && (
                        <>
                          <button onClick={() => handleAccept(profile.id)} className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all" data-testid={`btn-accept-${profile.id}`}>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Accept
                          </button>
                          <button onClick={() => handleDecline(profile.id)} className="flex items-center gap-1 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 text-xs font-bold px-3 py-1.5 rounded-lg transition-all" data-testid={`btn-decline-${profile.id}`}>
                            <X className="w-3.5 h-3.5" /> Decline
                          </button>
                        </>
                      )}
                      {activeTab === "Received" && isAccepted && (
                        <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Accepted
                        </span>
                      )}
                      {activeTab === "Accepted" && (
                        <button onClick={() => navigate(`/dashboard/messages/${profile.id}`)} className="flex items-center gap-1 bg-[#8B1A4A] hover:bg-[#7A1540] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all" data-testid={`btn-message-${profile.id}`}>
                          <MessageSquare className="w-3.5 h-3.5" /> Message
                        </button>
                      )}
                      {(activeTab === "Requests" || activeTab === "Sent") && (
                        <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200">
                          <Clock className="w-3.5 h-3.5" /> Pending
                        </span>
                      )}
                      {activeTab === "Deleted" && (
                        <button onClick={() => handleRestore(profile.id)} className="flex items-center gap-1 bg-gray-100 hover:bg-blue-50 text-gray-500 hover:text-blue-600 text-xs font-bold px-3 py-1.5 rounded-lg">
                          Restore
                        </button>
                      )}
                      <button onClick={() => navigate(`/dashboard/view/${profile.id}`)} className="text-[10px] text-[#8B1A4A] font-semibold text-center hover:underline flex items-center gap-0.5 justify-center">
                        View <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                      {activeTab !== "Deleted" && (
                        <button onClick={() => handleDelete(profile.id)} className="text-[10px] text-red-400 hover:text-red-600 font-medium text-center">
                          Delete
                        </button>
                      )}
                    </div>
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
