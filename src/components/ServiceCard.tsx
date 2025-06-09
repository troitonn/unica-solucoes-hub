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

const ServiceCard = ({
  title,
  description,
  icon,
  imageUrl,
  isReversed = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`min-h-[400px] flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-cyan-900/30 shadow-xl overflow-hidden mb-12`}
    >
      {/* Imagem ou Ícone */}
      <div className="relative md:w-1/2 aspect-[4/3] bg-zinc-800">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-transparent to-brand-blue/50 mix-blend-overlay z-10" />
            <div className="absolute inset-0 bg-tech-pattern opacity-10 z-20" />
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full p-8 text-brand-green text-6xl">
            {icon}
          </div>
        )}
        {/* Tech corner accents */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-green/30 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-brand-green/30 rounded-bl-lg"></div>
      </div>

      {/* Conteúdo do Card */}
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between relative backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-brand-blue/20 to-black p-3 rounded-full mb-6 border border-cyan-900/30">
            <div className="text-cyan-400">{icon}</div>
          </div>

          <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent mb-4 tracking-tight">
            {title}
          </h3>

          <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>
        </div>

        <div className="relative z-10">
          <Button
            variant="outline"
            className="border-cyan-600/50 text-cyan-400 hover:bg-cyan-900/30 hover:text-white group transition-all duration-300 flex items-center"
            onClick={() => {
              const message = encodeURIComponent(
                `Olá! Gostaria de saber mais sobre o serviço "${title}" oferecido pela Única Soluções.`
              );
              window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
            }}
          >
            CONTATO VIA WHATSAPP
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Circuito decorativo */}
        <div className="absolute bottom-2 right-2 w-24 h-24 pointer-events-none opacity-30">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M10,50 L40,50 L40,20 L70,20 L70,80 L90,80"
              stroke="currentColor"
              strokeWidth="1"
              className="text-cyan-500"
            />
            <circle
              cx="90"
              cy="80"
              r="3"
              fill="currentColor"
              className="text-brand-green"
            />
            <circle
              cx="10"
              cy="50"
              r="3"
              fill="currentColor"
              className="text-brand-green"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
