
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-brand-blue via-brand-blue/95 to-brand-blue/80 text-white pt-24 pb-20 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-brand-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Somos a <span className="text-brand-green">Única</span>, uma empresa que nasceu por você e para você!
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Otimize seus processos com praticidade e segurança, garantido mais tempo para o seu negócio! Deixe a burocracia com a gente.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-brand-green">
            Tem coisas que só a Única faz!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300"
              onClick={() => {
                window.open("https://wa.me/5521972145721", "_blank");
              }}
            >
              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-lg">
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
                  className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 rounded-md text-center text-sm font-medium border border-white/10 hover:border-white/30"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Smoother transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
