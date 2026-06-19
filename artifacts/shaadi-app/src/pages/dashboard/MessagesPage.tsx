import { useState, useRef, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { ArrowLeft, Send, Phone, Video, MoreVertical, CheckCheck, ShieldCheck } from "lucide-react";
import { allProfiles, profilePhotos } from "@/data/profiles";
import Navbar from "@/components/matches/Navbar";
import BottomNav from "@/components/matches/BottomNav";

interface MessagesPageProps {
  setIsLoggedIn: (v: boolean) => void;
}

interface Message {
  id: number;
  from: "me" | "them";
  text: string;
  time: string;
  read: boolean;
}

const getInitialMessages = (profileName: string): Message[] => [
  { id: 1, from: "them", text: `Hi! I came across your profile on Rishtey and found it quite interesting. 😊`, time: "10:02 AM", read: true },
  { id: 2, from: "me", text: `Hello ${profileName.split(" ")[0]}! Thank you for reaching out. I went through your profile too — very impressive!`, time: "10:15 AM", read: true },
  { id: 3, from: "them", text: "Thank you! I'd love to know more about you and your family background.", time: "10:18 AM", read: true },
  { id: 4, from: "me", text: "Sure! I'm from a close-knit family in Mumbai. My parents are very supportive. How about you?", time: "10:30 AM", read: true },
  { id: 5, from: "them", text: "That's wonderful! My family is from here too. I think we have a lot in common — would love to connect on a call sometime.", time: "10:45 AM", read: true },
];

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

export default function MessagesPage({ setIsLoggedIn }: MessagesPageProps) {
  const [, params] = useRoute("/dashboard/messages/:id");
  const [, navigate] = useLocation();
  const id = parseInt(params?.id || "0");
  const profile = allProfiles.find(p => p.id === id);

  const [messages, setMessages] = useState<Message[]>(profile ? getInitialMessages(profile.name) : []);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F5]">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Profile not found</p>
          <button onClick={() => navigate("/dashboard/inbox")} className="text-[#8B1A4A] font-semibold">← Back to Inbox</button>
        </div>
      </div>
    );
  }

  const photo = profilePhotos[profile.photoIdx % 6];

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date();
    setMessages(prev => [...prev, { id: Date.now(), from: "me", text, time: formatTime(now), read: false }]);
    setInput("");

    setTimeout(() => {
      const replies = [
        "That sounds wonderful! 😊",
        "I completely agree with you.",
        "That's interesting! Tell me more.",
        "I would love to hear more about that.",
        "Yes, I feel the same way!",
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages(prev => [...prev, { id: Date.now() + 1, from: "them", text: reply, time: formatTime(new Date()), read: false }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] flex flex-col pb-16 md:pb-0" data-testid="messages-page">
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-4 flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-1 overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-white sticky top-0 z-10">
            <button onClick={() => navigate("/dashboard/inbox")} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="relative cursor-pointer" onClick={() => navigate(`/dashboard/view/${profile.id}`)}>
              <img src={photo} alt={profile.name} className="w-10 h-10 rounded-full object-cover object-top border border-gray-100" />
              {profile.lastActive === "Online Now" && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white" />
              )}
            </div>

            <div className="flex-1 min-w-0 cursor-pointer" onClick={() => navigate(`/dashboard/view/${profile.id}`)}>
              <div className="flex items-center gap-1.5">
                <p className="font-semibold text-gray-900 truncate">{profile.name}</p>
                {profile.verified.profile && <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
              </div>
              <p className="text-xs text-gray-500">
                {profile.lastActive === "Online Now" ? <span className="text-green-500 font-medium">● Online now</span> : profile.lastActive}
                {" · "}{profile.city}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500" title="Voice call">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500" title="Video call">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            <div className="text-center mb-4">
              <span className="text-xs text-gray-400 bg-white border border-gray-100 px-3 py-1 rounded-full">Today</span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-end gap-2 ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
                {msg.from === "them" && (
                  <img src={photo} alt="" className="w-7 h-7 rounded-full object-cover object-top shrink-0 mb-1" />
                )}
                <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm ${msg.from === "me" ? "bg-[#8B1A4A] text-white rounded-br-sm" : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-sm"}`}>
                  <p className="leading-relaxed">{msg.text}</p>
                  <div className={`flex items-center gap-1 mt-1 ${msg.from === "me" ? "justify-end" : ""}`}>
                    <span className={`text-[10px] ${msg.from === "me" ? "text-white/60" : "text-gray-400"}`}>{msg.time}</span>
                    {msg.from === "me" && <CheckCheck className="h-3.5 w-3.5 text-white/60" />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                placeholder={`Message ${profile.name.split(" ")[0]}...`}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30 focus:border-[#8B1A4A] transition-all"
                data-testid="message-input"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-[#8B1A4A] hover:bg-[#7A1540] disabled:bg-gray-200 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all"
                data-testid="btn-send-message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">Messages are end-to-end secured on Rishtey</p>
          </div>
        </div>
      </div>

      <BottomNav setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
