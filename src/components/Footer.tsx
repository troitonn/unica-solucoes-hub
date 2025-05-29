import { Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/90 text-white pt-16 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" alt="Única Soluções Logo" className="h-14 w-auto mb-4" />
            </div>
            <p className="text-gray-300 mb-4">
              Otimize seus processos com praticidade e segurança, garantindo mais tempo para o seu negócio. Deixe a burocracia com a gente.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Phone size={16} />
              <span>(21) 97214-5721</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Ponto Eletrônico</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Auditoria de Cartões</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Revisão Tributária</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Sistema de Cotação</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Mais Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Certificado Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Confecção de Crachás</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Saneamento Cadastral</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors duration-300 flex items-center"><span className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2"></span>Armazenamento Arq. Fiscais</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Sobre Nós</h4>
            <p className="text-gray-300 mb-6">
              A Única Soluções nasceu das necessidades dos nossos clientes. Nossos serviços atendem às empresas de vários nichos.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-sm text-gray-300">
                UNICA SOLUCOES PARA VAREJO LTDA<br />
                CNPJ: 33.254.664/0001-36
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Todos os direitos reservados | <a href="#" className="hover:text-brand-green transition-colors">Política de privacidade</a>
          </p>
          
          <p className="text-sm text-gray-400 mt-2 md:mt-0">Desenvolvido por Troiton Projects+</p>
        </div>
      </div>
    </footer>;
};
export default Footer;