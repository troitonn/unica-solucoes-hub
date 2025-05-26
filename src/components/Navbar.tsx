
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Serviços", href: "#servicos" },
    { name: "Quem Somos", href: "#quemsomos" },
    { name: "Segmentos", href: "#segmentos" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'elegant-navbar py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 group">
              <img 
                src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" 
                alt="Única Soluções Logo" 
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <nav className="flex space-x-10">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="nav-link text-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <Button 
              className="btn-gold ml-6 font-serif"
              onClick={() => window.open("https://wa.me/5521972145721", "_blank")}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gray hover:text-brand-navy transition-colors p-3 rounded-lg hover:bg-brand-gold/10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-brand-navy/20">
            <div className="px-2 pt-6 space-y-3">
              {navItems.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block px-4 py-3 text-brand-gray hover:text-brand-navy hover:bg-brand-gold/10 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    opacity: 0, 
                    animation: `fade-in 0.3s ease-out forwards ${index * 0.1}s` 
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3" style={{ opacity: 0, animation: `fade-in 0.3s ease-out forwards 0.4s` }}>
                <Button 
                  className="w-full btn-gold font-serif"
                  onClick={() => {
                    window.open("https://wa.me/5521972145721", "_blank");
                    setIsOpen(false);
                  }}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
