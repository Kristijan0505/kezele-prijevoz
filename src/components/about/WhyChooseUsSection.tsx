import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import { Wallet, HeartHandshake, Trophy, Clock, ShieldCheck, MapPin } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="bg-light-gray py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary-gold font-medium text-sm md:text-base tracking-wider uppercase mb-2 animate-[fadeIn_0.7s_ease-in-out_both]">
            Prednosti koje nudimo
          </span>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-red tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.1s_both]">
            Razlozi za Odabir Kezele Agencije
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-neutral-gray max-w-3xl mx-auto mt-6 animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Kezele Prijevoz i Turistička Agencija nudi više od putovanja – pružamo iskustva koja spajaju sigurnost, kvalitetu i radost otkrivanja.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Povoljne Cijene */}
          <div className="bg-background-white rounded-lg shadow-lg overflow-hidden animate-[fadeInUp_0.7s_ease-in-out_0.1s_both] hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-52 overflow-hidden">
              <img 
                src="https://i.postimg.cc/fWxPjpB6/povoljne-cijene-putovanja.jpg" 
                alt="Turistička grupa u planinama" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-red/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Wallet className="absolute bottom-4 right-4 w-12 h-12 text-background-white bg-secondary-gold p-2 rounded-full shadow-lg" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary-gold mb-2">Povoljne Cijene</h3>
              <p className="text-neutral-gray mb-4">
                Nudimo vrhunska putovanja po cijenama dostupnim svima. Vjerujemo da nezaboravna iskustva trebaju biti dostupna svakome, bez kompromisa u kvaliteti.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <span className="text-secondary-gold mr-2">✓</span>
                  <span className="text-neutral-gray">Transparentne cijene bez skrivenih troškova</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary-gold mr-2">✓</span>
                  <span className="text-neutral-gray">Popusti za rane rezervacije i grupna putovanja</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary-gold mr-2">✓</span>
                  <span className="text-neutral-gray">Mogućnost plaćanja na rate bez kamata</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-primary-red font-medium">
                  "Putovanje ne mora biti skupo da bi bilo vrijedno."
                </p>
              </div>
            </div>
          </div>
          
          {/* Personalizirana Usluga */}
          <div className="bg-background-white rounded-lg shadow-lg overflow-hidden animate-[fadeInUp_0.7s_ease-in-out_0.2s_both] hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-52 overflow-hidden">
              <img 
                src="https://i.postimg.cc/5ywDXkRW/turisticka-agencija-hrvatska-pouzdani-pristup.jpg" 
                alt="Vodič koji pomaže turistima" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-red/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <HeartHandshake className="absolute bottom-4 right-4 w-12 h-12 text-background-white bg-secondary-gold p-2 rounded-full shadow-lg" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary-gold mb-2">Personalizirana Usluga</h3>
              <p className="text-neutral-gray mb-4">
                Prilagođavamo putovanja vašim željama za jedinstveno iskustvo. Vaše preference su naš prioritet, bilo da tražite avanturistički, kulturni ili opuštajući odmor.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <span className="text-secondary-gold mr-2">✓</span>
                  <span className="text-neutral-gray">Itinereri prilagođeni vašim interesima</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary-gold mr-2">✓</span>
                  <span className="text-neutral-gray">Prilagodbe za obitelji s djecom ili starije osobe</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary-gold mr-2">✓</span>
                  <span className="text-neutral-gray">Osobni savjetnici za planiranje putovanja</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-primary-red font-medium">
                  "Svaka osoba je jedinstvena, baš kao i naša putovanja."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Dodatne prednosti - manje kartice */}
          <div className="bg-background-white rounded-lg shadow-md p-5 animate-[fadeInUp_0.7s_ease-in-out_0.3s_both] hover:shadow-lg transition-all duration-300 flex items-start">
            <Trophy className="w-10 h-10 text-secondary-gold mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-primary-red mb-2">Dugogodišnje Iskustvo</h4>
              <p className="text-neutral-gray text-sm">
                15+ godina iskustva u organizaciji putovanja osigurava da možete računati na našu stručnost i pouzdanost.
              </p>
            </div>
          </div>
          
          <div className="bg-background-white rounded-lg shadow-md p-5 animate-[fadeInUp_0.7s_ease-in-out_0.4s_both] hover:shadow-lg transition-all duration-300 flex items-start">
            <Clock className="w-10 h-10 text-secondary-gold mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-primary-red mb-2">Ušteda Vremena</h4>
              <p className="text-neutral-gray text-sm">
                Prepustite nam planiranje i organizaciju dok vi jednostavno uživate u putovanju bez stresa i briga.
              </p>
            </div>
          </div>
          
          <div className="bg-background-white rounded-lg shadow-md p-5 animate-[fadeInUp_0.7s_ease-in-out_0.5s_both] hover:shadow-lg transition-all duration-300 flex items-start">
            <ShieldCheck className="w-10 h-10 text-secondary-gold mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-primary-red mb-2">Licencirana Agencija</h4>
              <p className="text-neutral-gray text-sm">
                Kao licencirana turistička agencija, pružamo sigurnost i zakonsku zaštitu za svako vaše putovanje.
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-12 bg-background-white rounded-lg shadow-xl p-8 animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <div className="relative rounded-lg overflow-hidden mb-4 md:mb-0">
                <img 
                  src="https://i.postimg.cc/1zqBRVdL/kezele-prijevoz-obitelj.jpg" 
                  alt="Sretna obitelj na odmoru" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-red/20 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-background-white drop-shadow-lg" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-neutral-gray italic text-lg mb-4">
                "Naša obitelj već treću godinu zaredom putuje s Kezele agencijom. Od jednodnevnih izleta do ljetovanja, svako iskustvo je bilo besprijekorno organizirano uz osobni pristup. Osjećamo se kao dio obitelji, a ne samo kao klijenti. Hvala vam na nezaboravnim uspomenama!"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Ivana Horvat" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary-red">Ivana Horvat</p>
                  <p className="text-secondary-gold text-sm">Redovna putnica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-primary-red mb-4">Spremni za Novu Avanturu?</h3>
          <p className="text-neutral-gray max-w-2xl mx-auto mb-6">
            Kontaktirajte nas danas i dozvolite nam da vam pomognemo isplanirati vaše sljedeće nezaboravno putovanje. Naš tim stoji vam na raspolaganju za sve informacije.
          </p>
          <div className="animate-[zoomIn_0.7s_ease-in-out_both] max-w-md mx-auto">
            <PrimaryButton 
              text="Kontaktirajte Nas" 
              href="/kontakt" 
              className="shadow-xl hover:shadow-2xl transform hover:scale-105" 
              large
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;