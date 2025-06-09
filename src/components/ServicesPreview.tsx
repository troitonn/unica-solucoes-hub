
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, CreditCard, FileCheck, ShoppingCart, FileKey, UserRound, Database, FileArchive } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const services = [
    { name: "PONTO ELETRÔNICO", icon: Clock, emoji: "⏰" },
    { name: "AUDITORIA DE CARTÕES", icon: CreditCard, emoji: "💳" },
    { name: "REVISÃO TRIBUTÁRIA", icon: FileCheck, emoji: "📊" },
    { name: "SISTEMA DE COTAÇÃO", icon: ShoppingCart, emoji: "💰" },
    { name: "CERTIFICADO DIGITAL", icon: FileKey, emoji: "🔐" },
    { name: "CONFECÇÃO DE CRACHÁS", icon: UserRound, emoji: "🆔" },
    { name: "SANEAMENTO CADASTRAL", icon: Database, emoji: "📋" },
    { name: "ARMAZENAMENTO ARQ. FISCAIS", icon: FileArchive, emoji: "📁" }
  ];

  const handleServiceClick = useCallback((serviceName: string) => {
    const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${serviceName}`);
    window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
  }, []);

  const handleViewAllClick = useCallback(() => {
    window.open("/servicos", "_self");
  }, []);

  useEffect(() => {
    // Cleanup function para o observer anterior
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Desconectar observer após primeira ativação para evitar re-renders
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (sectionRef.current && observerRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-[#01222e]/50 backdrop-blur-sm relative"
    >
      <div className="section-container">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h3 className={`text-2xl font-bold text-white mb-2 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Nossos Serviços
          </h3>
          <p className={`text-gray-300 text-base mb-8 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Soluções completas para seu negócio
          </p>
        </div>

        {/* Serviços em círculos horizontais */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                onClick={() => handleServiceClick(service.name)}
                className={`group relative bg-white/10 backdrop-blur-md border border-[#18d7af]/30 hover:border-[#18d7af]/60 hover:bg-white/15 rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#18d7af]/20 min-w-[180px] max-w-[200px] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 50 + 200}ms` : '0ms'
                }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-xl">{service.emoji}</div>
                    <IconComponent className="h-5 w-5 text-[#18d7af]" />
                  </div>
                  <div className="text-white text-xs font-medium leading-tight">
                    {service.name}
                  </div>
                </div>
                
                {/* Efeito de hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#18d7af]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleViewAllClick}
            className={`bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isVisible ? '600ms' : '0ms'
            }}
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
