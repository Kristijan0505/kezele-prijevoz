import React from 'react';
import { Bus, Award, Shield, Heart } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import PrimaryButton from '../ui/PrimaryButton';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#F4E4BC] py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-opacity-10"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-[fadeIn_0.7s_ease-in-out]">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1E88E5] tracking-tight">
            O Nama – Vaš Pouzdani Suputnik
          </h2>
          <div className="w-24 h-1 bg-[#F28C38] mx-auto mt-4 animate-[draw_2s_ease-in-out]"></div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-16">
          {/* Image */}
          <div className="md:w-5/12">
            <div className="relative rounded-lg shadow-xl overflow-hidden animate-[zoomIn_0.7s_ease-in-out_0.3s_both] hover:scale-105 transition-all duration-500 group">
              <img 
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Naš moderni autobus za putovanja" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E88E5]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">Moderni i udobni autobusi</span>
              </div>
            </div>
            
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.5s_both]">
                <Shield className="w-12 h-12 text-[#1E88E5] mb-2" />
                <span className="text-[#6B7280] font-semibold">Sigurnost</span>
              </div>
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
                <Award className="w-12 h-12 text-[#1E88E5] mb-2" />
                <span className="text-[#6B7280] font-semibold">Kvaliteta</span>
              </div>
              <div className="flex flex-col items-center animate-[fadeIn_0.7s_ease-in-out_0.7s_both]">
                <Heart className="w-12 h-12 text-[#1E88E5] mb-2" />
                <span className="text-[#6B7280] font-semibold">Briga</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-7/12 md:text-left">
            <div className="bg-white rounded-lg shadow-lg p-8 animate-[fadeInLeft_0.7s_ease-in-out_both]">
              <Bus className="w-12 h-12 text-[#F28C38] mb-4 animate-pulse" />
              
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed mb-4">
                <span className="text-[#1E88E5] font-semibold">Kezele Prijevoz i Turistička Agencija</span> je obiteljska tvrtka s tradicijom dugom 15 godina. Naša je misija pružiti nezaboravno putničko iskustvo svakom našem klijentu.
              </p>
              
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed mb-4">
                Mi nismo samo prijevoznici – mi smo kreatori nezaboravnih uspomena. Naši vozači nisu samo profesionalci za volanom, već ljubazni domaćini koji poznaju svaki kutak naših destinacija.
              </p>
              
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed mb-4">
                Naša flota modernih autobusa opremljena je svim pogodnostima za udobno putovanje – od klima uređaja i udobnih sjedala do besplatnog WiFi-ja i punjača za mobitele.
              </p>
              
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold text-[#1E88E5] mb-3">Zašto odabrati Kezele?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#F28C38] mr-2">✓</span>
                    <span className="text-[#6B7280]">Personalizirani pristup svakom putniku</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F28C38] mr-2">✓</span>
                    <span className="text-[#6B7280]">Besprijekorno održavani i moderni autobusi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F28C38] mr-2">✓</span>
                    <span className="text-[#6B7280]">Iskusni vozači i stručni turistički vodiči</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F28C38] mr-2">✓</span>
                    <span className="text-[#6B7280]">Pažljivo odabrane destinacije i smještaj</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;