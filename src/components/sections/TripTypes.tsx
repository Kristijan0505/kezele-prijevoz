import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TripTypeCard from '../ui/TripTypeCard';

const TripTypes: React.FC = () => {
  const tripTypes = [
    {
      id: 1,
      title: 'Hodočasnička Putovanja',
      description: 'Doživite duhovno ispunjenje i unutarnji mir na našim pažljivo organiziranim hodočašćima. Posjećujemo najznačajnija svetišta u Hrvatskoj i Europi, uključujući Međugorje, Mariju Bistricu, Trsat, Lurd i Fatimu. Naša hodočašća kombiniraju duhovnost, molitvu i zajedništvo uz stručno vodstvo i ugodno putovanje, pružajući jedinstveno iskustvo koje hrani dušu i stvara doživotne uspomene.',
      imageUrl: 'https://images.pexels.com/photos/157267/pexels-photo-157267.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconName: 'Cross'
    },
    {
      id: 2,
      title: 'Ljetovanja i Zimovanja',
      description: 'Opustite se na sunčanim plažama Jadrana ili uživajte u uzbudljivim zimskim aktivnostima u alpskim skijalištima. Nudimo širok izbor ljetovanja u hrvatskim turističkim središtima poput Makarske rivijere, Krka i Istre, te zimovanja u Austriji, Italiji i Sloveniji. Naši paket-aranžmani uključuju kvalitetan smještaj, prijevoz, osiguranje i mogućnost organiziranih izleta, sve po pristupačnim cijenama. Bilo da tražite obiteljski odmor, romantično putovanje ili avanturu s prijateljima, imamo savršeno rješenje za vas.',
      imageUrl: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconName: 'Sun'
    }
  ];

  return (
    <section className="bg-[#F4E4BC] py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-opacity-10"
        aria-hidden="true"
      ></div>
      
      <SectionTitle 
        title="Raznolika Putovanja za Sve Ukuse" 
        description="Otkrijte našu bogatu ponudu putovanja prilagođenih različitim željama, interesima i budžetima. Od spiritualnih doživljaja do opuštajućih odmora, kreiramo putovanja koja će vas oduševiti."
        lightMode={false}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 mt-8">
        {tripTypes.map((type, index) => (
          <TripTypeCard 
            key={type.id}
            title={type.title}
            description={type.description}
            imageUrl={type.imageUrl}
            iconName={type.iconName}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default TripTypes;