
import React, { useState, useContext } from 'react';
import { getKittenMatchRecommendation } from '../geminiService';
import { LanguageContext } from '../App';

const Assistant: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{ analysis: string; tagline: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const data = await getKittenMatchRecommendation(input, lang);
    setResult(data);
    setLoading(false);
  };

  const labels: any = {
    ru: { h: 'Подбор компаньона', p: 'Расскажите о своем ритме жизни...', btn: 'Анализировать', ph: 'Пример: Живу один, часто в командировках...' },
    en: { h: 'Match Assistant', p: 'Tell us about your lifestyle...', btn: 'Analyze', ph: 'Example: I have 2 kids and a big house...' },
    ua: { h: 'Підбір компаньйона', p: 'Розкажіть про свій ритм життя...', btn: 'Аналізувати', ph: 'Приклад: Маю собаку, живу у квартирі...' }
  };

  return (
    <section className="py-32 bg-[#F9F7F5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8D7B68]/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#8D7B68] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block italic">AI Expert System</span>
          <h2 className="text-5xl font-bold text-[#2D2727] mb-6 tracking-tighter">{labels[lang].h}</h2>
          <p className="text-gray-500 font-light">{labels[lang].p}</p>
        </div>
        
        <div className="bg-white p-1 pb-1 rounded-sm shadow-[0_32px_64px_-16px_rgba(141,123,104,0.15)] border border-[#8D7B68]/5 group transition-all hover:border-[#8D7B68]/20">
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={labels[lang].ph}
            className="w-full h-40 p-8 border-none rounded-sm focus:ring-0 resize-none outline-none font-light text-lg placeholder:text-gray-200"
          />
          <div className="p-4 flex justify-end bg-gray-50/50">
            <button 
              onClick={handleMatch}
              disabled={loading}
              className="px-12 py-4 bg-[#2D2727] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#8D7B68] transition-all disabled:opacity-50 relative overflow-hidden group/btn"
            >
              <span className="relative z-10">{loading ? '...' : labels[lang].btn}</span>
            </button>
          </div>
        </div>

        {result && !loading && (
          <div className="mt-16 animate-fade-in bg-white p-12 border border-[#8D7B68]/10 rounded-sm relative">
            <div className="absolute -top-6 left-12 px-6 py-2 bg-[#8D7B68] text-white text-[10px] font-bold uppercase tracking-widest">
              Рекомендация эксперта
            </div>
            <h4 className="text-2xl font-bold text-[#8D7B68] mb-6 italic">"{result.tagline}"</h4>
            <p className="text-gray-600 leading-loose font-light text-lg">{result.analysis}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Assistant;
