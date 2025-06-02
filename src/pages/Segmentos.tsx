
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SegmentsSection from "@/components/SegmentsSection";

const Segmentos = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-24 pb-16">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-title text-gradient">Segmentos Atendidos</h1>
              <p className="section-subtitle">
                Nossa tecnologia é adaptável para diversos segmentos de mercado
              </p>
            </div>
          </div>
        </section>
        
        <SegmentsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Segmentos;
