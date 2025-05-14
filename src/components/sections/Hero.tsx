import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[550px] md:min-h-[700px] overflow-hidden pt-24 md:pt-32">
      {/* Hero Background Image with Darker Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 animate-[fadeIn_1.2s_ease-in-out]"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1400")'
        }}
      />
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-[#F28C38]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-[fadeIn_0.7s_ease-in-out]">
            <span className="text-[#F4E4BC] font-medium text-sm md:text-base">Otkrijte Hrvatsku i Europu s nama</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight animate-[fadeIn_0.7s_ease-in-out_0.2s_both] text-shadow-lg mb-2">
            Kezele Prijevoz
          </h1>
          
          <div className="w-20 h-1 bg-[#F28C38] mx-auto my-4 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-xl md:text-2xl font-medium text-white mb-6 animate-[fadeIn_0.7s_ease-in-out_0.3s_both]">
            Vaš pouzdani partner za putovanja
          </p>
          
          <div className="animate-[fadeIn_0.7s_ease-in-out_0.4s_both] max-w-md mx-auto">
            <PrimaryButton 
              text="Istražite naše destinacije" 
              href="/kontakt" 
              className="shadow-xl hover:shadow-2xl" 
              large
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;