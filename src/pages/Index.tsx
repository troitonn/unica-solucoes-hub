
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SegmentsSection from "@/components/SegmentsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="gradient-background fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-brand-blue to-brand-blue/90 opacity-100"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ServicesSection />
        <SegmentsSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
