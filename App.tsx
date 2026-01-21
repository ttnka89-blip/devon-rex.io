
import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BreedIntro from './components/BreedIntro';
import Standard from './components/Standard';
import Parents from './components/Parents';
import KittenGallery from './components/KittenGallery';
import AboutCattery from './components/AboutCattery';
import Assistant from './components/Assistant';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export type Page = 'home' | 'about' | 'standard' | 'parents' | 'kittens' | 'cattery' | 'articles' | 'faq' | 'contact';
export type Language = 'ua' | 'en' | 'ru';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({ lang: 'ru', setLang: () => {} });

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [lang, setLang] = useState<Language>('ru');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-fade-in">
            <Hero />
            <BreedIntro />
            <Assistant />
            <KittenGallery />
          </div>
        );
      case 'standard':
        return <div className="animate-fade-in"><Standard /><FAQ /></div>;
      case 'parents':
        return <div className="animate-fade-in"><Parents /></div>;
      case 'kittens':
        return <div className="animate-fade-in"><KittenGallery /></div>;
      case 'cattery':
        return <div className="animate-fade-in"><AboutCattery /><Contacts /></div>;
      case 'articles':
        return <div className="animate-fade-in"><Articles /></div>;
      case 'faq':
        return <div className="animate-fade-in"><FAQ /></div>;
      case 'contact':
        return <div className="animate-fade-in"><Contacts /></div>;
      case 'about':
        return <div className="animate-fade-in"><BreedIntro /><Standard /></div>;
      default:
        return <Hero />;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-[#FCFAFA] selection:bg-[#8D7B68] selection:text-white">
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />
        
        <main className="relative">
          {renderContent()}
        </main>

        {/* Floating Contact Action */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
          <a 
            href="https://t.me/greatelf" 
            target="_blank"
            className="w-14 h-14 bg-[#2D2727] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#8D7B68] transition-all hover:scale-110 active:scale-95 group"
          >
            <span className="text-xl">TG</span>
            <span className="absolute right-full mr-4 px-3 py-1 bg-white text-[#2D2727] text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Telegram
            </span>
          </a>
        </div>

        <Footer onNavigate={navigateTo} />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
