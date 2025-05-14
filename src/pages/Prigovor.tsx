import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';

const Prigovor: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Kezele Prijevoz i Turistička Agencija | Prigovor';
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Podnošenje Prigovora | Kezele Prijevoz i Turistička Agencija</title>
        <meta name="description" content="Upute o načinu podnošenja prigovora na usluge Kezele Prijevoza i Turističke Agencije. Saznajte kako možete podnijeti reklamaciju na putovanje." />
        <meta name="keywords" content="prigovor, reklamacija, žalba na putovanje, nezadovoljstvo uslugom, postupak prigovora, prava putnika, reklamacijski postupak, turistička agencija prigovor" />
      </Helmet>
      <Navigation />
      
      <div className="pt-32 pb-16 bg-light-gray">
        <div className="container mx-auto px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-red text-center mb-8">Upute o Načinu Podnošenja Prigovora</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="mb-6 leading-relaxed">
              Putnik se za nepravilnosti i reklamacije mora žaliti prvo davatelju usluga (hotelu, apartmanu i slično, prijevozniku, voditelju putovanja, predstavniku organizatora putovanja ili neposrednom izvođaču usluga). U slučaju da se reklamacija može riješiti na licu mjesta, a Putnik se nije pružatelju usluge odmah žalio na nepravilnosti, podrazumijeva se da se Putnik slaže s uslugom čime gubi pravo na ulaganje naknadnih reklamacija sa zahtjevom za smanjenje cijene usluge i/ili isplate štete.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Kezele prijevoz i turistička agencija j.d.o.o. neće razmatrati reklamacije ako Putnik nije priložio kopiju pismene reklamacije koju je uložio na licu mjesta. Ukoliko ni nakon prigovora na licu mjesta ne dođe do poboljšanja, Putnik mora tražiti potvrdu iz koje se vidi da usluga nije pružena, odnosno da nije pružena na način kako je ugovoreno. Putnik mora potvrdu priložiti pismenoj reklamaciji.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Pisanu reklamaciju Putnik je dužan uložiti u roku od 8 dana nakon završetka putovanja putem elektroničke pošte na adresu: <a href="mailto:kezele.prijevoz@gmail.com" className="text-primary-red hover:underline">kezele.prijevoz@gmail.com</a> ili poštom na adresu: Kezele prijevoz i turistička agencija, Ul. Josipa Jelačića 11a, 43000 Bjelovar, odnosno osobnim dolaskom u poslovnicu te uručenjem pismene reklamacije djelatniku agencije Kezele.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Ukoliko Putnik uloži pismenu reklamaciju nakon tog roka, Kezele prijevoz i turistička agencija d.o.o. takvu reklamaciju nije dužna uzeti u obzir. Kezele prijevoz i turistička agencija j.d.o.o. je dužna donijeti pismeno rješenje na prigovor u roku od 14 dana po primitku prigovora, a može odgoditi rok rješenja o pritužbi za dodatnih 14 dana zbog prikupljanja informacija.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Dok postupak rješenja traje, a ukupno najviše 14, odnosno 28 dana nakon ulaganja prigovora, Putnik se neopozivo odriče posredovanja bilo koje druge osobe, arbitraže UHPA-e ili druge institucije, kao i davanja informacija u medije. Isto tako u ovom vremenu Putnik se odriče prava na tužbu. Najviši iznos nadoknade po prigovoru može doseći iznos reklamiranog dijela usluga, a ne može obuhvatiti već iskorištene usluge kao ni cjelokupni iznos aranžmana.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Prigovor;