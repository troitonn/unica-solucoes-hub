
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageSquare, Phone, Mail, Building } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const services = [
  "Ponto Eletrônico", 
  "Auditoria de Cartões", 
  "Revisão Tributária", 
  "Sistema de Cotação", 
  "Certificado Digital", 
  "Confecção de Crachás", 
  "Saneamento Cadastral", 
  "Armazenamento Arq. Fiscais"
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: {} as Record<string, boolean>
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedServices = Object.keys(formData.services).filter(key => formData.services[key]).join(", ");
    const message = `Olá, meu nome é *${formData.name}*${formData.company ? ` da empresa *${formData.company}*` : ''}.\n\nGostaria de saber mais sobre os serviços: *${selectedServices}*.\n\nMeus contatos:\nEmail: ${formData.email}\nTelefone: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5521972145721?text=${encodedMessage}`;

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp em instantes."
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      services: {}
    });
  };

  const isAnyServiceSelected = Object.values(formData.services).some(value => value);
  const isFormValid = formData.name && formData.email && formData.phone && isAnyServiceSelected;

  return (
    <section id="contato" className="py-20 relative">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Quero aplicar estes serviços na minha empresa
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Se você reconhece a necessidade de reavaliar rotinas dentro da sua organização, deseja manter uma relação mais 
              profissional com seus funcionários e quer garantir que os setores administrativo e financeiro 
              estejam equipados com as melhores ferramentas do mercado, a Única Soluções é para você!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Phone className="h-8 w-8 text-cyan-400" />
                  Contato Direto
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => window.open("https://wa.me/5521972145721", "_blank")}
                  >
                    <MessageSquare className="mr-3 h-6 w-6" />
                    (21) 97214-5721
                  </Button>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span>Disponível via WhatsApp</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Building className="h-5 w-5 text-cyan-400" />
                    <span>Atendimento empresarial personalizado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white font-medium mb-2 block">Nome *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="bg-white/10 border-cyan-300/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white font-medium mb-2 block">Empresa</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="bg-white/10 border-cyan-300/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white font-medium mb-2 block">E-mail *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="bg-white/10 border-cyan-300/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-white font-medium mb-2 block">Telefone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      className="bg-white/10 border-cyan-300/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="(xx) xxxxx-xxxx"
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="text-white font-medium mb-4 block">Quais serviços sua empresa precisa? *</Label>
                  <p className="text-gray-400 text-sm mb-4">Selecione um ou mais serviços</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map(service => (
                      <div key={service} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-cyan-300/20 hover:border-cyan-300/40 transition-colors">
                        <Checkbox 
                          id={`service-${service}`} 
                          checked={formData.services[service] || false} 
                          onCheckedChange={() => handleServiceToggle(service)}
                          className="border-cyan-300/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                        />
                        <Label htmlFor={`service-${service}`} className="text-white text-sm font-medium cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!isFormValid}
                >
                  <MessageSquare className="mr-3 h-6 w-6" />
                  ENVIAR PARA WHATSAPP
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
