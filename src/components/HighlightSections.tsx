
import { AlertTriangle, Clock, CreditCard, FileKey } from "lucide-react";
import { Button } from "@/components/ui/button";

const HighlightSections = () => {
  const highlights = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      emoji: "📊",
      title: "Confiança demais sem validação é ilusão",
      description: "Se você ainda não auditou sua própria operação, comece agora – pelo básico: seu Certificado Digital.",
      cta: "Audite sua operação",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      emoji: "⏳",
      title: "Você gasta tempo tentando resolver sozinho",
      description: "Enquanto outros resolvem em minutos. Emita seu Certificado Digital com quem entende. Rápido, 100% online e sem stress.",
      cta: "Emitir certificado",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      emoji: "💳",
      title: "A taxa do seu cartão é mesmo a que você contratou?",
      description: "Ou você só aceita o que vem na fatura? Você pode estar perdendo dinheiro todo mês – e nem sabe disso. Nossa auditoria identifica cobranças indevidas e taxas incorretas.",
      cta: "Auditar cartões",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient mb-6">
            Problemas que você pode estar enfrentando
          </h2>
          <p className="section-subtitle">
            Identificamos os principais desafios dos nossos clientes e criamos soluções específicas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`tech-card bg-gradient-to-br ${highlight.color} border ${highlight.borderColor} hover:shadow-glow transform hover:-translate-y-2 transition-all duration-500`}
              style={{ 
                opacity: 0,
                animation: `fade-in 0.8s ease-out forwards ${index * 0.2}s`
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{highlight.emoji}</div>
                  <div className="text-brand-accent">
                    {highlight.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                
                <Button 
                  className="btn-primary w-full group"
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
