import React from 'react';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/home/Hero';
import PopularTrips from '../components/home/PopularTrips';
import AboutUs from '../components/home/AboutUs';
import Testimonials from '../components/home/Testimonials';
import TripTypes from '../components/home/TripTypes';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  // Update document title to Croatian
  React.useEffect(() => {
    document.title = 'Kezele Prijevoz i Turistička Agencija | Početna';
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Kezele Prijevoz i Turistička Agencija | Putovanja i Izleti</title>
        <meta name="description" content="Organiziramo sigurna, kvalitetna i povoljna putovanja po Hrvatskoj i šire. Jednodnevni i višednevni izleti, hodočašća, ljetovanja i zimovanja. Specijaliziramo se za regiju Zagreb, Bjelovar, Čazma." />
        <meta name="keywords" content="turistička agencija Čazma, turistička agencija Bjelovar, autobusna putovanja, izleti, hodočašća, grupna putovanja, jednodnevni izleti, višednevni izleti, putovanja za umirovljenike, školski izleti" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Kezele Prijevoz i Turistička Agencija",
              "url": "https://kezeletaiprijevoz.hr",
              "logo": "https://i.imgur.com/Yr6aVwY.png",
              "description": "Turistička agencija specijalizirana za izlete, putovanja i prijevoz u sjeveroistočnoj Hrvatskoj.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pobjenik 57",
                "addressLocality": "Čazma",
                "postalCode": "43240",
                "addressCountry": "HR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.7503246",
                "longitude": "16.6131042"
              },
              "telephone": "+385976232530",
              "email": "kezele.prijevoz@gmail.com",
              "openingHoursSpecification": [
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
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+385976232530",
                "contactType": "customer service",
                "availableLanguage": ["Croatian", "English"]
              },
              "potentialAction": {
                "@type": "ReserveAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "tel:+385976232530",
                  "inLanguage": "hr",
                  "actionPlatform": [
                    "http://schema.org/MobileWebPlatform",
                    "http://schema.org/DesktopWebPlatform"
                  ]
                },
                "result": {
                  "@type": "Reservation",
                  "name": "Rezervacija putovanja"
                }
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100083362196837",
                "https://instagram.com/kezeleprijevoz"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      <Hero />
      <div id="popular-trips-section">
        <PopularTrips />
      </div>
      <AboutUs />
      <Testimonials />
      <TripTypes />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;