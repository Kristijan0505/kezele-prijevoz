import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ana Kezele',
      role: 'Organizatorica Putovanja',
      description: 'S entuzijazmom planira izlete, osiguravajući da svaki detalj bude savršen. Ana brine o svakom aspektu vašeg putovanja da bi vaše iskustvo bilo neprocjenjivo.',
      avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      delay: 100
    },
    {
      id: 2,
      name: 'Marko Kezele',
      role: 'Vozač i Tehnički Direktor',
      description: 'Iskusan vozač s 20+ godina iskustva koji brine o vašoj sigurnosti i udobnosti. Marko osobno nadgleda održavanje naše flote i obuku svih vozača.',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      delay: 200
    },
    {
      id: 3,
      name: 'Iva Novak',
      role: 'Turistički Vodič',
      description: 'Dijeli priče o destinacijama, čineći svaki obilazak posebnim. Ivin entuzijazam i bogato znanje o povijesti i kulturi obogaćuju svako putovanje.',
      avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      delay: 300
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
            Ljudi iza putovanja
          </span>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-background-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.1s_both]">
            Upoznajte Stručni Tim
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-background-white max-w-3xl mx-auto mt-6 animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Tim stručnjaka, vozača i vodiča posvećen stvaranju nezaboravnih putovanja, dijeleći ljubav prema Hrvatskoj i svijetu s vama.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`bg-background-white rounded-lg shadow-lg overflow-hidden animate-[fadeInUp_0.7s_ease-in-out_${member.delay}ms_both] hover:shadow-xl transition-all duration-300 group`}
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="p-6 text-center">
                <div className="relative mx-auto mb-6 w-24 h-24 rounded-full overflow-hidden border-4 border-secondary-gold group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="100"
                    height="100"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-secondary-gold/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary-red" itemProp="name">{member.name}</h3>
                <p className="text-secondary-gold font-medium mb-3" itemProp="jobTitle">{member.role}</p>
                <p className="text-neutral-gray text-sm mb-4" itemProp="description">{member.description}</p>
                
                <div className="pt-4 border-t border-gray-100 flex justify-center space-x-4">
                  <a href="tel:+385976232530" className="text-neutral-gray hover:text-primary-red transition-colors duration-300" aria-label="Phone" itemProp="telephone">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="mailto:kezele.prijevoz@gmail.com" className="text-neutral-gray hover:text-primary-red transition-colors duration-300" aria-label="Email" itemProp="email">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-neutral-gray hover:text-primary-red transition-colors duration-300" aria-label="Location">
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
                
                <meta itemProp="worksFor" content="Kezele Prijevoz i Turistička Agencija" />
                <meta itemProp="nationality" content="HR" />
              </div>
              
              <div className="bg-gradient-to-r from-primary-red to-secondary-gold h-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-background-white rounded-lg shadow-xl p-8 animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
          <h3 className="text-2xl font-semibold text-primary-red mb-4 text-center">Obećanja Kojima se Vodimo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-light-gray/30 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-gold mb-2">Posvećenost Putnicima</h4>
              <p className="text-neutral-gray">
                Svaki član našeg tima predano radi kako bi vaše putovanje bilo ugodno i bezbrižno od prvog kontakta do povratka kući.
              </p>
            </div>
            
            <div className="bg-light-gray/30 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-gold mb-2">Stručno Vodstvo</h4>
              <p className="text-neutral-gray">
                Naši vodiči nisu samo informirani, već strastveni zaljubljenici u putovanja koji će vam otkriti skrivene dragulje svake destinacije.
              </p>
            </div>
            
            <div className="bg-light-gray/30 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-gold mb-2">Sigurnost Prije Svega</h4>
              <p className="text-neutral-gray">
                Od našeg tehničkog osoblja do vozača, svi dijele zajedničku predanost vašoj sigurnosti na svakom kilometru putovanja.
              </p>
            </div>
            
            <div className="bg-light-gray/30 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-secondary-gold mb-2">Kontinuirano Usavršavanje</h4>
              <p className="text-neutral-gray">
                Redovito educiramo naš tim o novim trendovima, destinacijama i najboljim praksama kako bismo uvijek pružali prvoklasnu uslugu.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-neutral-gray italic">
              "Nije važno gdje putujete, već s kim putujete."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;