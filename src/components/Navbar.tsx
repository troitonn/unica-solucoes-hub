
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" 
                alt="Única Soluções Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <nav className="flex space-x-8">
              <a href="#servicos" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-green transition-colors duration-300`}>
                Serviços
              </a>
              <a href="#quemsomos" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-green transition-colors duration-300`}>
                Quem Somos
              </a>
              <a href="#segmentos" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-green transition-colors duration-300`}>
                Segmentos
              </a>
              <a href="#contato" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-green transition-colors duration-300`}>
                Contato
              </a>
            </nav>
            <div className="ml-8">
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                (21) 97214-5721
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button"
              onClick={toggleMenu}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-600' : 'text-white'} hover:text-brand-green`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#servicos" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#quemsomos" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green"
              onClick={toggleMenu}
            >
              Quem Somos
            </a>
            <a 
              href="#segmentos" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green"
              onClick={toggleMenu}
            >
              Segmentos
            </a>
            <a 
              href="#contato" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white">
                (21) 97214-5721
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
