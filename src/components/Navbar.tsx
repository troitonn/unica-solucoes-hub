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
    href: "#segmentos"
  }, {
    name: "Contato",
    href: "#contato"
  }];
  return <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'modern-navbar py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 group">
              <img src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" alt="Única Soluções Logo" className="h-12 w-auto transition-all duration-300 group-hover:scale-130" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <nav className="flex space-x-8">
              {navItems.map(item => <a key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </a>)}
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
              {navItems.map((item, index) => <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-300 hover:text-brand-accent hover:bg-brand-accent/5 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)} style={{
            opacity: 0,
            animation: `fade-in 0.3s ease-out forwards ${index * 0.1}s`
          }}>
                  {item.name}
                </a>)}
              <div className="px-3 py-2" style={{
            opacity: 0,
            animation: `fade-in 0.3s ease-out forwards 0.4s`
          }}>
                <Button className="w-full btn-primary" onClick={() => {
              window.open("https://wa.me/5521972145721", "_blank");
              setIsOpen(false);
            }}>
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Navbar;