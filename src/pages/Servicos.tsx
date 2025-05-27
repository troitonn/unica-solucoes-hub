
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, CreditCard, FileCheck, ShoppingCart, FileKey, UserRound, Database, FileArchive } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      title: "Relógio e sistema de ponto eletrônico",
      description: "A forma mais precisa e segura na relação do colaborador e empregador é controle seguro da jornada de trabalho. Através do registro eletrônico, biométrico ou facial, mobile ou quisque, garantimos a precisão marcação. Otimize o seu RH!",
      icon: <Clock className="h-8 w-8" />,
      emoji: "⏰"
    },
    {
      title: "Auditoria de cartões",
      description: "Sem dúvidas, as formas de pagamentos eletrônica tomam conta da preferência dos consumidores. Esse movimento leva os comécios a usarem máquinas para receber por cartão ou pix. Com a nossa conciliação de cartões, monitoramos todas as transções de cartões, vouchers, como as taxas acordadas, cobranças indevidas, antecipações não solicitadas e muito mais.",
      icon: <CreditCard className="h-8 w-8" />,
      emoji: "💳"
    },
    {
      title: "Revisão tributária de produtos",
      description: "Venda sem se preocupar! Com a precisão da gestão fiscal no processo de compra e venda, evitamos os indesejáveis travamentos na emissão das notas fiscais e consequentemente do próprio negócio, além da correta apuração dos impostos a pagar.",
      icon: <FileCheck className="h-8 w-8" />,
      emoji: "📊"
    },
    {
      title: "Sistema de cotação com fornecedores",
      description: "Automatize o seu processos de compras! Simplifique as cotaçãoes, tenha os melhores preços, históricos, rastreabilidade do processo por inteiro! As compras e cotações coorporativas são processadas por meio de uma plataforma online, prática e segura.",
      icon: <ShoppingCart className="h-8 w-8" />,
      emoji: "💰"
    },
    {
      title: "Certificado digital",
      description: "Faça ou renove o seu certificado conosco sem sair de casa ou escritório, tudo de forma simples, rápida e 100% online! Oferecemos todos os modelos do mercado (A1, A3, nuvem e outros).",
      icon: <FileKey className="h-8 w-8" />,
      emoji: "🔐"
    },
    {
      title: "Confecção de crachás personalizados",
      description: "Identificação pessoal é fundamental para a segurança no ambiente de trabalho. Um crachá com a foto, nome, fumção e outras informações relevantes do colaborador, é a forma mais eficiente de identificação.",
      icon: <UserRound className="h-8 w-8" />,
      emoji: "🆔"
    },
    {
      title: "Saneamento cadastral",
      description: "O saneamento de dados cadastrais é um processo crucial para a gestão eficiente das informações em uma empresa. Este processo envolve a correção, atualização e padronização de dados cadastrais para garantir que estejam completos, precisos e consistentes.",
      icon: <Database className="h-8 w-8" />,
      emoji: "📋"
    },
    {
      title: "Armazenamento de documento fiscais",
      description: "Você sabia que é obrigatório o armazenamento pelo prazo de 5 anos dos arquivos fiscais, seja o modelo que for, tanto entrada quanto saída? Tenha suas notas, conhecimentos de frete, cupons, e outros documentos de forma rápida es segura!",
      icon: <FileArchive className="h-8 w-8" />,
      emoji: "📁"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-24 pb-16">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-title text-gradient">Nossos Serviços</h1>
              <p className="section-subtitle">
                Soluções completas para otimizar seus processos com praticidade e segurança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group cursor-pointer p-6 bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl backdrop-blur-sm hover:border-brand-accent/40 hover:bg-brand-accent/15 transition-all duration-500"
                  style={{
                    opacity: 0,
                    animation: `fade-in 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={() => {
                    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço "${service.title}" oferecido pela Única Soluções.`);
                    window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{service.emoji}</div>
                    <div className="text-brand-accent">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="text-brand-accent text-sm font-medium group-hover:underline">
                    Saiba mais →
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-brand-accent/10 to-transparent p-8 rounded-2xl border border-brand-accent/20 backdrop-blur-sm max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Quero aplicar estes serviços na minha empresa
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Se você reconhece a necessidade de reavaliar rotinas dentro da sua organização, deseja manter uma relação mais profissional com seus funcionários e quer garantir que os setores administrativo e financeiro estejam equipados com as melhores ferramentas do mercado, a Única Soluções é para você!
                </p>
                <Button
                  size="lg"
                  className="btn-primary group"
                  onClick={() => {
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Servicos;
