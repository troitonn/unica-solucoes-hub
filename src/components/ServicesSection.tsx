
import ServiceCard from "./ServiceCard";
import { Clock, CreditCard, FileCheck, ShoppingCart, FileKey, UserRound, Database, FileArchive } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Relógio e sistema de ponto eletrônico",
      description: "A forma mais precisa e segura na relação do colaborador e empregador é controle seguro da jornada de trabalho. Através do registro eletrônico, biométrico ou facial, mobile ou quisque, garantimos a precisão marcação. Otimize o seu RH!",
      icon: <Clock className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    },
    {
      title: "Auditoria de cartões",
      description: "Sem dúvidas, as formas de pagamentos eletrônica tomam conta da preferência dos consumidores. Esse movimento leva os comécios a usarem máquinas para receber por cartão ou pix. Com a nossa conciliação de cartões, monitoramos todas as transções de cartões, vouchers, como as taxas acordadas, cobranças indevidas, antecipações não solicitadas e muito mais.",
      icon: <CreditCard className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    },
    {
      title: "Revisão tributária de produtos",
      description: "Venda sem se preocupar! Com a precisão da gestão fiscal no processo de compra e venda, evitamos os indesejáveis travamentos na emissão das notas fiscais e consequentemente do próprio negócio, além da correta apuração dos impostos a pagar.",
      icon: <FileCheck className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
    },
    {
      title: "Sistema de cotação com fornecedores",
      description: "Automatize o seu processos de compras! Simplifique as cotaçãoes, tenha os melhores preços, históricos, rastreabilidade do processo por inteiro! As compras e cotações coorporativas são processadas por meio de uma plataforma online, prática e segura.",
      icon: <ShoppingCart className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80",
    },
    {
      title: "Certificado digital",
      description: "Faça ou renove o seu certificado conosco sem sair de casa ou escritório, tudo de forma simples, rápida e 100% online! Oferecemos todos os modelos do mercado (A1, A3, nuvem e outros).",
      icon: <FileKey className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1560472355-109703aa3edc?auto=format&fit=crop&q=80",
    },
    {
      title: "Confecção de crachás personalizados",
      description: "Identificação pessoal é fundamental para a segurança no ambiente de trabalho. Um crachá com a foto, nome, fumção e outras informações relevantes do colaborador, é a forma mais eficiente de identificação.",
      icon: <UserRound className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80",
    },
    {
      title: "Saneamento cadastral",
      description: "O saneamento de dados cadastrais é um processo crucial para a gestão eficiente das informações em uma empresa. Este processo envolve a correção, atualização e padronização de dados cadastrais para garantir que estejam completos, precisos e consistentes.",
      icon: <Database className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80",
    },
    {
      title: "Armazenamento de documento fiscais",
      description: "Você sabia que é obrigatório o armazenamento pelo prazo de 5 anos dos arquivos fiscais, seja o modelo que for, tanto entrada quanto saída? Tenha suas notas, conhecimentos de frete, cupons, e outros documentos de forma rápida es segura!",
      icon: <FileArchive className="h-8 w-8" />,
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="servicos" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="section-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Otimize seus processos com praticidade e segurança, garantindo mais tempo para o seu negócio
        </p>
        
        {/* Serviços em fileira - grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group cursor-pointer"
              style={{ 
                opacity: 0,
                animation: `fade-in 0.6s ease-out forwards ${index * 0.1}s`
              }}
              onClick={() => {
                const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço "${service.title}" oferecido pela Única Soluções.`);
                window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
              }}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-blue/40 z-10"></div>
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-brand-accent/90 p-2 rounded-lg text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {service.description}
                </p>
                
                <div className="mt-4 text-brand-accent text-sm font-medium group-hover:underline">
                  Saiba mais →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-brand-blue/5 to-brand-blue/20 z-10"></div>
    </section>
  );
};

export default ServicesSection;
