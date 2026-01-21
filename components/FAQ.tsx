
import React, { useState, useContext } from 'react';
import { FAQ_MOCK } from '../constants';
import { LanguageContext } from '../App';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0 text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-8 flex justify-between items-center text-left hover:text-[#8D7B68] transition-colors group">
        <h4 className="text-xl font-bold text-[#2D2727] group-hover:text-inherit">{question}</h4>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 font-light leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const labels: any = {
    ru: { h2: 'Частые вопросы', p: 'Все, что нужно знать перед тем, как завести эльфа.' },
    en: { h2: 'Frequently Asked Questions', p: 'Everything you need to know before getting an elf.' },
    ua: { h2: 'Часті питання', p: 'Все, що потрібно знати перед тим, як завести ельфа.' }
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-6">{labels[lang].h2}</h2>
          <p className="text-gray-500 font-light italic">{labels[lang].p}</p>
        </div>
        <div className="divide-y divide-gray-100">
          {FAQ_MOCK[lang].map((item, index) => <FAQItem key={index} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
