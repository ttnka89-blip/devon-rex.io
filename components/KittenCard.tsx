
import React, { useState, useContext } from 'react';
import { Kitten } from '../types';
import { LanguageContext } from '../App';

interface Props {
  kitten: Kitten;
}

const KittenCard: React.FC<Props> = ({ kitten }) => {
  const [showModal, setShowModal] = useState(false);
  const { lang } = useContext(LanguageContext);
  const isAvailable = kitten.status === 'available';

  const labels: any = {
    ru: { avail: 'Доступен', res: 'В резерве', m: 'Мальчик', f: 'Девочка', btn: 'Узнать подробности', res_btn: 'Зарезервирован', dob: 'Дата рождения', e: 'Уши', c: 'Шерсть', ch: 'Характер', book: 'Забронировать', card: 'Карточка котенка' },
    en: { avail: 'Available', res: 'Reserved', m: 'Boy', f: 'Girl', btn: 'Details', res_btn: 'Reserved', dob: 'Birth date', e: 'Ears', c: 'Coat', ch: 'Character', book: 'Reserve', card: 'Kitten Card' },
    ua: { avail: 'Доступний', res: 'В резерві', m: 'Хлопчик', f: 'Дівчинка', btn: 'Дізнатися подробиці', res_btn: 'Зарезервований', dob: 'Дата народження', e: 'Вуха', c: 'Шерсть', ch: 'Характер', book: 'Забронювати', card: 'Картка кошеняти' }
  };

  return (
    <>
      <div className="bg-white rounded-sm overflow-hidden border border-gray-100 group shadow-sm hover:shadow-xl transition-all duration-500">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src={kitten.image} alt={kitten.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${isAvailable ? 'bg-emerald-500 text-white' : 'bg-gray-400 text-white'}`}>
              {isAvailable ? labels[lang].avail : labels[lang].res}
            </span>
            <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[9px] font-bold uppercase tracking-widest text-[#8D7B68]">
              {kitten.gender === 'male' ? labels[lang].m : labels[lang].f}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h4 className="text-2xl font-bold text-[#2D2727] mb-1">{kitten.name}</h4>
          <p className="text-xs text-[#8D7B68] font-bold uppercase tracking-widest mb-4">{kitten.color}</p>
          <div className="space-y-3 mb-8 text-sm text-gray-500 font-light leading-relaxed">
            <p><strong>{labels[lang].dob}:</strong> {new Date(kitten.birthDate).toLocaleDateString(lang === 'en' ? 'en-US' : 'uk-UA')}</p>
            <p className="line-clamp-2">{kitten.description}</p>
          </div>
          <button onClick={() => setShowModal(true)} className={`w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm border ${isAvailable ? 'bg-[#2D2727] text-white border-[#2D2727] hover:bg-[#8D7B68] hover:border-[#8D7B68]' : 'border-gray-200 text-gray-400 cursor-not-allowed'}`}>
            {isAvailable ? labels[lang].btn : labels[lang].res_btn}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2727]/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-fade-in">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-black z-10"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            <div className="grid md:grid-cols-2">
              <img src={kitten.image} alt={kitten.name} className="w-full h-full min-h-[400px] object-cover" />
              <div className="p-10 md:p-16 text-left">
                <span className="text-[#8D7B68] text-xs font-bold uppercase tracking-widest mb-4 block">{labels[lang].card}</span>
                <h2 className="text-4xl font-bold text-[#2D2727] mb-2">{kitten.name}</h2>
                <p className="text-gray-400 mb-8 font-light italic">{kitten.color} • {kitten.priceClass === 'show' ? 'Show Class' : 'Pet Class'}</p>
                <div className="space-y-8 mb-12">
                  <div className="flex gap-6">
                    <div className="text-2xl opacity-30">👂</div>
                    <div><h5 className="font-bold text-xs uppercase tracking-widest mb-1">{labels[lang].e}</h5><p className="text-sm text-gray-600 font-light">{kitten.parameters.ears}</p></div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-2xl opacity-30">🧥</div>
                    <div><h5 className="font-bold text-xs uppercase tracking-widest mb-1">{labels[lang].c}</h5><p className="text-sm text-gray-600 font-light">{kitten.parameters.coat}</p></div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-2xl opacity-30">🎭</div>
                    <div><h5 className="font-bold text-xs uppercase tracking-widest mb-1">{labels[lang].ch}</h5><p className="text-sm text-gray-600 font-light">{kitten.parameters.character}</p></div>
                  </div>
                </div>
                <a href="#contact" onClick={() => setShowModal(false)} className="inline-block px-12 py-5 bg-[#8D7B68] text-white font-bold uppercase tracking-widest hover:bg-[#2D2727] transition-all rounded-sm text-center w-full">{labels[lang].book}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KittenCard;
