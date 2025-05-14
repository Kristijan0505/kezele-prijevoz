import React from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
  lightMode?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, lightMode = false }) => {
  return (
    <div className="text-center px-4 md:px-16 mb-8">
      <h2 
        className={`text-3xl md:text-4xl font-semibold tracking-tight animate-[fadeIn_0.7s_ease-in-out_both] ${
          lightMode ? 'text-background-white' : 'text-primary-red'
        }`}
      >
        {title}
      </h2>
      
      <div className={`w-20 h-1 ${lightMode ? 'bg-secondary-gold' : 'bg-secondary-gold'} mx-auto mt-3 mb-4 animate-[draw_1.5s_ease-in-out]`}></div>
      
      <p 
        className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed animate-[fadeIn_0.7s_ease-in-out_0.2s_both] ${
          lightMode ? 'text-background-white' : 'text-neutral-gray'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;

export { SectionTitle }