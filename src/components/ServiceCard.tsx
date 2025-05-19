
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
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
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg shadow-md overflow-hidden mb-12 border border-gray-100`}>
      <div className="md:w-1/2 overflow-hidden">
        <div className="h-full bg-gray-100 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          ) : (
            <div className="bg-gray-50 w-full h-full flex items-center justify-center p-8">
              <div className="text-brand-blue/50 w-32 h-32">
                {icon}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center justify-center bg-brand-blue/10 p-3 rounded-full mb-4">
            <div className="text-brand-blue">
              {icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-brand-blue mb-4">{title}</h3>
          
          <div className="text-gray-700 mb-6">
            <p className="mb-4 leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div>
          <Button 
            variant="outline" 
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
            onClick={() => {
              // Redirect to WhatsApp with pre-filled message about the service
              const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço "${title}" oferecido pela Única Soluções.`);
              window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
            }}
          >
            CONTATO VIA WHATSAPP
            <MessageSquare className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
