
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

const AboutCattery: React.FC = () => {
  const [showCerts, setShowCerts] = useState(false);
  const { lang } = useContext(LanguageContext);

  const texts: any = {
    ru: { badge: 'ЗАВОДЧИК ТАТЬЯНА ХМАРА', title: 'Great Elf: Любовь и Стандарты', p1: 'Мы специализируемся на разведении кошек шоу-класса с доставкой по всему миру.', shipping: 'Международная доставка', shippingDesc: 'Полный пакет документов для экспорта (EU, USA, Asia).' },
    en: { badge: 'BREEDER TATIANA KHMARA', title: 'Great Elf: Love & Standards', p1: 'We specialize in breeding show-class cats with worldwide shipping available.', shipping: 'Global Shipping', shippingDesc: 'Full export documentation package (EU, USA, Asia).' },
    ua: { badge: 'ЗАВОДЧИК ТЕТЯНА ХМАРА', title: 'Great Elf: Любов та Стандарти', p1: 'Ми спеціалізуємося на розведенні котів шоу-класу з доставкою по всьому світу.', shipping: 'Міжнародна доставка', shippingDesc: 'Повний пакет документів для експорту (EU, USA, Asia).' }
  };

  return (
    <section id="cattery" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800" alt="Breeder" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#8D7B68] -z-10 rounded-sm"></div>
          </div>
          
          <div>
            <span className="text-[#8D7B68] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">{texts[lang].badge}</span>
            <h2 className="text-5xl font-bold text-[#2D2727] mb-10 tracking-tighter leading-tight">{texts[lang].title}</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">{texts[lang].p1}</p>
            
            <div className="grid sm:grid-cols-2 gap-12 mb-16">
              <div className="p-8 bg-[#F9F7F5] border-l-2 border-[#8D7B68]">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D2727] mb-3">{texts[lang].shipping}</h4>
                <p className="text-sm text-gray-500 font-light">{texts[lang].shippingDesc}</p>
              </div>
              <div className="p-8 bg-[#F9F7F5] border-l-2 border-[#8D7B68]">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D2727] mb-3">WCF Registry</h4>
                <p className="text-sm text-gray-500 font-light">Регистрация №25482. Официальный статус питомника.</p>
              </div>
            </div>
            
            <button onClick={() => setShowCerts(true)} className="px-12 py-5 bg-[#2D2727] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#8D7B68] transition-all rounded-sm shadow-xl shadow-gray-200">
              Сертификаты
            </button>
          </div>
        </div>
      </div>

      {showCerts && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2727]/95 backdrop-blur-md" onClick={() => setShowCerts(false)}></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto p-12 animate-fade-in">
            <button onClick={() => setShowCerts(false)} className="absolute top-8 right-8 text-gray-400 hover:text-black">CLOSE</button>
            <div className="grid md:grid-cols-2 gap-12">
              <img src="https://picsum.photos/seed/c1/800/1100" className="w-full border shadow-sm" alt="Cert" />
              <img src="https://picsum.photos/seed/c2/800/1100" className="w-full border shadow-sm" alt="Cert" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutCattery;
