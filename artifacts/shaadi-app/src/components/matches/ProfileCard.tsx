import React from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Check, Heart, Star, MoreVertical } from "lucide-react";

export type ProfileData = {
  id: string;
  name: string;
  age: string;
  height: string;
  religion: string;
  location: string;
  language: string;
  education: string;
  profession: string;
  income: string;
  marital: string;
  profileBy: string;
  badge?: { type: string; label: string };
  action: string;
  img: string;
};

export default function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-5 mb-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden" data-testid={`profile-card-${profile.id}`}>
      
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B1A4A]/5 to-transparent rounded-bl-full pointer-events-none"></div>
      
      {/* Left side: Photo */}
      <div className="relative w-full sm:w-[180px] h-[220px] rounded-lg overflow-hidden flex-shrink-0 group/photo">
        <img 
          src={profile.img} 
          alt={profile.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
        />
        
        {profile.badge && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-sm z-10 ${
            profile.badge.type === "plus" ? "bg-[#D4AF37]" : 
            profile.badge.type === "new" ? "bg-emerald-500" : "bg-blue-500"
          }`}>
            {profile.badge.label}
          </div>
        )}

        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm z-10"></div>
        
        <div className="absolute bottom-2 left-0 w-full flex justify-between px-2 opacity-0 group-hover/photo:opacity-100 transition-opacity z-10">
          <button className="bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors backdrop-blur-sm">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-white text-xs bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">1 of 4</span>
          <button className="bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors backdrop-blur-sm">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Center: Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-1 relative z-10">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <h3 className="text-xl font-serif font-bold text-gray-900 truncate">{profile.name}</h3>
            <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-50" />
            <div className="ml-auto flex items-center text-gray-400 hover:text-gray-600 cursor-pointer">
              <MoreVertical className="w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-bold text-green-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online Now
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold text-purple-700">
              Highly Compatible
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-700">
              Premium
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">👤</span><span className="truncate">{profile.age} yrs, {profile.height}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">💍</span><span className="truncate">{profile.marital}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">🕉️</span><span className="truncate">{profile.religion}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">📍</span><span className="truncate">{profile.location}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">🗣️</span><span className="truncate">{profile.language}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">🎓</span><span className="truncate">{profile.education}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">💼</span><span className="truncate">{profile.profession}</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-5 text-center">💰</span><span className="truncate">{profile.income}</span></div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Profile created by {profile.profileBy}</span>
            <span>Last Active: <span className="font-medium text-gray-700">Today</span></span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
          <button className="flex-1 bg-[#8B1A4A]/5 hover:bg-[#8B1A4A]/10 text-[#8B1A4A] font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
            <Check className="w-4 h-4" /> Send Interest
          </button>
          <button className="p-2 border border-gray-200 text-gray-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 rounded-lg transition-colors" title="Like">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 border border-gray-200 text-gray-600 hover:text-amber-500 hover:border-amber-200 hover:bg-amber-50 rounded-lg transition-colors" title="Shortlist">
            <Star className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Right: Action */}
      <div className="sm:w-[130px] flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 pl-0 sm:pl-4 flex-shrink-0 bg-gray-50/50 sm:bg-transparent rounded-b-xl sm:rounded-none -mx-4 -mb-4 sm:mx-0 sm:mb-0 p-4 sm:p-0 z-10">
        <p className="text-xs text-gray-500 mb-3 text-center font-medium">Like this profile?</p>
        
        {profile.action === "connect" ? (
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 mb-3" data-testid={`btn-connect-${profile.id}`}>
              <Check className="w-8 h-8" strokeWidth={3} />
            </button>
            <span className="text-sm font-bold text-emerald-600">Connect Now</span>
            {profile.id === "1" && <span className="mt-2 text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">Mutual Match!</span>}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B38D1B] hover:from-[#C4A02A] hover:to-[#A37B12] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 mb-3" data-testid={`btn-upgrade-${profile.id}`}>
              <span className="text-2xl">👑</span>
            </button>
            <span className="text-sm font-bold text-[#D4AF37] text-center leading-tight">Upgrade to<br/>Connect</span>
          </div>
        )}
      </div>
    </div>
  );
}
