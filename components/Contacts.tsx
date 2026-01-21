
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

const Contacts: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const labels: any = {
    ru: { h2: 'Напишите нам', p: 'Задайте любой вопрос или забронируйте визит.', success_h: 'Спасибо!', success_p: 'Мы свяжемся с вами.', name: 'Ваше имя', contact: 'Email / Телефон', msg: 'Ваше сообщение', btn: 'Отправить запрос', loading: 'Отправка...', info: 'Наши контакты', addr_l: 'Адрес', addr_v: 'Украина, г. Новомосковск', note: '* Посещение только по договоренности.' },
    en: { h2: 'Write to us', p: 'Ask any question or book a visit.', success_h: 'Thank you!', success_p: 'We will contact you.', name: 'Your Name', contact: 'Email / Phone', msg: 'Your message', btn: 'Send request', loading: 'Sending...', info: 'Our Contacts', addr_l: 'Address', addr_v: 'Ukraine, Novomoskovsk', note: '* Visits by prior arrangement only.' },
    ua: { h2: 'Напишіть нам', p: 'Поставте будь-яке питання або забронюйте візит.', success_h: 'Дякуємо!', success_p: 'Ми зв\'яжемося з вами.', name: 'Ваше ім\'я', contact: 'Email / Телефон', msg: 'Ваше повідомлення', btn: 'Надіслати запит', loading: 'Відправка...', info: 'Наші контакти', addr_l: 'Адреса', addr_v: 'Україна, м. Новомосковськ', note: '* Відвідування тільки за домовленістю.' }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-8">{labels[lang].h2}</h2>
            <p className="text-gray-500 mb-12 font-light">{labels[lang].p}</p>
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-sm text-center animate-fade-in">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-bold text-emerald-800 mb-2">{labels[lang].success_h}</h4>
                <p className="text-emerald-600 font-light">{labels[lang].success_p}</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input required type="text" placeholder={labels[lang].name} className="w-full px-6 py-4 bg-[#F9F7F5] border-none rounded-sm outline-none focus:ring-1 focus:ring-[#8D7B68] transition-all" />
                  <input required type="text" placeholder={labels[lang].contact} className="w-full px-6 py-4 bg-[#F9F7F5] border-none rounded-sm outline-none focus:ring-1 focus:ring-[#8D7B68] transition-all" />
                </div>
                <textarea required placeholder={labels[lang].msg} className="w-full px-6 py-4 bg-[#F9F7F5] border-none rounded-sm outline-none focus:ring-1 focus:ring-[#8D7B68] transition-all h-32 resize-none"></textarea>
                <button disabled={isLoading} className="px-12 py-5 bg-[#2D2727] text-white font-bold uppercase tracking-widest hover:bg-[#8D7B68] transition-all rounded-sm w-full md:w-auto disabled:opacity-50">
                  {isLoading ? labels[lang].loading : labels[lang].btn}
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[#F9F7F5] p-12 rounded-sm">
              <h4 className="text-2xl font-bold text-[#2D2727] mb-8">{labels[lang].info}</h4>
              <ul className="space-y-8 text-gray-600 font-light">
                <li className="flex items-start gap-5">
                  <span className="text-2xl text-[#8D7B68]">📍</span>
                  <div><h5 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">{labels[lang].addr_l}</h5><p className="text-lg">{labels[lang].addr_v}</p></div>
                </li>
                <li className="flex items-start gap-5">
                  <span className="text-2xl text-[#8D7B68]">📞</span>
                  <div><h5 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</h5><a href="tel:+380000000000" className="text-lg hover:text-[#8D7B68] transition-colors">+38 (000) 000-00-00</a></div>
                </li>
              </ul>
              <div className="mt-12 pt-12 border-t border-gray-200"><p className="text-sm text-gray-400 italic">{labels[lang].note}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
