import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: 'Izlet na Plitvice s Kezele agencijom bio je savršeno organiziran od početka do kraja! Vodič je bio vrlo informativan i zabavan, autobus udoban, a raspored i tempo izleta odlično usklađeni. Preporučujem svima!',
      author: 'Marija K.',
      avatarUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      quote: 'Hodočašće u Međugorje s Kezele agencijom bilo je duhovno i ugodno iskustvo. Od trenutka polaska do povratka kući, osoblje se brinulo da imamo sve što trebamo. Svakako ću ponovno putovati s njima!',
      author: 'Ivan P.',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      quote: 'Već treću godinu zaredom rezerviramo ljetovanje preko Kezele agencije. Njihov izbor hotela u Makarskoj je odličan, cijene pristupačne, a usluga besprijekorna. Postali su naš prvi izbor za obiteljska putovanja!',
      author: 'Ana L.',
      avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      quote: 'Zimovanje u Austriji organizirano preko Kezele agencije bilo je izvrsno iskustvo. Od smještaja u blizini skijaških staza do izvrsnog prijevoza i organizacije, sve je bilo na najvišoj razini. Jedva čekam sljedeće putovanje!',
      author: 'Petar M.',
      avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  useEffect(() => {
    // Calculate max scroll position
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      setMaxScrollPosition(Math.floor(testimonials.length - (clientWidth / 400)));
      
      // Initial scroll position
      if (maxScrollPosition < 0) setMaxScrollPosition(0);
    }
  }, [testimonials.length]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - 1));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      setScrollPosition(Math.min(maxScrollPosition, scrollPosition + 1));
    }
  };

  const scrollToTestimonial = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 400;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setScrollPosition(index);
    }
  };

  return (
    <section className="bg-[#6B7280] py-16 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0 bg-opacity-10"
        aria-hidden="true"
      ></div>
      
      <SectionTitle 
        title="Što Naši Putnici Kažu" 
        description="Ništa ne govori više o kvaliteti naše usluge od zadovoljstva naših putnika. Pročitajte njihova iskustva s putovanja organiziranih preko Kezele agencije."
        lightMode={true}
      />
      
      {/* Testimonials Carousel */}
      <div className="relative px-6 md:px-16 mt-8">
        {/* Navigation Arrows - Visible on all screens */}
        <button 
          onClick={scrollLeft}
          className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 text-[#FFFFFF] hover:text-[#F28C38] duration-300 z-10 bg-[#1E88E5]/40 hover:bg-[#1E88E5]/70 p-2 rounded-full"
          aria-label="Prethodno svjedočanstvo"
          disabled={scrollPosition === 0}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-8 py-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          aria-label="Svjedočanstva klijenata"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              avatarUrl={testimonial.avatarUrl}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 text-[#FFFFFF] hover:text-[#F28C38] duration-300 z-10 bg-[#1E88E5]/40 hover:bg-[#1E88E5]/70 p-2 rounded-full"
          aria-label="Sljedeće svjedočanstvo"
          disabled={scrollPosition >= maxScrollPosition}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
      
      {/* Dots navigation - only show dots when needed */}
      {maxScrollPosition > 0 && (
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: maxScrollPosition + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                index === scrollPosition ? 'bg-[#F28C38] scale-125' : 'bg-[#FFFFFF] bg-opacity-50'
              } hover:bg-[#1E88E5] transition-all duration-300`}
              aria-label={`Idi na svjedočanstvo ${index + 1}`}
              aria-current={index === scrollPosition ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;