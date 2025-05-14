import React from 'react';
import { Phone, Mail, MapPin, Clock, CalendarDays, Users, CreditCard, Shield } from 'lucide-react';

const ContactDetailsSection: React.FC = () => {
  return (
    <section className="bg-light-gray py-16 relative overflow-hidden" id="kontakt-podaci">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-red tracking-tight animate-[fadeIn_0.7s_ease-in-out_both]">
            Naši Kontakt Podaci
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-neutral-gray max-w-3xl mx-auto mt-6 animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Povežite se s nama telefonom, emailom ili nas posjetite. Radujemo se planiranju vašeg sljedećeg putovanja!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contact info */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-white rounded-lg shadow-lg p-6 animate-[fadeInUp_0.7s_ease-in-out_0.1s_both] hover:shadow-xl transition-all duration-300 group">
              <Phone className="w-12 h-12 text-primary-red mb-4 group-hover:text-secondary-gold group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
              
              <h3 className="text-xl font-semibold text-primary-red mb-2">Telefon</h3>
              
              <a 
                href="tel:+385976232530" 
                className="text-neutral-gray hover:text-secondary-gold transition-colors duration-300 flex items-center gap-2"
                title="Nazovite nas za više informacija"
              >
                <span className="block text-lg">+385 97 623 2530</span>
              </a>
              
              <p className="text-neutral-gray mt-4 text-sm">
                Nazovite nas za brze upite i informacije o našim putovanjima.
              </p>
            </div>
            
            <div className="bg-background-white rounded-lg shadow-lg p-6 animate-[fadeInUp_0.7s_ease-in-out_0.2s_both] hover:shadow-xl transition-all duration-300 group">
              <Mail className="w-12 h-12 text-primary-red mb-4 group-hover:text-secondary-gold group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
              
              <h3 className="text-xl font-semibold text-primary-red mb-2">Email</h3>
              
              <a 
                href="mailto:kezele.prijevoz@gmail.com" 
                className="text-neutral-gray hover:text-secondary-gold transition-colors duration-300 block"
                title="Pošaljite nam e-mail"
              >
                <span className="block text-lg break-all">kezele.prijevoz@gmail.com</span>
              </a>
              
              <p className="text-neutral-gray mt-4 text-sm">
                Pošaljite nam email za detaljne upite i rezervacije.
              </p>
            </div>
            
            <div className="bg-background-white rounded-lg shadow-lg p-6 animate-[fadeInUp_0.7s_ease-in-out_0.3s_both] hover:shadow-xl transition-all duration-300 group">
              <MapPin className="w-12 h-12 text-primary-red mb-4 group-hover:text-secondary-gold group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
              
              <h3 className="text-xl font-semibold text-primary-red mb-2">Adresa</h3>
              
              <address className="text-neutral-gray not-italic">
                <p className="text-lg">Pobjenik 57</p>
                <p className="text-lg">43240 Čazma, Hrvatska</p>
              </address>
              
              <p className="text-neutral-gray mt-4 text-sm">
                Sjedište tvrtke.
              </p>
            </div>
          </div>
          
          {/* Working hours and image */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-background-white rounded-lg shadow-xl overflow-hidden animate-[zoomIn_0.7s_ease-in-out_0.4s_both]">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Ured turističke agencije Kezele u Čazmi" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-red/70 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-red mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-secondary-gold" aria-hidden="true" /> Radno Vrijeme
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-gray">Ponedjeljak</span>
                    <span className="font-medium">12:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-gray">Utorak - Petak</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-gray">Subota - Nedjelja</span>
                    <span className="font-medium text-primary-red">Zatvoreno</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-light-gray/50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <CalendarDays className="w-5 h-5 mr-2 text-secondary-gold flex-shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-neutral-gray text-sm">
                      Preporučamo da rezervirate termin prije dolaska u naš ured za najbolje iskustvo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Poslovnice */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeIn_0.7s_ease-in-out_0.5s_both]">
          <div className="bg-background-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-red mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-secondary-gold" aria-hidden="true" /> Poslovnica Čazma
            </h3>
            
            <address className="text-neutral-gray not-italic mb-4">
              <p>Braće Radića 2</p>
              <p>43240 Čazma</p>
            </address>
            
            <div className="bg-light-gray/30 p-4 rounded-lg">
              <p className="text-neutral-gray text-sm">
                Posjetite našu poslovnicu u Čazmi za sve informacije o putovanjima, organizaciju izleta i grupnih putovanja.
              </p>
            </div>
          </div>
          
          <div className="bg-background-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-red mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-secondary-gold" aria-hidden="true" /> Poslovnica Bjelovar
            </h3>
            
            <address className="text-neutral-gray not-italic mb-4">
              <p>Ul. Josipa Jelačića 11a</p>
              <p>43000 Bjelovar</p>
            </address>
            
            <div className="bg-light-gray/30 p-4 rounded-lg">
              <p className="text-neutral-gray text-sm">
                U našoj poslovnici u Bjelovaru možete dobiti sve potrebne informacije o putovanjima i rezervirati izlete.
              </p>
            </div>
          </div>
        </div>
        
        {/* Company info */}
        <div className="mt-12 bg-background-white rounded-lg shadow-xl p-8 animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 text-primary-red" aria-hidden="true" />
          </div>
          
          <h3 className="text-2xl font-semibold text-primary-red mb-4 text-center">Podaci o tvrtki</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-secondary-gold/20 rounded-full mr-3 flex-shrink-0 mt-1 flex items-center justify-center">
                    <span className="w-2 h-2 bg-secondary-gold rounded-full"></span>
                  </span>
                  <span>Kezele prijevoz i turistička agencija j.d.o.o.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-secondary-gold/20 rounded-full mr-3 flex-shrink-0 mt-1 flex items-center justify-center">
                    <span className="w-2 h-2 bg-secondary-gold rounded-full"></span>
                  </span>
                  <span>OIB: 87397492087</span>
                </li>
                <li className="flex items-start">
                  <CreditCard className="text-secondary-gold mr-3 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>IBAN: 8424020061500119618</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-secondary-gold/20 rounded-full mr-3 flex-shrink-0 mt-1 flex items-center justify-center">
                    <span className="w-2 h-2 bg-secondary-gold rounded-full"></span>
                  </span>
                  <span>Vlasnik: Tihomir Kezele</span>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3 text-neutral-gray">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-secondary-gold/20 rounded-full mr-3 flex-shrink-0 mt-1 flex items-center justify-center">
                    <span className="w-2 h-2 bg-secondary-gold rounded-full"></span>
                  </span>
                  <span>Voditelj poslovnice: Ivona Bogović</span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-secondary-gold mr-3 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Osiguranje: Adriatic osiguranje d.d.<br /> Listopadska 2, 10000 Zagreb<br />OIB: 94472454976</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-light-gray/30 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-secondary-gold mb-2">Za Grupe i Posebne Zahtjeve</h4>
            <p className="text-neutral-gray">
              Organizirate grupno putovanje ili imate posebne zahtjeve? Kontaktirajte našeg voditelja grupa direktno na <a href="mailto:kezele.prijevoz@gmail.com" className="text-secondary-gold hover:underline font-medium" title="Pošaljite upit za grupna putovanja">kezele.prijevoz@gmail.com</a> ili pozivom na <a href="tel:+385976232530" className="text-secondary-gold hover:underline font-medium" title="Nazovite za grupna putovanja">+385 97 623 2530</a> za prilagođenu ponudu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;