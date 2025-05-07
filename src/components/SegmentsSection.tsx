
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
    <section id="segmentos" className="bg-brand-blue py-16 text-white">
      <div className="section-container">
        <h2 className="section-title text-white">Segmentos que já atendemos</h2>
        
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm hover:bg-brand-green/30 transition-colors duration-300 p-4 rounded-lg text-center flex items-center justify-center h-24"
            >
              <span className="text-lg font-medium">{segment}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
