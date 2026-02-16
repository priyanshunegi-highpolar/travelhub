"use client";

import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Search, SlidersHorizontal, Calendar, Users, X } from "lucide-react";

function HotelsContent() {
  const searchParams = useSearchParams();
  const stateParam = searchParams.get("state");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState(stateParam || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [priceRange, setPriceRange] = useState("all");
  const [rating, setRating] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const states = ["All States", "Maharashtra", "Rajasthan", "Kerala", "Goa", "Karnataka", "Tamil Nadu", "Himachal Pradesh", "Uttarakhand", "Delhi"];

  const allHotels = [
    { id: 1, image: "/images/h1.jpg", name: "Mumbai Heritage & Gateway Tour", location: "Colaba, Mumbai", state: "Maharashtra", rating: 4.6, reviews: "2,345", price: "5999" },
    { id: 2, image: "/images/h2.jpg", name: "Royal Udaipur Lake City Tour", location: "Lake Pichola, Udaipur", state: "Rajasthan", rating: 4.7, reviews: "1,912", price: "7500" },
    { id: 3, image: "/images/h3.jpg", name: "Chennai Cultural Heritage Tour", location: "Guindy, Chennai", state: "Tamil Nadu", rating: 4.9, reviews: "3,420", price: "8200" },
    { id: 4, image: "/images/h4.jpg", name: "Bangalore Garden City Experience", location: "Old Airport Road, Bangalore", state: "Karnataka", rating: 4.5, reviews: "2,876", price: "6800" },
    { id: 5, image: "/images/h1.jpg", name: "Mumbai City Lights & Shopping Tour", location: "Andheri East, Mumbai", state: "Maharashtra", rating: 4.7, reviews: "1,890", price: "6500" },
    { id: 6, image: "/images/h2.jpg", name: "Jaipur Pink City Royal Tour", location: "Bhawani Singh Road, Jaipur", state: "Rajasthan", rating: 4.8, reviews: "2,100", price: "9500" },
    { id: 7, image: "/images/h3.jpg", name: "Delhi Historical Monuments Tour", location: "Dr Zakir Hussain Marg, Delhi", state: "Delhi", rating: 4.9, reviews: "3,200", price: "8800" },
    { id: 8, image: "/images/h4.jpg", name: "Udaipur Romantic Lake Palace Tour", location: "Pichola Lake, Udaipur", state: "Rajasthan", rating: 4.9, reviews: "2,650", price: "12000" },
    { id: 9, image: "/images/h1.jpg", name: "Kochi Backwaters & Spice Tour", location: "Willingdon Island, Kochi", state: "Kerala", rating: 4.6, reviews: "1,560", price: "7200" },
    { id: 10, image: "/images/h2.jpg", name: "Goa Beach Paradise Tour", location: "Cavelossim Beach, Goa", state: "Goa", rating: 4.8, reviews: "2,890", price: "8500" },
    { id: 11, image: "/images/h3.jpg", name: "Shimla Hill Station Retreat", location: "Chharabra, Shimla", state: "Himachal Pradesh", rating: 4.7, reviews: "1,234", price: "9800" },
    { id: 12, image: "/images/h4.jpg", name: "Rishikesh Yoga & Wellness Retreat", location: "Narendra Nagar, Rishikesh", state: "Uttarakhand", rating: 4.9, reviews: "1,678", price: "15000" },
  ];

  const filteredHotels = allHotels.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = !selectedState || selectedState === "All States" || hotel.state === selectedState;
    const matchesPrice = priceRange === "all" || 
                        (priceRange === "low" && parseInt(hotel.price) < 7000) ||
                        (priceRange === "mid" && parseInt(hotel.price) >= 7000 && parseInt(hotel.price) <= 10000) ||
                        (priceRange === "high" && parseInt(hotel.price) > 10000);
    const matchesRating = rating === "all" || 
                         (rating === "4+" && hotel.rating >= 4) ||
                         (rating === "4.5+" && hotel.rating >= 4.5);
    
    return matchesSearch && matchesState && matchesPrice && matchesRating;
  });

  useEffect(() => {
    if (stateParam) {
      setSelectedState(stateParam);
    }
  }, [stateParam]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedState("");
    setCheckIn("");
    setCheckOut("");
    setGuests("1");
    setPriceRange("all");
    setRating("all");
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            {selectedState && selectedState !== "All States" ? `Tour Packages in ${selectedState}` : "All Tour Packages in India"}
          </h1>
          
          {/* Search Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded-lg px-4 h-12 bg-gray-50 dark:bg-gray-700">
                <Search className="text-gray-500 dark:text-gray-400 flex-shrink-0" size={20} />
                <Input 
                  placeholder="Search packages..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent" 
                />
              </div>

              <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded-lg px-4 h-12 bg-gray-50 dark:bg-gray-700">
                <Calendar className="text-gray-500 dark:text-gray-400 flex-shrink-0" size={20} />
                <Input 
                  type="date"
                  placeholder="Travel Date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent text-sm" 
                />
              </div>

              <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded-lg px-4 h-12 bg-gray-50 dark:bg-gray-700">
                <Calendar className="text-gray-500 dark:text-gray-400 flex-shrink-0" size={20} />
                <Input 
                  type="number"
                  placeholder="Duration (Days)"
                  min="1"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent text-sm" 
                />
              </div>

              <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded-lg px-4 h-12 bg-gray-50 dark:bg-gray-700">
                <Users className="text-gray-500 dark:text-gray-400 flex-shrink-0" size={20} />
                <Input 
                  type="number"
                  placeholder="Travelers"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="border-0 p-0 h-auto focus-visible:ring-0 bg-transparent" 
                />
              </div>

              <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="gap-2 h-12">
                <SlidersHorizontal size={20} />
                Filters
              </Button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state === "All States" ? "" : state)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  (state === "All States" && !selectedState) || selectedState === state
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500"
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="mb-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>Clear All</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Price Range</label>
                    <select 
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Prices</option>
                      <option value="low">Under ₹7,000</option>
                      <option value="mid">₹7,000 - ₹10,000</option>
                      <option value="high">Above ₹10,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Rating</label>
                    <select 
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="all">All Ratings</option>
                      <option value="4+">4.0+ Stars</option>
                      <option value="4.5+">4.5+ Stars</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Sort By</label>
                    <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>Featured</option>
                      <option>Price (Low to High)</option>
                      <option>Price (High to Low)</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">{filteredHotels.length} results</p>
            {(selectedState || searchQuery) && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
                <X size={16} />
                Clear filters
              </Button>
            )}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-xl transition group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <Link href={`/hotels/${hotel.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href={`/hotels/${hotel.id}`}>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">{hotel.name}</h3>
                  </Link>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">{hotel.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">({hotel.reviews})</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{parseInt(hotel.price).toLocaleString()}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">/person</span>
                    </div>
                  </div>
                  <Link href={`/hotels/${hotel.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHotels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No tour packages found matching your criteria.</p>
              <Button onClick={clearFilters} className="mt-4">Clear Filters</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}


export default function HotelsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <HotelsContent />
    </Suspense>
  );
}
