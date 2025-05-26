
import { Zap } from "lucide-react";

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
    <section id="segmentos" className="bg-gradient-to-br from-black via-brand-blue/20 to-black py-24 text-white relative overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 tech-grid"></div>
        <div className="absolute inset-0 binary-rain opacity-5"></div>
        
        <div className="absolute -top-[10%] -left-[5%] w-96 h-96 bg-brand-green/5 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-80 h-80 bg-cyan-700/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/20 border border-cyan-900/30 text-cyan-400 backdrop-blur-sm mb-6 mx-auto">
          <Zap className="h-4 w-4 mr-2 text-cyan-400" />
          <span className="text-sm font-medium">Presença em múltiplos mercados</span>
        </div>
        
        <h2 className="section-title text-white mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          Segmentos que já atendemos
        </h2>
        
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Nossa tecnologia é adaptável para diversos segmentos de mercado, garantindo soluções 
          personalizadas que atendem às necessidades específicas do seu negócio.
        </p>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="tech-segment-card animate-stagger"
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="segment-content">
                <span>{segment}</span>
                <div className="segment-corner-tl"></div>
                <div className="segment-corner-br"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech-inspired divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="black" 
                className="tech-wave"></path>
        </svg>
      </div>

      {/* Dynamic tech circuit lines in the background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(45, 166, 109, 0.03)" strokeWidth="0.5"></path>
          <path d="M0,25 L25,25 L25,75 L75,75 L75,100" fill="none" stroke="rgba(45, 166, 109, 0.07)" strokeWidth="0.5"></path>
          <path d="M100,0 L75,25 L50,25 L50,50 L25,50 L0,75" fill="none" stroke="rgba(45, 166, 109, 0.07)" strokeWidth="0.5"></path>
          <circle cx="75" cy="25" r="1" fill="rgba(45, 166, 109, 0.3)"></circle>
          <circle cx="50" cy="50" r="1" fill="rgba(45, 166, 109, 0.3)"></circle>
          <circle cx="25" cy="75" r="1" fill="rgba(45, 166, 109, 0.3)"></circle>
        </svg>
      </div>
    </section>
  );
};

export default SegmentsSection;
