
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Shield, Check, Star, Users, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center pt-20 pb-16 relative">
      {/* Elementos de fundo elegantes */}
      <div className="absolute inset-0 elegant-grid-bg opacity-30"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl animate-float-reverse"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo principal */}
          <div className="space-y-10 animate-slide-in">
            {/* Badge inovador */}
            <div className="flex items-center gap-6 mb-10">
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-glass-gradient border border-brand-gold/30 text-brand-navy backdrop-blur-sm shadow-gold-glow">
                <Award className="h-6 w-6 mr-3 text-brand-gold floating-element" />
                <span className="font-semibold text-lg">Inovação em cada solução</span>
              </div>
            </div>

            {/* Título impactante com nova mensagem */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-brand-navy font-serif">Somos a</span>
                <span className="block text-shimmer font-serif text-8xl md:text-9xl lg:text-[10rem] mt-4">
                  Única
                </span>
              </h1>
              
              <div className="bg-glass-gradient backdrop-blur-md p-8 rounded-3xl border border-brand-gold/20 shadow-elegant">
                <p className="text-2xl md:text-3xl text-brand-navy leading-relaxed font-serif">
                  Uma empresa que <span className="text-brand-gold font-bold">nasceu por você e para você!</span>
                </p>
              </div>
            </div>

            {/* Proposta de valor principal */}
            <div className="space-y-8">
              <div className="floating-card bg-gradient-to-r from-brand-navy/5 to-brand-gold/5">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-4">
                  Otimize seus processos com praticidade e segurança
                </h2>
                <p className="text-xl text-brand-gray leading-relaxed">
                  <span className="text-brand-gold font-bold">Garantindo mais tempo para o seu negócio!</span> Deixe a burocracia com a gente.
                </p>
              </div>
              
              <div className="text-center py-8">
                <h2 className="text-4xl md:text-5xl font-serif luxury-text mb-4">
                  Tem coisas que só a Única faz!
                </h2>
                <div className="flex items-center justify-center gap-3 text-brand-gold">
                  <Star className="h-6 w-6 animate-pulse" />
                  <span className="font-semibold text-lg">Mais de 500 empresas confiam em nós</span>
                  <Star className="h-6 w-6 animate-pulse" />
                </div>
              </div>

              {/* Benefícios em cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card group">
                  <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <Clock className="h-8 w-8 text-brand-navy group-hover:text-brand-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-navy mb-2">Economia de Tempo</h3>
                  <p className="text-brand-gray">Processos otimizados e automatizados</p>
                </div>
                
                <div className="glass-card group">
                  <div className="w-16 h-16 rounded-full bg-brand-navy/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <Shield className="h-8 w-8 text-brand-navy group-hover:text-brand-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-navy mb-2">100% Seguro</h3>
                  <p className="text-brand-gray">Proteção e conformidade garantidas</p>
                </div>
              </div>
            </div>

            {/* CTAs principais */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button 
                size="lg" 
                className="btn-primary group text-xl px-10 py-5 font-serif"
                onClick={() => {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Descobrir Soluções
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                className="btn-gold group text-xl px-10 py-5 font-serif"
                onClick={() => {
                  window.open("https://wa.me/5521972145721", "_blank");
                }}
              >
                <MessageSquare className="mr-3 h-6 w-6" /> 
                Falar Conosco
              </Button>
            </div>
          </div>
          
          {/* Área visual dos serviços modernizada */}
          <div className="animate-slide-in relative" style={{ animationDelay: '0.3s' }}>
            {/* Card principal de serviços */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold-gradient rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative floating-card bg-gradient-to-br from-brand-white to-brand-white/80 animate-pulse-glow">
                <div className="text-center mb-10">
                  <h3 className="text-4xl font-serif luxury-text mb-4">
                    Nossos Serviços
                  </h3>
                  <p className="text-brand-gray text-lg">Soluções completas para seu negócio</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "PONTO ELETRÔNICO", icon: "⏰" },
                    { name: "AUDITORIA DE CARTÕES", icon: "💳" }, 
                    { name: "REVISÃO TRIBUTÁRIA", icon: "📊" },
                    { name: "SISTEMA DE COTAÇÃO", icon: "💰" },
                    { name: "CERTIFICADO DIGITAL", icon: "🔐" },
                    { name: "CONFECÇÃO DE CRACHÁS", icon: "🆔" },
                    { name: "SANEAMENTO CADASTRAL", icon: "📋" },
                    { name: "ARMAZENAMENTO ARQ. FISCAIS", icon: "📁" }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="group p-6 bg-glass-gradient border border-brand-navy/10 rounded-2xl hover:border-brand-gold hover:bg-brand-gold/5 hover:shadow-gold-glow elegant-hover cursor-pointer"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        opacity: 0,
                        animation: `fade-in 0.6s ease-out forwards ${index * 0.1}s`
                      }}
                      onClick={() => {
                        const message = encodeURIComponent(`Olá! Quero saber mais sobre: ${service.name}`);
                        window.open(`https://wa.me/5521972145721?text=${message}`, "_blank");
                      }}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <div className="text-sm font-semibold text-brand-navy group-hover:text-brand-gold transition-colors leading-tight">
                          {service.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <Button 
                    className="btn-primary w-full group text-lg font-serif"
                    onClick={() => {
                      window.open("https://wa.me/5521972145721", "_blank");
                    }}
                  >
                    Ver Todos os Serviços
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-brand-accent/20 rounded-full blur-2xl animate-float-reverse"></div>
          </div>
        </div>
        
        {/* Indicadores de conquistas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card text-center group">
            <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:text-shimmer transition-all">500+</div>
            <div className="text-brand-gray font-medium">Clientes Satisfeitos</div>
          </div>
          <div className="glass-card text-center group">
            <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:text-shimmer transition-all">24h</div>
            <div className="text-brand-gray font-medium">Suporte Disponível</div>
          </div>
          <div className="glass-card text-center group">
            <div className="text-5xl font-bold text-brand-gold mb-3 group-hover:text-shimmer transition-all">100%</div>
            <div className="text-brand-gray font-medium">Processos Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
