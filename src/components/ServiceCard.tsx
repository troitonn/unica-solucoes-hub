import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
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
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-zinc-900 rounded-xl border border-cyan-900/30 shadow-xl overflow-hidden mb-12`}>
      
      <div className="md:w-1/2">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover brightness-75" />
        ) : (
          <div className="bg-zinc-800 w-full h-full flex items-center justify-center p-8">
            <div className="text-brand-green w-32 h-32">
              {icon}
            </div>
          </div>
        )}
      </div>
      
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center justify-center bg-zinc-800 p-3 rounded-full mb-6 border border-cyan-900/30">
            <div className="text-cyan-400">
              {icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          
          <div className="text-gray-400 mb-8">
            <p>{description}</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="border-cyan-600/50 text-cyan-400 hover:bg-cyan-900/30 hover:text-white flex items-center"
          onClick={() => {
            const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço "${title}" oferecido pela Única Soluções.`);
            window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
          }}
        >
          CONTATO VIA WHATSAPP
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
