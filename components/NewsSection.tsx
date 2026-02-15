"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      date: "Dec 15, 2024",
      title: "Top 10 Hidden Gems in India for 2025",
      excerpt: "Discover the most beautiful and underrated destinations in India that you must visit next year.",
      link: "https://www.thrillophilia.com/blog/offbeat-places-in-india"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      date: "Dec 12, 2024",
      title: "Travel Tips: Budget Travel Across India",
      excerpt: "Expert advice on budget travel, finding deals, and making the most of your vacation in India.",
      link: "https://www.makemytrip.com/blog/budget-travel-tips-india"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      date: "Dec 10, 2024",
      title: "Best Hill Stations for Winter Getaways",
      excerpt: "Escape to these stunning hill stations perfect for winter vacations in India.",
      link: "https://www.holidify.com/collections/hill-stations-in-india"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      date: "Dec 8, 2024",
      title: "Adventure Travel: Thrilling Experiences in India",
      excerpt: "From paragliding to river rafting, explore the most exciting adventure activities across India.",
      link: "https://www.thrillophilia.com/adventure"
    }
  ];

  return (
    <section id="news" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Exciting Travel News for You</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Stay updated with the latest travel trends and tips</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
              </a>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">{article.title}</h3>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
