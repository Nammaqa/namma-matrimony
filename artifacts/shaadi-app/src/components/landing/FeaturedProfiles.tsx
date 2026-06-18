import React from "react";
import { Lock } from "lucide-react";
import f1 from "@/assets/images/featured1.png";
import f2 from "@/assets/images/featured2.png";
import f3 from "@/assets/images/featured3.png";
import f4 from "@/assets/images/featured4.png";
import f5 from "@/assets/images/featured5.png";
import f6 from "@/assets/images/featured6.png";

const profiles = [
  { id: 1, name: "Priya", age: 26, city: "Mumbai", job: "Doctor", img: f1 },
  { id: 2, name: "Rahul", age: 28, city: "Delhi", job: "Engineer", img: f4 },
  { id: 3, name: "Anjali", age: 24, city: "Bangalore", job: "MBA", img: f2 },
  { id: 4, name: "Arjun", age: 30, city: "Chennai", job: "Lawyer", img: f5 },
  { id: 5, name: "Meera", age: 25, city: "Hyderabad", job: "Pharmacist", img: f3 },
  { id: 6, name: "Vikram", age: 29, city: "Pune", job: "CA", img: f6 },
];

export default function FeaturedProfiles() {
  return (
    <section className="bg-[#FFF8F5] py-20 px-4" data-testid="section-featured">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-2" data-testid="featured-eyebrow">Explore Matches</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900" data-testid="featured-title">Profiles Waiting for You</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {profiles.map((p) => (
            <div key={p.id} className="glass-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group" data-testid={`featured-card-${p.id}`}>
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-bold px-2 py-1 rounded shadow">Premium</div>
              </div>
              
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{p.name}, {p.age} <span className="text-gray-400">***</span></h4>
                <p className="text-gray-600 mb-6">{p.city} | {p.job}</p>
                <button className="w-full py-2.5 border-2 border-[#8B1A4A] text-[#8B1A4A] font-semibold rounded-lg hover:bg-[#8B1A4A] hover:text-white transition-colors" data-testid={`btn-login-view-${p.id}`}>
                  Login to View
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#B38D1B] hover:from-[#C4A02A] hover:to-[#A37B12] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1" data-testid="btn-view-all-matches">
            Login to See 50 Lakh+ Profiles
          </button>
        </div>
      </div>
    </section>
  );
}
