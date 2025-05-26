import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
const services = ["Ponto Eletrônico", "Auditoria de Cartões", "Revisão Tributária", "Sistema de Cotação", "Certificado Digital", "Confecção de Crachás", "Saneamento Cadastral", "Armazenamento Arq. Fiscais"];
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: {} as Record<string, boolean>
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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

    // Get selected services
    const selectedServices = Object.keys(formData.services).filter(key => formData.services[key]).join(", ");

    // Create message for WhatsApp
    const message = `Olá, meu nome é *${formData.name}*${formData.company ? ` da empresa *${formData.company}*` : ''}.\n\nGostaria de saber mais sobre os serviços: *${selectedServices}*.\n\nMeus contatos:\nEmail: ${formData.email}\nTelefone: ${formData.phone}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/5521972145721?text=${encodedMessage}`;

    // Show toast
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp em instantes."
    });

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      services: {}
    });
  };

  // Check if any service is selected
  const isAnyServiceSelected = Object.values(formData.services).some(value => value);
  // Check if form is valid
  const isFormValid = formData.name && formData.email && formData.phone && isAnyServiceSelected;
  return <section id="contato" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-brand-blue p-8 text-white">
              <h3 className="font-bold mb-6 text-[brand-accent-dark] text-brand-slate">Quero aplicar estes serviços na minha empresa</h3>
              <p className="mb-8 text-zinc-900">
                Se você reconhece a necessidade de reavaliar rotinas dentro da sua organização, deseja manter uma relação mais
                profissional com seus funcionários e quer garantir que os setories adminitrativo e financeiro
                estejam equipados com as melhores ferramentas do mercado, a Única Soluções é pra você!
              </p>
              
              <div className="mt-auto pt-8 rounded-lg">
                <h4 className="font-semibold text-xl mb-2">Contato Direto</h4>
                <Button className="bg-gradient-to-r from-brand-green to-brand-green/90 hover:from-brand-green/90 hover:to-brand-green text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mt-2" onClick={() => {
                window.open("https://wa.me/5521972145721", "_blank");
              }}>
                  <MessageSquare size={16} /> (21) 97214-5721
                </Button>
              </div>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5 bg-[brand-accent-dark] bg-transparent">
                <div>
                  <Label htmlFor="name" className="class=\"text-sm bg-white text-black\"">Nome</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div>
                  <Label htmlFor="company" className="class=\"text-sm bg-white text-black\"">Empresa</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
                
                <div>
                  <Label htmlFor="email" className="class=\"text-sm bg-white text-black\"">E-mail</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="class=\"text-sm bg-white text-black\"">Telefone</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                
                <div>
                  <Label className="mb-2 block">Quais os serviços sua empresa precisa? *</Label>
                  <p className="text-sm text-gray-500 mb-3">Selecione mais de um serviço se desejar</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map(service => <div key={service} className="flex items-center space-x-2 bg-transparent">
                        <Checkbox id={`service-${service}`} checked={formData.services[service] || false} onCheckedChange={() => handleServiceToggle(service)} />
                        <Label htmlFor={`service-${service}`} className="text-sm bg-white text-black">
                          {service}
                        </Label>
                      </div>)}
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-brand-green to-brand-green/90 hover:from-brand-green/90 hover:to-brand-green text-white flex items-center justify-center gap-2" disabled={!isFormValid}>
                  ENVIAR PARA WHATSAPP
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;