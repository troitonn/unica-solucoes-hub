
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-brand-blue text-white pt-20">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Somos a <span className="text-brand-green">Única</span>, uma empresa que nasceu por você e para você!
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Otimize seus processos com praticidade e segurança, garantido mais tempo para o seu negócio! Deixe a burocracia com a gente.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-brand-green">
            Tem coisas que só a Única faz!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              Nossos Serviços <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Contate-nos
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
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
                  className="bg-white/5 hover:bg-brand-green/20 transition-colors duration-300 p-3 rounded-md text-center text-sm font-medium"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
