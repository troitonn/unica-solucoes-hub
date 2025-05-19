
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Activity } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-brand-blue/30 to-black text-white pt-28 pb-24 overflow-hidden">
      {/* Tech-inspired animated decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="circuit-lines"></div>
        <div className="tech-dots"></div>
        <div className="tech-glow absolute top-[40%] left-[50%] w-[500px] h-[500px] rounded-full blur-[120px] bg-brand-blue/20 animate-pulse-slow"></div>
        <div className="tech-glow absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full blur-[80px] bg-brand-green/20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Digital binary code animation in background */}
        <div className="binary-rain"></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/30 border border-brand-blue/50 text-brand-green backdrop-blur-sm mb-4">
            <Zap className="h-4 w-4 mr-2 text-brand-green" />
            <span className="text-sm font-medium">Soluções tecnológicas inovadoras</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Somos a <span className="bg-gradient-to-r from-brand-green via-cyan-400 to-teal-300 bg-clip-text text-transparent">Única</span>, 
            <br /><span className="text-tech-gradient">transformando</span><br />o seu negócio digital!
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
            Otimize seus processos com <span className="text-brand-green font-medium">tecnologia avançada</span> e <span className="text-cyan-400 font-medium">segurança de dados</span>, garantido mais tempo para o crescimento do seu negócio.
          </p>
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-brand-green to-cyan-300 bg-clip-text text-transparent">
            Tem coisas que só a Única faz!
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              size="lg" 
              className="tech-button from-brand-green to-cyan-500 hover:opacity-90 text-white border-none shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/30 transition-all duration-500"
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="tech-outline-button border-cyan-500/50 hover:border-cyan-400 text-white hover:bg-cyan-900/20 transition-all duration-500"
              onClick={() => {
                window.open("https://wa.me/5521972145721", "_blank");
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
            </Button>
          </div>
          
          <div className="pt-8 flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="h-5 w-5 text-brand-green" />
              <span className="text-sm">Segurança de dados</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Activity className="h-5 w-5 text-cyan-400" /> 
              <span className="text-sm">Suporte 24/7</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 animate-slide-up">
          <div className="tech-card p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm transform hover:translate-y-[-5px] transition-all duration-500">
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
                  className="tech-service-item animate-stagger"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern tech-styled wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#000" 
                className="tech-wave"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
