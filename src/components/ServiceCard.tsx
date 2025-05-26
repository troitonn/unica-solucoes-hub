
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronRight } from "lucide-react";
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
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-cyan-900/30 shadow-xl shadow-cyan-900/10 overflow-hidden mb-12 transform transition-all duration-500 hover:shadow-cyan-800/20 tech-card-glow`}>
      <div className="md:w-1/2 overflow-hidden">
        <div className="h-full flex items-center justify-center transition-transform duration-700 hover:scale-105 relative">
          {imageUrl ? (
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-transparent to-brand-blue/50 mix-blend-overlay z-10"></div>
              <img src={imageUrl} alt={title} className="w-full h-full object-cover filter brightness-75" />
              {/* Tech overlay pattern */}
              <div className="absolute inset-0 bg-tech-pattern opacity-10 z-20"></div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-zinc-900 to-brand-blue/20 w-full h-full flex items-center justify-center p-8">
              <div className="text-brand-green w-32 h-32 tech-icon-glow">
                {icon}
              </div>
            </div>
          )}
          {/* Tech-inspired corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-green/30 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-brand-green/30 rounded-bl-lg"></div>
        </div>
      </div>
      
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm relative">
        {/* Tech decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl"></div>

        <div className="relative">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-black p-3 rounded-full mb-6 shadow-sm border border-cyan-900/30">
            <div className="text-cyan-400">
              {icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent mb-4 tracking-tight">{title}</h3>
          
          <div className="text-gray-400 mb-8">
            <p className="leading-relaxed">{description}</p>
          </div>
        </div>
        
        <div className="relative z-10">
          <Button 
            variant="outline" 
            className="border-cyan-600/50 text-cyan-400 hover:bg-cyan-900/30 hover:text-white group transition-all duration-300 flex items-center"
            onClick={() => {
              // Redirect to WhatsApp with pre-filled message about the service
              const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço "${title}" oferecido pela Única Soluções.`);
              window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
            }}
          >
            CONTATO VIA WHATSAPP
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Tech circuit lines */}
        <div className="absolute bottom-2 right-2 w-24 h-24 pointer-events-none opacity-30">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10,50 L40,50 L40,20 L70,20 L70,80 L90,80" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
            <circle cx="90" cy="80" r="3" fill="currentColor" className="text-brand-green" />
            <circle cx="10" cy="50" r="3" fill="currentColor" className="text-brand-green" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
