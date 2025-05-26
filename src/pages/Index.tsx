
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HighlightSections from "@/components/HighlightSections";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SegmentsSection from "@/components/SegmentsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Animação de entrada das seções
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
          section.classList.add("animate-fade-in");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      {/* Background tecnológico */}
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      {/* Indicador de progresso de scroll */}
      <div 
        className="fixed top-0 left-0 z-50 h-1 bg-accent-gradient transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="animate-on-scroll">
          <Hero />
        </div>
        
        <div className="animate-on-scroll">
          <HighlightSections />
        </div>
        
        <div className="animate-on-scroll">
          <AboutSection />
        </div>
        
        <div className="animate-on-scroll">
          <ServicesSection />
        </div>
        
        <div className="animate-on-scroll">
          <SegmentsSection />
        </div>
        
        <div className="animate-on-scroll">
          <ContactForm />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
