import { useLocation } from "wouter";
import {
  CheckCircle2,
  Heart,
  Star,
  MoreVertical,
  ShieldCheck,
  Camera,
  CreditCard,
  Smartphone,
  Crown,
  Check,
  MessageSquare,
} from "lucide-react";
import type { Profile } from "@/data/profiles";
import { profilePhotos } from "@/data/profiles";

interface ProfileCardProps {
  profile: Profile;
  isShortlisted: boolean;
  interestSent: boolean;
  isAccepted: boolean;
  onShortlist: () => void;
  onSendInterest: () => void;
  onMarkViewed: () => void;
}

function VerificationBadges({ verified }: { verified: Profile["verified"] }) {
  const badges = [];
  if (verified.profile)
    badges.push({
      icon: ShieldCheck,
      label: "Verified",
      color: "text-blue-500",
    });
  if (verified.photo)
    badges.push({ icon: Camera, label: "Photo", color: "text-green-500" });
  if (verified.id)
    badges.push({ icon: CreditCard, label: "ID", color: "text-purple-500" });
  if (verified.mobile)
    badges.push({
      icon: Smartphone,
      label: "Mobile",
      color: "text-orange-500",
    });
  return (
    <div className="flex flex-wrap gap-1 mb-2">
      {badges.map((b) => {
        const Icon = b.icon;
        return (
          <span
            key={b.label}
            className={`inline-flex items-center gap-0.5 text-[9px] font-bold ${b.color} bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded`}
          >
            <Icon className="h-2.5 w-2.5" />
            {b.label}
          </span>
        );
      })}
    </div>
  );
}

