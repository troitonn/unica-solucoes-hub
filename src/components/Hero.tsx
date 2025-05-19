
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue/90 text-white pt-24 pb-20 overflow-hidden">
      {/* Enhanced decorative elements with animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-brand-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '20s' }}></div>
        
        {/* Additional subtle animated elements */}
        <div className="absolute top-[60%] left-[40%] w-40 h-40 bg-brand-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[25%] right-[15%] w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '18s' }}></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Somos a <span className="text-brand-green bg-gradient-to-r from-brand-green to-teal-400 bg-clip-text text-transparent">Única</span>, uma empresa que nasceu por você e para você!
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Otimize seus processos com praticidade e segurança, garantido mais tempo para o seu negócio! Deixe a burocracia com a gente.
          </p>
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-brand-green to-teal-300 bg-clip-text text-transparent">
            Tem coisas que só a Única faz!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-green to-brand-green/80 hover:opacity-90 text-white border-none shadow-lg shadow-brand-green/20 hover:shadow-xl hover:scale-105 transition-all duration-500"
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-500"
              onClick={() => {
                window.open("https://wa.me/5521972145721", "_blank");
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up">
          <div className="glass-card p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:translate-y-[-5px]">
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
                  className="bg-white/5 hover:bg-gradient-to-br hover:from-brand-green/30 hover:to-brand-green/10 transition-all duration-500 p-4 rounded-lg text-center text-sm font-medium border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced modern wave separator with improved styling */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 wave-separator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] transition-all">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" className="transition-all duration-500"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
