import React from "react";
import { Eye, Heart, Users, Star, Bell, Check } from "lucide-react";
import f1 from "@/assets/images/featured1.png";
import f2 from "@/assets/images/featured2.png";
import f3 from "@/assets/images/featured3.png";
import f4 from "@/assets/images/featured4.png";
import f5 from "@/assets/images/featured5.png";
import f6 from "@/assets/images/featured6.png";

export default function Dashboard() {
  const recommendedMatches = [
    { id: 1, name: "Priya T", age: 26, city: "Mumbai", src: f1 },
    { id: 2, name: "Anjali M", age: 24, city: "Bangalore", src: f2 },
    { id: 3, name: "Meera S", age: 25, city: "Hyderabad", src: f3 },
    { id: 4, name: "Rahul K", age: 28, city: "Delhi", src: f4 },
    { id: 5, name: "Arjun P", age: 30, city: "Chennai", src: f5 },
  ];

  return (
    <div className="w-full py-16 border-t border-gray-200 bg-white" data-testid="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">My Dashboard</h2>
        
        {/* Row 1 - Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-testid="dashboard-stats">
          <div className="glass-card bg-gray-50/50 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Profile Views</div>
              <div className="text-2xl font-bold text-gray-900">47 <span className="text-xs font-normal text-gray-400">this week</span></div>
            </div>
          </div>
          
          <div className="glass-card bg-gray-50/50 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Interests Received</div>
              <div className="text-2xl font-bold text-gray-900">23</div>
            </div>
          </div>
          
          <div className="glass-card bg-gray-50/50 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Mutual Matches</div>
              <div className="text-2xl font-bold text-gray-900">8</div>
            </div>
          </div>
          
          <div className="glass-card bg-gray-50/50 rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Profile Score</div>
              <div className="text-2xl font-bold text-gray-900">87%</div>
            </div>
          </div>
        </div>

        {/* Row 2 - Completeness & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Completeness Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden" data-testid="dashboard-completeness">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B1A4A]/5 rounded-bl-full pointer-events-none"></div>
            
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Profile Completeness</h3>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative z-10">
              <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="3.5" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8B1A4A" strokeWidth="3.5" strokeDasharray="78, 100" className="animate-[stroke_1.5s_ease-out]" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">78%</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Complete</span>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center font-medium text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 text-emerald-600"><Check className="w-3.5 h-3.5" /></span> 
                    Basic Details
                  </li>
                  <li className="flex items-center font-medium text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 text-emerald-600"><Check className="w-3.5 h-3.5" /></span> 
                    Photos
                  </li>
                  <li className="flex items-center font-medium text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 text-emerald-600"><Check className="w-3.5 h-3.5" /></span> 
                    Education
                  </li>
                  <li className="flex items-center font-medium text-gray-500">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-3"></span> 
                    Horoscope 
                    <span className="ml-auto text-xs text-[#8B1A4A] font-bold cursor-pointer hover:underline bg-[#8B1A4A]/10 px-2 py-0.5 rounded">+ Add</span>
                  </li>
                  <li className="flex items-center font-medium text-gray-500">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-3"></span> 
                    Family Details 
                    <span className="ml-auto text-xs text-[#8B1A4A] font-bold cursor-pointer hover:underline bg-[#8B1A4A]/10 px-2 py-0.5 rounded">+ Add</span>
                  </li>
                  <li className="flex items-center font-medium text-gray-500">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-3"></span> 
                    Partner Preferences 
                    <span className="ml-auto text-xs text-[#8B1A4A] font-bold cursor-pointer hover:underline bg-[#8B1A4A]/10 px-2 py-0.5 rounded">+ Add</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Activity */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm" data-testid="dashboard-activity">
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">Recent Activity</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <img src={f5} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 border-b border-gray-100 pb-4">
                  <p className="text-base text-gray-800"><span className="font-bold">Neha V</span> liked your profile</p>
                  <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1"><Bell className="w-3 h-3" /> 1 hour ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <img src={f6} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 border-b border-gray-100 pb-4">
                  <p className="text-base text-gray-800"><span className="font-bold">Sunita R</span> viewed your profile</p>
                  <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1"><Bell className="w-3 h-3" /> 3 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1 border-b border-gray-100 pb-4">
                  <p className="text-base font-bold text-gray-800">You have 18 new matches today</p>
                  <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1"><Bell className="w-3 h-3" /> 6 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200">
                  <img src={f1} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-base text-gray-800"><span className="font-bold">Priya S</span> sent you an interest</p>
                  <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1"><Bell className="w-3 h-3" /> Yesterday</p>
                </div>
              </div>
              <button className="w-full text-center text-sm text-[#8B1A4A] font-bold mt-2 hover:underline">View All Activity</button>
            </div>
          </div>
        </div>

        {/* Row 3 - Recommended Matches */}
        <div data-testid="dashboard-recommended">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Recommended for You</h3>
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 no-scrollbar">
            {recommendedMatches.map(match => (
              <div key={match.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden min-w-[200px] shrink-0 group hover:shadow-lg transition-shadow">
                <div className="h-48 w-full overflow-hidden relative">
                  <img src={match.src} alt={match.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-bold text-lg leading-tight">{match.name}</div>
                    <div className="text-xs opacity-90">{match.age} yrs • {match.city}</div>
                  </div>
                </div>
                <div className="p-4">
                  <button className="w-full bg-[#8B1A4A]/10 hover:bg-[#8B1A4A] text-[#8B1A4A] hover:text-white border border-[#8B1A4A]/20 py-2 rounded-lg text-sm font-bold transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
