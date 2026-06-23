import { useLocation } from "wouter";
import { allProfiles, profilePhotos } from "@/data/profiles";

export default function RightStrip() {
  const [, navigate] = useLocation();
  const similar = allProfiles.slice(10, 20);

  return (
    <div className="hidden lg:block w-[72px] shrink-0 sticky top-[120px]" data-testid="right-strip">
      <div className="bg-white rounded-2xl p-2 flex flex-col items-center gap-2.5 shadow-sm py-4 border border-gray-100">
        <div className="text-[9px] font-bold text-gray-400 text-center uppercase tracking-widest mb-1">Similar</div>
        {similar.map((profile) => {
          const photo = profilePhotos[profile.photoIdx % 6];
          return (
            <button
              key={profile.id}
              onClick={() => {
                const nextId = allProfiles.length > 1 
                  ? allProfiles.find(p => p.id !== profile.id)?.id || profile.id 
                  : profile.id;
                navigate(`/dashboard/view/${nextId}`);
              }}
              className="group relative"
              data-testid={`thumb-${profile.id}`}
              title={`${profile.name}, ${profile.age} · ${profile.city}`}
            >
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-transparent shadow-sm group-hover:border-[#D4AF37] group-hover:scale-110 transition-all">
                <img src={photo} alt={profile.name} className="w-full h-full object-cover object-top" />
              </div>
              {profile.lastActive === "Online Now" && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
