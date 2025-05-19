
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SegmentsSection from "@/components/SegmentsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Enhanced scroll animation effects with parallax elements
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Advanced animation for section visibility
      const sections = document.querySelectorAll(".section-wrapper");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
          section.classList.add("animate-fade-in");
          
          // Add staggered animations to child elements
          const animatedElements = section.querySelectorAll(".animate-stagger");
          animatedElements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("animate-active");
            }, i * 150);
          });
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
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Tech-inspired animated background with geometric shapes */}
      <div className="tech-background fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-black via-brand-blue/30 to-black opacity-100"></div>
        <div className="tech-grid"></div>
        <div className="tech-particles"></div>
      </div>

      {/* Enhanced scroll progress indicator */}
      <div className="scroll-progress fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-brand-green via-cyan-400 to-brand-blue" 
           style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="relative z-10">
        <Navbar />
        <div className="section-wrapper transition-all duration-700">
          <Hero />
        </div>
        <div className="section-wrapper transition-all duration-700">
          <AboutSection />
        </div>
        <div className="section-wrapper transition-all duration-700">
          <ServicesSection />
        </div>
        <div className="section-wrapper transition-all duration-700">
          <SegmentsSection />
        </div>
        <div className="section-wrapper transition-all duration-700">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
