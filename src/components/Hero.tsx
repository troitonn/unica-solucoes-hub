
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center pt-20 pb-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="space-y-8 animate-slide-in">
            {/* Badge tecnológico */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent backdrop-blur-sm">
              <Zap className="h-4 w-4 mr-2 floating-icon" />
              <span className="text-sm font-medium">Soluções 100% online</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Somos a{" "}
              <span className="text-gradient">Única</span>,<br />
              <span className="text-white">transformando</span><br />
              o seu negócio{" "}
              <span className="text-brand-accent">digital!</span>
            </h1>

            {/* Descrição */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Otimize seus processos com{" "}
                <span className="text-brand-accent font-semibold">tecnologia avançada</span>{" "}
                e{" "}
                <span className="text-brand-accent font-semibold">segurança de dados</span>,
                garantindo mais tempo para o crescimento do seu negócio.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-gradient">
                Tem coisas que só a Única faz!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-primary group"
                onClick={() => {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Nossos Serviços 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                className="btn-outline group"
                onClick={() => {
                  window.open("https://wa.me/5521972145721", "_blank");
                }}
              >
                <MessageSquare className="mr-2 h-5 w-5" /> 
                WhatsApp
              </Button>
            </div>
            
            {/* Features destacadas */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                  <Shield className="h-5 w-5 text-brand-accent" />
                </div>
                <span className="font-medium">Segurança garantida</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                  <Check className="h-5 w-5 text-brand-accent" />
                </div>
                <span className="font-medium">Emissão rápida</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                  <Zap className="h-5 w-5 text-brand-accent" />
                </div>
                <span className="font-medium">100% online</span>
              </div>
            </div>
          </div>
          
          {/* Área visual dos serviços */}
          <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="tech-card p-8 pulse-glow">
              <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
                Nossos Serviços
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "PONTO ELETRÔNICO",
                  "AUDITORIA DE CARTÕES", 
                  "REVISÃO TRIBUTÁRIA",
                  "SISTEMA DE COTAÇÃO",
                  "CERTIFICADO DIGITAL",
                  "CONFECÇÃO DE CRACHÁS",
                  "SANEAMENTO CADASTRAL",
                  "ARMAZENAMENTO ARQ. FISCAIS"
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="segment-card interactive-hover"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      opacity: 0,
                      animation: `fade-in 0.6s ease-out forwards ${index * 0.1}s`
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
