import { Button } from "@/components/ui/button";
import { CreditCard, TrendingDown, CheckCircle, AlertCircle } from "lucide-react";
const AuditoriaCartaoSection = () => {
  return <section className="py-16 relative bg-transparent">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem à esquerda */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#18d7af]/20 to-[#20c997]/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" alt="Auditoria de Cartões - Análise de Taxas" className="relative z-10 w-full max-w-md h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Conteúdo à direita */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Auditoria de{" "}
                <span className="bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent"> Cartões</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#18d7af]">
                Pare de Pagar Taxas Abusivas
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubra cobranças indevidas e recupere o dinheiro que você não deveria ter pago. Nossa auditoria especializada identifica irregularidades em suas taxas de cartão.
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Redução de Custos</h4>
                  <p className="text-sm text-gray-300">Até 30% de economia</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Análise Completa</h4>
                  <p className="text-sm text-gray-300">Todas as operadoras</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Identificação de Erros</h4>
                  <p className="text-sm text-gray-300">Cobranças indevidas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Recuperação</h4>
                  <p className="text-sm text-gray-300">Valores pagos a mais</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" onClick={() => {
              const message = encodeURIComponent("Olá! Quero fazer uma auditoria das taxas dos meus cartões!");
              window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
            }}>
                QUERO AUDITAR MEUS CARTÕES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AuditoriaCartaoSection;