
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-20 pb-16 relative">
      <div className="section-container relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge inovador mais clean */}
        <div className="mb-12 animate-slide-in">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-cyan-300/30 text-cyan-300 rounded-full shadow-lg">
            <Zap className="h-5 w-5 mr-2 floating-icon" />
            <span className="font-semibold text-lg">Inovação em cada solução</span>
          </div>
        </div>

        {/* Título principal mais limpo e aproximado */}
        <div className="mb-16 animate-slide-in space-y-6" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span className="block text-white mb-4">Somos a</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-7xl md:text-9xl lg:text-[10rem] font-black mb-4">
              Única
            </span>
            <span className="block text-white text-4xl md:text-6xl lg:text-7xl">
              que você precisa!
            </span>
          </h1>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-cyan-300/20 max-w-4xl mx-auto shadow-2xl">
            <p className="text-2xl md:text-3xl text-white leading-relaxed">
              Uma empresa que{" "}
              <span className="text-cyan-400 font-bold">
                nasceu por você e para você!
              </span>
            </p>
          </div>
        </div>

        {/* Cards de benefícios mais clean */}
        <div className="mb-16 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="group flex items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl mb-1">Economia de Tempo</h3>
                <p className="text-gray-300 text-lg">Processos otimizados</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-xl mb-1">100% Seguro</h3>
                <p className="text-gray-300 text-lg">Proteção garantida</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Tem coisas que só a Única faz!
            </h2>
            <div className="flex items-center justify-center gap-2 text-cyan-400">
              <Users className="h-6 w-6" />
              <span className="font-medium text-xl">
                Mais de 500 empresas confiam em nós
              </span>
            </div>
          </div>
        </div>

        {/* CTAs principais */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group" onClick={() => {
            document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Descobrir Soluções
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" className="border-2 border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400 hover:text-slate-900 font-semibold text-lg px-10 py-4 rounded-full backdrop-blur-md transition-all duration-300 group" onClick={() => {
            window.open("https://wa.me/5521972145721", "_blank");
          }}>
            <MessageSquare className="mr-2 h-5 w-5" />
            Falar Conosco
          </Button>
        </div>

        {/* Serviços em título */}
        <div className="animate-slide-in mb-8" style={{ animationDelay: "0.8s" }}>
          <h3 className="text-3xl font-bold text-white mb-2">Nossos Serviços</h3>
          <p className="text-gray-300 text-lg mb-8">Soluções completas para seu negócio</p>
        </div>

        {/* Serviços em círculos pequenos horizontais */}
        <div className="animate-slide-in mb-12" style={{ animationDelay: "1s" }}>
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
                  animationDelay: `${index * 0.1 + 1}s`,
                  opacity: 0
                }}
                onClick={() => {
                  const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${service.name}`);
                  window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                }}
                className="group relative w-20 h-20 bg-white/10 backdrop-blur-md border border-cyan-300/30 hover:border-cyan-300/60 hover:bg-white/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl">{service.icon}</div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-slate-900/90 backdrop-blur-sm text-cyan-400 text-xs font-medium px-3 py-1 rounded-lg border border-cyan-300/30">
                    {service.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => window.open("/servicos", "_self")}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
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
