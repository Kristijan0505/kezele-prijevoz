import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/contact/HeroSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactDetailsSection from '../components/contact/ContactDetailsSection';
import MapSection from '../components/contact/MapSection';
import FaqSection from '../components/contact/FaqSection';
import { Helmet } from 'react-helmet';

const Kontakt: React.FC = () => {
  // Update document title to Croatian
  useEffect(() => {
    document.title = 'Kezele Prijevoz i Turistička Agencija | Kontakt';
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kontaktirajte Nas | Kezele Prijevoz i Turistička Agencija</title>
        <meta name="description" content="Kontaktirajte Kezele turističku agenciju za rezervacije izleta, putovanja i prijevoza. Posjetite naše poslovnice u Čazmi i Bjelovaru ili nas nazovite na +385 97 623 2530." />
        <meta name="keywords" content="kontakt, rezervacije putovanja, turistička agencija kontakt, poslovnica Čazma, poslovnica Bjelovar, rezervacija izleta, organizacija prijevoza, cijena putovanja, upit za putovanje" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Kezele Prijevoz i Turistička Agencija",
                "url": "https://kezeletaiprijevoz.hr",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+385976232530",
                    "contactType": "customer service",
                    "email": "kezele.prijevoz@gmail.com",
                    "areaServed": "HR",
                    "availableLanguage": ["Croatian", "English"],
                    "contactOption": [
                      "TollFree",
                      "HearingImpairedSupported"
                    ],
                    "hoursAvailable": [
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": "Monday",
                        "opens": "12:00",
                        "closes": "20:00"
                      },
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "16:00"
                      }
                    ]
                  }
                ],
                "address": [
                  {
                    "@type": "PostalAddress",
                    "addressLocality": "Čazma",
                    "addressRegion": "Bjelovarsko-bilogorska županija",
                    "postalCode": "43240",
                    "streetAddress": "Braće Radića 2",
                    "addressCountry": "HR"
                  },
                  {
                    "@type": "PostalAddress",
                    "addressLocality": "Bjelovar",
                    "addressRegion": "Bjelovarsko-bilogorska županija",
                    "postalCode": "43000",
                    "streetAddress": "Ul. Josipa Jelačića 11a",
                    "addressCountry": "HR"
                  }
                ]
              }
            }
          `}
        </script>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Kako mogu rezervirati putovanje?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rezervacije možete napraviti na nekoliko načina: putem kontakt obrasca na našoj web stranici, telefonskim pozivom na +385 97 623 2530, e-mailom na kezele.prijevoz@gmail.com ili osobnim dolaskom u našu poslovnicu u Zagrebu. Nakon što primimo vaš upit, kontaktirat ćemo vas u najkraćem mogućem roku s potvrdom dostupnosti i detaljima putovanja."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jesu li vaša putovanja sigurna?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Apsolutno. Sigurnost naših putnika nam je na prvom mjestu. Koristimo moderne autobuse koji prolaze redovite tehničke preglede, a svi naši vozači su iskusni profesionalci s potrebnim kvalifikacijama. Pridržavamo se svih relevantnih sigurnosnih standarda i propisa, a za svako putovanje osiguravamo i putno osiguranje. Na našim putovanjima uvijek je prisutan i stručni vodič koji brine o svim aspektima putovanja."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kako izvršiti plaćanje i koja su pravila otkazivanja?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Plaćanje možete izvršiti gotovinom u našoj poslovnici, bankovnim transferom ili kreditnim karticama. Za većinu putovanja potrebno je platiti predujam od 30% prilikom rezervacije, a ostatak do 7 dana prije polaska. Za otkazivanje do 30 dana prije polaska vraćamo puni iznos umanjen za administrativne troškove, za otkazivanje 15-30 dana prije polaska vraćamo 70% iznosa, a za otkazivanje 7-14 dana prije polaska vraćamo 50% iznosa. Za otkazivanje manje od 7 dana prije polaska, nažalost, nismo u mogućnosti izvršiti povrat sredstava. Preporučujemo putno osiguranje koje pokriva troškove otkazivanja."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      <HeroSection />
      <ContactFormSection />
      <ContactDetailsSection />
      <MapSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Kontakt;