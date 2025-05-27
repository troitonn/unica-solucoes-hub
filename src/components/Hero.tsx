
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-20 pb-16 relative">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge inovador */}
        <div className="mb-8 animate-slide-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-accent/20 to-transparent border border-brand-accent/30 text-brand-accent backdrop-blur-sm rounded-full">
            <Zap className="h-5 w-5 mr-2 floating-icon" />
            <span className="font-semibold">Inovação em cada solução</span>
          </div>
        </div>

        {/* Título principal centralizado */}
        <div className="mb-12 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block text-white">Somos a</span>
            <span className="block text-gradient text-glow text-6xl md:text-8xl lg:text-9xl">
              Única
            </span>
            <span className="block text-white text-4xl md:text-5xl lg:text-6xl mt-2">
              que você precisa!
            </span>
          </h1>

          <div className="bg-gradient-to-r from-brand-accent/10 to-transparent p-6 rounded-2xl border border-brand-accent/20 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Uma empresa que{" "}
              <span className="text-brand-accent font-bold">
                nasceu por você e para você!
              </span>
            </p>
          </div>
        </div>

        {/* Cards de benefícios centralizados */}
        <div className="mb-12 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-3 p-6 bg-brand-accent/10 rounded-xl border border-brand-accent/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-brand-accent/30 flex items-center justify-center">
                <Clock className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white text-lg">Economia de Tempo</h3>
                <p className="text-gray-300">Processos otimizados</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-6 bg-brand-accent/10 rounded-xl border border-brand-accent/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-brand-accent/30 flex items-center justify-center">
                <Shield className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white text-lg">100% Seguro</h3>
                <p className="text-gray-300">Proteção garantida</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Tem coisas que só a Única faz!
            </h2>
            <div className="flex items-center justify-center gap-2 text-brand-accent">
              <Users className="h-5 w-5" />
              <span className="font-medium text-lg">
                Mais de 500 empresas confiam em nós
              </span>
            </div>
          </div>
        </div>

        {/* CTAs principais */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="btn-primary group text-lg px-8 py-4" onClick={() => {
            document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Descobrir Soluções
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" className="btn-outline group text-lg px-8 py-4" onClick={() => {
            window.open("https://wa.me/5521972145721", "_blank");
          }}>
            <MessageSquare className="mr-2 h-5 w-5" />
            Falar Conosco
          </Button>
        </div>

        {/* Serviços em círculos pequenos horizontais */}
        <div className="animate-slide-in" style={{ animationDelay: "0.8s" }}>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Nossos Serviços</h3>
            <p className="text-gray-300">Soluções completas para seu negócio</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { name: "PONTO ELETRÔNICO", icon: "⏰" },
              { name: "AUDITORIA DE CARTÕES", icon: "💳" },
              { name: "REVISÃO TRIBUTÁRIA", icon: "📊" },
              { name: "SISTEMA DE COTAÇÃO", icon: "💰" },
              { name: "CERTIFICADO DIGITAL", icon: "🔐" },
              { name: "CONFECÇÃO DE CRACHÁS", icon: "🆔" },
              { name: "SANEAMENTO CADASTRAL", icon: "📋" },
              { name: "ARMAZENAMENTO ARQ. FISCAIS", icon: "📁" }
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  animation: `fade-in 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.1 + 0.8}s`,
                  opacity: 0
                }}
                onClick={() => {
                  const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${service.name}`);
                  window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                }}
                className="group w-20 h-20 bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/30 hover:border-brand-accent/50 hover:bg-brand-accent/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{service.icon}</div>
                  <div className="text-xs font-medium text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-brand-dark/90 px-2 py-1 rounded">
                    {service.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => window.open("/servicos", "_self")}
            className="btn-primary group"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
