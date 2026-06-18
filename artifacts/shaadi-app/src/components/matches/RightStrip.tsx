import React from "react";
import f1 from "@/assets/images/featured1.png";
import f2 from "@/assets/images/featured2.png";
import f3 from "@/assets/images/featured3.png";
import f4 from "@/assets/images/featured4.png";
import f5 from "@/assets/images/featured5.png";
import f6 from "@/assets/images/featured6.png";

export default function RightStrip() {
  const thumbs = [
    { id: 1, src: f1 },
    { id: 2, src: f2 },
    { id: 3, src: f3 },
    { id: 4, src: f4 },
    { id: 5, src: f5 },
    { id: 6, src: f6 },
    { id: 7, src: f1 },
    { id: 8, src: f2 },
    { id: 9, src: f3 },
    { id: 10, src: f4 },
  ];

  return (
    <div className="hidden lg:block w-[64px] shrink-0 sticky top-[120px]" data-testid="right-strip">
      <div className="bg-white rounded-full p-2 flex flex-col items-center gap-3 shadow-sm py-4 border border-gray-100">
        <div className="text-[10px] font-bold text-gray-400 text-center mb-1 uppercase tracking-widest">Similar</div>
        
        {thumbs.map((thumb) => (
          <div key={thumb.id} className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent shadow-sm cursor-pointer hover:scale-110 transition-transform hover:border-[#D4AF37]" data-testid={`thumb-${thumb.id}`}>
            <img src={thumb.src} alt={`Similar match ${thumb.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
