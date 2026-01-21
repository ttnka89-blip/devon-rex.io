
import React, { useState, useContext } from 'react';
import { ARTICLES_MOCK } from '../constants';
import { LanguageContext } from '../App';

const Articles: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const labels: any = {
    ru: { h2: 'Полезные статьи', p: 'Мы делимся опытом и знаниями.', read: 'Читать полностью' },
    en: { h2: 'Useful Articles', p: 'We share experience and knowledge.', read: 'Read more' },
    ua: { h2: 'Корисні статті', p: 'Ми ділимося досвідом та знаннями.', read: 'Читати повністю' }
  };

  return (
    <section id="articles" className="py-24 bg-[#F9F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-6">{labels[lang].h2}</h2>
          <div className="w-20 h-1 bg-[#8D7B68] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">{labels[lang].p}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ARTICLES_MOCK[lang].map((article) => (
            <div key={article.id} className="bg-white p-10 border border-gray-100 rounded-sm hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full">
              <span className="text-[10px] font-bold text-[#8D7B68] uppercase tracking-[0.2em] mb-4 block">{article.category}</span>
              <h3 className="text-2xl font-bold text-[#2D2727] mb-4 leading-tight">{article.title}</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light flex-grow">{article.excerpt}</p>
              <button onClick={() => setSelectedArticle(article)} className="text-[10px] font-bold uppercase tracking-widest text-[#2D2727] hover:text-[#8D7B68] flex items-center gap-2 group transition-colors mt-auto">
                {labels[lang].read} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedArticle && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2727]/90 backdrop-blur-md" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-sm shadow-2xl animate-fade-in p-8 md:p-16">
            <button onClick={() => setSelectedArticle(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <span className="text-[#8D7B68] text-xs font-bold uppercase tracking-widest mb-4 block">{selectedArticle.category}</span>
            <h2 className="text-4xl font-bold text-[#2D2727] mb-8">{selectedArticle.title}</h2>
            <div className="prose prose-stone max-w-none text-gray-600 font-light leading-loose space-y-6 text-left">
              <p>{selectedArticle.excerpt}</p>
              <p>...</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;
