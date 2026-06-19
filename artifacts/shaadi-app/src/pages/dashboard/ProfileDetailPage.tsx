import { useRoute, useLocation, useSearch } from "wouter";
import { useState } from "react";
import { ArrowLeft, ShieldCheck, Camera, CreditCard, Smartphone, Heart, Star, Share2, Flag, CheckCircle2, Phone, MessageSquare, Crown } from "lucide-react";
import { allProfiles, profilePhotos } from "@/data/profiles";
import Navbar from "@/components/matches/Navbar";
import BottomNav from "@/components/matches/BottomNav";

interface ProfileDetailPageProps {
  setIsLoggedIn: (v: boolean) => void;
  sentInterests: number[];
  setSentInterests: (ids: number[]) => void;
}

export default function ProfileDetailPage({ setIsLoggedIn, sentInterests, setSentInterests }: ProfileDetailPageProps) {
  const [, params] = useRoute("/dashboard/view/:id");
  const [, navigate] = useLocation();
  const search = useSearch();
  const id = parseInt(params?.id || "0");
  const profile = allProfiles.find(p => p.id === id);

  const interestJustSent = search.includes("interest=sent");
  const alreadySent = sentInterests.includes(id);
  const [shortlisted, setShortlisted] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleSendInterest = () => {
    if (!sentInterests.includes(id)) setSentInterests([...sentInterests, id]);
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F5]">
        <div className="text-center">
          <p className="text-gray-400 mb-4 text-lg">Profile not found</p>
          <button onClick={() => navigate("/dashboard")} className="text-[#8B1A4A] font-semibold hover:underline">← Back to Matches</button>
        </div>
      </div>
    );
  }

  const photo = profilePhotos[profile.photoIdx % 6];

  return (
    <div className="min-h-screen bg-[#FFF8F5] pb-20 md:pb-0" data-testid="profile-detail-page">
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-[#8B1A4A] font-semibold hover:opacity-80 transition mb-5" data-testid="btn-back">
          <ArrowLeft className="w-4 h-4" /> Back to Matches
        </button>

        {(interestJustSent || alreadySent) && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <p className="font-semibold text-green-800">Interest Sent to {profile.name}!</p>
              <p className="text-sm text-green-600">You'll be notified when they respond. Check your inbox for updates.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-80">
                <img src={photo} alt={profile.name} className="w-full h-full object-cover object-top" />
                {profile.isNRI && <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">🌍 NRI</div>}
                {profile.isMutualMatch && <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">💜 Mutual Match</div>}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold ${profile.lastActive === "Online Now" ? "bg-green-500 text-white" : "bg-gray-700/70 text-white"}`}>
                  {profile.lastActive}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-xl font-serif font-bold text-gray-900">{profile.name}</h1>
                  {profile.verified.profile && <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-50" />}
                </div>
                <p className="text-gray-500 text-sm mb-3">{profile.age} yrs · {profile.height} · {profile.city}, {profile.isNRI ? profile.country : profile.state}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {profile.verified.profile && <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded"><ShieldCheck className="w-3 h-3" />Verified</span>}
                  {profile.verified.photo && <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded"><Camera className="w-3 h-3" />Photo</span>}
                  {profile.verified.id && <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded"><CreditCard className="w-3 h-3" />ID</span>}
                  {profile.verified.mobile && <span className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded"><Smartphone className="w-3 h-3" />Mobile</span>}
                </div>

                <div className="space-y-2">
                  {profile.canConnect ? (
                    <>
                      <button onClick={handleSendInterest} disabled={alreadySent || interestJustSent}
                        className={`w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${alreadySent || interestJustSent ? "bg-green-50 text-green-700 border border-green-200" : "bg-[#8B1A4A] hover:bg-[#7A1540] text-white shadow-md hover:shadow-lg"}`}
                        data-testid="btn-send-interest">
                        <Heart className={`w-4 h-4 ${alreadySent || interestJustSent ? "fill-green-500 text-green-500" : "fill-white"}`} />
                        {alreadySent || interestJustSent ? "Interest Sent ✓" : "Send Interest"}
                      </button>
                      <button onClick={() => navigate(`/dashboard/messages/${profile.id}`)} className="w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border-2 border-[#8B1A4A] text-[#8B1A4A] hover:bg-[#8B1A4A]/5 transition-all" data-testid="btn-message">
                        <MessageSquare className="w-4 h-4" /> Message
                      </button>
                    </>
                  ) : (
                    <button onClick={() => navigate("/dashboard/premium")} className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] text-white flex items-center justify-center gap-2 shadow-md hover:shadow-lg" data-testid="btn-upgrade">
                      <Crown className="w-4 h-4" /> Upgrade to Connect
                    </button>
                  )}
                </div>

                <div className="flex gap-2 mt-3">
                  <button onClick={() => setShortlisted(v => !v)} className={`flex-1 py-2 rounded-lg border text-sm flex items-center justify-center gap-1.5 font-medium transition-all ${shortlisted ? "border-amber-300 bg-amber-50 text-amber-600" : "border-gray-200 text-gray-500 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-500"}`} data-testid="btn-shortlist">
                    <Star className={`w-4 h-4 ${shortlisted ? "fill-amber-400" : ""}`} /> {shortlisted ? "Shortlisted" : "Shortlist"}
                  </button>
                  <button onClick={() => setLiked(v => !v)} className={`flex-1 py-2 rounded-lg border text-sm flex items-center justify-center gap-1.5 font-medium transition-all ${liked ? "border-red-300 bg-red-50 text-red-500" : "border-gray-200 text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-400"}`} data-testid="btn-like">
                    <Heart className={`w-4 h-4 ${liked ? "fill-red-400 text-red-500" : ""}`} /> {liked ? "Liked" : "Like"}
                  </button>
                </div>

                <div className="flex justify-between mt-3">
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"><Share2 className="w-3.5 h-3.5" /> Share</button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors"><Flag className="w-3.5 h-3.5" /> Report</button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-serif font-bold text-gray-900 text-lg mb-3 pb-2 border-b border-gray-100">About {profile.name.split(" ")[0]}</h2>
              <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-serif font-bold text-gray-900 text-lg mb-4 pb-2 border-b border-gray-100">Basic Details</h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                {[["Age", `${profile.age} years`], ["Height", profile.height], ["Religion", profile.religion], ["Caste", profile.caste], ["Marital Status", profile.maritalStatus], ["Mother Tongue", profile.motherTongue], ["Manglik", profile.manglik], ["Blood Group", profile.bloodGroup]].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-gray-800 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-serif font-bold text-gray-900 text-lg mb-4 pb-2 border-b border-gray-100">Education & Career</h2>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                {[["Education", profile.education], ["College", profile.college], ["Profession", profile.profession], ["Annual Income", profile.income], ["Profile By", profile.profileBy], ["Location", `${profile.city}, ${profile.isNRI ? profile.country : profile.state}`]].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-gray-800 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="font-serif font-bold text-gray-900 text-lg mb-4 pb-2 border-b border-gray-100">Contact Details</h2>
              {profile.canConnect ? (
                <div className="bg-[#8B1A4A]/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B1A4A]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#8B1A4A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-0.5">Send interest to get contact details</p>
                    <p className="text-sm text-gray-500">Connect with {profile.name.split(" ")[0]} to see phone number and email</p>
                  </div>
                  {!alreadySent && !interestJustSent && (
                    <button onClick={handleSendInterest} className="ml-auto bg-[#8B1A4A] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#7A1540] transition">
                      Send Interest
                    </button>
                  )}
                </div>
              ) : (
                <div className="bg-amber-50 rounded-xl p-4 flex items-center gap-4">
                  <Crown className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <p className="font-semibold text-amber-800">Upgrade to see contact details</p>
                    <p className="text-sm text-amber-600">Premium members can view and message directly</p>
                  </div>
                  <button onClick={() => navigate("/dashboard/premium")} className="ml-auto bg-[#D4AF37] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#C4A02A] transition">
                    Upgrade
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <BottomNav setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
