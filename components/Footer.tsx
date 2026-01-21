
import React, { useContext } from 'react';
import { Page, LanguageContext } from '../App';
import { LOGO_SVG } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang } = useContext(LanguageContext);

  const labels: any = {
    ru: { p: 'Ваш проводник в удивительный мир Девон-рексов.', h_menu: 'Меню', h_cat: 'Питомник', m1: 'О породе', m2: 'Стандарт WCF', m3: 'Наши кошки', m4: 'Наши котята', m5: 'О питомнике', m6: 'Статьи', m7: 'FAQ', m8: 'Контакты' },
    en: { p: 'Your guide to the amazing world of Devon Rex.', h_menu: 'Menu', h_cat: 'Cattery', m1: 'About Breed', m2: 'WCF Standard', m3: 'Our Cats', m4: 'Our Kittens', m5: 'About Cattery', m6: 'Articles', m7: 'FAQ', m8: 'Contacts' },
    ua: { p: 'Ваш провідник у дивовижний світ Девон-рексів.', h_menu: 'Меню', h_cat: 'Розплідник', m1: 'Про породу', m2: 'Стандарт WCF', m3: 'Наші кішки', m4: 'Наші кошенята', m5: 'Про розплідник', m6: 'Статті', m7: 'FAQ', m8: 'Контакти' }
  };

  return (
    <footer className="bg-[#2D2727] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 text-left">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
              {LOGO_SVG('#FFFFFF')}
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-bold tracking-tighter uppercase">Great <span className="text-[#8D7B68]">Elf</span></span>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase mt-2 text-gray-500">Cattery</span>
              </div>
            </button>
            <p className="text-gray-400 max-w-sm mb-8 font-light text-sm leading-relaxed mt-8">{labels[lang].p}</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-[#8D7B68]">{labels[lang].h_menu}</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">{labels[lang].m1}</button></li>
              <li><button onClick={() => onNavigate('standard')} className="hover:text-white transition-colors">{labels[lang].m2}</button></li>
              <li><button onClick={() => onNavigate('parents')} className="hover:text-white transition-colors">{labels[lang].m3}</button></li>
              <li><button onClick={() => onNavigate('kittens')} className="hover:text-white transition-colors">{labels[lang].m4}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-8 text-[#8D7B68]">{labels[lang].h_cat}</h4>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><button onClick={() => onNavigate('cattery')} className="hover:text-white transition-colors">{labels[lang].m5}</button></li>
              <li><button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">{labels[lang].m6}</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">{labels[lang].m7}</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">{labels[lang].m8}</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-gray-600 uppercase tracking-widest font-bold">
          <p>© 2026 Great Elf Cattery. WCF №25482.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
