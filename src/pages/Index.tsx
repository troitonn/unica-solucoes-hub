
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HighlightSections from "@/components/HighlightSections";
import ServicesSection from "@/components/ServicesSection";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden relative">
      {/* Novos efeitos de fundo com formas redondas e gotas */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {/* Gotas grandes */}
        <div className="absolute top-10 left-10 w-32 h-48 bg-gradient-to-b from-cyan-400/20 to-blue-500/30 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-36 bg-gradient-to-b from-blue-400/25 to-cyan-500/35 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-60 bg-gradient-to-b from-indigo-400/20 to-blue-600/25 rounded-full blur-2xl animate-drip"></div>
        
        {/* Círculos flutuantes */}
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-300/20 rounded-full blur-md animate-float"></div>
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-blue-400/25 rounded-full blur-sm animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-300/20 rounded-full blur-lg animate-float-slow"></div>
        
        {/* Gotas escorrendo */}
        <div className="absolute top-0 left-1/3 w-2 h-40 bg-gradient-to-b from-cyan-400/40 to-transparent rounded-full animate-drip-down"></div>
        <div className="absolute top-0 right-1/4 w-1.5 h-32 bg-gradient-to-b from-blue-400/50 to-transparent rounded-full animate-drip-down-delayed"></div>
      </div>
      
      {/* Indicador de progresso de scroll */}
      <div 
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300" 
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
