import React from "react";
import ProfileCard from "./ProfileCard";
import f1 from "@/assets/images/featured1.png";
import f2 from "@/assets/images/featured2.png";
import f3 from "@/assets/images/featured3.png";
import f4 from "@/assets/images/featured4.png";

const profiles = [
  {
    id: "1",
    name: "Priya Sharma",
    age: "26",
    height: "5'4\"",
    religion: "Hindu Brahmin",
    location: "Mumbai, MH",
    language: "Hindi",
    education: "B.Tech",
    profession: "Software Engineer",
    income: "12 LPA",
    marital: "Never Married",
    profileBy: "Self",
    badge: { type: "plus", label: "Plus" },
    action: "connect",
    img: f1
  },
  {
    id: "2",
    name: "Ananya Patel",
    age: "24",
    height: "5'3\"",
    religion: "Hindu Patel",
    location: "Ahmedabad, GJ",
    language: "Gujarati",
    education: "MBBS",
    profession: "Doctor",
    income: "8 LPA",
    marital: "Never Married",
    profileBy: "Parent",
    badge: { type: "new", label: "New" },
    action: "upgrade",
    img: f2
  },
  {
    id: "3",
    name: "Deepa Nair",
    age: "28",
    height: "5'5\"",
    religion: "Hindu Nair",
    location: "Kochi, KL",
    language: "Malayalam",
    education: "MBA Finance",
    profession: "Financial Analyst",
    income: "15 LPA",
    marital: "Never Married",
    profileBy: "Self",
    badge: { type: "verified", label: "Verified" },
    action: "connect",
    img: f3
  },
  {
    id: "4",
    name: "Fatima Khan",
    age: "25",
    height: "5'4\"",
    religion: "Muslim Sunni",
    location: "Hyderabad, TS",
    language: "Urdu",
    education: "MCA",
    profession: "Software Dev",
    income: "7 LPA",
    marital: "Never Married",
    profileBy: "Parent",
    action: "connect",
    img: f4
  }
];

export default function MatchesFeed() {
  return (
    <div className="flex-1 w-full max-w-3xl pb-8" data-testid="matches-feed">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-lg font-bold text-gray-900 font-serif">New Members Matching Your Preferences</h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#8B1A4A]/10 text-[#8B1A4A] mt-1">1,247 matches</span>
        </div>
        
        <div className="mt-4 sm:mt-0 flex items-center gap-2">
          <label className="text-sm text-gray-500 font-medium">Sort by:</label>
          <select className="text-sm bg-gray-50 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8B1A4A] font-medium text-gray-700">
            <option>Relevance</option>
            <option>Newest First</option>
            <option>Age</option>
            <option>Height</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-white border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 rounded-full font-bold shadow-sm transition-colors" data-testid="btn-load-more">
          Load More Matches
        </button>
      </div>
    </div>
  );
}
