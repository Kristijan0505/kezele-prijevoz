import React from 'react';
import { Bus, Award, Shield, Heart } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import PrimaryButton from '../ui/PrimaryButton';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-light-gray py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-opacity-10"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-[fadeIn_0.7s_ease-in-out]">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-red tracking-tight">
           Vaš Pouzdani Suputnik
          </h2>
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 animate-[draw_2s_ease-in-out]"></div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-16">
          {/* Image */}
          <div className="md:w-5/12">
            <div className="relative rounded-lg shadow-xl overflow-hidden animate-[zoomIn_0.7s_ease-in-out_0.3s_both] hover:scale-105 transition-all duration-500 group">
              <img 
                src="https://i.postimg.cc/c1jgskQ5/turisticka-agencija-i-prijevoz-kezele.jpg" 
                alt="Naš moderni autobus za putovanja" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <span className="text-background-white font-semibold text-lg">Moderni i udobni autobusi</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.5s_both]">
                <Shield className="w-12 h-12 text-primary-red mb-2" />
                <span className="text-neutral-gray font-semibold">Sigurnost</span>
              </div>
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
                <Award className="w-12 h-12 text-primary-red mb-2" />
                <span className="text-neutral-gray font-semibold">Kvaliteta</span>
              </div>
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.7s_both]">
                <Heart className="w-12 h-12 text-primary-red mb-2" />
                <span className="text-neutral-gray font-semibold">Briga</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-7/12 md:text-left">
            <div className="bg-background-white rounded-lg shadow-lg p-8 animate-[fadeInLeft_0.7s_ease-in-out_both]">
              <Bus className="w-12 h-12 text-secondary-gold mb-4 animate-pulse" />
              
              <p className="text-base md:text-lg text-neutral-gray leading-relaxed mb-4">
                <span className="text-primary-red font-semibold">Kezele Prijevoz i Turistička Agencija</span> iz Čazme, s poslovnicama u Bjelovaru i Čazmi, specijalizirana je za organizaciju putovanja koja uključuju autobusne i avionske destinacije.
              </p>
              
              <p className="text-base md:text-lg text-neutral-gray leading-relaxed mb-4">
                Bilo da tražite nezaboravan obiteljski odmor, grupna putovanja ili organizirane izlete za djecu, mi ćemo se pobrinuti da vaša avantura bude besprijekorna i puna nezaboravnih trenutaka.
              </p>
              
              <p className="text-base md:text-lg text-neutral-gray leading-relaxed mb-4">
                Posvećeni smo pružanju vrhunske usluge, a naš tim stručnjaka osigurava da svako putovanje bude udobno, sigurno i prilagođeno vašim željama.
              </p>
              
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-primary-red mb-3">Zašto odabrati Kezele?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary-gold mr-2">✓</span>
                    <span className="text-neutral-gray">Personalizirani pristup svakom putniku</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-gold mr-2">✓</span>
                    <span className="text-neutral-gray">Besprijekorno održavani i moderni autobusi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-gold mr-2">✓</span>
                    <span className="text-neutral-gray">Iskusni vozači i stručni turistički vodiči</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-gold mr-2">✓</span>
                    <span className="text-neutral-gray">Pažljivo odabrane destinacije i smještaj</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;