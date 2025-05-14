import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-gray py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Top Section - Logo and social media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-600 pb-8">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <img 
              src="https://i.imgur.com/Yr6aVwY.png" 
              alt="Kezele Prijevoz Logo" 
              className="h-20 mb-2 animate-[fadeIn_0.7s_ease-in-out_both]"
            />
            <p className="text-background-white mt-2">Putujte s povjerenjem</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background-white hover:text-secondary-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background-white hover:text-secondary-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-background-white hover:text-secondary-gold transition-colors duration-300" aria-label="Youtube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Middle Section - Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          {/* Contact Information */}
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            <h3 className="text-xl font-semibold text-secondary-gold mb-4">Kontaktirajte Nas</h3>
            <div className="space-y-4">
              <a href="tel:+385976232530" className="flex items-center group">
                <Phone className="w-5 h-5 text-secondary-gold mr-3 group-hover:text-background-white transition-colors duration-300" />
                <span className="text-background-white group-hover:text-secondary-gold transition-colors duration-300">
                  +385 97 623 2530
                </span>
              </a>
              
              <a href="mailto:kezele.prijevoz@gmail.com" className="flex items-center group">
                <Mail className="w-5 h-5 text-secondary-gold mr-3 group-hover:text-background-white transition-colors duration-300" />
                <span className="text-background-white group-hover:text-secondary-gold transition-colors duration-300">
                  kezele.prijevoz@gmail.com
                </span>
              </a>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary-gold mr-3 flex-shrink-0 mt-1" />
                <div className="text-background-white">
                  <p>Pobjenik 57</p>
                  <p>43240 Čazma, Hrvatska</p>
                </div>
              </div>
            </div>
          </div>

          {/* Poslovnice */}
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.3s_both]">
            <h3 className="text-xl font-semibold text-secondary-gold mb-4">Poslovnice</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary-gold mr-3 flex-shrink-0 mt-1" />
                <div className="text-background-white">
                  <p className="font-medium">Poslovnica Čazma</p>
                  <p>Braće Radića 2</p>
                  <p>43240 Čazma</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary-gold mr-3 flex-shrink-0 mt-1" />
                <div className="text-background-white">
                  <p className="font-medium">Poslovnica Bjelovar</p>
                  <p>Ul. Josipa Jelačića 11a</p>
                  <p>43000 Bjelovar</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.3s_both]">
            <h3 className="text-xl font-semibold text-secondary-gold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background-white hover:text-secondary-gold transition-colors duration-300 flex items-center">
                  <span className="text-secondary-gold mr-2">›</span>
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-background-white hover:text-secondary-gold transition-colors duration-300 flex items-center">
                  <span className="text-secondary-gold mr-2">›</span>
                  O Nama
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-background-white hover:text-secondary-gold transition-colors duration-300 flex items-center">
                  <span className="text-secondary-gold mr-2">›</span>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/uvjeti-koristenja" className="text-background-white hover:text-secondary-gold transition-colors duration-300 flex items-center">
                  <span className="text-secondary-gold mr-2">›</span>
                  Uvjeti Korištenja
                </Link>
              </li>
              <li>
                <Link to="/privatnost" className="text-background-white hover:text-secondary-gold transition-colors duration-300 flex items-center">
                  <span className="text-secondary-gold mr-2">›</span>
                  Politika Privatnosti
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Info */}
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.4s_both]">
            <h3 className="text-xl font-semibold text-secondary-gold mb-4">Podaci o tvrtki</h3>
            <ul className="space-y-2 text-background-white text-sm">
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2 block mt-1">•</span>
                <span>Kezele prijevoz i turistička agencija j.d.o.o.</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2 block mt-1">•</span>
                <span>OIB: 87397492087</span>
              </li>
              <li className="flex items-start">
                <CreditCard className="w-4 h-4 text-secondary-gold mr-2 flex-shrink-0 mt-1" />
                <span>IBAN: 8424020061500119618</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2 block mt-1">•</span>
                <span>Vlasnik: Tihomir Kezele</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-gold mr-2 block mt-1">•</span>
                <span>Voditelj poslovnice: Ivona Bogović</span>
              </li>
              <li className="flex items-start mt-2">
                <Shield className="w-4 h-4 text-secondary-gold mr-2 flex-shrink-0 mt-1" />
                <span>Osiguranje: Adriatic osiguranje d.d. Listopadska 2, 10000 Zagreb, OIB: 94472454976</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-sm text-center text-background-white pt-6 border-t border-gray-600 animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
          <p>© 2025 Kezele Prijevoz i Turistička Agencija. Sva prava pridržana.</p>
          <p className="mt-2">
            Izrađeno s <span className="text-secondary-gold">♥</span> za putovanja i putnike
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;