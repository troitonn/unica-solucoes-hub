import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Shield, Users } from "lucide-react";
const PontoEletronicoSection = () => {
  return <section className="py-16 relative bg-transparent">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Automatize Seu{" "}
                <span className="bg-gradient-to-r from-[#18d7af] to-[#20c997] bg-clip-text text-transparent">
                  Controle de Ponto
                </span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#18d7af]">
                Economize Tempo e Dinheiro
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Elimine de vez as dores de cabeça com o fechamento de folha e transforme a gestão da sua empresa.
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Controle Total</h4>
                  <p className="text-sm text-gray-300">Horários precisos</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Relatórios</h4>
                  <p className="text-sm text-gray-300">Dados em tempo real</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">100% Seguro</h4>
                  <p className="text-sm text-gray-300">Dados protegidos</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-[#18d7af]/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18d7af]/30 to-[#20c997]/30 flex items-center justify-center">
                  <Users className="h-5 w-5 text-[#18d7af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Fácil Uso</h4>
                  <p className="text-sm text-gray-300">Interface intuitiva</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" className="bg-gradient-to-r from-[#18d7af] to-[#20c997] hover:from-[#15c29e] hover:to-[#1bb38a] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" onClick={() => {
              const message = encodeURIComponent("Olá! Quero saber mais sobre o Ponto Eletrônico da Única Soluções!");
              window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
            }}>
                QUERO MEU PONTO ELETRÔNICO
              </Button>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#18d7af]/20 to-[#20c997]/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <img src="/lovable-uploads/6c909e8a-dc6d-41ff-a03d-578cfdd8c690.png" alt="Ponto Eletrônico - Controle iD" className="relative z-10 max-w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PontoEletronicoSection;