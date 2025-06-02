
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contatos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}%0A%0AEmpresa: ${formData.company}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/5521972145721?text=${whatsappMessage}`, "_blank");
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      value: "(21) 97214-5721",
      action: () => window.open("tel:+5521972145721")
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      value: "(21) 97214-5721",
      action: () => window.open("https://wa.me/5521972145721")
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contato@unicasolucoes.com.br",
      action: () => window.open("mailto:contato@unicasolucoes.com.br")
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      value: "Seg - Sex: 8h às 18h",
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#01222e] overflow-hidden">
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-48 bg-gradient-to-b from-[#18d7af]/20 to-[#20c997]/30 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-36 bg-gradient-to-b from-[#18d7af]/25 to-[#20c997]/35 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-60 bg-gradient-to-b from-[#18d7af]/20 to-[#20c997]/25 rounded-full blur-2xl animate-drip"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Entre em{" "}
                <span className="bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent">
                  Contato
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Estamos prontos para atender você e transformar seus processos. 
                Fale conosco e descubra como podemos ajudar sua empresa.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações de contato */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Nossos Canais de Atendimento
                  </h2>
                  
                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 p-6 bg-gradient-to-r from-[#18d7af]/10 to-transparent border border-[#18d7af]/20 rounded-xl backdrop-blur-sm hover:border-[#18d7af]/40 transition-all duration-300 ${info.action ? 'cursor-pointer hover:scale-105' : ''}`}
                        onClick={info.action || undefined}
                        style={{
                          opacity: 0,
                          animation: `fade-in 0.6s ease-out forwards ${index * 0.1}s`
                        }}
                      >
                        <div className="text-[#18d7af] mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                          <p className="text-gray-300">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#18d7af]/10 to-transparent border border-[#18d7af]/20 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Empresa
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <p><strong className="text-white">UNICA SOLUCOES PARA VAREJO LTDA</strong></p>
                    <p>CNPJ: 33.254.664/0001-36</p>
                    <div className="flex items-start gap-2 mt-4">
                      <MapPin className="h-5 w-5 text-[#18d7af] mt-1 flex-shrink-0" />
                      <p>Rio de Janeiro, RJ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulário de contato */}
              <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Nome</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#18d7af] focus:outline-none transition-colors"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#18d7af] focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#18d7af] focus:outline-none transition-colors"
                        placeholder="(21) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#18d7af] focus:outline-none transition-colors"
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Mensagem</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#18d7af] focus:outline-none transition-colors resize-none"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem via WhatsApp
                  </Button>
                </form>
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
