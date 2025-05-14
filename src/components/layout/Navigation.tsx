import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event for changing navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-background-white shadow-md py-2' 
          : 'bg-transparent py-4'}
      `}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="https://i.imgur.com/Yr6aVwY.png" 
            alt="Kezele Prijevoz Logo" 
            className={`
              h-20 md:h-28
              transition-all duration-300
              group-hover:scale-105
            `}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Početna', path: '/' },
            { name: 'O Nama', path: '/o-nama' },
            { name: 'Kontakt', path: '/kontakt' },
            { name: 'Opći Ugovor', path: '/opci-ugovor', isSpecial: true }
          ].map((item, index) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`
                relative font-medium text-lg
                ${item.isSpecial 
                  ? (isScrolled ? 'text-secondary-gold' : 'text-background-white') 
                  : (isScrolled ? 'text-primary-red' : 'text-secondary-gold')}
                ${item.isSpecial 
                  ? 'hover:text-secondary-gold' 
                  : 'hover:text-primary-red'}
                transition-all duration-300
                animate-[fadeIn_0.7s_ease-in-out_${index * 100 + 200}ms_both]
                after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:bottom-0
                ${item.isSpecial 
                  ? 'after:bg-secondary-gold' 
                  : 'after:bg-primary-red'} 
                after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`
              block h-0.5 bg-current transition-all duration-300
              ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}
            `}></span>
            <span className={`
              block h-0.5 bg-current transition-all duration-300
              ${isMobileMenuOpen ? 'opacity-0' : ''}
            `}></span>
            <span className={`
              block h-0.5 bg-current transition-all duration-300
              ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}
            `}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          absolute top-full left-0 right-0 bg-background-white shadow-md 
          transition-all duration-300 overflow-hidden md:hidden
          ${isMobileMenuOpen ? 'max-h-80 py-4' : 'max-h-0'}
        `}
      >
        <div className="container mx-auto px-6">
          {[
            { name: 'Početna', path: '/' },
            { name: 'O Nama', path: '/o-nama' },
            { name: 'Kontakt', path: '/kontakt' },
            { name: 'Opći Ugovor', path: '/opci-ugovor', isSpecial: true }
          ].map((item, index) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`
                block py-3 
                ${item.isSpecial ? 'text-secondary-gold hover:text-primary-red' : 'text-primary-red hover:text-secondary-gold'}
                border-b border-light-gray last:border-0
                transition-all duration-300
                animate-[fadeInUp_0.5s_ease-in-out_${index * 100}ms_both]
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;