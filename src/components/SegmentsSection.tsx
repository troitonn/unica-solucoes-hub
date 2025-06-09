import { Building2 } from "lucide-react";
const SegmentsSection = () => {
  const segments = ["Supermercado", "Mercado de Bairro", "Hortifruti", "Padaria", "Açougue", "Bazar", "Moda e beleza", "Restaurantes", "Peixaria", "Conveniência", "Sorveterias", "Mercearias", "Cafeterias", "Materiais de construção", "Atacados"];
  return <section id="segmentos" className="relative overflow-hidden py-0">
      {/* Background decorativo */}
      
      
      <div className="section-container relative z- py-0 my-[69px]">
        {/* Badge da seção */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent backdrop-blur-sm">
            <Building2 className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Múltiplos segmentos atendidos</span>
          </div>
        </div>
        
        {/* Título e descrição */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient mb-6 text-4xl">
            Segmentos que já atendemos
          </h2>
          <p className="section-subtitle text-base">
            Nossa tecnologia é adaptável para diversos segmentos de mercado, garantindo soluções 
            personalizadas que atendem às necessidades específicas do seu negócio.
          </p>
        </div>
        
        {/* Grid de segmentos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {segments.map((segment, index) => <div key={index} className="segment-card" style={{
          opacity: 0,
          animation: `fade-in 0.6s ease-out forwards ${index * 0.05}s`
        }}>
              <span className="block">{segment}</span>
            </div>)}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 py-[30px]">
          <div className="inline-block bg-card-gradient border border-brand-accent/20 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-4">
              Não encontrou seu segmento? Não tem problema!
            </p>
            <p className="text-brand-accent font-semibold">
              Nossa equipe está preparada para atender diversos tipos de negócio.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default SegmentsSection;