
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-green">Única</span> Soluções
            </h3>
            <p className="text-gray-300 mb-4">
              Otimize seus processos com praticidade e segurança, garantindo mais tempo para o seu negócio. Deixe a burocracia com a gente.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone size={16} />
              <span>(21) 97214-5721</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Ponto Eletrônico</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Auditoria de Cartões</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Revisão Tributária</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Sistema de Cotação</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Mais Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Certificado Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Confecção de Crachás</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Saneamento Cadastral</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Armazenamento Arq. Fiscais</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre Nós</h4>
            <p className="text-gray-300 mb-4">
              A Única Soluções nasceu das necessidades dos nossos clientes. Nossos serviços atendem às empresas de vários nichos.
            </p>
            <div className="text-sm text-gray-400">
              UNICA SOLUCOES PARA VAREJO LTDA<br />
              CNPJ: 33.254.664/0001-36
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Todos os direitos reservados | <a href="#" className="hover:text-brand-green">Política de privacidade</a>
          </p>
          
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Desenvolvido por VMK Digital | Agência de Marketing Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
