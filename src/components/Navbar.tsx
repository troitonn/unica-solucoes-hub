
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" 
                alt="Única Soluções Logo" 
                className="h-16 w-auto" // Aumentado de h-12 para h-16
              />
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <nav className="flex space-x-8">
              <a 
                href="#servicos" 
                className={`${scrolled ? 'text-brand-green' : 'text-white'} hover:text-brand-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                Serviços
              </a>
              <a 
                href="#quemsomos" 
                className={`${scrolled ? 'text-brand-green' : 'text-white'} hover:text-brand-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                Quem Somos
              </a>
              <a 
                href="#segmentos" 
                className={`${scrolled ? 'text-brand-green' : 'text-white'} hover:text-brand-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                Segmentos
              </a>
              <a 
                href="#contato" 
                className={`${scrolled ? 'text-brand-green' : 'text-white'} hover:text-brand-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                Contato
              </a>
            </nav>
            <div className="ml-8">
              <Button 
                className="bg-gradient-to-r from-brand-green to-brand-green/90 hover:from-brand-green/90 hover:to-brand-green text-white hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() => {
                  window.open("https://wa.me/5521972145721", "_blank");
                }}
              >
                <MessageSquare size={16} /> WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-brand-green transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#servicos" 
              className={`block px-3 py-2 text-base font-medium ${scrolled ? 'text-brand-green' : 'text-white'} hover:bg-white/10 hover:text-brand-green rounded-md transition-all duration-300`}
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#quemsomos" 
              className={`block px-3 py-2 text-base font-medium ${scrolled ? 'text-brand-green' : 'text-white'} hover:bg-white/10 hover:text-brand-green rounded-md transition-all duration-300`}
              onClick={toggleMenu}
            >
              Quem Somos
            </a>
            <a 
              href="#segmentos" 
              className={`block px-3 py-2 text-base font-medium ${scrolled ? 'text-brand-green' : 'text-white'} hover:bg-white/10 hover:text-brand-green rounded-md transition-all duration-300`}
              onClick={toggleMenu}
            >
              Segmentos
            </a>
            <a 
              href="#contato" 
              className={`block px-3 py-2 text-base font-medium ${scrolled ? 'text-brand-green' : 'text-white'} hover:bg-white/10 hover:text-brand-green rounded-md transition-all duration-300`}
              onClick={toggleMenu}
            >
              Contato
            </a>
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-gradient-to-r from-brand-green to-brand-green/90 hover:from-brand-green/90 hover:to-brand-green text-white flex items-center justify-center gap-2"
                onClick={() => {
                  window.open("https://wa.me/5521972145721", "_blank");
                }}
              >
                <MessageSquare size={16} /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
