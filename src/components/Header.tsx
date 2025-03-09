
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "bg-black/80 backdrop-blur-sm py-2 shadow-md" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold pixel-text">TON BAKU</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text text-sm">
            Главная
          </Link>
          <Link to="/about" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text text-sm">
            О нас
          </Link>
          <Link to="/experience" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text text-sm">
            Опыт
          </Link>
          <Link to="/projects" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text text-sm">
            Проекты
          </Link>
          <Link to="/contact" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text text-sm">
            Контакты
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm w-full py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text">
              Главная
            </Link>
            <Link to="/about" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text">
              О нас
            </Link>
            <Link to="/experience" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text">
              Опыт
            </Link>
            <Link to="/projects" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text">
              Проекты
            </Link>
            <Link to="/contact" className="text-white font-medium hover:text-gray-300 transition-colors pixel-text">
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
