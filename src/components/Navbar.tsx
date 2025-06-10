import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, Instagram, Linkedin, Facebook } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Se é uma âncora, navegar para a página inicial primeiro se não estiver nela
      if (location.pathname !== '/') {
        navigate('/');
        // Aguardar um pouco para a página carregar antes de fazer o scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // Se já está na página inicial, fazer scroll direto
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    } else {
      // Navegação normal para outras páginas - sempre rolar para o topo
      navigate(href);
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
  };
  const navItems = [{
    name: "Início",
    href: "/"
  }, {
    name: "Quem Somos",
    href: "/quem-somos"
  }, {
    name: "Serviços",
    href: "/servicos"
  }, {
    name: "Segmentos",
    href: "/segmentos"
  }, {
    name: "Contato",
    href: "/contatos"
  }];
  return <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'modern-navbar py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={() => handleNavigation('/')} className="flex-shrink-0 group">
                <img src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" alt="Única Soluções Logo" className="h-12 w-auto transition-all duration-300 group-hover:scale-110" />
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <nav className="flex space-x-8">
                {navItems.map(item => <button key={item.name} onClick={() => handleNavigation(item.href)} className="nav-link">
                    {item.name}
                  </button>)}
              </nav>
              
              <Button className="btn-primary ml-4" onClick={() => window.open("https://wa.me/5521972145721", "_blank")}>
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-brand-accent transition-colors p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isOpen && <div className="md:hidden mt-4 pb-4 border-t border-brand-accent/20">
              <div className="px-2 pt-4 space-y-2">
                {navItems.map((item, index) => <button key={item.name} onClick={() => handleNavigation(item.href)} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-brand-accent hover:bg-brand-accent/5 rounded-lg transition-all duration-300" style={{
              opacity: 0,
              animation: `fade-in 0.3s ease-out forwards ${index * 0.1}s`
            }}>
                    {item.name}
                  </button>)}
                
                <div className="px-3 py-2" style={{
              opacity: 0,
              animation: `fade-in 0.3s ease-out forwards 0.3s`
            }}>
                  <Button className="w-full btn-primary" onClick={() => {
                window.open("https://wa.me/5521972145721", "_blank");
                setIsOpen(false);
              }}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
                
                {/* Redes Sociais - Mobile */}
                <div className="px-3 py-4 flex justify-center space-x-4" style={{
              opacity: 0,
              animation: `fade-in 0.3s ease-out forwards 0.4s`
            }}>
                  <a href="https://www.instagram.com/somosaunica/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                    <Instagram size={16} />
                  </a>
                  <a href="https://www.linkedin.com/company/somosaunica" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                    <Linkedin size={16} />
                  </a>
                  <a href="https://www.facebook.com/somosaunica" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition-colors duration-300 p-2 bg-white/10 rounded-full hover:bg-white/20">
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>}
        </div>
      </header>

      {/* Redes Sociais - Desktop - Fora do cabeçalho */}
      <div className="fixed top-20 right-4 z-40 hidden md:flex flex-col space-y-3">
        <a href="https://www.instagram.com/somosaunica/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition-colors duration-300 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/10">
          <Instagram size={16} />
        </a>
        <a href="https://www.linkedin.com/company/somosaunica" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition-colors duration-300 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/10">
          <Linkedin size={16} />
        </a>
        <a href="https://www.facebook.com/somosaunica" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-green transition-colors duration-300 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/10">
          <Facebook size={16} />
        </a>
      </div>
    </>;
};
export default Navbar;