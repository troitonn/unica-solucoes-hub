
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue/90 text-white pt-24 pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Somos a <span className="text-brand-green bg-gradient-to-r from-brand-green to-teal-400 bg-clip-text text-transparent">Única</span>, uma empresa que nasceu por você e para você!
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Otimize seus processos com praticidade e segurança, garantido mais tempo para o seu negócio! Deixe a burocracia com a gente.
          </p>
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-brand-green to-teal-300 bg-clip-text text-transparent">
            Tem coisas que só a Única faz!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-r from-brand-green to-brand-green/80 hover:opacity-90 text-white border-none shadow-lg shadow-brand-green/20">
              Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              Contate-nos
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
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
                  className="bg-white/5 hover:bg-gradient-to-br hover:from-brand-green/30 hover:to-brand-green/10 transition-all duration-300 p-4 rounded-lg text-center text-sm font-medium border border-white/10"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
