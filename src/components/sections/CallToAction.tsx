import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-background-white py-16 relative overflow-hidden">
      <div className="flex flex-col items-center px-6 md:px-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary-red text-center tracking-tight animate-[fadeIn_0.7s_ease-in-out_both]">
          Spremni za Nezaboravnu Avanturu?
        </h2>
        
        <p className="text-base md:text-lg text-neutral-gray max-w-5xl mx-auto mt-4 text-center leading-relaxed animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
          Ne propustite priliku za putovanje koje će vas ispuniti prekrasnim uspomenama. Kontaktirajte nas danas i dozvolite nam da vam pomognemo isplanirati vaše sljedeće savršeno putovanje. Naš ljubazni tim stoji vam na raspolaganju za sve informacije i rezervacije.
        </p>
        
        <div className="mt-8 animate-[zoomIn_0.7s_ease-in-out_0.3s_both]">
          <PrimaryButton 
            text="Rezerviraj Svoje Putovanje" 
            href="/kontakt"
            className="px-10 py-5 text-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 bg-primary-red text-background-white hover:bg-primary-red/90 hover:text-background-white border-2 border-primary-red"
            large
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;