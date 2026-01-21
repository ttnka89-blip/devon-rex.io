
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Standard: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const labels: any = {
    ru: {
      title: 'Геометрия совершенства',
      p: 'Девон-рекс — это результат уникальной мутации. Мы строго придерживаемся международных стандартов WCF.',
      items: [
        { label: 'Голова', text: 'Короткий модифицированный клин с выраженными скулами.' },
        { label: 'Уши', text: 'Очень большие, очень широкие у основания, низко посаженные.' },
        { label: 'Шерсть', text: 'Короткая, мягкая, тонкая, курчавая.' },
        { label: 'Тело', text: 'Мускулистое, среднего размера, с широкой грудью.' }
      ]
    },
    en: {
      title: 'Geometry of Perfection',
      p: 'Devon Rex is the result of a unique mutation. We strictly follow international WCF standards.',
      items: [
        { label: 'Head', text: 'Short modified wedge with prominent cheekbones.' },
        { label: 'Ears', text: 'Very large, very wide at the base, set low.' },
        { label: 'Coat', text: 'Short, soft, fine, curly hair.' },
        { label: 'Body', text: 'Muscular, medium size, with a broad chest.' }
      ]
    },
    ua: {
      title: 'Геометрія досконалості',
      p: 'Девон-рекс — це результат унікальної мутації. Ми суворо дотримуємося міжнародних стандартів WCF.',
      items: [
        { label: 'Голова', text: 'Короткий модифікований клин з вираженими вилицями.' },
        { label: 'Вуха', text: 'Дуже великі, дуже широкі біля основи, низько посаджені.' },
        { label: 'Шерсть', text: 'Коротка, м\'яка, тонка, кучерява.' },
        { label: 'Тіло', text: 'Мускулисте, середнього розміру, з широкою груддю.' }
      ]
    }
  };

  return (
    <section id="standard" className="py-24 bg-[#2D2727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#8D7B68] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">WCF Standard</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{labels[lang].title}</h2>
            <p className="text-gray-400 mb-10 leading-relaxed font-light">{labels[lang].p}</p>
            
            <div className="space-y-6">
              {labels[lang].items.map((item: any, i: number) => (
                <div key={i} className="flex gap-6 border-b border-white/5 pb-6">
                  <span className="text-[#8D7B68] font-bold text-lg">0{i+1}</span>
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-widest mb-2">{item.label}</h5>
                    <p className="text-gray-500 text-sm font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" alt="Standard Illustration" className="w-full h-full object-cover grayscale opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standard;
