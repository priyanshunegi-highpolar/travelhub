"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Wifi, Coffee, Utensils, Dumbbell, Wind, Phone, Mail, CheckCircle, Heart, Share2, Calendar, Users, Award, Shield } from "lucide-react";

export default function HotelDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const hotelDetails: Record<string, any> = {
    1: {
      id: 1,
      name: "The Taj Palace Mumbai",
      location: "Colaba, Mumbai, Maharashtra",
      rating: 4.6,
      reviews: "2,345",
      price: "5,999",
      images: ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg", "/images/h4.jpg"],
      description: "Experience luxury at its finest at The Taj Palace Mumbai. Located in the heart of Colaba, this iconic hotel offers stunning views of the Gateway of India and the Arabian Sea. With world-class amenities and impeccable service, your stay will be unforgettable.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Best Price Guarantee", "Verified Property"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001",
      phone: "+91 22 6665 3366",
      email: "reservations@tajpalace.com",
    },
    2: {
      id: 2,
      name: "Oberoi Udaipur Luxury Resort",
      location: "Lake Pichola, Udaipur, Rajasthan",
      rating: 4.7,
      reviews: "1,912",
      price: "7,500",
      images: ["/images/h2.jpg", "/images/h1.jpg", "/images/h3.jpg", "/images/h4.jpg"],
      description: "Nestled on the banks of Lake Pichola, Oberoi Udaipur offers a royal experience with breathtaking views of the City Palace. Indulge in traditional Rajasthani hospitality combined with modern luxury amenities.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Best Price Guarantee", "Heritage Property"],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      address: "Lake Pichola, Udaipur, Rajasthan 313001",
      phone: "+91 294 243 3300",
      email: "reservations@oberoiudaipur.com",
    },
    3: {
      id: 3,
      name: "ITC Grand Chola Chennai",
      location: "Guindy, Chennai, Tamil Nadu",
      rating: 4.9,
      reviews: "3,420",
      price: "8,200",
      images: ["/images/h3.jpg", "/images/h1.jpg", "/images/h2.jpg", "/images/h4.jpg"],
      description: "ITC Grand Chola is a magnificent tribute to the grandeur of the Chola dynasty. This luxury hotel features world-class dining, a lavish spa, and impeccable service that defines South Indian hospitality.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Award Winning", "Verified Property"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      address: "63, Mount Road, Guindy, Chennai, Tamil Nadu 600032",
      phone: "+91 44 2220 0000",
      email: "reservations@itcgrandchola.in",
    },
    4: {
      id: 4,
      name: "Leela Palace Bangalore",
      location: "Old Airport Road, Bangalore, Karnataka",
      rating: 4.5,
      reviews: "2,876",
      price: "6,800",
      images: ["/images/h4.jpg", "/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg"],
      description: "The Leela Palace Bangalore is an architectural masterpiece inspired by the Mysore Palace. Experience regal luxury with stunning gardens, exquisite dining, and personalized service in India's Silicon Valley.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Best Price Guarantee", "Luxury Property"],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      address: "23, Old Airport Road, Bangalore, Karnataka 560008",
      phone: "+91 80 2521 1234",
      email: "reservations@theleela.com",
    },
    5: {
      id: 5,
      name: "JW Marriott Mumbai Sahar",
      location: "Andheri East, Mumbai, Maharashtra",
      rating: 4.7,
      reviews: "1,890",
      price: "6,500",
      images: ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg", "/images/h4.jpg"],
      description: "Located near Mumbai's international airport, JW Marriott offers contemporary luxury with exceptional dining options, a rejuvenating spa, and state-of-the-art business facilities.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Airport Shuttle", "Verified Property"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      address: "IA Project Road, Andheri East, Mumbai, Maharashtra 400099",
      phone: "+91 22 6882 8888",
      email: "reservations@jwmarriottmumbai.com",
    },
    6: {
      id: 6,
      name: "Rambagh Palace Jaipur",
      location: "Bhawani Singh Road, Jaipur, Rajasthan",
      rating: 4.8,
      reviews: "2,100",
      price: "9,500",
      images: ["/images/h2.jpg", "/images/h1.jpg", "/images/h3.jpg", "/images/h4.jpg"],
      description: "Once the residence of the Maharaja of Jaipur, Rambagh Palace is now a jewel in the Taj Hotels crown. Experience royal living with opulent rooms, manicured gardens, and authentic Rajasthani cuisine.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Heritage Palace", "Royal Experience"],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      address: "Bhawani Singh Road, Jaipur, Rajasthan 302005",
      phone: "+91 141 238 5700",
      email: "reservations@rambaghpalace.com",
    },
    7: {
      id: 7,
      name: "The Oberoi New Delhi",
      location: "Dr Zakir Hussain Marg, Delhi",
      rating: 4.9,
      reviews: "3,200",
      price: "8,800",
      images: ["/images/h3.jpg", "/images/h1.jpg", "/images/h2.jpg", "/images/h4.jpg"],
      description: "The Oberoi New Delhi is a tranquil oasis in the heart of India's capital. With views of the Delhi Golf Course and Humayun's Tomb, it offers unparalleled luxury and personalized service.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Best Price Guarantee", "Award Winning"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      address: "Dr Zakir Hussain Marg, New Delhi 110003",
      phone: "+91 11 2436 3030",
      email: "reservations@oberoidelhi.com",
    },
    8: {
      id: 8,
      name: "Taj Lake Palace Udaipur",
      location: "Pichola Lake, Udaipur, Rajasthan",
      rating: 4.9,
      reviews: "2,650",
      price: "12,000",
      images: ["/images/h4.jpg", "/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg"],
      description: "Floating like a dream on Lake Pichola, the Taj Lake Palace is a 250-year-old marble marvel. This iconic hotel offers an unforgettable romantic experience with boat transfers and stunning lake views.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Boat Transfer"],
      highlights: ["Free Cancellation", "Iconic Property", "Romantic Getaway"],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      address: "Pichola Lake, Udaipur, Rajasthan 313001",
      phone: "+91 294 242 8800",
      email: "reservations@tajlakepalace.com",
    },
    9: {
      id: 9,
      name: "Taj Malabar Resort & Spa",
      location: "Willingdon Island, Kochi, Kerala",
      rating: 4.6,
      reviews: "1,560",
      price: "7,200",
      images: ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg", "/images/h4.jpg"],
      description: "Set on Willingdon Island with views of the harbor, Taj Malabar combines colonial charm with modern luxury. Enjoy authentic Kerala cuisine, Ayurvedic spa treatments, and warm hospitality.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Harbor Views", "Ayurvedic Spa"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      address: "Willingdon Island, Kochi, Kerala 682009",
      phone: "+91 484 266 6811",
      email: "reservations@tajmalabar.com",
    },
    10: {
      id: 10,
      name: "The Leela Goa",
      location: "Cavelossim Beach, Goa",
      rating: 4.8,
      reviews: "2,890",
      price: "8,500",
      images: ["/images/h2.jpg", "/images/h1.jpg", "/images/h3.jpg", "/images/h4.jpg"],
      description: "Spread across 75 acres of lush gardens along Cavelossim Beach, The Leela Goa is a tropical paradise. Experience Portuguese-inspired architecture, pristine beaches, and world-class amenities.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Beach Resort", "Verified Property"],
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      address: "Mobor, Cavelossim, Goa 403731",
      phone: "+91 832 287 1234",
      email: "reservations@theleela.com",
    },
    11: {
      id: 11,
      name: "Wildflower Hall Shimla",
      location: "Chharabra, Shimla, Himachal Pradesh",
      rating: 4.7,
      reviews: "1,234",
      price: "9,800",
      images: ["/images/h3.jpg", "/images/h1.jpg", "/images/h2.jpg", "/images/h4.jpg"],
      description: "Perched at 8,250 feet in the Himalayas, Wildflower Hall offers breathtaking mountain views and colonial elegance. Once the residence of Lord Kitchener, it's now a luxurious mountain retreat.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Mountain Views", "Heritage Property"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      address: "Chharabra, Shimla, Himachal Pradesh 171012",
      phone: "+91 177 264 8585",
      email: "reservations@wildflowerhall.com",
    },
    12: {
      id: 12,
      name: "Ananda in the Himalayas",
      location: "Narendra Nagar, Rishikesh, Uttarakhand",
      rating: 4.9,
      reviews: "1,678",
      price: "15,000",
      images: ["/images/h4.jpg", "/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg"],
      description: "Ananda is a luxury wellness retreat in the Himalayan foothills. Set in a 100-acre Maharaja's palace estate, it offers world-class spa treatments, yoga, meditation, and holistic wellness programs.",
      amenities: ["Free WiFi", "Swimming Pool", "Spa & Wellness", "Restaurant", "Bar", "Gym", "Room Service", "Air Conditioning", "Parking"],
      highlights: ["Free Cancellation", "Wellness Retreat", "Award Winning Spa"],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      address: "The Palace Estate, Narendra Nagar, Rishikesh, Uttarakhand 249175",
      phone: "+91 137 822 7500",
      email: "reservations@anandaspa.com",
    },
  };

  const hotel = hotelDetails[id] || hotelDetails["1"];

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const basePrice = parseInt(hotel.price.replace(/,/g, ''));
  const roomTotal = basePrice * nights;
  const serviceFee = nights > 0 ? 500 : 0;
  const taxes = Math.round(roomTotal * 0.12);
  const totalAmount = roomTotal + serviceFee + taxes;

  const amenityIcons: { [key: string]: any } = {
    "Free WiFi": Wifi,
    "Swimming Pool": Wind,
    "Restaurant": Utensils,
    "Gym": Dumbbell,
    "Room Service": Coffee,
    "Air Conditioning": Wind,
    "Bar": Coffee,
    "Spa & Wellness": Wind,
    "Parking": CheckCircle,
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/hotels" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium transition">
              ← Back to Hotels
            </Link>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className="hover:scale-110 transition"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-4 group">
                  <Image 
                    src={hotel.images[selectedImage]} 
                    alt={hotel.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900 dark:text-white">{hotel.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">({hotel.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {hotel.images.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedImage(idx)}
                      className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition border-2 ${
                        selectedImage === idx 
                          ? 'border-blue-600 dark:border-blue-400 scale-105' 
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <Image src={img} alt={`${hotel.name} ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <Card className="mb-6 bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">{hotel.name}</h1>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                        <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-lg">{hotel.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.highlights.map((highlight: string, idx: number) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                        <CheckCircle className="h-4 w-4" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{hotel.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Check-in</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{hotel.checkIn}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Check-out</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{hotel.checkOut}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Amenities & Services</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity: string, idx: number) => {
                      const Icon = amenityIcons[amenity] || CheckCircle;
                      return (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition group">
                          <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:scale-110 transition">
                            <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Address</div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{hotel.address}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{hotel.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{hotel.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-white dark:bg-gray-800 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Starting from</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">₹{hotel.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">/night</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-green-600 dark:text-green-400">
                      <Award className="h-4 w-4" />
                      <span>Best price guaranteed</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Check-in Date
                      </label>
                      <input 
                        type="date" 
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Check-out Date
                      </label>
                      <input 
                        type="date" 
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Number of Guests
                      </label>
                      <input 
                        type="number" 
                        min="1" 
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition" 
                      />
                    </div>
                  </div>

                  <Button className="w-full mb-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all" size="lg">
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition">Contact Hotel</Button>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 text-sm">
                      <Shield className="h-4 w-4" />
                      <span className="font-medium">Free cancellation up to 24 hours before check-in</span>
                    </div>
                  </div>

                  {nights > 0 && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">₹{hotel.price} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
                          <span className="text-gray-900 dark:text-white font-medium">₹{roomTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Service fee</span>
                          <span className="text-gray-900 dark:text-white font-medium">₹{serviceFee}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Taxes & charges (12%)</span>
                          <span className="text-gray-900 dark:text-white font-medium">₹{taxes.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Guests</span>
                          <span className="text-gray-900 dark:text-white font-medium">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center font-bold text-xl pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                        <span className="text-gray-900 dark:text-white">Total Amount</span>
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">₹{totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
