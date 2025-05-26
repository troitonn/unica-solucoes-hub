import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Check, Star, Users, Clock } from "lucide-react";
const Hero = () => {
  return <section className="hero-section min-h-screen flex items-center pt-20 pb-16 relative">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid-bg opacity-20"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo principal */}
          <div className="space-y-8 animate-slide-in my-0 py-0 rounded">
            {/* Badge inovador */}
            <div className="flex items-center gap-4 mb-0 py-0 my-0\n">
              <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-brand-accent/20 to-transparent border border-brand-accent/30 text-brand-accent backdrop-blur-sm rounded-full">
                <Zap className="h-5 w-5 mr-2 floating-icon" />
                <span className="font-semibold">Inovação em cada solução</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                
                
              </div>
            </div>

            {/* Título impactante */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white text-center py-0 my-0">Somos a</span>
                <span className="block text-gradient text-glow text-center">Única</span>
                <span className="block text-white text-4xl md:text-5xl lg:text-6xl mt-2 text-center">
                  que você precisa!
                </span>
              </h1>
              
              <div className="bg-gradient-to-r from-brand-accent/10 to-transparent p-6 rounded-2xl border border-brand-accent/20">
                <p className="text-xl md:text-2xl text-white leading-relaxed text-center">
                  Uma empresa que <span className="text-brand-accent font-bold">nasceu por você e para você!</span>
                </p>
              </div>
            </div>

            {/* Proposta de valor */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-brand-accent/5 rounded-xl border border-brand-accent/10">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Economia de Tempo</h3>
                    <p className="text-sm text-gray-300">Processos otimizados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-brand-accent/5 rounded-xl border border-brand-accent/10">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">100% Seguro</h3>
                    <p className="text-sm text-gray-300">Proteção garantida</p>
                  </div>
                </div>
              </div>
              
              
              
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  Tem coisas que só a Única faz!
                </h2>
                <div className="flex items-center justify-center gap-2 text-brand-accent">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Mais de 500 empresas confiam em nós</span>
                </div>
              </div>
            </div>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="btn-primary group text-lg px-8 py-4" onClick={() => {
              document.getElementById('servicos')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Descobrir Soluções
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" className="btn-outline group text-lg px-8 py-4" onClick={() => {
              window.open("https://wa.me/5521972145721", "_blank");
            }}>
                <MessageSquare className="mr-2 h-5 w-5" /> 
                Falar Conosco
              </Button>
            </div>
          </div>
          
          {/* Área visual dos serviços modernizada */}
          <div className="animate-slide-in relative" style={{
          animationDelay: '0.3s'
        }}>
            {/* Card principal de serviços */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative tech-card p-8 pulse-glow bg-gradient-to-br from-brand-accent/10 to-brand-dark/80">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gradient mb-2">
                    Nossos Serviços
                  </h3>
                  <p className="text-gray-300">Soluções completas para seu negócio</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {[{
                  name: "PONTO ELETRÔNICO",
                  icon: "⏰"
                }, {
                  name: "AUDITORIA DE CARTÕES",
                  icon: "💳"
                }, {
                  name: "REVISÃO TRIBUTÁRIA",
                  icon: "📊"
                }, {
                  name: "SISTEMA DE COTAÇÃO",
                  icon: "💰"
                }, {
                  name: "CERTIFICADO DIGITAL",
                  icon: "🔐"
                }, {
                  name: "CONFECÇÃO DE CRACHÁS",
                  icon: "🆔"
                }, {
                  name: "SANEAMENTO CADASTRAL",
                  icon: "📋"
                }, {
                  name: "ARMAZENAMENTO ARQ. FISCAIS",
                  icon: "📁"
                }].map((service, index) => <div key={index} className="group p-4 bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-xl hover:border-brand-accent/40 hover:bg-brand-accent/5 transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  animation: `fade-in 0.6s ease-out forwards ${index * 0.1}s`
                }} onClick={() => {
                  const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${service.name}`);
                  window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                }}>
                      <div className="text-center">
                        <div className="text-2xl mb-2">{service.icon}</div>
                        <div className="text-xs font-semibold text-white group-hover:text-brand-accent transition-colors">
                          {service.name}
                        </div>
                      </div>
                    </div>)}
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="btn-primary w-full group" onClick={() => {
                  window.open("https://wa.me/5521972145721", "_blank");
                }}>
                    Ver Todos os Serviços
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Indicadores de conquistas */}
        
      </div>
    </section>;
};
export default Hero;