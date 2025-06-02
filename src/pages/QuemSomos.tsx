import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Target, Award, Users } from "lucide-react";
const QuemSomos = () => {
  return <div className="min-h-screen bg-brand-dark overflow-hidden">
      <div className="fixed inset-0 tech-grid-bg opacity-20 z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-24 pb-16">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="section-title text-gradient text-4xl">Quem Somos</h1>
              
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <Building className="h-8 w-8 text-brand-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Nossa História</h2>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  A Única Soluções nasceu das necessidades dos nossos clientes. Identificamos que muitas empresas enfrentavam desafios similares em suas operações diárias, desde o controle de ponto até questões tributárias complexas.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nossa missão é simplificar processos empresariais através de soluções tecnológicas inovadoras, proporcionando mais eficiência e segurança para nossos clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Nossa Missão</h3>
                  <p className="text-gray-300">
                    Fornecer soluções tecnológicas que otimizem processos empresariais com segurança e eficiência.
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Nossos Valores</h3>
                  <p className="text-gray-300">
                    Inovação, confiabilidade, transparência e compromisso com a excelência em cada solução.
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Nossa Equipe</h3>
                  <p className="text-gray-300">
                    Profissionais especializados dedicados a entregar as melhores soluções para seu negócio.
                  </p>
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-brand-accent/10 to-transparent p-8 rounded-2xl border border-brand-accent/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-gradient mb-4">Mais de 200 empresas confiam em nós</h3>
                <p className="text-lg text-gray-300">
                  Se você reconhece a necessidade de reavaliar rotinas dentro da sua organização, deseja manter uma relação mais profissional com seus funcionários e quer garantir que os setores administrativo e financeiro estejam equipados com as melhores ferramentas do mercado, a Única Soluções é para você!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>;
};
export default QuemSomos;