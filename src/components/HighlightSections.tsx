
import { AlertTriangle, Clock, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HighlightSections = () => {
  const highlights = [{
    icon: <AlertTriangle className="h-6 w-6" />,
    emoji: "📊",
    title: "Confiança demais sem validação é ilusão",
    description: "Se você ainda não auditou sua própria operação, comece agora – pelo básico: seu Certificado Digital.",
    cta: "Audite sua operação",
    gradient: "from-yellow-500/10 to-orange-500/10",
    borderColor: "border-yellow-500/20"
  }, {
    icon: <Clock className="h-6 w-6" />,
    emoji: "⏳",
    title: "Você gasta tempo tentando resolver sozinho",
    description: "Enquanto outros resolvem em minutos. Emita seu Certificado Digital com quem entende. Rápido, 100% online e sem stress.",
    cta: "Emitir certificado",
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20"
  }, {
    icon: <CreditCard className="h-6 w-6" />,
    emoji: "💳",
    title: "A taxa do seu cartão é mesmo a que você contratou?",
    description: "Ou você só aceita o que vem na fatura? Você pode estar perdendo dinheiro todo mês – e nem sabe disso. Nossa auditoria identifica cobranças indevidas e taxas incorretas.",
    cta: "Auditar cartões",
    gradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20"
  }];

  return (
    <section className="py-20 bg-[#01222e] relative">
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cada solução é um{" "}
            <span className="bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent">
              ponto de virada
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Identificamos os principais desafios dos nossos clientes e criamos soluções específicas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className={`relative p-6 bg-gradient-to-br ${highlight.gradient} backdrop-blur-md rounded-2xl border ${highlight.borderColor} hover:border-[#18d7af]/40 transition-all duration-300 hover:transform hover:scale-105 group`}
              style={{
                opacity: 0,
                animation: `fade-in 0.8s ease-out forwards ${index * 0.2}s`
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{highlight.emoji}</div>
                <div className="text-[#18d7af]">
                  {highlight.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                {highlight.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {highlight.description}
              </p>
              
              <Button 
                className="w-full bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-semibold rounded-full group-hover:shadow-lg transition-all duration-300" 
                onClick={() => {
                  const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${highlight.title}`);
                  window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                }}
              >
                {highlight.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSections;