export default function ProfileCard({
  profile,
  isShortlisted,
  interestSent,
  isAccepted,
  onShortlist,
  onSendInterest,
  onMarkViewed,
}: ProfileCardProps) {
  const [, navigate] = useLocation();
  const photo = profilePhotos[profile.photoIdx % 6];

  const handleConnect = () => {
    onMarkViewed();
    navigate(`/dashboard/view/${profile.id}`);
  };

  const handleSendInterest = () => {
    onMarkViewed();
    onSendInterest();
    navigate(`/dashboard/premium`);
  };

  const handleViewProfile = () => {
    onMarkViewed();
    navigate(`/dashboard/view/${profile.id}`);
  };

  const handleMessage = () => {
    onMarkViewed();
    navigate(`/dashboard/messages/${profile.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden"
      data-testid={`profile-card-${profile.id}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1A4A]/5 to-transparent rounded-bl-full pointer-events-none" />

      <div
        className="relative w-full sm:w-[170px] h-[200px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
        onClick={handleViewProfile}
      >
        <img
          src={photo}
          alt={profile.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {profile.isMutualMatch && (
          <div className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            💜 Mutual
          </div>
        )}
        {isAccepted && (
          <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            ✓ Connected
          </div>
        )}
        {!profile.isMutualMatch && !isAccepted && profile.isNewToday && (
          <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            🆕 New
          </div>
        )}
        {profile.isNRI && (
          <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            🌍 NRI
          </div>
        )}
        <div
          className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full border border-white ${profile.lastActive === "Online Now" ? "bg-green-500" : "bg-gray-400"}`}
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 relative z-10">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <h3
              className="text-lg font-serif font-bold text-gray-900 truncate cursor-pointer hover:text-[#8B1A4A]"
              onClick={handleViewProfile}
            >
              {profile.name}
            </h3>
            {profile.verified.profile && (
              <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50 shrink-0" />
            )}
            <div className="ml-auto text-gray-400 hover:text-gray-600 cursor-pointer p-1">
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          <VerificationBadges verified={profile.verified} />

          <div className="flex flex-wrap gap-1.5 mb-3">
            {profile.lastActive === "Online Now" && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-bold text-green-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
                Online Now
              </span>
            )}
            {isAccepted && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-700">
                ✓ Connected
              </span>
            )}
            {profile.isMutualMatch && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold text-purple-700">
                💜 Mutual Match
              </span>
            )}
            {profile.isNRI && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-700">
                🌍 NRI
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-gray-600 mb-3">
            <div className="flex gap-1.5">
              <span className="shrink-0">👤</span>
              <span className="truncate">
                {profile.age} yrs, {profile.height}
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">💍</span>
              <span className="truncate">{profile.maritalStatus}</span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">🕉️</span>
              <span className="truncate">
                {profile.religion} · {profile.caste}
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">📍</span>
              <span className="truncate">
                {profile.city},{" "}
                {profile.isNRI ? profile.country : profile.state}
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">🗣️</span>
              <span className="truncate">{profile.motherTongue}</span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">🎓</span>
              <span className="truncate">{profile.education}</span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">💼</span>
              <span className="truncate">{profile.profession}</span>
            </div>
            <div className="flex gap-1.5">
              <span className="shrink-0">💰</span>
              <span className="truncate">{profile.income}</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic line-clamp-2 mb-1">
            "{profile.bio}"
          </p>
          <button
            onClick={handleViewProfile}
            className="text-xs text-[#8B1A4A] font-semibold hover:underline"
          >
            Read More →
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
          {isAccepted ? (
            <button
              onClick={handleMessage}
              className="flex-1 font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 text-sm bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
            >
              <MessageSquare className="w-4 h-4" /> Send Message
            </button>
          ) : (
            <button
              onClick={handleSendInterest}
              disabled={interestSent}
              className={`flex-1 font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 text-sm ${interestSent ? "bg-green-50 text-green-600 border border-green-200" : "bg-[#8B1A4A]/8 hover:bg-[#8B1A4A]/15 text-[#8B1A4A] border border-[#8B1A4A]/20"}`}
              data-testid={`btn-send-interest-${profile.id}`}
            >
              {interestSent ? (
                <>
                  <Check className="w-4 h-4" /> Interest Sent
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4" /> Send Interest
                </>
              )}
            </button>
          )}
          <button
            onClick={onShortlist}
            className={`p-2 border rounded-lg transition-all ${isShortlisted ? "border-amber-300 bg-amber-50 text-amber-500" : "border-gray-200 text-gray-500 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-500"}`}
            title="Shortlist"
            data-testid={`btn-shortlist-${profile.id}`}
          >
            <Heart
              className={`w-4 h-4 ${isShortlisted ? "fill-amber-400" : ""}`}
            />
          </button>
        </div>
      </div>

      <div className="sm:w-[120px] flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-gray-100 pt-3 sm:pt-0 pl-0 sm:pl-4 flex-shrink-0 z-10">
        <p className="text-[11px] text-gray-400 mb-2 text-center font-medium">
          Like this profile?
        </p>
        {isAccepted ? (
          <div className="flex flex-col items-center">
            <button
              onClick={handleMessage}
              className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 mb-2"
              data-testid={`btn-message-${profile.id}`}
            >
              <MessageSquare className="w-6 h-6" />
            </button>
            <span className="text-xs font-bold text-emerald-600 text-center leading-tight">
              Message Now
            </span>
          </div>
        ) : profile.canConnect ? (
          <div className="flex flex-col items-center">
            <button
              onClick={handleConnect}
              className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 mb-2"
              data-testid={`btn-connect-${profile.id}`}
            >
              <Check className="w-7 h-7" strokeWidth={3} />
            </button>
            <span className="text-xs font-bold text-emerald-600">
              Connect Now
            </span>
            {profile.isMutualMatch && (
              <span className="mt-1 text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
                Mutual!
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={() => navigate("/dashboard/premium")}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B38D1B] hover:from-[#C4A02A] hover:to-[#A37B12] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 mb-2"
              data-testid={`btn-upgrade-${profile.id}`}
            >
              <Crown className="w-7 h-7" />
            </button>
            <span className="text-[11px] font-bold text-[#D4AF37] text-center leading-tight">
              Upgrade to
              <br />
              Connect
            </span>
          </div>
        )}
        <p className="text-[10px] text-gray-400 mt-2">{profile.lastActive}</p>
      </div>
    </div>
  );
}
