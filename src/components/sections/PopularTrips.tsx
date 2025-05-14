import React from 'react';
import TripCard from '../ui/TripCard';
import SectionTitle from '../ui/SectionTitle';

const PopularTrips: React.FC = () => {
  const trips = [
    {
      id: 1,
      title: 'Plitvička Jezera',
      description: 'Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.',
      imageUrl: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconName: 'Palmtree'
    },
    {
      id: 2,
      title: 'Međugorje Hodočašće',
      description: 'Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.',
      imageUrl: 'https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconName: 'Cross'
    },
    {
      id: 3,
      title: 'Dubrovnik',
      description: 'Višednevni izlet do bisera Jadrana, s obilaskom povijesnih znamenitosti.',
      imageUrl: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=400',
      iconName: 'Castle'
    }
  ];

  return (
    <section className="bg-[#6B7280] py-16 animate-[wave_15s_ease-in-out_infinite]">
      <SectionTitle 
        title="Najpopularnija Putovanja" 
        description="Otkrijte omiljene destinacije naših putnika, od prirodnih ljepota Hrvatske do duhovnih hodočašća i sunčanih obala."
        lightMode={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 mt-8">
        {trips.map((trip, index) => (
          <TripCard 
            key={trip.id}
            title={trip.title}
            description={trip.description}
            imageUrl={trip.imageUrl}
            iconName={trip.iconName}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularTrips;