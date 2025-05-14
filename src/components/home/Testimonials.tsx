import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      quote: 'Izlet na Plitvice s Kezele agencijom bio je savršeno organiziran od početka do kraja! Vodič je bio vrlo informativan i zabavan, autobus udoban, a raspored i tempo izleta odlično usklađeni. Preporučujem svima!',
      author: 'Marija K.',
      avatarUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      id: 2,
      quote: 'Hodočašće u Međugorje s Kezele agencijom bilo je duhovno i ugodno iskustvo. Od trenutka polaska do povratka kući, osoblje se brinulo da imamo sve što trebamo. Svakako ću ponovno putovati s njima!',
      author: 'Ivan P.',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      id: 3,
      quote: 'Već treću godinu zaredom rezerviramo ljetovanje preko Kezele agencije. Njihov izbor hotela u Makarskoj je odličan, cijene pristupačne, a usluga besprijekorna. Postali su naš prvi izbor za obiteljska putovanja!',
      author: 'Ana L.',
      avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      id: 4,
      quote: 'Zimovanje u Austriji organizirano preko Kezele agencije bilo je izvrsno iskustvo. Od smještaja u blizini skijaških staza do izvrsnog prijevoza i organizacije, sve je bilo na najvišoj razini. Jedva čekam sljedeće putovanje!',
      author: 'Petar M.',
      avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    }
  ];

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Calculate max scroll position and set up scroll event handling
    const updateScrollPositions = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.clientWidth;
        const totalWidth = scrollRef.current.scrollWidth;
        const maxScroll = totalWidth - containerWidth;
        
        if (window.innerWidth <= 768) {
          // For mobile, calculate how many cards can be shown
          const cardWidth = 320; // Approximate width of a card including gap
          const visibleCards = Math.floor(containerWidth / cardWidth);
          const maxPosition = Math.max(0, testimonials.length - visibleCards);
          setMaxScrollPosition(maxPosition);
        } else {
          // For desktop, adjust the grid display
          setMaxScrollPosition(0); // No navigation needed on desktop
        }
      }
    };
    
    // Initial calculation
    updateScrollPositions();
    
    // Recalculate on window resize
    window.addEventListener('resize', updateScrollPositions);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', updateScrollPositions);
    }
  }, [testimonials.length]);

  const scrollLeft = () => {
    if (scrollRef.current && scrollPosition > 0) {
      const newPosition = scrollPosition - 1;
      const scrollAmount = 320; // Width of one card + gap
      
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollPosition < maxScrollPosition) {
      const newPosition = scrollPosition + 1;
      const scrollAmount = 320; // Width of one card + gap
      
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollToTestimonial = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 320; // Width of one card + gap
      
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      
      setScrollPosition(index);
    }
  };

  return (
    <section className="bg-neutral-gray py-16 relative overflow-hidden" id="testimonials">
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
      
      {/* Schema.org markup for reviews */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Kezele Prijevoz i Turistička Agencija",
          "url": "https://kezeleprijevoz.hr",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pobjenik 57",
            "addressLocality": "Čazma",
            "postalCode": "43240",
            "addressCountry": "HR"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Marija K."
              },
              "reviewBody": "Izlet na Plitvice s Kezele agencijom bio je savršeno organiziran od početka do kraja! Vodič je bio vrlo informativan i zabavan, autobus udoban, a raspored i tempo izleta odlično usklađeni. Preporučujem svima!"
            },
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Ivan P."
              },
              "reviewBody": "Hodočašće u Međugorje s Kezele agencijom bilo je duhovno i ugodno iskustvo. Od trenutka polaska do povratka kući, osoblje se brinulo da imamo sve što trebamo. Svakako ću ponovno putovati s njima!"
            },
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Ana L."
              },
              "reviewBody": "Već treću godinu zaredom rezerviramo ljetovanje preko Kezele agencije. Njihov izbor hotela u Makarskoj je odličan, cijene pristupačne, a usluga besprijekorna. Postali su naš prvi izbor za obiteljska putovanja!"
            },
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Petar M."
              },
              "reviewBody": "Zimovanje u Austriji organizirano preko Kezele agencije bilo je izvrsno iskustvo. Od smještaja u blizini skijaških staza do izvrsnog prijevoza i organizacije, sve je bilo na najvišoj razini. Jedva čekam sljedeće putovanje!"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "4"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100083362196837",
            "https://www.instagram.com/kezeleprijevoz"
          ]
        }
      `}} />
      
      {/* Testimonials Carousel/Grid */}
      <div className="relative px-6 md:px-16 mt-8">
        {/* Navigation Arrows - Visible only on mobile */}
        <button 
          onClick={scrollLeft}
          className="md:hidden absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-primary-red rounded-full focus:outline-none focus:ring-2 focus:ring-primary-red"
          aria-label="Prethodno svjedočanstvo"
          disabled={scrollPosition === 0}
        >
          <ChevronLeft className="w-6 h-6 text-background-white" />
        </button>
        
        <div 
          ref={scrollRef}
          className={`
            md:grid md:grid-cols-4 md:gap-6
            flex md:flex-wrap overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-8 py-4 scrollbar-hide
          `}
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
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="md:hidden absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-primary-red rounded-full focus:outline-none focus:ring-2 focus:ring-primary-red"
          aria-label="Sljedeće svjedočanstvo"
          disabled={scrollPosition >= maxScrollPosition}
        >
          <ChevronRight className="w-6 h-6 text-background-white" />
        </button>
      </div>
      
      {/* Dots navigation - only show dots on mobile when needed */}
      {isMobile && maxScrollPosition > 0 && (
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: maxScrollPosition + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                index === scrollPosition ? 'bg-secondary-gold scale-125' : 'bg-background-white bg-opacity-50'
              } hover:bg-primary-red transition-all duration-300`}
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