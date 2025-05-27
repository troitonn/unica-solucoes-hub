
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Users, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-20 pb-8 relative">
      <div className="section-container relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge inovador mais clean */}
        <div className="mb-8 animate-slide-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-[#18d7af]/30 text-[#18d7af] rounded-full shadow-lg">
            <Zap className="h-4 w-4 mr-2 floating-icon" />
            <span className="font-semibold text-base">Inovação em cada solução</span>
          </div>
        </div>

        {/* Título principal menor e mais compacto */}
        <div className="mb-12 animate-slide-in space-y-4" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">Somos a</span>
            <span className="block bg-gradient-to-r from-[#18d7af] via-[#20c997] to-[#18d7af] bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl font-black mb-2">
              Única
            </span>
            <span className="block text-white text-2xl md:text-4xl lg:text-5xl">
              que você precisa!
            </span>
          </h1>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-[#18d7af]/20 max-w-3xl mx-auto shadow-2xl">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Uma empresa que{" "}
              <span className="text-[#18d7af] font-bold">
                nasceu por você e para você!
              </span>
            </p>
          </div>
        </div>

        {/* Cards de benefícios mais compactos */}
        <div className="mb-10 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="group flex items-center gap-3 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#18d7af]/20 hover:border-[#18d7af]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-[#18d7af]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-lg mb-1">Economia de Tempo</h3>
                <p className="text-gray-300 text-base">Processos otimizados</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#18d7af]/20 hover:border-[#18d7af]/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-[#18d7af]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-lg mb-1">100% Seguro</h3>
                <p className="text-gray-300 text-base">Proteção garantida</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent mb-3">
              Tem coisas que só a Única faz!
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#18d7af]">
              <Users className="h-5 w-5" />
              <span className="font-medium text-lg">
                Mais de 500 empresas confiam em nós
              </span>
            </div>
          </div>
        </div>

        {/* CTAs principais mais compactos */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-semibold text-base px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group" onClick={() => {
            document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Descobrir Soluções
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" className="border-2 border-[#18d7af] text-[#18d7af] bg-transparent hover:bg-[#18d7af] hover:text-[#01222e] font-semibold text-base px-8 py-3 rounded-full backdrop-blur-md transition-all duration-300 group" onClick={() => {
            window.open("https://wa.me/5521972145721", "_blank");
          }}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Falar Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
