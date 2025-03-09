
import { Link } from "react-router-dom";
import { Globe, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TON BAKU</h3>
            <p className="text-gray-300 mb-4">
              Делимся опытом и знаниями о блокчейне TON и создаем инновационные проекты.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-300 hover:text-white transition-colors">
                  Опыт
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Связаться с нами</h4>
            <div className="space-y-3">
              <a 
                href="https://t.me/tonbakuhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={18} />
                <span>Telegram</span>
              </a>
              <a 
                href="mailto:tonbakuhub@gmail.com
" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>tonbakuhub@gmail.com
                </span>
              </a>
              <a 
                href="https://tonbaku.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Globe size={18} />
                <span>tonbaku.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TON Baku. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
