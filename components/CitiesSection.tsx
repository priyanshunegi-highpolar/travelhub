"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CitiesSection() {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [loading, setLoading] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleStateClick = (state: string) => {
    router.push(`/hotels?state=${encodeURIComponent(state)}`);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const destinations = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      country: "Rajasthan",
      travelers: "2,50,000",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
      country: "Kerala",
      travelers: "3,00,000",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      country: "Goa",
      travelers: "4,50,000",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      country: "Himachal Pradesh",
      travelers: "2,80,000",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      country: "Uttarakhand",
      travelers: "2,20,000",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
      country: "Tamil Nadu",
      travelers: "2,75,000",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
      country: "Maharashtra",
      travelers: "3,60,000",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
      country: "Karnataka",
      travelers: "2,40,000",
    },
  ];

  return (
    <section id="cities" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Popular Destinations in India</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Explore India&apos;s most beautiful states and cities</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {loading ? Array(5).fill(0).map((_, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_20%]">
                  <div className="h-80 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
                </div>
              )) : destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_20%]"
                >
                  <div 
                    onClick={() => handleStateClick(destination.country)}
                    className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition"
                  >
                    <Image
                      src={destination.image}
                      alt={destination.country}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{destination.country}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{destination.travelers} travelers</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
