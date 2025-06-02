
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contatos = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-24 pb-16">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-title text-gradient">Entre em Contato</h1>
              <p className="section-subtitle">
                Estamos aqui para ajudar você a encontrar as melhores soluções
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-brand-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">WhatsApp</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Fale conosco diretamente pelo WhatsApp para um atendimento rápido e personalizado.
                  </p>
                  
                  <Button 
                    className="w-full btn-primary" 
                    onClick={() => window.open("https://wa.me/5521972145721", "_blank")}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-brand-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Telefone</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Ligue para nós durante o horário comercial para esclarecimentos e orçamentos.
                  </p>
                  
                  <div className="text-brand-accent font-semibold text-lg">
                    (21) 97214-5721
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="h-6 w-6 text-brand-accent" />
                    <h3 className="text-xl font-bold text-white">E-mail</h3>
                  </div>
                  <p className="text-gray-300">
                    Para propostas formais e documentação
                  </p>
                  <p className="text-brand-accent font-semibold">
                    contato@unicasolucoes.com.br
                  </p>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-brand-accent" />
                    <h3 className="text-xl font-bold text-white">Localização</h3>
                  </div>
                  <p className="text-gray-300">
                    Atendemos todo o estado do Rio de Janeiro
                  </p>
                  <p className="text-brand-accent font-semibold">
                    Rio de Janeiro, RJ
                  </p>
                </div>
              </div>

              <div className="text-center mt-12 bg-gradient-to-r from-brand-accent/10 to-transparent p-8 rounded-2xl border border-brand-accent/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Horário de Atendimento
                </h3>
                <p className="text-lg text-gray-300">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Contatos;
