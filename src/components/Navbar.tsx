
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-brand-blue tracking-tight">
                <span className="text-brand-green">Única</span> Soluções
              </h1>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <nav className="flex space-x-8">
              <a href="#servicos" className="text-gray-700 hover:text-brand-green transition-colors duration-300">
                Serviços
              </a>
              <a href="#quemsomos" className="text-gray-700 hover:text-brand-green transition-colors duration-300">
                Quem Somos
              </a>
              <a href="#segmentos" className="text-gray-700 hover:text-brand-green transition-colors duration-300">
                Segmentos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-brand-green transition-colors duration-300">
                Contato
              </a>
            </nav>
            <div className="ml-8">
              <Button className="bg-brand-blue hover:bg-brand-green text-white">
                (21) 97214-5721
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-brand-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
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
              <Button className="w-full bg-brand-blue hover:bg-brand-green text-white">
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
