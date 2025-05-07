
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const services = [
  "Ponto Eletrônico",
  "Auditoria de Cartões",
  "Revisão Tributária",
  "Sistema de Cotação",
  "Certificado Digital",
  "Confecção de Crachás",
  "Saneamento Cadastral",
  "Armazenamento Arq. Fiscais",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: {} as Record<string, boolean>,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        services: {},
      });
    }, 1000);
  };

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-brand-blue p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quero aplicar estes serviços na minha empresa</h3>
              <p className="mb-8 text-gray-300">
                Se você reconhece a necessidade de reavaliar rotinas dentro da sua organização, deseja manter uma relação mais
                profissional com seus funcionários e quer garantir que os setories adminitrativo e financeiro
                estejam equipados com as melhores ferramentas do mercado, a Única Soluções é pra você!
              </p>
              
              <div className="mt-auto pt-8">
                <h4 className="font-semibold text-xl mb-2">Contato Direto</h4>
                <p className="mb-1">(21) 97214-5721</p>
              </div>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                  />
                </div>
                
                <div>
                  <Label className="mb-2 block">Quais os serviços sua empresa precisa? *</Label>
                  <p className="text-sm text-gray-500 mb-3">Selecione mais de um serviço se desejar</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`service-${service}`} 
                          checked={formData.services[service] || false}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label 
                          htmlFor={`service-${service}`} 
                          className="text-sm"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-blue text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'EU QUERO'} 
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
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
