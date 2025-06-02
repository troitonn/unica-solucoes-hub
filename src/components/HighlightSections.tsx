
import { AlertTriangle, Clock, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HighlightSections = () => {
  const highlights = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Confiança demais sem validação é ilusão",
      description: "Se você ainda não auditou sua própria operação, comece agora – pelo básico: seu Certificado Digital.",
      cta: "Audite sua operação",
      gradient: "from-yellow-400/20 to-orange-400/20",
      borderColor: "border-yellow-400/30",
      iconColor: "text-yellow-400"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Você gasta tempo tentando resolver sozinho",
      description: "Enquanto outros resolvem em minutos. Emita seu Certificado Digital com quem entende. Rápido, 100% online e sem stress.",
      cta: "Emitir certificado",
      gradient: "from-blue-400/20 to-cyan-400/20",
      borderColor: "border-blue-400/30",
      iconColor: "text-blue-400"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "A taxa do seu cartão é mesmo a que você contratou?",
      description: "Ou você só aceita o que vem na fatura? Você pode estar perdendo dinheiro todo mês – e nem sabe disso. Nossa auditoria identifica cobranças indevidas e taxas incorretas.",
      cta: "Auditar cartões",
      gradient: "from-[#18d7af]/20 to-[#20c997]/20",
      borderColor: "border-[#18d7af]/30",
      iconColor: "text-[#18d7af]"
    }
  ];

  return (
    <section className="py-20 relative bg-[#01222e]">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cada solução é um{" "}
            <span className="bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent">
              ponto de virada
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Identificamos os principais desafios dos nossos clientes e criamos soluções específicas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              style={{
                opacity: 0,
                animation: `fade-in 0.8s ease-out forwards ${index * 0.2}s`
              }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${highlight.gradient} backdrop-blur-sm border ${highlight.borderColor} hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#18d7af]/20`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#01222e]/50 ${highlight.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#18d7af] transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-300 mb-8 text-base leading-relaxed">
                  {highlight.description}
                </p>
                
                <Button 
                  className="w-full bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-semibold rounded-xl group-hover:shadow-lg transition-all duration-300 h-12"
                  onClick={() => {
                    const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${highlight.title}`);
                    window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                  }}
                >
                  {highlight.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSections;
