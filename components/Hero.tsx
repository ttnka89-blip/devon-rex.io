
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Hero: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  
  const content = {
    ru: { badge: 'WCF ELITE CATTERY', title: 'Магия Эльфа', sub: 'в вашем доме', p: 'Профессиональное разведение Девон-рексов. Сочетание идеального стандарта и нежности.' },
    en: { badge: 'WCF ELITE CATTERY', title: 'Magic of the Elf', sub: 'in your home', p: 'Professional Devon Rex breeding. A perfect blend of breed standard and soulful companionship.' },
    ua: { badge: 'WCF ELITE CATTERY', title: 'Магія Ельфа', sub: 'у вашому домі', p: 'Професійне розведення Девон-рексів. Поєднання ідеального стандарту та ніжності.' }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(141,123,104,0.08),transparent)]"></div>
        <img 
          src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=1920" 
          alt="Devon Rex" 
          className="w-full h-full object-cover opacity-30 object-right"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#8D7B68]"></span>
            <span className="text-[#8D7B68] text-[10px] font-bold tracking-[0.4em] uppercase">
              {content[lang].badge}
            </span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold text-[#2D2727] leading-[0.9] mb-10 tracking-tighter">
            {content[lang].title} <br/> 
            <span className="italic font-light text-[#8D7B68] serif">{content[lang].sub}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed font-light max-w-xl">
            {content[lang].p}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#kittens" className="group relative px-12 py-5 bg-[#2D2727] text-white text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden rounded-sm">
              <span className="relative z-10">Выбрать котенка</span>
              <div className="absolute inset-0 bg-[#8D7B68] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a href="#about" className="px-12 py-5 border border-gray-200 text-[#2D2727] text-[10px] font-bold uppercase tracking-[0.3em] hover:border-[#8D7B68] hover:text-[#8D7B68] transition-all rounded-sm">
              О породе
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 vertical-text rotate-180 py-4">Scroll to explore</span>
        <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
