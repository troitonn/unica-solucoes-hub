
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
              className="glass-card hover:bg-gradient-to-br hover:from-brand-green/30 hover:to-brand-green/10 transition-all duration-300 p-5 rounded-xl text-center flex items-center justify-center h-28 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="text-lg font-medium">{segment}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modern wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default SegmentsSection;
