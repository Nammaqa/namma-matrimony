import React from "react";
import { Star, Heart } from "lucide-react";
import couple1 from "@/assets/images/couple1.png";
import couple2 from "@/assets/images/couple2.png";
import couple3 from "@/assets/images/couple3.png";

const stories = [
  {
    id: 1,
    names: "Priya & Arjun",
    city: "Mumbai",
    year: "2023",
    quote: "Rishtey found us our perfect match in 3 weeks. We share the same values and dreams!",
    img: couple1,
  },
  {
    id: 2,
    names: "Meera & Rahul",
    city: "Delhi",
    year: "2022",
    quote: "I was skeptical about online matrimony, but Rishtey changed my life. Couldn't ask for better.",
    img: couple2,
  },
  {
    id: 3,
    names: "Anjali & Vikram",
    city: "Bangalore",
    year: "2024",
    quote: "The detailed compatibility filters and horoscope matching made finding the right person effortless.",
    img: couple3,
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-[#FFFBF7] py-20 px-4" data-testid="section-success">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <Heart className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-[#8B1A4A]/10 fill-[#8B1A4A]/10" />
          <h3 className="text-[#8B1A4A] font-bold uppercase tracking-widest text-sm mb-2 relative z-10" data-testid="success-eyebrow">Love Stories</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 relative z-10" data-testid="success-title">Couples Who Found Their Forever</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="glass-card bg-white rounded-2xl p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl" data-testid={`story-card-${story.id}`}>
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                <img src={story.img} alt={story.names} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#8B1A4A]">
                  {story.year}
                </div>
              </div>
              
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              
              <p className="font-serif italic text-gray-700 mb-6 text-lg">"{story.quote}"</p>
              
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-900 text-lg">{story.names}</h4>
                <p className="text-sm text-gray-500">{story.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
