"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { reviewData } from "@/data/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);

  return (
    <section id="testimonials" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Customers Are Saying</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Real experiences from real travelers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? Array(4).fill(0).map((_, i) => (
            <Card key={i} className="bg-white dark:bg-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )) : reviewData.slice(0, 4).map((review) => (
            <Card key={review.id} className="relative hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="absolute -top-4 -left-4 bg-blue-600 dark:bg-blue-500 rounded-full p-3 shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-4 italic leading-relaxed">&quot;{review.review}&quot;</p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-blue-500 dark:ring-blue-400">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">{review.name}</p>
                    <div className="flex items-center gap-1">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Verified Traveler</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
