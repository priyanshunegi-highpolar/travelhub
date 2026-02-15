"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { hotelsData } from "@/data/data";
import { Star, MapPin, ArrowRight } from "lucide-react";

export default function HotelsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <section id="hotels" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Hotels</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Handpicked hotels for your perfect stay</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? Array(4).fill(0).map((_, i) => (
            <Card key={i} className="overflow-hidden bg-white dark:bg-gray-800">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <CardContent className="p-4 space-y-3">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </CardContent>
            </Card>
          )) : hotelsData.map((hotel) => (
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
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{hotel.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">/night</span>
                  </div>
                </div>
                <Link href={`/hotels/${hotel.id}`}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/hotels">
            <Button size="lg" variant="outline" className="gap-2">
              View All Hotels <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
