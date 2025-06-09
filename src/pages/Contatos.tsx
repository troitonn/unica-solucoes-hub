import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contatos = () => {
  return <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-20 pb-12">
          <div className="section-container py-8">
            <div className="text-center mb-12">
              <h1 className="text-2xl md:text-4xl font-bold text-gradient mb-4">Entre em Contato</h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Estamos aqui para ajudar você a encontrar as melhores soluções
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-brand-accent" />
                    </div>
                    <h2 className="text-xl font-bold text-white">WhatsApp</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    Fale conosco diretamente pelo WhatsApp para um atendimento rápido e personalizado.
                  </p>
                  
                  <Button className="w-full btn-primary" onClick={() => window.open("https://wa.me/5521972145721", "_blank")}>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Conversar no WhatsApp
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-brand-accent" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Telefone</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    Ligue para nós durante o horário comercial para esclarecimentos e orçamentos.
                  </p>
                  
                  <div className="text-brand-accent font-semibold text-base">
                    (21) 97214-5721
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-5 w-5 text-brand-accent" />
                    <h3 className="text-lg font-bold text-white">E-mail</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">
                    Para propostas formais e documentação
                  </p>
                  <p className="text-brand-accent font-semibold text-sm">gestao@unica-solucoes.com</p>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-brand-accent" />
                    <h3 className="text-lg font-bold text-white">Localização</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">Atendemos Rio de Janeiro e São Paulo</p>
                  <p className="text-brand-accent font-semibold text-sm">Rio de Janeiro, RJ / São Paulo, SP</p>
                </div>
              </div>

              
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>;
};
export default Contatos;