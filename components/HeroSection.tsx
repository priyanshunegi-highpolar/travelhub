"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const states = [
    "Maharashtra",
    "Rajasthan",
    "Kerala",
    "Goa",
    "Karnataka",
    "Tamil Nadu",
    "Himachal Pradesh",
    "Uttarakhand",
    "Delhi"
  ];

  const filteredStates = states.filter(state => 
    state.toLowerCase().includes(location.toLowerCase())
  );

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("state", location);
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("checkOut", checkOut);
    if (guests) params.append("guests", guests);
    
    router.push(`/hotels?${params.toString()}`);
  };

  const handleStateSelect = (state: string) => {
    setLocation(state);
    setShowSuggestions(false);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero1.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Discover Incredible India
        </h1>
        <p className="text-xl md:text-2xl mb-12 drop-shadow-md">
          Explore 10,000+ hotels and destinations across India at best prices
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="relative">
              <div className="flex flex-col gap-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 h-14 bg-gray-50 dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition text-left">
                <label className="text-xs font-semibold text-gray-900 dark:text-white text-left">Where to?</label>
                <Input 
                  placeholder="Search for a place" 
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm" 
                />
              </div>
              
              {showSuggestions && location && filteredStates.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 max-h-60 overflow-y-auto z-50">
                  {filteredStates.map((state) => (
                    <button
                      key={state}
                      onClick={() => handleStateSelect(state)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white transition flex items-center gap-2"
                    >
                      <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                      {state}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 h-14 bg-gray-50 dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition cursor-pointer text-left">
              <label className="text-xs font-semibold text-gray-900 dark:text-white text-left">Check-in</label>
              <Input 
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent text-gray-900 dark:text-white cursor-pointer text-sm text-left" 
              />
            </div>
            
            <div className="flex flex-col gap-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 h-14 bg-gray-50 dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition cursor-pointer text-left">
              <label className="text-xs font-semibold text-gray-900 dark:text-white text-left">Check-out</label>
              <Input 
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent text-gray-900 dark:text-white cursor-pointer text-sm text-left" 
              />
            </div>
            
            <div className="flex flex-col gap-1 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 h-14 bg-gray-50 dark:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition text-left">
              <label className="text-xs font-semibold text-gray-900 dark:text-white text-left">Guests</label>
              <Input 
                type="number" 
                placeholder="1" 
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm text-left" 
              />
            </div>
          </div>
          
          <Button 
            onClick={handleSearch}
            size="lg" 
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-base font-semibold mt-3"
          >
            <Search className="mr-2" size={20} />
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
