import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';

const HeroSection: React.FC = () => {
  const scrollToContactForm = () => {
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[450px] md:min-h-[600px] bg-light-gray overflow-hidden pt-24 md:pt-32">
      {/* Hero Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 animate-[fadeIn_1.2s_ease-in-out]"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/8CmHrg1H/turisticka-agencija-kontakt.jpg")'
        }}
      />
      
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-background-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.2s_both] text-shadow-lg mb-6">
            Kontaktirajte Nas
          </h1>
          
          <div className="w-20 h-1 bg-secondary-gold mx-auto mb-6 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-lg md:text-xl text-background-white max-w-2xl mx-auto mb-8 animate-[fadeIn_0.7s_ease-in-out_0.3s_both]">
            Spremni smo odgovoriti na sva vaša pitanja i pomoći vam organizirati putovanje po vašoj mjeri.
          </p>
          
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.4s_both] max-w-md mx-auto">
            <PrimaryButton 
              text="Pošalji Upit" 
              href="#contact-form-section" 
              className="shadow-lg hover:shadow-xl" 
              large
              onClick={scrollToContactForm}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;