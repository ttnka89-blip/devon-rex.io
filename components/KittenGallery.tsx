
import React, { useState, useContext } from 'react';
import KittenCard from './KittenCard';
import { KITTENS_MOCK } from '../constants';
import { LanguageContext } from '../App';

const KittenGallery: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const labels: any = {
    ru: { h2: 'Наши котята', p: 'Каждый малыш растет в любви и заботе.', all: 'Все', m: 'Мальчики', f: 'Девочки', missing_h: 'Не нашли своего эльфа?', missing_p: 'Оставьте заявку, и мы сообщим вам о новом помете.', list: 'Лист ожидания' },
    en: { h2: 'Our Kittens', p: 'Each baby grows up in love and care.', all: 'All', m: 'Boys', f: 'Girls', missing_h: 'Didn\'t find your elf?', missing_p: 'Leave a request, and we will notify you about new litters.', list: 'Waiting List' },
    ua: { h2: 'Наші кошенята', p: 'Кожен малюк росте в любові та турботі.', all: 'Всі', m: 'Хлопчики', f: 'Дівчинки', missing_h: 'Не знайшли свого ельфа?', missing_p: 'Залиште заявку, і ми повідомимо вам про новий приплід.', list: 'Лист очікування' }
  };

  const filteredKittens = KITTENS_MOCK[lang].filter(k => filter === 'all' ? true : k.gender === filter);

  return (
    <section id="kittens" className="py-24 premium-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-4">{labels[lang].h2}</h2>
            <p className="text-gray-600 max-w-xl">{labels[lang].p}</p>
          </div>
          <div className="flex gap-4">
            {(['all', 'male', 'female'] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full border ${filter === f ? 'bg-[#8D7B68] text-white border-[#8D7B68]' : 'bg-white text-gray-500 border-gray-200 hover:border-[#8D7B68]'}`}>
                {f === 'all' ? labels[lang].all : f === 'male' ? labels[lang].m : labels[lang].f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredKittens.map(kitten => <KittenCard key={kitten.id} kitten={kitten} />)}
        </div>
        <div className="mt-16 p-12 bg-[#2D2727] text-white rounded-sm text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">{labels[lang].missing_h}</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-light">{labels[lang].missing_p}</p>
          <a href="#contact" className="inline-block px-10 py-4 border border-white/20 hover:bg-white hover:text-[#2D2727] transition-all text-xs font-bold uppercase tracking-widest">{labels[lang].list}</a>
        </div>
      </div>
    </section>
  );
};

export default KittenGallery;
