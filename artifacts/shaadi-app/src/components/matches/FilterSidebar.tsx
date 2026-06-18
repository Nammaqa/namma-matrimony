import React from "react";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function FilterSidebar() {
  return (
    <div className="w-[250px] glass-card bg-white/80 rounded-xl p-4 sticky top-[120px] max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar border border-white" data-testid="filter-sidebar">
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
        <h2 className="font-semibold text-gray-800 text-lg">Refine Search</h2>
        <button className="text-gray-400 hover:text-gray-800 transition-colors" data-testid="btn-close-filters">
          <X className="h-5 w-5" />
        </button>
      </div>

      <Accordion type="multiple" defaultValue={["verification", "age", "religion", "marital"]} className="w-full space-y-2">
        <AccordionItem value="verification" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Verification</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="space-y-2">
              <div className="flex items-center space-x-2"><Checkbox id="v1" /><Label htmlFor="v1" className="text-sm font-normal text-gray-600 cursor-pointer">Verified Profile</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="v2" /><Label htmlFor="v2" className="text-sm font-normal text-gray-600 cursor-pointer">Photo Verified</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="v3" /><Label htmlFor="v3" className="text-sm font-normal text-gray-600 cursor-pointer">ID Verified</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="v4" /><Label htmlFor="v4" className="text-sm font-normal text-gray-600 cursor-pointer">Mobile Verified</Label></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="age" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Age Range</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="flex items-center gap-2">
              <input type="number" defaultValue={22} className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]" />
              <span className="text-gray-500 text-xs">to</span>
              <input type="number" defaultValue={35} className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]" />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="height" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Height</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="flex items-center gap-2">
              <select className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]">
                <option>5'0"</option>
                <option>5'1"</option>
                <option>5'2"</option>
              </select>
              <span className="text-gray-500 text-xs">to</span>
              <select className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#8B1A4A]" defaultValue={"5'8\""}>
                <option value={"5'7\""}>{"5'7\""}</option>
                <option value={"5'8\""}>{"5'8\""}</option>
                <option value={"5'9\""}>{"5'9\""}</option>
              </select>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="religion" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Religion & Caste</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="space-y-2">
              <div className="flex items-center space-x-2"><Checkbox id="r1" /><Label htmlFor="r1" className="text-sm font-normal text-gray-600 cursor-pointer">Hindu</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="r2" /><Label htmlFor="r2" className="text-sm font-normal text-gray-600 cursor-pointer">Muslim</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="r3" /><Label htmlFor="r3" className="text-sm font-normal text-gray-600 cursor-pointer">Sikh</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="r4" /><Label htmlFor="r4" className="text-sm font-normal text-gray-600 cursor-pointer">Christian</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="r5" /><Label htmlFor="r5" className="text-sm font-normal text-gray-600 cursor-pointer">Jain</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="r6" /><Label htmlFor="r6" className="text-sm font-normal text-gray-600 cursor-pointer">Buddhist</Label></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="marital" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Marital Status</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <RadioGroup defaultValue="never">
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="never" id="m1" /><Label htmlFor="m1" className="text-sm font-normal text-gray-600 cursor-pointer">Never Married</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="divorced" id="m2" /><Label htmlFor="m2" className="text-sm font-normal text-gray-600 cursor-pointer">Divorced</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="widowed" id="m3" /><Label htmlFor="m3" className="text-sm font-normal text-gray-600 cursor-pointer">Widowed</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="awaiting" id="m4" /><Label htmlFor="m4" className="text-sm font-normal text-gray-600 cursor-pointer">Awaiting Divorce</Label></div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Education</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="space-y-2">
              <div className="flex items-center space-x-2"><Checkbox id="e1" /><Label htmlFor="e1" className="text-sm font-normal text-gray-600 cursor-pointer">Any Graduate</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="e2" /><Label htmlFor="e2" className="text-sm font-normal text-gray-600 cursor-pointer">Post Graduate</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="e3" /><Label htmlFor="e3" className="text-sm font-normal text-gray-600 cursor-pointer">Doctorate</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="e4" /><Label htmlFor="e4" className="text-sm font-normal text-gray-600 cursor-pointer">Professional (MBA/CA/MBBS)</Label></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="income" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Annual Income</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="space-y-2">
              <div className="flex items-center space-x-2"><Checkbox id="i1" /><Label htmlFor="i1" className="text-sm font-normal text-gray-600 cursor-pointer">Under 3L</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="i2" /><Label htmlFor="i2" className="text-sm font-normal text-gray-600 cursor-pointer">3–6L</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="i3" /><Label htmlFor="i3" className="text-sm font-normal text-gray-600 cursor-pointer">6–10L</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="i4" /><Label htmlFor="i4" className="text-sm font-normal text-gray-600 cursor-pointer">10–20L</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="i5" /><Label htmlFor="i5" className="text-sm font-normal text-gray-600 cursor-pointer">20–50L</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="i6" /><Label htmlFor="i6" className="text-sm font-normal text-gray-600 cursor-pointer">50L+</Label></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Location / State</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="space-y-2">
              <div className="flex items-center space-x-2"><Checkbox id="l1" /><Label htmlFor="l1" className="text-sm font-normal text-gray-600 cursor-pointer">Maharashtra</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="l2" /><Label htmlFor="l2" className="text-sm font-normal text-gray-600 cursor-pointer">Delhi</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="l3" /><Label htmlFor="l3" className="text-sm font-normal text-gray-600 cursor-pointer">Tamil Nadu</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="l4" /><Label htmlFor="l4" className="text-sm font-normal text-gray-600 cursor-pointer">Karnataka</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="l5" /><Label htmlFor="l5" className="text-sm font-normal text-gray-600 cursor-pointer">Punjab</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="l6" /><Label htmlFor="l6" className="text-sm font-normal text-gray-600 cursor-pointer">Gujarat</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="l7" /><Label htmlFor="l7" className="text-sm font-normal text-gray-600 cursor-pointer">West Bengal</Label></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mother_tongue" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Mother Tongue</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <div className="space-y-2">
              <div className="flex items-center space-x-2"><Checkbox id="t1" /><Label htmlFor="t1" className="text-sm font-normal text-gray-600 cursor-pointer">Hindi</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t2" /><Label htmlFor="t2" className="text-sm font-normal text-gray-600 cursor-pointer">Tamil</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t3" /><Label htmlFor="t3" className="text-sm font-normal text-gray-600 cursor-pointer">Telugu</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t4" /><Label htmlFor="t4" className="text-sm font-normal text-gray-600 cursor-pointer">Marathi</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t5" /><Label htmlFor="t5" className="text-sm font-normal text-gray-600 cursor-pointer">Bengali</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t6" /><Label htmlFor="t6" className="text-sm font-normal text-gray-600 cursor-pointer">Punjabi</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t7" /><Label htmlFor="t7" className="text-sm font-normal text-gray-600 cursor-pointer">Gujarati</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t8" /><Label htmlFor="t8" className="text-sm font-normal text-gray-600 cursor-pointer">Malayalam</Label></div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="manglik" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Manglik Status</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <RadioGroup defaultValue="none">
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="none" id="man1" /><Label htmlFor="man1" className="text-sm font-normal text-gray-600 cursor-pointer">Non-Manglik</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="manglik" id="man2" /><Label htmlFor="man2" className="text-sm font-normal text-gray-600 cursor-pointer">Manglik</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="any" id="man3" /><Label htmlFor="man3" className="text-sm font-normal text-gray-600 cursor-pointer">Doesn't Matter</Label></div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="photo_settings" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Photo Settings</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="all" id="ps1" /><Label htmlFor="ps1" className="text-sm font-normal text-gray-600 cursor-pointer">Open to All</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="photo" id="ps2" /><Label htmlFor="ps2" className="text-sm font-normal text-gray-600 cursor-pointer">With Photo Only</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="protected" id="ps3" /><Label htmlFor="ps3" className="text-sm font-normal text-gray-600 cursor-pointer">Protected Photo</Label></div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="recently_joined" className="border-b border-gray-100 pb-2">
          <AccordionTrigger className="hover:no-underline py-2 text-sm font-semibold text-gray-800 hover:text-[#8B1A4A]">Recently Joined</AccordionTrigger>
          <AccordionContent className="pt-2 pb-1">
            <RadioGroup defaultValue="any">
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="any" id="rj1" /><Label htmlFor="rj1" className="text-sm font-normal text-gray-600 cursor-pointer">Any</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="today" id="rj2" /><Label htmlFor="rj2" className="text-sm font-normal text-gray-600 cursor-pointer">Today</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="week" id="rj3" /><Label htmlFor="rj3" className="text-sm font-normal text-gray-600 cursor-pointer">This Week</Label></div>
              <div className="flex items-center space-x-2 py-1"><RadioGroupItem value="month" id="rj4" /><Label htmlFor="rj4" className="text-sm font-normal text-gray-600 cursor-pointer">This Month</Label></div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
        <button className="w-full bg-[#8B1A4A] hover:bg-[#7A1540] text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm" data-testid="btn-apply-filters">
          Apply Filters
        </button>
        <button className="w-full text-[#8B1A4A] text-sm font-medium hover:underline" data-testid="btn-reset-filters">
          Reset All
        </button>
      </div>
    </div>
  );
}
