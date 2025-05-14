import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import SloganBar from './SloganBar';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden">
      {/* Hero Background Image with Darker Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 animate-[fadeIn_1.2s_ease-in-out]"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/d31T1z1L/turisticka-agencija-hrvatska-kezele.jpg")'
        }}
        aria-label="Autobus na putu u prirodi"
      />
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-16 pt-16 md:pt-0">
        <div className="max-w-3xl mx-auto text-center mt-0 md:mt-0">
          <div className="inline-block bg-secondary-gold/20 backdrop-blur-sm px-5 py-3 rounded-full mb-6 animate-[fadeIn_0.7s_ease-in-out]">
            <span className="text-background-white font-medium text-base md:text-lg">Otkrijte Hrvatsku i Europu s nama</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-background-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.2s_both] text-shadow-lg mb-4">
            Kezele Prijevoz
          </h1>
          
          <div className="w-28 h-1.5 bg-secondary-gold mx-auto my-6 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-2xl md:text-3xl font-medium text-background-white mb-8 animate-[fadeIn_0.7s_ease-in-out_0.3s_both]">
            Vaš pouzdani partner za putovanja
          </p>
          
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.4s_both] max-w-md mx-auto mt-8">
            <PrimaryButton 
              text="Istražite naše destinacije" 
              href="/kontakt" 
              className="shadow-xl hover:shadow-2xl text-xl" 
              large
              aria-label="Kliknite za više informacija o našim destinacijama"
            />
          </div>
        </div>
      </div>
      
      {/* Schema.org data for local business */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Kezele Prijevoz i Turistička Agencija",
          "image": "https://i.postimg.cc/d31T1z1L/turisticka-agencija-hrvatska-kezele.jpg",
          "@id": "https://kezeletaiprijevoz.hr",
          "url": "https://kezeletaiprijevoz.hr",
          "telephone": "+385976232530",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pobjenik 57",
            "addressLocality": "Čazma",
            "postalCode": "43240",
            "addressCountry": "HR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.7470779,
            "longitude": 16.6149708
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Monday",
              "opens": "12:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "16:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100083362196837",
            "https://www.instagram.com/kezeleprijevoz"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Turistička putovanja",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "TouristTrip",
                  "name": "Jednodnevni izleti",
                  "description": "Posjetite prekrasne destinacije u Hrvatskoj u jednodnevnim izletima autobusom"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "TouristTrip",
                  "name": "Hodočašća",
                  "description": "Duhovna putovanja u poznata svetišta u Hrvatskoj i Europi"
                }
              }
            ]
          }
        }
      `}} />
      
      {/* Integrated Slogan Bar at bottom */}
      <div className="w-full z-10 mt-auto">
        <SloganBar />
      </div>
    </section>
  );
};

export default Hero;