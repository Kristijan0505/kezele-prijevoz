import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const OurStorySection: React.FC = () => {
  return (
    <section className="bg-neutral-gray py-16 relative overflow-hidden">
      {/* Background pattern with waves */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3385608/pexels-photo-3385608.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image side */}
          <div className="md:w-5/12">
            <div className="relative rounded-lg shadow-xl overflow-hidden animate-[zoomIn_0.7s_ease-in-out_0.3s_both] hover:scale-105 transition-all duration-500 group">
              <img 
                src="https://i.postimg.cc/tJLY27qH/kezele-prijevoz-turisti-ka-agencija.jpg" 
                alt="Naš autobus na jadranskoj cesti" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-red/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <span className="text-background-white font-semibold text-lg">Putovanje uz Jadransku obalu</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.5s_both]">
                <Calendar className="w-10 h-10 text-secondary-gold mb-2" />
                <span className="text-background-white font-medium">15+ Godina</span>
              </div>
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
                <MapPin className="w-10 h-10 text-secondary-gold mb-2" />
                <span className="text-background-white font-medium">100+ Destinacija</span>
              </div>
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.7s_both]">
                <Users className="w-10 h-10 text-secondary-gold mb-2" />
                <span className="text-background-white font-medium">1000+ Putnika</span>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-semibold text-background-white tracking-tight animate-[fadeInLeft_0.7s_ease-in-out_both]">
              Priča o Strasti za Putovanjima
            </h2>
            
            <div className="w-24 h-1 bg-secondary-gold mt-4 mb-6 animate-[draw_1.5s_ease-in-out]"></div>
            
            <div className="space-y-4 text-background-white text-base md:text-lg animate-[fadeInLeft_0.7s_ease-in-out_0.2s_both]">
              <p className="leading-relaxed">
                <span className="text-secondary-gold font-semibold">Kezele Prijevoz i Turistička Agencija</span> iz Čazme, s poslovnicama u Bjelovaru i Čazmi, specijalizirana je za organizaciju putovanja koja uključuju autobusne i avionske destinacije. 
              </p>
              
              <p className="leading-relaxed">
                Bilo da tražite nezaboravan obiteljski odmor, grupna putovanja ili organizirane izlete za djecu, mi ćemo se pobrinuti da vaša avantura bude besprijekorna i puna nezaboravnih trenutaka.
              </p>
              
              <p className="leading-relaxed">
                Posvećeni smo pružanju vrhunske usluge, a naš tim stručnjaka osigurava da svako putovanje bude udobno, sigurno i prilagođeno vašim željama. Posjetite nas u našim poslovnicama u Čazmi i Bjelovaru te krenite na putovanje iz snova s našom agencijom.
              </p>
              
              <p className="leading-relaxed">
                Kroz godine, stekli smo duboko razumijevanje što čini putovanje nezaboravnim – nije to samo destinacija, već cjelokupno iskustvo. Zato posvećujemo pažnju svakom detalju, od planiranja rute do odabira smještaja, uvijek s ciljem da naši putnici dožive više od običnog turističkog obilaska.
              </p>
              
              <div className="bg-primary-red/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-secondary-gold mt-6">
                <p className="italic text-light-gray">
                  "Naša najveća nagrada su osmijesi zadovoljnih putnika i njihove priče o nezaboravnim trenutcima koje su doživjeli putujući s nama."
                </p>
                <p className="text-right mt-2 text-light-gray font-medium">— Obitelj Kezele</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;