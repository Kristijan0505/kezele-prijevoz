import React from 'react';

interface PrimaryButtonProps {
  text: string;
  href: string;
  className?: string;
  large?: boolean;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, href, className = '', large = false, onClick }) => {
  return (
    <a
      href={href}
      className={`
        bg-primary-red text-background-white 
        px-8 py-4 
        rounded-full 
        font-bold 
        ${large ? 'text-xl' : 'text-lg'} 
        hover:bg-background-white hover:text-primary-red
        hover:scale-105 
        transition-all
        duration-300 
        block 
        mx-auto 
        w-full max-w-sm
        text-center
        shadow-md
        relative
        border border-primary-red
        ${className}
      `}
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-red to-primary-red/80 opacity-0 hover:opacity-100 transition-all duration-300 rounded-full -z-10"></div>
    </a>
  );
};

export default PrimaryButton;