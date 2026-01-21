
import React, { useContext } from 'react';
import { BreedFeature } from '../types';
import { LanguageContext } from '../App';

const FeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-sm hover:shadow-2xl hover:shadow-[#8D7B68]/5 transition-all group">
    <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-[#2D2727]">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-light">{description}</p>
  </div>
);

const BreedIntro: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const labels: any = {
    ru: {
      h2: 'Почему Девон-рекс?',
      f1_t: 'Космические уши', f1_d: 'Их большие, низко посаженные уши напоминают крылья бабочки. Это визитная карточка породы.',
      f2_t: 'Велюровая шерсть', f2_d: 'Уникальная кудрявая шерсть, мягкая как лучший велюр. Они почти не линяют.',
      f3_t: 'Характер эльфа', f3_d: 'Сочетание кошки, собаки и обезьянки. Они преданы хозяину и обожают играть.',
      h3: 'Взгляд, который не отпускает',
      p: 'Девон-рексы обладают огромными выразительными глазами, в которых светится интеллект и бесконечное любопытство.',
      l1: 'Гипоаллергенность (зависит от индивидуальной реакции)',
      l2: 'Высокий интеллект и легкая обучаемость',
      l3: 'Любовь к детям и другим животным'
    },
    en: {
      h2: 'Why Devon Rex?',
      f1_t: 'Cosmic Ears', f1_d: 'Their large, low-set ears resemble butterfly wings. This is the hallmark of the breed.',
      f2_t: 'Velvet Coat', f2_d: 'Unique curly hair, soft as fine velvet. They shed very little.',
      f3_t: 'Elf Character', f3_d: 'A mix of cat, dog, and monkey. They are devoted to their owner and love to play.',
      h3: 'A look that doesn\'t let go',
      p: 'Devon Rexes have huge expressive eyes that glow with intelligence and endless curiosity.',
      l1: 'Hypoallergenic (depends on individual reaction)',
      l2: 'High intelligence and easy trainability',
      l3: 'Love for children and other animals'
    },
    ua: {
      h2: 'Чому Девон-рекс?',
      f1_t: 'Космічні вуха', f1_d: 'Їхні великі, низько посаджені вуха нагадують крила метелика. Це візитна картка породи.',
      f2_t: 'Велюрова шерсть', f2_d: 'Унікальна кучерява шерсть, м\'яка як кращий велюр. Вони майже не линяють.',
      f3_t: 'Характер ельфа', f3_d: 'Поєднання кішки, собаки та мавпочки. Вони віддані господарю та обожнюють грати.',
      h3: 'Погляд, що не відпускає',
      p: 'Девон-рекси мають величезні виразні очі, в яких світиться інтелект і нескінченна цікавість.',
      l1: 'Гіпоалергенність (залежить від індивідуальної реакції)',
      l2: 'Високий інтелект та легка навчуваність',
      l3: 'Любов до дітей та інших тварин'
    }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-6">{labels[lang].h2}</h2>
        <div className="w-20 h-1 bg-[#8D7B68] mx-auto"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <FeatureCard icon="📡" title={labels[lang].f1_t} description={labels[lang].f1_d} />
        <FeatureCard icon="🧤" title={labels[lang].f2_t} description={labels[lang].f2_d} />
        <FeatureCard icon="🧚" title={labels[lang].f3_t} description={labels[lang].f3_d} />
      </div>

      <div className="mt-20 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://picsum.photos/seed/devonlook/800/600" alt="Devon Rex Look" className="rounded-sm shadow-2xl" />
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#2D2727]">{labels[lang].h3}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{labels[lang].p}</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#8D7B68] rounded-full"></span>{labels[lang].l1}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#8D7B68] rounded-full"></span>{labels[lang].l2}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#8D7B68] rounded-full"></span>{labels[lang].l3}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreedIntro;
