import React from 'react';
import TripCard from '../ui/TripCard';
import SectionTitle from '../ui/SectionTitle';

const PopularTrips: React.FC = () => {
  const trips = [
    {
      id: 12,
      title: 'Izlet u Krapinu i Trakošćan',
      description: '07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)',
      imageUrl: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/491592931_656896190432448_1123035946903958349_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zsDyYEJI7IEQ7kNvwE2msN_&_nc_oc=Adkp4TH_XijfQNuaO6OEpGoAqkYAkbjxVDQP90iB2iTBUyoHoLR9vyc3g1j6WSRF0g0&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=4lFJRdLBOPn9Cqg5KTK8cg&oh=00_AfJB2xGlcx9CQ6kQtoossa4xYswbCeiIrM1QWD4Jr_oPfg&oe=6824E20E',
      iconName: 'Palmtree',
      width: 800,
      height: 600
    },
    {
      id: 11,
      title: 'Etno Selo ',
      description: 'Nezaboravan Izlet od 21.06.-22.06',
      imageUrl: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492364208_662115276577206_6878523898477944732_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tFfZi9pIic8Q7kNvwHIsd8L&_nc_oc=AdkHKBYegjTbtoVmOLEHXq0ceRlxewkhbhMIAqegnwFY64RcJlRvl2floKjd-bDuVCE&_nc_zt=23&_nc_ht=scontent.fzag4-1.fna&_nc_gid=6syF7cDYThbbOUcg2nafkA&oh=00_AfFSHp-hTlESh49Cmm8ru86OD5kpL5rcXh_mWAEqXqW2FA&oe=681D8113',
      iconName: 'Palmtree',
      width: 800,
      height: 600
    },
    {
      id: 1,
      title: 'Etno Selo Stanišić',
      description: 'Nezaboravan Izlet od 21.06.-22.06',
      imageUrl: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492538786_662984746490259_4430216144466043393_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tNXPjiBhKG4Q7kNvwGl9SAX&_nc_oc=AdncCX7QA7dGl5O6-XObuQ3Awd2TJDEOesJs5UGdKS0-4TPLu3IJRE6krCoPacmBFSM&_nc_zt=23&_nc_ht=scontent.fzag4-1.fna&_nc_gid=bOwpOWcAq_fOzqp110W5xQ&oh=00_AfHYr5P9PWOp8leh3lk7bkVR5h9dth4_00jyg8ZS1shedw&oe=681DADC4',
      iconName: 'Palmtree',
      width: 800,
      height: 600
    },
    {
      id: 2,
      title: 'Plitvička Jezera',
      description: 'Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.',
      imageUrl: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Palmtree',
      width: 800,
      height: 534
    },
    {
      id: 3,
      title: 'Međugorje Hodočašće',
      description: 'Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.',
      imageUrl: 'https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Cross',
      width: 800,
      height: 533
    },
    {
      id: 4,
      title: 'Dubrovnik',
      description: 'Višednevni izlet do bisera Jadrana, s obilaskom povijesnih znamenitosti.',
      imageUrl: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Castle',
      width: 800,
      height: 533
    }
  ];

  return (
    <section className="bg-neutral-gray py-16 animate-[wave_15s_ease-in-out_infinite]" id="popular-trips">
      <SectionTitle 
        title="Najpopularnija Putovanja" 
        description="Otkrijte omiljene destinacije naših putnika, od prirodnih ljepota Hrvatske do duhovnih hodočašća i sunčanih obala."
        lightMode={true}
      />
      
      {/* Schema.org data for trip offers */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "TouristTrip",
                "name": "Izlet u Krapinu i Trakošćan",
                "description": "07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)",
                "image": "https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/491592931_656896190432448_1123035946903958349_n.jpg",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "touristType": ["Cultural", "Historical"]
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "TouristTrip",
                "name": "Etno Selo",
                "description": "Nezaboravan Izlet od 21.06.-22.06",
                "image": "https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492364208_662115276577206_6878523898477944732_n.jpg",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "touristType": ["Cultural", "Leisure"]
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "TouristTrip",
                "name": "Plitvička Jezera",
                "description": "Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.",
                "image": "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "touristType": ["Nature", "UNESCO"],
                "offers": {
                  "@type": "Offer",
                  "price": "350.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "TouristTrip",
                "name": "Međugorje Hodočašće",
                "description": "Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.",
                "image": "https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "touristType": ["Religious", "Pilgrimage"],
                "offers": {
                  "@type": "Offer",
                  "price": "275.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }
          ]
        }
      `}} />
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 mt-8">
        {trips.map((trip, index) => (
          <TripCard 
            key={trip.id}
            title={trip.title}
            description={trip.description}
            imageUrl={trip.imageUrl}
            iconName={trip.iconName}
            delay={index * 100}
            imageWidth={trip.width}
            imageHeight={trip.height}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularTrips;