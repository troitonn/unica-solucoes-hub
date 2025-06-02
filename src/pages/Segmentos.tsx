import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SegmentsSection from "@/components/SegmentsSection";
const Segmentos = () => {
  return <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-20 pb-12 py-[60px]">
          
        </section>
        
        <SegmentsSection />
        <Footer />
      </div>
    </div>;
};
export default Segmentos;