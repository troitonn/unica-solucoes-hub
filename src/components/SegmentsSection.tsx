
const SegmentsSection = () => {
  const segments = [
    "Autônomos",
    "Supermercado",
    "Hortifrúti",
    "Padaria",
    "Açougue",
    "Bazar",
    "Moda e beleza",
    "Restaurantes",
    "Peixaria",
    "Conveniência",
    "Sorveterias",
    "Mercearias",
    "Cafeterias",
    "Materiais de construção",
    "Atacado de doces",
    "Atacado de embalagens",
    "Atacado de laticínios",
  ];

  return (
    <section id="segmentos" className="bg-gradient-to-b from-brand-blue/5 via-brand-blue/90 to-brand-blue py-20 text-white relative">
      {/* Smooth gradient transition from ServicesSection */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-white mb-12">Segmentos que já atendemos</h2>
        
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="bg-white/10 transition-all duration-300 p-5 rounded-lg text-center flex items-center justify-center h-28 border border-white/20 hover:border-white/40 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: 0,
                animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s`
              }}
            >
              <span className="text-lg font-medium">{segment}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default SegmentsSection;
