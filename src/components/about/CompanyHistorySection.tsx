import React from 'react';
import { Calendar, Award, TrendingUp, BookOpen, Globe, MapPin, Briefcase, Target, Users, Palmtree, Heart } from 'lucide-react';

const CompanyHistorySection: React.FC = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Obnova Poslovanja',
      description: 'Nakon izazovne pandemijske godine, Kezele Prijevoz i Turistička Agencija obnavlja poslovanje s fokusom na domaće destinacije i sigurna putovanja.',
      icon: <Calendar className="w-10 h-10 text-secondary-gold" />,
      delay: 100,
      achievement: 'Uspješno organizirano 45+ grupnih putovanja'
    },
    {
      year: '2022',
      title: 'Prva Licence',
      description: 'Dobivanje službenih licenci za organizaciju turističkih putovanja u Hrvatskoj i susjedne zemlje. Proširenje ponude na ljetovanja na Jadranu.',
      icon: <Award className="w-10 h-10 text-secondary-gold" />,
      delay: 200,
      achievement: '150+ zadovoljnih putnika'
    },
    {
      year: '2023',
      title: 'Nove Destinacije',
      description: 'Uvođenje specijalnih programa za hodočašća i kulturna putovanja. Otvaranje poslovnice u Bjelovaru i širenje mreže partnera.',
      icon: <MapPin className="w-10 h-10 text-secondary-gold" />,
      delay: 300,
      achievement: 'Dodano 25+ novih destinacija'
    },
    {
      year: '2024',
      title: 'Međunarodna Suradnja',
      description: 'Uspostavljanje partnerstva s agencijama iz Italije, Austrije i Mađarske. Organizacija prvih zimovanja u alpskim ljetovalištima.',
      icon: <Globe className="w-10 h-10 text-secondary-gold" />,
      delay: 400,
      achievement: 'Partnerstvo s 8 međunarodnih agencija'
    },
    {
      year: '2025',
      title: 'Poslovna Izvrsnost',
      description: 'Primanje regionalne nagrade za kvalitetu usluge i zadovoljstvo korisnika. Uvođenje programa lojalnosti za stalne putnike.',
      icon: <Briefcase className="w-10 h-10 text-secondary-gold" />,
      delay: 500,
      achievement: 'Preko 5000 putnika godišnje'
    }
  ];
  
  const achievements = [
    {
      title: 'Preko 10.000 zadovoljnih putnika',
      description: 'Broj zadovoljnih putnika koji su nam ukazali povjerenje u posljednje 3 godine.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: '50+ pažljivo odabranih destinacija',
      description: 'Naša ponuda uključuje najatraktivnije destinacije u Hrvatskoj i Europi.',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: '100+ organiziranih putovanja godišnje',
      description: 'Izleti, hodočašća, ljetovanja i zimovanja prilagođeni različitim željama.',
      icon: <Palmtree className="w-6 h-6" />
    },
    {
      title: '95% stopa zadovoljstva klijenata',
      description: 'Visoka ocjena zadovoljstva prema anketama provedenim nakon putovanja.',
      icon: <Heart className="w-6 h-6" />
    }
  ];
  
  return (
    <section className="bg-neutral-gray py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary-gold font-medium text-sm md:text-base tracking-wider uppercase mb-2 animate-[fadeIn_0.7s_ease-in-out_both]">
            Naš put i postignuća
          </span>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-background-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.1s_both]">
            Priča o Uspjehu
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-background-white max-w-3xl mx-auto mt-6 animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Od 2021. do danas, rastemo i razvijamo naše usluge, gradeći povjerenje i stvarajući nezaboravna putovanja za naše klijente.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative py-12 overflow-hidden">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary-gold/40 h-full"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 relative animate-[fadeInUp_0.7s_ease-in-out_${milestone.delay}ms_both]`}
              >
                {/* Year circle with improved styling */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-neutral-gray border-4 border-secondary-gold flex items-center justify-center z-10 shadow-lg">
                  <span className="text-secondary-gold font-bold text-lg">{milestone.year}</span>
                </div>
                
                {/* Content left side (even items) */}
                <div className={`md:w-1/2 md:pr-16 text-right ${index % 2 === 1 ? 'md:order-1 md:text-left md:pl-16 md:pr-0' : 'md:text-right'}`}>
                  {index % 2 === 0 && (
                    <div className="bg-background-white rounded-lg shadow-lg p-6 inline-block transform transition-transform duration-500 hover:scale-105">
                      <div className="flex flex-col items-end">
                        <div className="mb-4 bg-secondary-gold/20 p-3 rounded-full">
                          {milestone.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-primary-red mb-2">{milestone.title}</h3>
                        <p className="text-neutral-gray mb-4">{milestone.description}</p>
                        <div className="bg-light-gray rounded-full px-4 py-2 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary-red" />
                          <span className="font-bold text-primary-red">{milestone.achievement}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Content right side (odd items) */}
                <div className={`md:w-1/2 md:pl-16 ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                  {index % 2 === 1 && (
                    <div className="bg-background-white rounded-lg shadow-lg p-6 inline-block transform transition-transform duration-500 hover:scale-105">
                      <div className="flex flex-col items-start">
                        <div className="mb-4 bg-secondary-gold/20 p-3 rounded-full">
                          {milestone.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-primary-red mb-2">{milestone.title}</h3>
                        <p className="text-neutral-gray mb-4">{milestone.description}</p>
                        <div className="bg-light-gray rounded-full px-4 py-2 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary-red" />
                          <span className="font-bold text-primary-red">{milestone.achievement}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Current Achievements section */}
        <div className="mt-16 bg-background-white rounded-lg shadow-xl p-8 animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
          <h3 className="text-2xl font-semibold text-primary-red mb-6 text-center flex items-center justify-center gap-2">
            <Target className="w-7 h-7 text-secondary-gold" />
            <span>Naša Današnja Postignuća</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-light-gray/30 p-6 rounded-lg flex flex-col items-center text-center group hover:bg-light-gray/50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                <div className="bg-primary-red/10 p-4 rounded-full mb-4 group-hover:bg-primary-red/20 transition-all duration-300">
                  <div className="text-primary-red group-hover:text-secondary-gold transition-all duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-primary-red mb-2">{achievement.title}</h4>
                <p className="text-neutral-gray text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 p-6 bg-light-gray/30 rounded-lg max-w-3xl mx-auto">
            <p className="text-neutral-gray italic text-lg">
              "Naš uspjeh mjerimo osmjesima naših putnika i kvalitetom njihovih doživljaja. Vjerujemo da putovanje nije samo promjena mjesta, već obogaćivanje života."
            </p>
            <p className="mt-2 text-primary-red font-medium">— Obitelj Kezele</p>
          </div>
        </div>
        
        {/* Future Vision Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-red/90 to-secondary-gold/90 p-8 rounded-lg text-background-white text-center shadow-xl animate-[fadeIn_0.7s_ease-in-out_0.7s_both]">
          <h3 className="text-2xl font-bold mb-4">Vizija 2026: Vrhunska kvaliteta i personalizirani pristup</h3>
          <p className="max-w-3xl mx-auto">Cilj nam je postati najprepoznatljivija turistička agencija u regiji, s naglaskom na personalizirani pristup, jedinstvena iskustva i putovanja koja stvaraju uspomene za cijeli život.</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistorySection;