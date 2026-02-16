"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Headphones, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: DollarSign,
      title: "Best Price Guarantee",
      description: "We offer the most competitive prices on 500+ tour packages across India",
      color: "bg-green-500",
      lightColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data and payments are protected with industry-leading security",
      color: "bg-blue-500",
      lightColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated team is available round the clock to assist you",
      color: "bg-purple-500",
      lightColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      icon: Award,
      title: "Trusted by Thousands",
      description: "Join thousands of satisfied travelers who trust us for their dream vacations",
      color: "bg-orange-500",
      lightColor: "bg-orange-100 dark:bg-orange-900/30"
    }
  ];

  return (
    <section id="why-us" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Experience the difference with our exceptional service</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.lightColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`p-3 rounded-xl ${feature.color}`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
