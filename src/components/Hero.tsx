import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Users, Clock } from "lucide-react";
const Hero = () => {
  return <section className="hero-section min-h-screen flex items-center justify-center pt-16 pb-6 relative">
      <div className="section-container relative z-10 text-center max-w-5xl mx-auto my-0 py-10">
        {/* Badge inovador mais clean */}
        <div className="mb-6 animate-slide-in my-px">
          <div className="inline-flex items-center px-3 bg-white/10 backdrop-blur-md border border-[#18d7af]/30 text-[#18d7af] rounded-full shadow-lg py-[3px] my-0">
            <Zap className="h-3 w-3 mr-2 floating-icon" />
            <span className="font-semibold text-sm">Inovação em cada solução</span>
          </div>
        </div>

        {/* Título principal menor e mais compacto */}
        <div className="mb-8 animate-slide-in space-y-3" style={{
        animationDelay: "0.2s"
      }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-white mb-1 my-0 py-0">Somos a</span>
            <span className="block bg-gradient-to-r from-[#18d7af] via-[#20c997] to-[#18d7af] bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl font-black mb-1">
              Única
            </span>
            <span className="block text-white text-xl md:text-3xl lg:text-4xl">
              que você precisa!
            </span>
          </h1>

          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-[#18d7af]/20 max-w-2xl mx-auto shadow-2xl py-px">
            <p className="text-base md:text-lg text-white leading-relaxed">
              Uma empresa que{" "}
              <span className="text-[#18d7af] font-bold">
                nasceu por você e para você!
              </span>
            </p>
          </div>
        </div>

        {/* Cards de benefícios mais compactos */}
        <div className="mb-6 animate-slide-in" style={{
        animationDelay: "0.4s"
      }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto mb-6">
            <div className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20 hover:border-[#18d7af]/40 transition-all duration-300 hover:transform hover:scale-105 py-[16px]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-5 w-5 text-[#18d7af]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-base mb-0.5">Economia de Tempo</h3>
                <p className="text-gray-300 text-sm">Processos otimizados</p>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20 hover:border-[#18d7af]/40 transition-all duration-300 hover:transform hover:scale-105 py-[16px] my-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-5 w-5 text-[#18d7af]" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white text-base mb-0.5">100% Seguro</h3>
                <p className="text-gray-300 text-sm">Proteção garantida</p>
              </div>
            </div>
          </div>

          <div className="mb-6 py-0 my-px">
            <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent mb-2">
              Tem coisas que só a Única faz!
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#18d7af]">
              <Users className="h-4 w-4" />
              <span className="font-medium text-base">Mais de 200 empresas confiam em nós</span>
            </div>
          </div>
        </div>

        {/* CTAs principais mais compactos */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-slide-in" style={{
        animationDelay: "0.6s"
      }}>
          <Button size="lg" className="bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group" onClick={() => {
          document.getElementById("contato")?.scrollIntoView({
            behavior: "smooth"
          });
        }}>
            Descobrir Soluções
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" className="border-2 border-[#18d7af] text-[#18d7af] bg-transparent hover:bg-[#18d7af] hover:text-[#01222e] font-semibold text-sm px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 group" onClick={() => {
          window.open("https://wa.me/5521972145721", "_blank");
        }}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Falar Conosco
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;