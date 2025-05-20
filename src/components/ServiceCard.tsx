
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl?: string;
  isReversed?: boolean;
}

const ServiceCard = ({ title, description, icon, imageUrl, isReversed = false }: ServiceCardProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-xl shadow-lg overflow-hidden mb-12 hover-lift`}>
      <div className="md:w-1/2 overflow-hidden">
        <div className="h-full bg-gray-200 flex items-center justify-center transform transition-transform duration-700 hover:scale-105">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="bg-brand-blue/5 w-full h-full flex items-center justify-center p-8">
              <div className="text-brand-blue/30 w-32 h-32">
                {icon}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 p-3 rounded-full mb-4 shadow-sm">
            <div className="text-brand-blue">
              {icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-brand-blue mb-4">{title}</h3>
          
          <div className="text-gray-600 mb-6">
            <p className="mb-4 leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div>
          <Button 
            variant="outline" 
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white group transition-all duration-300"
            onClick={() => {
              // Redirect to WhatsApp with pre-filled message about the service
              const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço "${title}" oferecido pela Única Soluções.`);
              window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
            }}
          >
            CONTATO VIA WHATSAPP
            <MessageSquare className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
