import { useState } from "react";
import { Link } from "wouter";
import DashboardLayout from "@/components/matches/DashboardLayout";
import { Search, SlidersHorizontal, MapPin, Heart, Star } from "lucide-react";
import profile1 from "@/assets/images/profile1.png";
import profile2 from "@/assets/images/profile2.png";
import profile3 from "@/assets/images/profile3.png";
import profile4 from "@/assets/images/profile4.png";
import profile5 from "@/assets/images/profile5.png";
import profile6 from "@/assets/images/profile6.png";

interface SearchPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const results = [
  { img: profile1, name: "Priya Sharma", age: 26, height: "5'4\"", city: "Mumbai", edu: "B.Tech", job: "Software Engineer", religion: "Hindu Brahmin", income: "12 LPA", score: 0 },
  { img: profile2, name: "Ananya Patel", age: 24, height: "5'3\"", city: "Ahmedabad", edu: "MBBS", job: "Doctor", religion: "Hindu Patel", income: "8 LPA", score: 0 },
  { img: profile3, name: "Deepa Nair", age: 28, height: "5'5\"", city: "Kochi", edu: "MBA", job: "Finance Manager", religion: "Hindu Nair", income: "15 LPA", score: 0 },
  { img: profile4, name: "Fatima Khan", age: 25, height: "5'4\"", city: "Hyderabad", edu: "MCA", job: "Software Dev", religion: "Muslim Sunni", income: "7 LPA", score: 0 },
  { img: profile5, name: "Neha Verma", age: 27, height: "5'3\"", city: "Delhi", edu: "MBA", job: "HR Manager", religion: "Hindu", income: "10 LPA", score: 0 },
  { img: profile6, name: "Sunita Reddy", age: 29, height: "5'2\"", city: "Bangalore", edu: "B.Sc", job: "Pharmacist", religion: "Hindu", income: "6 LPA", score: 0 },
];

const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30 focus:border-[#8B1A4A]";
const labelCls = "block text-xs font-semibold text-gray-500 mb-1";

export default function SearchPage({ setIsLoggedIn }: SearchPageProps) {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [liked, setLiked] = useState<number[]>([]);
  const [shortlisted, setShortlisted] = useState<number[]>([]);

  return (
    <DashboardLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-testid="search-page">
        <div className="mb-6 bg-gradient-to-r from-[#8B1A4A] to-[#4A0A23] rounded-2xl p-6">
          <h1 className="text-2xl font-serif font-bold text-white mb-4">Advanced Search</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1 uppercase">Looking For</label>
              <select className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 text-sm focus:outline-none">
                <option>Bride</option><option>Groom</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1 uppercase">Age Range</label>
              <div className="flex gap-2">
                <input type="number" defaultValue={22} className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 text-sm" />
                <span className="text-white/70 self-center">to</span>
                <input type="number" defaultValue={35} className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1 uppercase">Religion</label>
              <select className="w-full bg-white/90 text-gray-900 rounded-lg px-3 py-2.5 text-sm">
                <option>Any</option><option>Hindu</option><option>Muslim</option><option>Sikh</option><option>Christian</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-[#D4AF37] hover:bg-[#C4A030] text-[#1A0A14] font-bold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all" data-testid="btn-search">
                <Search className="h-4 w-4" /> Search Matches
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {filtersOpen && (
            <aside className="w-64 shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-20 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800 text-sm">Advanced Filters</h3>
                  <button className="text-xs text-[#8B1A4A] font-semibold hover:underline">Reset All</button>
                </div>
                {[
                  { label: "Height (From)", options: ["5'0\"","5'1\"","5'2\"","5'3\"","5'4\"","5'5\""] },
                  { label: "Mother Tongue", options: ["Any","Hindi","Tamil","Telugu","Marathi","Bengali","Gujarati"] },
                  { label: "Education", options: ["Any","Graduate","Post Graduate","Doctorate","Professional"] },
                  { label: "Annual Income", options: ["Any","Under 3L","3-6L","6-10L","10-20L","20L+"] },
                  { label: "Marital Status", options: ["Never Married","Divorced","Widowed","Any"] },
                ].map((f) => (
                  <div key={f.label}>
                    <label className={labelCls}>{f.label}</label>
                    <select className={inputCls}>
                      {f.options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
                <div>
                  <label className={labelCls}>Location</label>
                  <input className={inputCls} placeholder="City or State" />
                </div>
                <div>
                  <label className={labelCls}>Manglik</label>
                  <div className="space-y-1.5">
                    {["Any","Non-Manglik","Manglik"].map((o) => (
                      <label key={o} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="radio" name="manglik" className="text-[#8B1A4A]" defaultChecked={o === "Any"} />
                        {o}
                      </label>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-[#8B1A4A] hover:bg-[#7A1540] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors" data-testid="btn-apply-filters">
                  Apply Filters
                </button>
              </div>
            </aside>
          )}

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">1,247</span> matches found</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setFiltersOpen(!filtersOpen)} className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50" data-testid="btn-toggle-filters">
                  <SlidersHorizontal className="h-4 w-4" /> {filtersOpen ? "Hide" : "Show"} Filters
                </button>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none text-gray-700">
                  <option>Sort: Relevance</option>
                  <option>Sort: Newest</option>
                  <option>Sort: Age</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group" data-testid={`search-result-${i}`}>
                  <div className="relative">
                    <img src={r.img} alt={r.name} className="w-full h-48 object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">0% Match</span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => setLiked(liked.includes(i) ? liked.filter(x => x !== i) : [...liked, i])}
                        className={`h-8 w-8 rounded-full flex items-center justify-center shadow transition-all ${liked.includes(i) ? "bg-rose-500 text-white" : "bg-white/90 text-gray-600 hover:bg-rose-50"}`}
                        data-testid={`btn-like-${i}`}
                      >
                        <Heart className={`h-4 w-4 ${liked.includes(i) ? "fill-white" : ""}`} />
                      </button>
                      <button
                        onClick={() => setShortlisted(shortlisted.includes(i) ? shortlisted.filter(x => x !== i) : [...shortlisted, i])}
                        className={`h-8 w-8 rounded-full flex items-center justify-center shadow transition-all ${shortlisted.includes(i) ? "bg-amber-400 text-white" : "bg-white/90 text-gray-600 hover:bg-amber-50"}`}
                        data-testid={`btn-shortlist-${i}`}
                      >
                        <Heart className={`h-4 w-4 ${shortlisted.includes(i) ? "fill-white" : ""}`} />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white font-bold">{r.name}, {r.age}</p>
                      <p className="text-white/80 text-xs flex items-center gap-1"><MapPin className="h-3 w-3" />{r.city}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-600 mb-3">
                      <span>📏 {r.height}</span>
                      <span>🎓 {r.edu}</span>
                      <span>💼 {r.job}</span>
                      <span>💰 {r.income}</span>
                      <span className="col-span-2">🛕 {r.religion}</span>
                    </div>
                    <Link to="/dashboard">
                      <button className="w-full bg-[#8B1A4A] hover:bg-[#7A1540] text-white text-sm font-semibold py-2 rounded-xl transition-colors" data-testid={`btn-send-interest-${i}`}>
                        Send Interest
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
