import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  avatarUrl: string;
  delay: number;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, avatarUrl, delay, rating = 5 }) => {
  return (
    <div 
      className={`
        bg-background-white 
        rounded-lg 
        shadow-lg 
        p-6 
        min-w-[300px] md:min-w-0
        w-[85vw] md:w-auto
        flex-shrink-0 md:flex-shrink
        snap-center md:snap-align-none
        animate-[slideInLeft_0.7s_ease-in-out_${delay}ms_both]
        hover:shadow-xl hover:scale-[1.02] duration-300
        relative
        overflow-hidden
        h-full flex flex-col
      `}
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="absolute -top-6 -left-6 opacity-10 text-primary-red">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.5 4c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5H7.7l-5.1 5c-.4.4-1.1.1-1.1-.4V5.5C1.5 4.7 2.2 4 3 4h18.5z" />
        </svg>
      </div>
      
      <div className="flex gap-4 items-start flex-grow">
        <div className="flex-shrink-0">
          <img 
            src={avatarUrl} 
            alt={`${author} - zadovoljni klijent`}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary-red"
            loading="lazy"
            itemProp="author"
          />
        </div>
        
        <div className="flex-grow">
          <p className="text-neutral-gray italic mb-4 leading-relaxed" itemProp="reviewBody">{quote}</p>
          <p className="text-primary-red font-semibold mt-auto">– {author}</p>
          <meta itemProp="reviewRating" content={rating.toString()} />
          <div className="flex mt-2" aria-label={`Ocjena ${rating} od 5`}>
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-secondary-gold' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-2 right-2 text-secondary-gold transition-opacity duration-300" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.5 6h6.5l-5 4.5 2 6.5-6-4-6 4 2-6.5-5-4.5h6.5z" />
        </svg>
      </div>

      <meta itemProp="datePublished" content="2025-01-01" />
      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/TouristTrip">
        <meta itemProp="name" content="Putovanja s Kezele Prijevozom" />
      </div>
    </div>
  );
};

export default TestimonialCard;