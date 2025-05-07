import { Building, Target, Award } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const AboutSection = () => {
  return <section id="quemsomos" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="section-container">
        <h2 className="section-title">Quem somos?</h2>
        <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <Avatar className="w-40 h-40 mb-8 ring-4 ring-brand-green/30 shadow-xl">
            <AvatarImage alt="Fundadora da Única Soluções" src="/lovable-uploads/d1272c66-8220-4975-8324-ac2645ad6a82.jpg" />
            <AvatarFallback>ÚS</AvatarFallback>
          </Avatar>
          <p className="text-center text-lg text-gray-700 mb-6">
            A Única Soluções nasceu das necessidades dos nossos clientes. Nossos serviços atendem às empresas de vários 
            nichos, sendo pequeno, médio porte. Estamos preparados! Agregamos valor ao seu negócio! Nada é tão precioso quanto o seu tempo.
          </p>
        </div>
          
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 border border-gray-100">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 p-3 rounded-full mb-4">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue mb-2">Nosso Início</h3>
            <p className="text-gray-600">
              Nascemos para atender as necessidades específicas de nossos clientes, oferecendo soluções personalizadas.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 border border-gray-100">
            <div className="bg-gradient-to-br from-brand-green to-brand-green/80 p-3 rounded-full mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue mb-2">Nossa Missão</h3>
            <p className="text-gray-600">
              Agregar valor ao seu negócio com soluções que otimizam processos e economizam seu tempo.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 border border-gray-100">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 p-3 rounded-full mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue mb-2">Nossa Expansão</h3>
            <p className="text-gray-600">
              Focados no Rio de Janeiro, mas expandindo para São Paulo. É isso aí, chegamos em São Paulo.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="inline-block bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-3 px-6 rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-transform">
            Aquele que pensa de forma preventiva, vê um crescimento uniforme e progressivo da sua empresa!
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;