import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CitiesSection from "@/components/CitiesSection";
import HotelsSection from "@/components/HotelsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CitiesSection />
        <HotelsSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
