import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/about/HeroSection';
import OurStorySection from '../components/about/OurStorySection';
import OurValuesSection from '../components/about/OurValuesSection';
import CompanyHistorySection from '../components/about/CompanyHistorySection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import { Helmet } from 'react-helmet';

const ONama: React.FC = () => {
  // Update document title to Croatian
  useEffect(() => {
    document.title = 'Kezele Prijevoz i Turistička Agencija | O Nama';
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>O Nama | Kezele Prijevoz i Turistička Agencija - 15 Godina Iskustva</title>
        <meta name="description" content="Upoznajte naš tim stručnjaka za nezaboravna putovanja. Kezele je pouzdana agencija s 15 godina iskustva u organizaciji putovanja, izleta i prijevoza putnika u Hrvatskoj." />
        <meta name="keywords" content="o nama, turistička agencija Čazma, turistička agencija Bjelovar, povijest tvrtke, tim stručnjaka, iskustvo u turizmu, sigurni autobusi, pouzdani vozači, obiteljska agencija" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Kezele Prijevoz i Turistička Agencija",
                "url": "https://kezeletaiprijevoz.hr",
                "logo": "https://i.imgur.com/Yr6aVwY.png",
                "description": "Obiteljska turistička agencija s 15 godina iskustva u organizaciji putovanja i prijevoza putnika u Hrvatskoj.",
                "foundingDate": "2010",
                "founder": {
                  "@type": "Person",
                  "name": "Tihomir Kezele"
                },
                "employee": [
                  {
                    "@type": "Person",
                    "name": "Ana Kezele",
                    "jobTitle": "Organizatorica Putovanja",
                    "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                  },
                  {
                    "@type": "Person",
                    "name": "Marko Kezele",
                    "jobTitle": "Vozač i Tehnički Direktor",
                    "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                  },
                  {
                    "@type": "Person",
                    "name": "Iva Novak",
                    "jobTitle": "Turistički Vodič",
                    "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                  }
                ],
                "award": [
                  {
                    "@type": "OrganizationAward",
                    "name": "Regionalna nagrada za kvalitetu usluge",
                    "awardedYear": "2025"
                  }
                ],
                "memberOf": [
                  {
                    "@type": "Organization",
                    "name": "Hrvatska udruga putničkih agencija"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <OurValuesSection />
      <CompanyHistorySection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default ONama;