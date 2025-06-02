
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Users, Store, ShoppingBag } from "lucide-react";

const Segmentos = () => {
  const segments = [
    {
      category: "Alimentação",
      icon: <Store className="h-8 w-8" />,
      items: ["Supermercado", "Mercado de Bairro", "Padaria", "Açougue", "Peixaria", "Hortifruti", "Mercearias"]
    },
    {
      category: "Serviços",
      icon: <Users className="h-8 w-8" />,
      items: ["Restaurantes", "Cafeterias", "Sorveterias", "Conveniência", "Moda e beleza"]
    },
    {
      category: "Varejo",
      icon: <ShoppingBag className="h-8 w-8" />,
      items: ["Bazar", "Materiais de construção", "Atacados", "Lojas especializadas"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#01222e] overflow-hidden">
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-48 bg-gradient-to-b from-[#18d7af]/20 to-[#20c997]/30 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-36 bg-gradient-to-b from-[#18d7af]/25 to-[#20c997]/35 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-60 bg-gradient-to-b from-[#18d7af]/20 to-[#20c997]/25 rounded-full blur-2xl animate-drip"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#18d7af]/10 border border-[#18d7af]/30 text-[#18d7af] backdrop-blur-sm mb-8">
                <Building2 className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Múltiplos segmentos atendidos</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Segmentos que{" "}
                <span className="bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent">
                  atendemos
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nossa tecnologia é adaptável para diversos segmentos de mercado, garantindo soluções 
                personalizadas que atendem às necessidades específicas do seu negócio.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {segments.map((segment, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#18d7af]/10 to-transparent border border-[#18d7af]/20 rounded-2xl p-8 backdrop-blur-sm hover:border-[#18d7af]/40 transition-all duration-500"
                  style={{
                    opacity: 0,
                    animation: `fade-in 0.6s ease-out forwards ${index * 0.2}s`
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-[#18d7af]">{segment.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{segment.category}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {segment.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#18d7af]/30 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-[#18d7af] rounded-full mr-3"></div>
                        <span className="text-gray-300 hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-[#18d7af]/10 to-transparent border border-[#18d7af]/20 rounded-2xl p-8 backdrop-blur-sm max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Não encontrou seu segmento?
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Não tem problema! Nossa equipe está preparada para atender diversos tipos de negócio.
                </p>
                <p className="text-[#18d7af] font-semibold text-lg">
                  Entre em contato e vamos conversar sobre seu projeto!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Segmentos;
