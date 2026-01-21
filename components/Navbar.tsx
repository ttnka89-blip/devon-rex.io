
import React, { useState, useEffect, useContext } from 'react';
import { Page, LanguageContext, Language } from '../App';
import { LOGO_SVG } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: Page) => {
    e.preventDefault();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const labels: Record<Language, any> = {
    ru: { 
      home: 'Главная', 
      breed: 'О породе', 
      parents: 'Кошки', 
      kittens: 'Котята', 
      cattery: 'Питомник', 
      contact: 'Связаться' 
    },
    en: { 
      home: 'Home', 
      breed: 'Breed', 
      parents: 'Our Cats', 
      kittens: 'Kittens', 
      cattery: 'Cattery', 
      contact: 'Contact' 
    },
    ua: { 
      home: 'Головна', 
      breed: 'Про породу', 
      parents: 'Наші кішки', 
      kittens: 'Кошенята', 
      cattery: 'Розплідник', 
      contact: "Зв'язок" 
    }
  };

  const navLinks: { name: string; id: Page }[] = [
    { name: labels[lang].home, id: 'home' },
    { name: labels[lang].breed, id: 'about' },
    { name: labels[lang].parents, id: 'parents' },
    { name: labels[lang].kittens, id: 'kittens' },
    { name: labels[lang].cattery, id: 'cattery' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-xl py-2 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center gap-3 group">
            {LOGO_SVG('#8D7B68')}
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-tighter uppercase text-[#2D2727]">Great <span className="text-[#8D7B68]">Elf</span></span>
              <span className="text-[7px] font-bold tracking-[0.4em] uppercase text-gray-400">Cattery</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            {navLinks.map((link) => (
              <button key={link.id} onClick={(e) => handleLinkClick(e, link.id)} className={`hover:text-[#8D7B68] transition-colors relative group ${currentPage === link.id ? 'text-[#8D7B68]' : ''}`}>
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px transition-all bg-[#8D7B68] ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold">
              {(['ua', 'en', 'ru'] as Language[]).map(l => (
                <button 
                  key={l} 
                  onClick={() => setLang(l)} 
                  className={`px-2 py-1 transition-colors ${lang === l ? 'text-[#8D7B68]' : 'text-gray-300 hover:text-gray-500'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={(e) => handleLinkClick(e, 'contact')} className="hidden sm:block px-6 py-2.5 bg-[#2D2727] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#8D7B68] transition-all rounded-sm">
              {labels[lang].contact}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#2D2727]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[-1] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-white p-12 flex flex-col items-center justify-center space-y-8">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-gray-400 font-bold uppercase tracking-widest text-xs">Close</button>
          {navLinks.map((link) => (
            <button key={link.id} onClick={(e) => handleLinkClick(e, link.id)} className="text-3xl font-bold uppercase tracking-tighter text-[#2D2727]">{link.name}</button>
          ))}
          <div className="flex gap-6 mt-8">
            {(['ua', 'en', 'ru'] as Language[]).map(l => (
              <button key={l} onClick={() => {setLang(l); setIsMobileMenuOpen(false)}} className={`text-sm font-bold ${lang === l ? 'text-[#8D7B68]' : 'text-gray-300'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
