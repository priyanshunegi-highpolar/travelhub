"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plane, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">TravelHub</span>
        </Link>

        {isHomePage && (
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection("cities")} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Cities
            </button>
            <button onClick={() => scrollToSection("hotels")} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Hotels
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Why Us
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Reviews
            </button>
            <button onClick={() => scrollToSection("news")} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              News
            </button>
          </nav>
        )}

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
