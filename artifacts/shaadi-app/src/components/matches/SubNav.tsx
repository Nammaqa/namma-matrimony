import React from "react";

export default function SubNav() {
  const tabs = [
    { name: "New Matches", count: "1,247", active: true },
    { name: "Today's", count: "18", active: false },
    { name: "My Matches", count: "9,999+", active: false },
    { name: "Near Me", count: "63", active: false },
    { name: "Recently Viewed", count: "12", active: false },
    { name: "More ▼", count: "", active: false },
  ];

  return (
    <div className="sticky top-16 z-40 w-full bg-white border-b border-gray-200 shadow-sm" data-testid="subnav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center whitespace-nowrap py-4 text-sm transition-colors ${
                tab.active
                  ? "border-b-2 border-[#8B1A4A] text-[#8B1A4A] font-bold"
                  : "border-b-2 border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900 font-medium"
              }`}
              data-testid={`subnav-tab-${tab.name.toLowerCase().replace(/['\s▼]+/g, '-')}`}
            >
              {tab.name}
              {tab.count && (
                <span className={`ml-1.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
                  tab.active ? "bg-[#8B1A4A]/10 text-[#8B1A4A]" : "bg-gray-100 text-gray-600"
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
