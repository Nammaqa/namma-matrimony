import { useState } from "react";
import DashboardLayout from "@/components/matches/DashboardLayout";
import { Camera, User, Users, GraduationCap, Heart, Star, Image, ChevronRight, Edit2, Check, X } from "lucide-react";
import profile1 from "@/assets/images/profile1.png";

interface ProfilePageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const tabs = [
  { id: "personal", label: "Personal Info", icon: User },
  { id: "family", label: "Family Details", icon: Users },
  { id: "career", label: "Career & Education", icon: GraduationCap },
  { id: "preferences", label: "Partner Preferences", icon: Heart },
  { id: "photos", label: "Photos", icon: Image },
  { id: "horoscope", label: "Horoscope", icon: Star },
];

const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30 focus:border-[#8B1A4A] transition-all";
const labelCls = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1";
const sectionTitle = "text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100";

function PersonalInfo() {
  return (
    <div className="space-y-6">
      <p className={sectionTitle}>Basic Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Full Name</label><input className={inputCls} defaultValue="Priya Sharma" /></div>
        <div><label className={labelCls}>Date of Birth</label><input type="date" className={inputCls} defaultValue="1998-03-15" /></div>
        <div><label className={labelCls}>Gender</label>
          <select className={inputCls}><option>Female</option><option>Male</option></select></div>
        <div><label className={labelCls}>Marital Status</label>
          <select className={inputCls}><option>Never Married</option><option>Divorced</option><option>Widowed</option></select></div>
        <div><label className={labelCls}>Height</label>
          <select className={inputCls}><option>{"5'2\""}</option><option>{"5'3\""}</option><option>{"5'4\""}</option><option>{"5'5\""}</option><option>{"5'6\""}</option></select></div>
        <div><label className={labelCls}>Weight (kg)</label><input type="number" className={inputCls} defaultValue={55} /></div>
        <div><label className={labelCls}>Blood Group</label>
          <select className={inputCls}><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>O+</option><option>O-</option><option>AB+</option><option>AB-</option></select></div>
        <div><label className={labelCls}>Mother Tongue</label>
          <select className={inputCls}><option>Hindi</option><option>Tamil</option><option>Telugu</option><option>Marathi</option><option>Bengali</option><option>Gujarati</option></select></div>
      </div>
      <p className={sectionTitle}>Religious Details</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div><label className={labelCls}>Religion</label>
          <select className={inputCls}><option>Hindu</option><option>Muslim</option><option>Sikh</option><option>Christian</option></select></div>
        <div><label className={labelCls}>Caste</label><input className={inputCls} defaultValue="Brahmin" /></div>
        <div><label className={labelCls}>Sub-caste</label><input className={inputCls} placeholder="Enter sub-caste" /></div>
      </div>
      <p className={sectionTitle}>About Me</p>
      <textarea className={`${inputCls} h-28 resize-none`} defaultValue="I am a software engineer based in Mumbai, passionate about technology and travel. I enjoy cooking, reading, and exploring new places. Looking for a life partner who shares similar values and has a positive outlook towards life." />
      <div><label className={labelCls}>City / Location</label><input className={inputCls} defaultValue="Mumbai, Maharashtra" /></div>
    </div>
  );
}

function FamilyDetails() {
  return (
    <div className="space-y-6">
      <p className={sectionTitle}>Parents</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Father's Name</label><input className={inputCls} defaultValue="Rajesh Sharma" /></div>
        <div><label className={labelCls}>Father's Occupation</label>
          <select className={inputCls}><option>Business</option><option>Service</option><option>Retired</option><option>Not Employed</option></select></div>
        <div><label className={labelCls}>Mother's Name</label><input className={inputCls} defaultValue="Sunita Sharma" /></div>
        <div><label className={labelCls}>Mother's Occupation</label>
          <select className={inputCls}><option>Homemaker</option><option>Business</option><option>Service</option><option>Retired</option></select></div>
      </div>
      <p className={sectionTitle}>Siblings</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Brothers</label><input type="number" className={inputCls} defaultValue={1} min={0} /></div>
        <div><label className={labelCls}>Sisters</label><input type="number" className={inputCls} defaultValue={0} min={0} /></div>
      </div>
      <p className={sectionTitle}>Family Background</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div><label className={labelCls}>Family Type</label>
          <select className={inputCls}><option>Nuclear</option><option>Joint</option><option>Extended</option></select></div>
        <div><label className={labelCls}>Family Values</label>
          <select className={inputCls}><option>Traditional</option><option>Moderate</option><option>Liberal</option></select></div>
        <div><label className={labelCls}>Family Status</label>
          <select className={inputCls}><option>Affluent</option><option>Upper Middle Class</option><option>Middle Class</option><option>Lower Middle Class</option></select></div>
        <div><label className={labelCls}>Native Place</label><input className={inputCls} defaultValue="Lucknow, UP" /></div>
      </div>
    </div>
  );
}

function CareerEducation() {
  return (
    <div className="space-y-6">
      <p className={sectionTitle}>Education</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Highest Education</label>
          <select className={inputCls}><option>B.Tech / B.E.</option><option>M.Tech</option><option>MBA</option><option>MBBS</option><option>B.Sc</option><option>M.Sc</option><option>CA</option><option>Ph.D</option></select></div>
        <div><label className={labelCls}>Field of Study</label><input className={inputCls} defaultValue="Computer Science" /></div>
        <div><label className={labelCls}>College / University</label><input className={inputCls} defaultValue="IIT Bombay" /></div>
        <div><label className={labelCls}>Passing Year</label><input type="number" className={inputCls} defaultValue={2020} /></div>
      </div>
      <p className={sectionTitle}>Career</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Occupation</label>
          <select className={inputCls}><option>Software Engineer</option><option>Doctor</option><option>Business</option><option>Teacher</option><option>Government Job</option><option>Other</option></select></div>
        <div><label className={labelCls}>Company Name</label><input className={inputCls} defaultValue="TCS, Mumbai" /></div>
        <div><label className={labelCls}>Annual Income</label>
          <select className={inputCls}><option>10–15 LPA</option><option>15–25 LPA</option><option>25–50 LPA</option><option>50L+</option></select></div>
        <div><label className={labelCls}>Work Location</label><input className={inputCls} defaultValue="Delhi" /></div>
      </div>
    </div>
  );
}

function PartnerPreferences() {
  return (
    <div className="space-y-6">
      <p className={sectionTitle}>Basic Preferences</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Age Range</label>
          <div className="flex gap-2"><input type="number" className={inputCls} defaultValue={25} /><span className="self-center text-gray-400">to</span><input type="number" className={inputCls} defaultValue={35} /></div></div>
        <div><label className={labelCls}>Height Range</label>
          <div className="flex gap-2">
            <select className={inputCls}><option>{"5'4\""}</option><option>{"5'5\""}</option><option>{"5'6\""}</option><option>{"5'7\""}</option></select>
            <span className="self-center text-gray-400">to</span>
            <select className={inputCls}><option>{"5'10\""}</option><option>{"6'0\""}</option><option>{"6'1\""}</option><option>{"6'2\""}</option></select>
          </div></div>
        <div><label className={labelCls}>Marital Status</label>
          <select className={inputCls}><option>Never Married</option><option>Doesn't Matter</option><option>Divorced</option></select></div>
        <div><label className={labelCls}>Mother Tongue</label>
          <select className={inputCls}><option>Hindi</option><option>Any</option><option>Tamil</option><option>Telugu</option></select></div>
      </div>
      <p className={sectionTitle}>Religion & Location</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div><label className={labelCls}>Religion</label>
          <select className={inputCls}><option>Hindu</option><option>Any</option><option>Muslim</option></select></div>
        <div><label className={labelCls}>Caste</label><input className={inputCls} placeholder="Any" /></div>
        <div><label className={labelCls}>Preferred City</label><input className={inputCls} placeholder="Any city" /></div>
      </div>
      <p className={sectionTitle}>Education & Career</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Minimum Education</label>
          <select className={inputCls}><option>Any Graduate</option><option>Post Graduate</option><option>Professional (MBA/CA/MBBS)</option></select></div>
        <div><label className={labelCls}>Minimum Income</label>
          <select className={inputCls}><option>Any</option><option>5–10 LPA</option><option>10–20 LPA</option><option>20 LPA+</option></select></div>
        <div><label className={labelCls}>Occupation</label><input className={inputCls} placeholder="Any" /></div>
        <div><label className={labelCls}>Manglik Preference</label>
          <select className={inputCls}><option>Doesn't Matter</option><option>Non-Manglik</option><option>Manglik</option></select></div>
      </div>
    </div>
  );
}

function Photos() {
  return (
    <div className="space-y-6">
      <p className={sectionTitle}>My Photos</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative group">
          <img src={profile1} alt="Profile" className="w-full h-40 object-cover rounded-xl border-2 border-[#8B1A4A]/30" />
          <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button className="p-1.5 bg-white rounded-full text-gray-700"><Edit2 className="h-4 w-4" /></button>
            <button className="p-1.5 bg-white rounded-full text-red-600"><X className="h-4 w-4" /></button>
          </div>
          <span className="absolute top-2 left-2 bg-[#8B1A4A] text-white text-xs px-2 py-0.5 rounded-full">Primary</span>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#8B1A4A] hover:bg-[#8B1A4A]/5 transition-all group">
            <Camera className="h-8 w-8 text-gray-400 group-hover:text-[#8B1A4A]" />
            <span className="text-xs text-gray-400 group-hover:text-[#8B1A4A]">Add Photo</span>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm text-amber-800 font-medium">📸 Tips for a great profile photo</p>
        <ul className="mt-2 text-sm text-amber-700 space-y-1 list-disc list-inside">
          <li>Use a clear, recent photo of your face</li>
          <li>Smile and look directly at the camera</li>
          <li>Good lighting makes a huge difference</li>
          <li>Avoid group photos or sunglasses</li>
        </ul>
      </div>
    </div>
  );
}

function Horoscope() {
  return (
    <div className="space-y-6">
      <p className={sectionTitle}>Birth Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div><label className={labelCls}>Date of Birth</label><input type="date" className={inputCls} defaultValue="1995-07-20" /></div>
        <div><label className={labelCls}>Time of Birth</label><input type="time" className={inputCls} defaultValue="10:30" /></div>
        <div><label className={labelCls}>Place of Birth</label><input className={inputCls} defaultValue="Lucknow, Uttar Pradesh" /></div>
        <div><label className={labelCls}>Country</label><input className={inputCls} defaultValue="India" /></div>
      </div>
      <p className={sectionTitle}>Astrological Details</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div><label className={labelCls}>Rashi (Moon Sign)</label>
          <select className={inputCls}><option>Mesh (Aries)</option><option>Vrishabh (Taurus)</option><option>Mithun (Gemini)</option><option>Kark (Cancer)</option><option>Simha (Leo)</option><option>Kanya (Virgo)</option></select></div>
        <div><label className={labelCls}>Nakshatra</label>
          <select className={inputCls}><option>Ashwini</option><option>Bharani</option><option>Krittika</option><option>Rohini</option><option>Mrigashira</option><option>Ardra</option></select></div>
        <div><label className={labelCls}>Gotra</label><input className={inputCls} placeholder="Enter gotra" /></div>
        <div><label className={labelCls}>Manglik Status</label>
          <select className={inputCls}><option>Non-Manglik</option><option>Manglik</option><option>Anshik Manglik</option></select></div>
        <div><label className={labelCls}>Charan</label><input className={inputCls} placeholder="Enter charan" /></div>
        <div><label className={labelCls}>Gan</label>
          <select className={inputCls}><option>Dev Gan</option><option>Manushya Gan</option><option>Rakshasa Gan</option></select></div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
        <p className="font-medium mb-1">🔮 Kundali Matching</p>
        <p>Your Kundali details help us find compatible matches using our advanced Ashtakoota matching algorithm with 36 Gunas.</p>
      </div>
    </div>
  );
}

export default function ProfilePage({ setIsLoggedIn }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState("personal");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personal": return <PersonalInfo />;
      case "family": return <FamilyDetails />;
      case "career": return <CareerEducation />;
      case "preferences": return <PartnerPreferences />;
      case "photos": return <Photos />;
      case "horoscope": return <Horoscope />;
      default: return <PersonalInfo />;
    }
  };

  return (
    <DashboardLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="profile-page">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-[#8B1A4A] to-[#4A0A23] p-6 text-center">
                <div className="relative inline-block">
                  <img src={profile1} alt="Profile" className="h-20 w-20 rounded-full object-cover border-4 border-white/40 mx-auto" />
                  <button className="absolute bottom-0 right-0 bg-[#D4AF37] text-white rounded-full p-1.5 shadow-md hover:bg-[#C4A030]">
                    <Camera className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="text-white font-bold mt-3">Priya Sharma</p>
                <p className="text-white/70 text-xs mt-0.5">Member since Jan 2024</p>
                <div className="mt-3 bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: "78%" }} />
                </div>
                <p className="text-[#D4AF37] text-xs font-semibold mt-1">78% Complete</p>
              </div>
              <nav className="p-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all mb-1 ${
                        activeTab === tab.id
                          ? "bg-[#8B1A4A]/10 text-[#8B1A4A] font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      data-testid={`profile-tab-${tab.id}`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {tab.label}
                      {activeTab === tab.id && <ChevronRight className="h-4 w-4 ml-auto" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-xl font-bold text-gray-900 font-serif">{tabs.find((t) => t.id === activeTab)?.label}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">Keep your profile updated for better matches</p>
                </div>
                <button
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all shadow ${
                    saved
                      ? "bg-green-500 text-white"
                      : "bg-[#8B1A4A] text-white hover:bg-[#7A1540]"
                  }`}
                  data-testid="btn-save-profile"
                >
                  {saved ? <><Check className="h-4 w-4" /> Saved!</> : "Save Changes"}
                </button>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
