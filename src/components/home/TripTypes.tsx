import React from 'react';
import { Cross, Sun, Heart, Clock, MapPin, Users, ArrowRight, ChevronRight, Calendar, PhoneCall, CheckCircle2 } from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';

const TripTypes: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background-white" id="trip-types">
      {/* Enhanced background with patterns and subtle animation */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-fixed bg-center opacity-5 animate-[pulse_15s_ease-in-out_infinite]"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Heading with subtle animation */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-secondary-gold font-medium text-sm md:text-base tracking-wider uppercase mb-2 animate-[fadeIn_0.7s_ease-in-out_both]">
            Putovanja za svačiji ukus
          </span>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-red tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.1s_both]">
            Naši Specijalizirani Programi
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 mb-6 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-neutral-gray animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Nudimo širok spektar putovanja prilagođenih različitim željama i potrebama. Istražite našu ponudu i pronađite savršenu avanturu za sebe.
          </p>
        </div>
        
        {/* Main features in a more engaging layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Hodočasnička Putovanja */}
          <div className="relative group" itemScope itemType="https://schema.org/TouristAttraction">
            <div className="absolute inset-0 bg-primary-red/10 rounded-2xl transform rotate-3 scale-[0.97] transition-all duration-500 group-hover:rotate-0 group-hover:scale-100 group-hover:bg-primary-red/20"></div>
            
            <div className="bg-background-white rounded-xl shadow-xl overflow-hidden relative z-10 transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-2xl h-full flex flex-col">
              {/* Header with image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/157267/pexels-photo-157267.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Hodočasnička putovanja - duhovni turizam" 
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  itemProp="image"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                  <h3 className="text-2xl md:text-3xl text-background-white font-bold drop-shadow-lg" itemProp="name">
                    Hodočasnička Putovanja
                  </h3>
                  <Cross className="w-10 h-10 text-secondary-gold drop-shadow-lg bg-background-white/10 p-2 rounded-full backdrop-blur-sm" aria-hidden="true" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <p className="text-neutral-gray text-base mb-6 flex-grow leading-relaxed" itemProp="description">
                  Doživite duhovno ispunjenje na našim pažljivo organiziranim hodočašćima u najznačajnija svetišta Hrvatske i Europe. Posjećujemo Međugorje, Mariju Bistricu, Trsat, Lurd i Fatimu, stvarajući jedinstveno iskustvo koje hrani dušu i donosi mir.
                </p>
                
                {/* Feature icons */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-2 group-hover:bg-secondary-gold/20 transition-colors duration-300">
                      <Heart className="w-6 h-6 text-primary-red" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-neutral-gray">Duhovna obnova</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-2 group-hover:bg-secondary-gold/20 transition-colors duration-300">
                      <Users className="w-6 h-6 text-primary-red" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-neutral-gray">Zajedništvo</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-2 group-hover:bg-secondary-gold/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-primary-red" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-neutral-gray">Sveta mjesta</span>
                  </div>
                </div>
                
                {/* Popular destinations tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-light-gray text-primary-red px-3 py-1 rounded-full text-xs font-medium">Međugorje</span>
                  <span className="bg-light-gray text-primary-red px-3 py-1 rounded-full text-xs font-medium">Marija Bistrica</span>
                  <span className="bg-light-gray text-primary-red px-3 py-1 rounded-full text-xs font-medium">Lurd</span>
                  <span className="bg-light-gray text-primary-red px-3 py-1 rounded-full text-xs font-medium">Fatima</span>
                  <span className="bg-light-gray text-primary-red px-3 py-1 rounded-full text-xs font-medium">Trsat</span>
                </div>
                
                {/* CTA Button */}
                <a 
                  href="tel:+385976232530"
                  className="flex items-center justify-center gap-2 bg-primary-red text-background-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-background-white hover:text-primary-red border border-primary-red hover:shadow-lg group/btn mt-auto"
                  itemProp="potentialAction" 
                  itemType="https://schema.org/ReserveAction"
                  aria-label="Nazovite za rezervaciju hodočašća"
                >
                  <span>Rezervirajte hodočašće</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Ljetovanja i Zimovanja */}
          <div className="relative group" itemScope itemType="https://schema.org/TouristAttraction">
            <div className="absolute inset-0 bg-secondary-gold/10 rounded-2xl transform rotate-[-3deg] scale-[0.97] transition-all duration-500 group-hover:rotate-0 group-hover:scale-100 group-hover:bg-secondary-gold/20"></div>
            
            <div className="bg-background-white rounded-xl shadow-xl overflow-hidden relative z-10 transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:shadow-2xl h-full flex flex-col">
              {/* Header with image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Ljetovanja i Zimovanja - sezonska putovanja" 
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                  itemProp="image"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                  <h3 className="text-2xl md:text-3xl text-background-white font-bold drop-shadow-lg" itemProp="name">
                    Ljetovanja i Zimovanja
                  </h3>
                  <Sun className="w-10 h-10 text-secondary-gold drop-shadow-lg bg-background-white/10 p-2 rounded-full backdrop-blur-sm" aria-hidden="true" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <p className="text-neutral-gray text-base mb-6 flex-grow leading-relaxed" itemProp="description">
                  Opustite se na sunčanim plažama Jadrana ili uživajte u uzbudljivim zimskim aktivnostima u alpskim skijalištima. Nudimo širok izbor odmorišnih destinacija s kvalitetnim smještajem, prijevozom i osiguranjem po pristupačnim cijenama.
                </p>
                
                {/* Feature icons */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-2 group-hover:bg-secondary-gold/20 transition-colors duration-300">
                      <Sun className="w-6 h-6 text-secondary-gold" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-neutral-gray">Plaže</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-2 group-hover:bg-secondary-gold/20 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-secondary-gold" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-neutral-gray">Relaksacija</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-2 group-hover:bg-secondary-gold/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-secondary-gold" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-neutral-gray">Destinacije</span>
                  </div>
                </div>
                
                {/* Popular destinations tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-light-gray text-secondary-gold px-3 py-1 rounded-full text-xs font-medium">Makarska Rivijera</span>
                  <span className="bg-light-gray text-secondary-gold px-3 py-1 rounded-full text-xs font-medium">Krk</span>
                  <span className="bg-light-gray text-secondary-gold px-3 py-1 rounded-full text-xs font-medium">Istra</span>
                  <span className="bg-light-gray text-secondary-gold px-3 py-1 rounded-full text-xs font-medium">Austrija</span>
                  <span className="bg-light-gray text-secondary-gold px-3 py-1 rounded-full text-xs font-medium">Slovenija</span>
                </div>
                
                {/* CTA Button */}
                <a 
                  href="tel:+385976232530"
                  className="flex items-center justify-center gap-2 bg-secondary-gold text-background-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-background-white hover:text-secondary-gold border border-secondary-gold hover:shadow-lg group/btn mt-auto"
                  itemProp="potentialAction" 
                  itemType="https://schema.org/ReserveAction"
                  aria-label="Nazovite za rezervaciju odmora"
                >
                  <span>Rezervirajte odmor</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Call-to-Action Section */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#FFF8E1] to-[#FFF3C4] p-8 shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-gold/10 rounded-full -translate-x-20 -translate-y-32" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-red/10 rounded-full translate-x-[-30%] translate-y-[30%]" aria-hidden="true"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-red mb-4">Želite rezervirati odmah?</h3>
                <p className="text-neutral-gray mb-6 leading-relaxed md:pr-8">
                  Nazovite nas izravno za brzu rezervaciju i odgovore na sva vaša pitanja. Naš ljubazni tim stoji vam na raspolaganju za planiranje vašeg savršenog putovanja.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary-gold" aria-hidden="true" />
                    <span className="text-neutral-gray">Brza rezervacija</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary-gold" aria-hidden="true" />
                    <span className="text-neutral-gray">Stručni savjeti</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary-gold" aria-hidden="true" />
                    <span className="text-neutral-gray">Osobna pomoć</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                <a 
                  href="tel:+385976232530" 
                  className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-secondary-gold/50 hover:border-secondary-gold"
                  aria-label="Nazovite za rezervacije"
                >
                  <PhoneCall className="w-12 h-12 text-primary-red mb-3 group-hover:animate-pulse" aria-hidden="true" />
                  <p className="text-xl font-bold text-primary-red">+385 97 623 2530</p>
                  <p className="text-neutral-gray text-sm mt-1">Nazovite za rezervacije</p>
                  <span className="inline-flex items-center gap-2 text-secondary-gold font-medium mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Rezerviraj sada</span>
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-secondary-gold/30 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3 text-neutral-gray">
                <Calendar className="w-5 h-5 text-secondary-gold" aria-hidden="true" />
                <span className="text-sm">Radno vrijeme: Pon 12:00-20:00, Uto-Pet 8:00-16:00</span>
              </div>
              <a 
                href="/kontakt" 
                className="text-primary-red hover:text-secondary-gold transition-colors duration-300 font-medium flex items-center gap-1 group"
                aria-label="Više kontakt informacija"
              >
                <span>Kontaktirajte nas</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Schema.org data for Trip Offers */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Kezele Prijevoz i Turistička Agencija",
            "url": "https://kezeletaiprijevoz.hr",
            "makesOffer": [
              {
                "@type": "Offer",
                "name": "Hodočasnička Putovanja",
                "description": "Doživite duhovno ispunjenje na našim pažljivo organiziranim hodočašćima u najznačajnija svetišta Hrvatske i Europe.",
                "price": "275.00",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "priceValidUntil": "2025-12-31",
                "itemOffered": {
                  "@type": "TouristTrip",
                  "name": "Hodočašća u vjerska svetišta",
                  "touristType": ["Religious", "Cultural", "Group"],
                  "touchesPlace": [
                    {
                      "@type": "Place",
                      "name": "Međugorje",
                      "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "BA"
                      }
                    },
                    {
                      "@type": "Place",
                      "name": "Marija Bistrica",
                      "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "Hrvatsko Zagorje",
                        "addressCountry": "HR"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "Offer",
                "name": "Ljetovanja i Zimovanja",
                "description": "Opustite se na sunčanim plažama Jadrana ili uživajte u uzbudljivim zimskim aktivnostima u alpskim skijalištima.",
                "price": "350.00",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "priceValidUntil": "2025-12-31",
                "itemOffered": {
                  "@type": "TouristTrip",
                  "name": "Sezonska odmarališta",
                  "touristType": ["Beach", "Luxury", "Family"],
                  "touchesPlace": [
                    {
                      "@type": "Place",
                      "name": "Makarska Rivijera",
                      "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "Dalmacija",
                        "addressCountry": "HR"
                      }
                    },
                    {
                      "@type": "Place",
                      "name": "Otok Krk",
                      "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "Kvarner",
                        "addressCountry": "HR"
                      }
                    }
                  ]
                }
              }
            ]
          }
        `}} />
        
        {/* Inspirational quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto animate-[fadeIn_0.7s_ease-in-out_0.4s_both]">
          <blockquote className="text-2xl md:text-3xl text-primary-red italic font-light">
            "Putovanje je jedina stvar koju kupujete, a koja vas čini bogatijima."
          </blockquote>
          <div className="mt-4 text-neutral-gray">— Nepoznati autor</div>
          
          <div className="mt-10">
            <PrimaryButton 
              text="Kontaktirajte nas za više informacija" 
              href="tel:+385976232530" 
              className="shadow-lg hover:shadow-xl" 
              aria-label="Nazovite za više informacija o putovanjima"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripTypes;