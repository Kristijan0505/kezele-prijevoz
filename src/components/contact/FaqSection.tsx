import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen, delay }) => {
  return (
    <div className={`border-b border-light-gray/50 last:border-b-0 animate-[fadeInUp_0.7s_ease-in-out_${delay}ms_both]`}>
      <button
        className="w-full text-left py-4 px-0 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-secondary-gold focus:ring-offset-2 focus:ring-offset-light-gray rounded-md"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-primary-red">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-secondary-gold flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-secondary-gold flex-shrink-0" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-neutral-gray leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: 'Kako mogu rezervirati putovanje?',
      answer: 'Rezervacije možete napraviti na nekoliko načina: putem kontakt obrasca na našoj web stranici, telefonskim pozivom na +385 97 623 2530, e-mailom na kezele.prijevoz@gmail.com ili osobnim dolaskom u našu poslovnicu u Zagrebu. Nakon što primimo vaš upit, kontaktirat ćemo vas u najkraćem mogućem roku s potvrdom dostupnosti i detaljima putovanja.'
    },
    {
      question: 'Jesu li vaša putovanja sigurna?',
      answer: 'Apsolutno. Sigurnost naših putnika nam je na prvom mjestu. Koristimo moderne autobuse koji prolaze redovite tehničke preglede, a svi naši vozači su iskusni profesionalci s potrebnim kvalifikacijama. Pridržavamo se svih relevantnih sigurnosnih standarda i propisa, a za svako putovanje osiguravamo i putno osiguranje. Na našim putovanjima uvijek je prisutan i stručni vodič koji brine o svim aspektima putovanja.'
    },
    {
      question: 'Nudite li prilagođena putovanja za grupe?',
      answer: 'Da, nudimo potpuno prilagođena putovanja za grupe prema vašim željama i potrebama. Bilo da se radi o školskom izletu, team buildingu, obiteljskom okupljanju ili vjerskom hodočašću, možemo organizirati putovanje koje odgovara vašim specifičnim zahtjevima. To uključuje prilagođeni itinerer, odabir smještaja, aktivnosti i trajanje putovanja. Kontaktirajte nas s vašim idejama i pomoći ćemo vam isplanirati savršeno grupno putovanje.'
    },
    {
      question: 'Kako izvršiti plaćanje i koja su pravila otkazivanja?',
      answer: 'Plaćanje možete izvršiti gotovinom u našoj poslovnici, bankovnim transferom ili kreditnim karticama. Za većinu putovanja potrebno je platiti predujam od 30% prilikom rezervacije, a ostatak do 7 dana prije polaska. Za otkazivanje do 30 dana prije polaska vraćamo puni iznos umanjen za administrativne troškove, za otkazivanje 15-30 dana prije polaska vraćamo 70% iznosa, a za otkazivanje 7-14 dana prije polaska vraćamo 50% iznosa. Za otkazivanje manje od 7 dana prije polaska, nažalost, nismo u mogućnosti izvršiti povrat sredstava. Preporučujemo putno osiguranje koje pokriva troškove otkazivanja.'
    },
    {
      question: 'Kakve vrste smještaja nudite na višednevnim putovanjima?',
      answer: 'Na našim višednevnim putovanjima nudimo raznovrsne opcije smještaja prilagođene različitim budžetima i preferencijama. To uključuje hotele s 3 do 5 zvjezdica, privatne apartmane i obiteljske pansione. Svi smještaji koje odabiremo zadovoljavaju naše visoke standarde čistoće, komfora i sigurnosti. Za hodočašća često biramo smještaje blizu svetišta, dok za ljetovanja biramo objekte blizu plaža. Pri rezervaciji možete nam naznačiti svoje preference vezane uz smještaj.'
    },
    {
      question: 'Organizirate li transfere od/do zračne luke?',
      answer: 'Da, pružamo usluge transfera od i do zračnih luka diljem Hrvatske, uključujući Zračnu luku Franjo Tuđman u Zagrebu, Zračnu luku Split, Dubrovnik i ostale. Transfere možete rezervirati kao zasebnu uslugu ili kao dio većeg putnog aranžmana. Naši vozači prate raspored letova i čekaju vas na dolasku, čak i u slučaju kašnjenja. Za rezervaciju transfera, molimo vas da nam javite broj leta, datum i vrijeme dolaska/odlaska, te broj putnika.'
    }
  ];
  
  return (
    <section className="bg-light-gray py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1400')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-red tracking-tight animate-[fadeIn_0.7s_ease-in-out_both]">
            Često Postavljana Pitanja
          </h2>
          
          <div className="w-24 h-1 bg-secondary-gold mx-auto mt-4 mb-6 animate-[draw_1.5s_ease-in-out]"></div>
          
          <p className="text-base md:text-lg text-neutral-gray max-w-3xl mx-auto animate-[fadeIn_0.7s_ease-in-out_0.2s_both]">
            Imate pitanja o našim putovanjima? Ovdje su odgovori na najčešća pitanja. Ako ne pronađete odgovor koji tražite, slobodno nas kontaktirajte.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-background-white rounded-lg shadow-xl p-6 md:p-8 animate-[fadeInUp_0.7s_ease-in-out_0.3s_both]">
          {faqItems.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center animate-[fadeIn_0.7s_ease-in-out_0.6s_both]">
          <p className="text-neutral-gray max-w-2xl mx-auto mb-6">
            Niste pronašli odgovor na svoje pitanje? Kontaktirajte nas direktno i rado ćemo vam pomoći s bilo kakvim upitom.
          </p>
          
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <a 
              href="tel:+385976232530" 
              className="bg-primary-red text-background-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-background-white hover:text-primary-red hover:border-primary-red border border-transparent transition-colors duration-300 shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>Nazovite Nas</span>
            </a>
            
            <a 
              href="mailto:kezele.prijevoz@gmail.com" 
              className="bg-secondary-gold text-background-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-background-white hover:text-secondary-gold hover:border-secondary-gold border border-transparent transition-colors duration-300 shadow-md"
            >
              <Mail className="w-5 h-5" />
              <span>Pošaljite Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;