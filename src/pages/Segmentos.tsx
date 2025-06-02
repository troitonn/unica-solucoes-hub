
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SegmentsSection from "@/components/SegmentsSection";

const Segmentos = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-20 pb-12">
          <div className="section-container py-8">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-gradient mb-4">Segmentos Atendidos</h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
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
