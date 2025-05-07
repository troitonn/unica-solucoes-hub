
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
    <section id="segmentos" className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/90 py-20 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[5%] w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-80 h-80 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-white mb-12">Segmentos que já atendemos</h2>
        
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md hover:bg-gradient-to-br hover:from-brand-green/30 hover:to-brand-green/10 transition-all duration-300 p-5 rounded-xl text-center flex items-center justify-center h-28 border border-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-lg font-medium">{segment}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute -bottom-1 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,144C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default SegmentsSection;
