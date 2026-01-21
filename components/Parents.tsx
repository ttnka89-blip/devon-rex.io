
import React, { useContext } from 'react';
import { PARENTS_MOCK } from '../constants';
import { LanguageContext } from '../App';

const Parents: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const labels: any = {
    ru: { badge: 'Элита питомника', h2: 'Наши кошки', m: 'Кот', f: 'Кошка' },
    en: { badge: 'Cattery Elite', h2: 'Our Cats', m: 'Sire', f: 'Dam' },
    ua: { badge: 'Еліта розплідника', h2: 'Наші кішки', m: 'Кіт', f: 'Кішка' }
  };

  return (
    <section id="parents" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center mb-16">
          <span className="text-[#8D7B68] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{labels[lang].badge}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-6">{labels[lang].h2}</h2>
          <div className="w-20 h-1 bg-[#8D7B68] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {PARENTS_MOCK[lang].map((parent) => (
            <div key={parent.id} className="relative group overflow-hidden bg-[#F9F7F5] rounded-sm">
              <div className="aspect-video overflow-hidden">
                <img src={parent.image} alt={parent.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-[#2D2727]">{parent.name}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${parent.gender === 'male' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'}`}>
                    {parent.gender === 'male' ? labels[lang].m : labels[lang].f}
                  </span>
                </div>
                <p className="text-[#8D7B68] text-xs font-bold uppercase tracking-widest mb-4">{parent.titles}</p>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{parent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parents;
