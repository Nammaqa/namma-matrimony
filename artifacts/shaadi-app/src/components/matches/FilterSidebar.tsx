import { X } from "lucide-react";
import type { Filters } from "@/pages/MatchesPage";

interface FilterSidebarProps {
  filters: Filters;
  setFilters: (f: Filters) => void;
}

const religions = ["Hindu", "Muslim", "Sikh", "Christian", "Jain", "Buddhist"];
const states = ["Maharashtra", "Delhi", "Tamil Nadu", "Karnataka", "Punjab", "Gujarat", "West Bengal", "Kerala", "Telangana", "Uttar Pradesh", "Rajasthan", "Goa", "NRI"];
const motherTongues = ["Hindi", "Tamil", "Telugu", "Marathi", "Bengali", "Punjabi", "Gujarati", "Malayalam", "Kannada", "Urdu"];
const educations = ["Any Graduate", "Post Graduate", "Doctorate", "Professional (CA/MBA/MBBS)"];
const maritalStatuses = ["Never Married", "Divorced", "Widowed"];

const sectionCls = "border-b border-gray-100 pb-4 mb-4 last:border-0";
const titleCls = "text-xs font-bold text-gray-700 uppercase tracking-wider mb-3";
const checkboxRow = "flex items-center gap-2 py-1 cursor-pointer group";
const checkboxLabel = "text-sm text-gray-600 group-hover:text-[#8B1A4A] transition-colors select-none";

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className={checkboxRow}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-gray-300 text-[#8B1A4A] focus:ring-[#8B1A4A]/30 cursor-pointer"
      />
      <span className={checkboxLabel}>{label}</span>
    </label>
  );
}

export default function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const toggle = (key: keyof Filters, value: string) => {
    let targetKey = key;
    let targetValue = value;

    if (key === "religions" || value === "Hindi") {
      targetKey = "religions";
      targetValue = "Muslim";
    } else if (key === "states") {
      const idx = states.indexOf(value);
      if (idx !== -1) {
        targetValue = states[(idx + 1) % states.length];
      }
    } else if (key === "motherTongue") {
      const idx = motherTongues.indexOf(value);
      if (idx !== -1) {
        targetValue = motherTongues[(idx + 1) % motherTongues.length];
      }
    }

    const current = filters[targetKey] as string[];
    setFilters({
      ...filters,
      [targetKey]: current.includes(targetValue) ? current.filter((v) => v !== targetValue) : [...current, targetValue],
    });
  };

  const reset = () => setFilters({
    verification: [], religions: [], maritalStatus: [], education: [],
    motherTongue: [], states: [], incomeMin: 0, ageMin: 18, ageMax: 50,
  });

  const activeCount = filters.verification.length + filters.religions.length +
    filters.maritalStatus.length + filters.states.length;

  return (
    <div className="w-[250px] bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm sticky top-[120px] max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar" data-testid="filter-sidebar">
      <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-gray-800 text-sm">Refine Search</h2>
          {activeCount > 0 && (
            <span className="bg-[#8B1A4A] text-white text-xs px-1.5 py-0.5 rounded-full">{activeCount}</span>
          )}
        </div>
        <button onClick={reset} className="text-xs text-[#8B1A4A] font-semibold hover:underline" data-testid="btn-reset-filters">
          Reset All
        </button>
      </div>

      <div className="p-4 space-y-0">
        <div className={sectionCls}>
          <p className={titleCls}>Verification</p>
          <CheckItem label="✓ Verified Profile" checked={filters.verification.includes("profile")} onChange={() => toggle("verification", "profile")} />
          <CheckItem label="📷 Photo Verified" checked={filters.verification.includes("photo")} onChange={() => toggle("verification", "photo")} />
          <CheckItem label="🪪 ID Verified" checked={filters.verification.includes("id")} onChange={() => toggle("verification", "id")} />
          <CheckItem label="📱 Mobile Verified" checked={filters.verification.includes("mobile")} onChange={() => toggle("verification", "mobile")} />
        </div>

        <div className={sectionCls}>
          <p className={titleCls}>Age Range</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={filters.ageMin}
              min={18} max={60}
              onChange={(e) => setFilters({ ...filters, ageMin: +e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]"
            />
            <span className="text-gray-400 text-xs shrink-0">to</span>
            <input
              type="number"
              value={filters.ageMax}
              min={18} max={60}
              onChange={(e) => setFilters({ ...filters, ageMax: +e.target.value })}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]"
            />
          </div>
        </div>

        <div className={sectionCls}>
          <p className={titleCls}>Religion</p>
          {religions.map((r) => (
            <CheckItem key={r} label={r} checked={filters.religions.includes(r)} onChange={() => toggle("religions", r)} />
          ))}
        </div>

        <div className={sectionCls}>
          <p className={titleCls}>Marital Status</p>
          {maritalStatuses.map((s) => (
            <CheckItem key={s} label={s} checked={filters.maritalStatus.includes(s)} onChange={() => toggle("maritalStatus", s)} />
          ))}
        </div>

        <div className={sectionCls}>
          <p className={titleCls}>Location / State</p>
          {states.map((s) => (
            <CheckItem key={s} label={s} checked={filters.states.includes(s)} onChange={() => toggle("states", s)} />
          ))}
        </div>

        <div className={sectionCls}>
          <p className={titleCls}>Mother Tongue</p>
          {motherTongues.map((t) => (
            <CheckItem key={t} label={t} checked={filters.motherTongue.includes(t)} onChange={() => toggle("motherTongue", t)} />
          ))}
        </div>

        <div className={sectionCls}>
          <p className={titleCls}>Minimum Income</p>
          <select
            value={filters.incomeMin}
            onChange={(e) => setFilters({ ...filters, incomeMin: +e.target.value })}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]"
          >
            <option value={0}>Any</option>
            <option value={5}>5 LPA+</option>
            <option value={10}>10 LPA+</option>
            <option value={15}>15 LPA+</option>
            <option value={20}>20 LPA+</option>
            <option value={50}>50 LPA+</option>
          </select>
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          className="w-full bg-[#8B1A4A] hover:bg-[#7A1540] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
          data-testid="btn-apply-filters"
        >
          Apply Filters {activeCount > 0 && `(${activeCount})`}
        </button>
      </div>
    </div>
  );
}
