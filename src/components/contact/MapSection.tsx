import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const MapSection: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<'cazma' | 'bjelovar'>('cazma');
  
  useEffect(() => {
    // Set a timeout to simulate map loading for animation purposes
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const mapUrls = {
    cazma: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.209258453451!2d16.61301917590359!3d45.54654343056827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4766f5db7abdb9f9%3A0x8c0b31eead4efe84!2sBra%C4%87e%20Radi%C4%87a%202%2C%2043240%2C%20%C4%8Cazma!5e0!3m2!1sen!2shr!4v1718905846379!5m2!1sen!2shr",
    bjelovar: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.3051873483603!2d16.835991476084373!3d45.8960873711273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4767eb18e4f42207%3A0x881a3eb7f9b6e777!2sUl.%20Josipa%20Jela%C4%8Di%C4%87a%2011%2C%2043000%2C%20Bjelovar!5e0!3m2!1sen!2shr!4v1718905899889!5m2!1sen!2shr"
  };
  
  return (
    <section className="bg-neutral-gray py-16 relative overflow-hidden" id="lokacije">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-background-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_both]">
            Pronađite Nas
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-background-white max-w-3xl mx-auto mt-6 animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Posjetite naše poslovnice u Čazmi i Bjelovaru, gdje vas očekuje naš stručni tim.
          </p>
        </div>

        {/* Location selector */}
        <div className="flex justify-center mb-6 animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
          <div className="bg-background-white rounded-full shadow-md inline-flex p-1">
            <button 
              onClick={() => setSelectedLocation('cazma')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedLocation === 'cazma' 
                  ? 'bg-primary-red text-background-white' 
                  : 'text-neutral-gray hover:text-primary-red'
              }`}
              aria-label="Prikaži poslovnicu Čazma"
            >
              Poslovnica Čazma
            </button>
            <button 
              onClick={() => setSelectedLocation('bjelovar')}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                selectedLocation === 'bjelovar' 
                  ? 'bg-primary-red text-background-white' 
                  : 'text-neutral-gray hover:text-primary-red'
              }`}
              aria-label="Prikaži poslovnicu Bjelovar"
            >
              Poslovnica Bjelovar
            </button>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Pulsing pin above map */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center">
            <MapPin className="w-12 h-12 text-secondary-gold animate-bounce drop-shadow-lg" aria-hidden="true" />
          </div>
          
          {/* Map container with loading state */}
          <div className={`rounded-lg shadow-2xl overflow-hidden relative bg-light-gray/10 animate-[fadeInUp_0.7s_ease-in-out_0.3s_both] ${isMapLoaded ? '' : 'min-h-[400px] md:min-h-[500px]'}`}>
            {!isMapLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-t-secondary-gold border-primary-red rounded-full animate-spin mb-4"></div>
                <p className="text-background-white">Učitavanje karte...</p>
              </div>
            )}
            
            <iframe 
              src={mapUrls[selectedLocation]}
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Karta - Kezele Prijevoz - Poslovnica ${selectedLocation === 'cazma' ? 'Čazma' : 'Bjelovar'}`}
              aria-label={`Interaktivna karta lokacije Kezele Prijevoz - Poslovnica ${selectedLocation === 'cazma' ? 'Čazma' : 'Bjelovar'}`}
              className={`w-full ${isMapLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
              onLoad={() => setIsMapLoaded(true)}
            ></iframe>
          </div>
          
          {/* Location details */}
          <div className="bg-background-white rounded-lg shadow-lg p-6 mt-6 animate-[fadeIn_0.7s_ease-in-out_0.5s_both]">
            <h3 className="text-xl font-semibold text-primary-red mb-4">
              {selectedLocation === 'cazma' ? 'Poslovnica Čazma' : 'Poslovnica Bjelovar'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-secondary-gold mb-2">Adresa</h4>
                <address className="text-neutral-gray not-italic mb-4">
                  {selectedLocation === 'cazma' ? (
                    <>
                      <p>Braće Radića 2</p>
                      <p>43240 Čazma</p>
                    </>
                  ) : (
                    <>
                      <p>Ul. Josipa Jelačića 11a</p>
                      <p>43000 Bjelovar</p>
                    </>
                  )}
                </address>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-secondary-gold mb-2">Kontakt</h4>
                <ul className="space-y-2 text-neutral-gray">
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 text-secondary-gold mr-2" aria-hidden="true" />
                    <a href="tel:+385976232530" className="hover:text-primary-red transition-colors" title="Nazovite nas odmah">
                      +385 97 623 2530
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-secondary-gold mr-2" aria-hidden="true" />
                    <a href="mailto:kezele.prijevoz@gmail.com" className="hover:text-primary-red transition-colors" title="Pošaljite nam e-mail">
                      kezele.prijevoz@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-light-gray/30 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-secondary-gold mb-2">Radno vrijeme</h4>
              <ul className="space-y-2 text-neutral-gray">
                <li className="flex justify-between">
                  <span>Ponedjeljak</span>
                  <span>12:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Utorak - Petak</span>
                  <span>08:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Subota - Nedjelja</span>
                  <span className="text-primary-red">Zatvoreno</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;