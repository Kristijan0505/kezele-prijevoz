import React from 'react';
import { Shield, Award, Heart, Clock, Users, Sparkles } from 'lucide-react';

const OurValuesSection: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-14 h-14 text-primary-red transition-all duration-300 group-hover:text-secondary-gold group-hover:scale-110" />,
      title: "Sigurnost",
      description: "Prioritet nam je vaša sigurnost, s modernim autobusima i iskusnim vozačima koji poznaju svaku rutu.",
      features: ["Redovito održavana vozila", "Iskusni profesionalni vozači", "Putno osiguranje"],
      delay: 100
    },
    {
      icon: <Award className="w-14 h-14 text-primary-red transition-all duration-300 group-hover:text-secondary-gold group-hover:scale-110" />,
      title: "Kvaliteta",
      description: "Pažljivo planiramo svaki detalj, od najzanimljivijih ruta do ugodnog smještaja i stručnih vodiča.",
      features: ["Pažljivo izrađeni itinereri", "Stručni turistički vodiči", "Pažljivo odabrani smještaj"],
      delay: 200
    },
    {
      icon: <Heart className="w-14 h-14 text-primary-red transition-all duration-300 group-hover:text-secondary-gold group-hover:scale-110" />,
      title: "Zadovoljstvo",
      description: "Vaša sreća je naš cilj, pružamo personalizirano iskustvo putovanja uz cijene pristupačne svima.",
      features: ["Povoljne cijene", "Personalizirano iskustvo", "Prilagodljivost potrebama"],
      delay: 300
    },
    {
      icon: <Clock className="w-14 h-14 text-primary-red transition-all duration-300 group-hover:text-secondary-gold group-hover:scale-110" />,
      title: "Točnost",
      description: "Cijenimo vaše vrijeme i poštujemo dogovoreni raspored za maksimalno iskorištavanje vašeg odmora.",
      features: ["Precizno planiranje", "Efikasno putovanje", "Poštovanje vremenskog rasporeda"],
      delay: 400
    },
    {
      icon: <Users className="w-14 h-14 text-primary-red transition-all duration-300 group-hover:text-secondary-gold group-hover:scale-110" />,
      title: "Zajednica",
      description: "Vjerujemo u stvaranje veza među putnicima, prilika za nova prijateljstva i dijeljenje iskustava.",
      features: ["Grupna druženja", "Zajedničke aktivnosti", "Dijeljenje doživljaja"],
      delay: 500
    },
    {
      icon: <Sparkles className="w-14 h-14 text-primary-red transition-all duration-300 group-hover:text-secondary-gold group-hover:scale-110" />,
      title: "Inovativnost",
      description: "Kontinuirano tražimo nove destinacije i načine da poboljšamo vaše iskustvo putovanja.",
      features: ["Praćenje trendova", "Nova odredišta", "Moderna tehnologija"],
      delay: 600
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-gray to-light-gray/80"></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary-gold font-medium text-sm md:text-base tracking-wider uppercase mb-2 animate-[fadeIn_0.7s_ease-in-out_both]">
            Vrijednosti koje nas određuju
          </span>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-red tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.1s_both]">
            Srce Našeg Rada
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 mb-6 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-neutral-gray max-w-3xl mx-auto animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Ove temeljne vrijednosti definiraju svaki aspekt naših putovanja, osiguravajući da svaki izlet bude više od običnog putovanja – pravo iskustvo povezivanja i radosti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`bg-background-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl group animate-[fadeInUp_0.7s_ease-in-out_${value.delay}ms_both] border-b-4 border-transparent hover:border-secondary-gold relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-light-gray/20 rounded-full -translate-x-10 -translate-y-10 z-0"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-primary-red mb-4 group-hover:text-secondary-gold transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-neutral-gray mb-6">
                  {value.description}
                </p>
                
                <ul className="space-y-2">
                  {value.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="inline-block w-5 h-5 bg-secondary-gold/20 rounded-full mr-3 flex items-center justify-center">
                        <span className="w-2 h-2 bg-secondary-gold rounded-full"></span>
                      </span>
                      <span className="text-neutral-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;