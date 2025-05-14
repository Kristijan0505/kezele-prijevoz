import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const SloganBar: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-red via-primary-red to-[#8B0000] py-4 md:py-6 shadow-xl relative overflow-hidden">
      {/* Decorative top and bottom borders with increased visibility */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-gold via-secondary-gold/60 to-secondary-gold"></div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-secondary-gold via-secondary-gold/60 to-secondary-gold"></div>
      
      {/* Enhanced animated decorative elements */}
      <div className="absolute top-1/4 left-[10%] opacity-40">
        <Star className="w-5 h-5 text-secondary-gold animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
      <div className="absolute bottom-1/3 right-[15%] opacity-40">
        <Star className="w-4 h-4 text-secondary-gold animate-[pulse_2.5s_ease-in-out_infinite]" />
      </div>
      <div className="absolute top-2/3 left-[25%] opacity-30">
        <Sparkles className="w-5 h-5 text-background-white animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
      
      {/* Main content container with improved alignment */}
      <div className="container mx-auto px-3 md:px-16 relative z-10">
        <div className="flex items-center justify-center gap-3">
          {/* Left sparkle - only visible on larger screens */}
          <Sparkles className="hidden md:block w-10 h-10 text-secondary-gold flex-shrink-0 animate-[pulse_2s_ease-in-out_infinite] drop-shadow-lg" />
          
          {/* Main slogan text with enhanced readability */}
          <div className="text-background-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold animate-[fadeIn_0.7s_ease-in-out] max-w-4xl">
            {/* Main highlight text with enhanced styling */}
            <p className="mb-0.5 md:mb-0 md:inline">
              <span className="text-background-white font-extrabold drop-shadow-[0_2px_3px_rgba(212,167,55,0.6)] tracking-wide">
                Vi poželite, mi organiziramo!
              </span>
              
              {/* Separator - shown differently on mobile vs desktop */}
              <span className="md:inline hidden mx-2 text-secondary-gold">|</span>
            </p>
            
            {/* Secondary text with italic styling */}
            <p className="mb-0.5 md:mb-0 md:inline leading-snug">
              <span className="italic text-background-white/90 font-medium">
                Izleti, ljetovanja i zimovanja po mjeri obitelji i grupe
              </span>
              
              {/* Another separator - shown differently on mobile vs desktop */}
              <span className="md:inline hidden mx-2 text-secondary-gold">–</span>
            </p>
            
            {/* Final part with bold emphasis and enhanced colors */}
            <p className="md:inline leading-snug">
              <span className="font-extrabold text-[#FFE082] drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                pouzdano, povoljno i s punim iskustvom
              </span>.
            </p>
          </div>
          
          {/* Right sparkle - only visible on larger screens */}
          <Sparkles className="hidden md:block w-10 h-10 text-secondary-gold flex-shrink-0 animate-[pulse_2s_ease-in-out_infinite] drop-shadow-lg" />
        </div>
      </div>
      
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>
    </section>
  );
};

export default SloganBar;