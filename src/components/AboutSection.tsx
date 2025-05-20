
import { Building, Target, Award, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return <section id="quemsomos" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="section-container">
        <h2 className="section-title">Quem somos?</h2>
        <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <Avatar className="w-40 h-40 mb-8 ring-4 ring-brand-green/30 shadow-xl hover:scale-105 transition-all duration-500">
            <AvatarImage alt="Fundadora da Única Soluções" src="/lovable-uploads/d1272c66-8220-4975-8324-ac2645ad6a82.jpg" className="object-cover" />
            <AvatarFallback>ÚS</AvatarFallback>
          </Avatar>
          <p className="text-center text-lg text-gray-700 mb-6 leading-relaxed">
            A Única Soluções nasceu das necessidades dos nossos clientes. Nossos serviços atendem às empresas de vários 
            nichos, sendo pequeno, médio porte. Estamos preparados! Agregamos valor ao seu negócio! Nada é tão precioso quanto o seu tempo.
          </p>
          
          {/* Social Media Icons with enhanced style */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/somosaunica/" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-br from-brand-blue to-brand-blue/80 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-md">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/somosaunica" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-brand-blue to-brand-blue/80 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-md">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/somosaunica" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-brand-blue to-brand-blue/80 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-md">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5521972145721&text=Ol%C3%A1%20%C3%9Anica,%20eu%20vim%20no%20site%20e%20quero%20saber%20mais" 
               target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-br from-brand-green to-brand-green/80 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 shadow-md">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
          
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building className="h-6 w-6 text-white" />,
              title: "Nosso Início",
              description: "Nascemos para atender as necessidades específicas de nossos clientes, oferecendo soluções personalizadas.",
              color: "from-brand-blue to-brand-blue/80"
            },
            {
              icon: <Target className="h-6 w-6 text-white" />,
              title: "Nossa Missão",
              description: "Agregar valor ao seu negócio com soluções que otimizam processos e economizam seu tempo.",
              color: "from-brand-green to-brand-green/80"
            },
            {
              icon: <Award className="h-6 w-6 text-white" />,
              title: "Nossa Expansão",
              description: "Focados no Rio de Janeiro, mas expandindo para São Paulo. É isso aí, chegamos em São Paulo.",
              color: "from-brand-blue to-brand-blue/80"
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center transform hover:-translate-y-2 border border-gray-100"
              style={{ opacity: 0, animation: `fade-in 0.5s ease-out forwards ${index * 0.2 + 0.3}s` }}
            >
              <div className={`bg-gradient-to-br ${item.color} p-3 rounded-full mb-4 shadow-md`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
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
