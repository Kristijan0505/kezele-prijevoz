import React, { useState, useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import { Palmtree, Cross, Castle, DivideIcon as LucideIcon, X, ZoomIn, MaximizeIcon, Phone } from 'lucide-react';

interface TripCardProps {
  title: string;
  description: string;
  imageUrl: string;
  iconName: string;
  delay: number;
  imageWidth?: number;
  imageHeight?: number;
}

const TripCard: React.FC<TripCardProps> = ({ title, description, imageUrl, iconName, delay, imageWidth = 800, imageHeight = 600 }) => {
  const [imageError, setImageError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Map icon names to Lucide components
  const iconMap: Record<string, LucideIcon> = {
    'Palmtree': Palmtree,
    'Cross': Cross,
    'Castle': Castle
  };
  
  const Icon = iconMap[iconName] || Palmtree;
  
  const fallbackImageUrl = 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=800';
  const currentImageUrl = imageError ? fallbackImageUrl : imageUrl;

  const openLightbox = () => {
    setLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+385976232530';
  };
  
  return (
    <>
      <div 
        className={`
          bg-background-white 
          rounded-lg 
          shadow-[0_4px_10px_rgba(0,0,0,0.2)] 
          overflow-hidden 
          animate-[fadeInUp_0.7s_ease-in-out_${delay}ms_both]
          hover:animate-[lift_0.5s_ease-in-out]
          transform transition-all duration-500
          h-full flex flex-col
        `}
        itemScope
        itemType="https://schema.org/TouristTrip"
      >
        <div className="relative h-48 overflow-hidden group">
          {isLoading && (
            <div className="absolute inset-0 bg-light-gray flex items-center justify-center z-10">
              <div className="w-10 h-10 border-4 border-t-secondary-gold border-primary-red/30 rounded-full animate-spin"></div>
            </div>
          )}
          
          <img 
            src={currentImageUrl} 
            alt={`Destinacija ${title}`} 
            className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 relative z-10 cursor-pointer ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onError={() => setImageError(true)}
            onLoad={handleImageLoad}
            onClick={openLightbox}
            itemProp="image"
            width={imageWidth}
            height={imageHeight}
          />
          
          {/* Hover indicator for tappable images - without text */}
          <div 
            className="absolute inset-0 bg-primary-red/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 cursor-pointer" 
            onClick={openLightbox}
            aria-hidden="true"
          >
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-secondary-gold" itemProp="name">{title}</h3>
            <Icon className="w-6 h-6 text-primary-red hover:animate-pulse" aria-hidden="true" />
          </div>
          
          <p className="text-neutral-gray mb-6 flex-grow" itemProp="description">{description}</p>
          
          <div className="mt-auto">
            <button
              onClick={handleCallClick}
              className="bg-primary-red text-background-white px-8 py-4 rounded-full font-bold text-lg hover:bg-background-white hover:text-primary-red hover:scale-105 transition-all duration-300 block w-full max-w-none mx-0 text-center shadow-md relative border border-primary-red"
              itemProp="potentialAction" 
              itemScope 
              itemType="https://schema.org/ReserveAction"
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span itemProp="name">Rezerviraj Sada</span>
              </span>
              <meta itemProp="target" content="tel:+385976232530" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-red to-primary-red/80 opacity-0 hover:opacity-100 transition-all duration-300 rounded-full -z-10"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal - Full screen optimized for mobile */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm touch-none"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Uvećana slika destinacije ${title}`}
        >
          {/* Close button - larger on mobile */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-primary-red text-white rounded-full flex items-center justify-center shadow-xl"
            aria-label="Zatvori"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          {/* Image container */}
          <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={currentImageUrl}
                alt={title}
                className="lightbox-image max-w-full max-h-full w-auto h-auto object-contain md:max-w-[90%] md:max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
          
          {/* Caption - better positioned for mobile */}
          <div className="absolute bottom-10 md:bottom-4 left-0 right-0 text-center text-background-white">
            <p className="bg-black/70 inline-block px-6 py-3 md:px-4 md:py-2 rounded-full text-lg md:text-base">{title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TripCard;