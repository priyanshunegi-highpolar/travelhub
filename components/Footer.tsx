"use client";

import Link from "next/link";
import { Plane, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <span className="text-2xl font-bold">TravelHub</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Your trusted partner for unforgettable travel experiences across India.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400 dark:hover:text-blue-300 transition" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-500 dark:hover:text-pink-400 transition" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-500 transition" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link href="/" className="hover:text-white dark:hover:text-gray-300 transition">Home</Link></li>
              <li><Link href="#cities" className="hover:text-white dark:hover:text-gray-300 transition">Destinations</Link></li>
              <li><Link href="#hotels" className="hover:text-white dark:hover:text-gray-300 transition">Hotels</Link></li>
              <li><Link href="#news" className="hover:text-white dark:hover:text-gray-300 transition">Travel News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><Link href="#" className="hover:text-white dark:hover:text-gray-300 transition">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white dark:hover:text-gray-300 transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white dark:hover:text-gray-300 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white dark:hover:text-gray-300 transition">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>Email: info@travelhub.in</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 MG Road</li>
              <li>Mumbai, Maharashtra 400001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; 2026 TravelHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
