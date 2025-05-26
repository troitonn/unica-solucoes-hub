
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine if navbar should change style
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
    <>
      {/* Scroll progress indicator - comes from Index.tsx now */}
      
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'tech-navbar-scrolled backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 transition-all duration-300 transform hover:scale-105 relative group">
                <img 
                  src="/lovable-uploads/36af4156-5046-46f9-bcf0-89cf8ceff89b.png" 
                  alt="Única Soluções Logo" 
                  className="h-16 w-auto" 
                />
                {/* Tech-inspired glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-green/0 to-cyan-500/0 filter blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 -z-10"></div>
              </a>
              {!scrolled && (
                <div className="hidden md:flex items-center ml-3 tech-badge">
                  <Zap className="h-3 w-3 mr-1 text-brand-green" />
                  <span className="text-xs font-medium text-white">TECNOLOGIA</span>
                </div>
              )}
            </div>
            
            <div className="hidden md:flex md:items-center">
              <nav className="flex space-x-8">
                {[
                  { name: "Serviços", href: "#servicos" },
                  { name: "Quem Somos", href: "#quemsomos" },
                  { name: "Segmentos", href: "#segmentos" },
                  { name: "Contato", href: "#contato" }
                ].map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className={`
                      ${scrolled ? 'text-white' : 'text-white'} 
                      hover:text-cyan-400 transition-all duration-300 
                      tech-nav-link relative px-1 py-1 text-sm font-medium tracking-wide
                    `}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="ml-8">
                <Button 
                  className="tech-button from-brand-green to-cyan-500 hover:opacity-90 text-white hover:shadow-lg hover:shadow-brand-green/30 transition-all duration-500 flex items-center gap-2 tracking-wide text-sm"
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
                className={`p-2 rounded-md ${scrolled ? 'text-white' : 'text-white'} hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu with tech-inspired design */}
        {isOpen && (
          <div className="md:hidden tech-mobile-menu animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: "Serviços", href: "#servicos" },
                { name: "Quem Somos", href: "#quemsomos" },
                { name: "Segmentos", href: "#segmentos" },
                { name: "Contato", href: "#contato" }
              ].map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className={`
                    block px-3 py-2 text-base font-medium text-white
                    hover:bg-gradient-to-r hover:from-brand-green/10 hover:to-cyan-500/10
                    border border-transparent hover:border-cyan-900/30 rounded-md
                    transition-all duration-300
                  `}
                  onClick={toggleMenu}
                  style={{ 
                    opacity: 0, 
                    animation: `fade-in 0.3s ease-out forwards ${index * 0.1}s` 
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2" style={{ opacity: 0, animation: `fade-in 0.3s ease-out forwards 0.4s` }}>
                <Button 
                  className="w-full tech-button bg-gradient-to-r from-brand-green to-cyan-500 text-white flex items-center justify-center gap-2"
                  onClick={() => {
                    window.open("https://wa.me/5521972145721", "_blank");
                    toggleMenu();
                  }}
                >
                  <MessageSquare size={16} /> WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
