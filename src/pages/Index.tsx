
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SegmentsSection from "@/components/SegmentsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Add smooth scrolling effect for a more fluid experience
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-wrapper");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("animate-fade-in");
        }
      });
    };

    handleScroll(); // Check on initial load
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background gradient only applied to the hero section */}
      <div className="relative z-10">
        <Navbar />
        <div className="section-wrapper transition-all duration-500">
          <Hero />
        </div>
        <div className="section-wrapper transition-all duration-500">
          <AboutSection />
        </div>
        <div className="section-wrapper transition-all duration-500">
          <ServicesSection />
        </div>
        <div className="section-wrapper transition-all duration-500">
          <SegmentsSection />
        </div>
        <div className="section-wrapper transition-all duration-500">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
