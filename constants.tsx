
import { Kitten, Parent, Review } from './types';
import React from 'react';

export const COLORS = {
  primary: '#8D7B68',
  accent: '#A4907C',
  light: '#F1DEC9',
  dark: '#2D2727',
};

export const LOGO_SVG = (color: string = '#8D7B68') => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" stroke={color} strokeWidth="2"/>
    <path d="M35 45C35 45 20 25 25 15C30 5 45 35 45 35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M65 45C65 45 80 25 75 15C70 5 55 35 55 35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 55C40 55 45 60 50 60C55 60 60 55 60 55" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M45 50A2 2 0 1 1 41 50A2 2 0 1 1 45 50Z" fill={color}/>
    <path d="M59 50A2 2 0 1 1 55 50A2 2 0 1 1 59 50Z" fill={color}/>
  </svg>
);

export const PARENTS_MOCK: Record<string, Parent[]> = {
  ru: [
    { id: 'p1', name: 'GICH Grand Master Great Elf', gender: 'male', titles: 'Grand International Champion WCF', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800', description: 'Наш главный производитель. Обладатель идеального профиля и уникального характера.' },
    { id: 'p2', name: 'CH Luna Lovegood', gender: 'female', titles: 'Champion WCF', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800', description: 'Невероятно ласковая кошка с потрясающим качеством шерсти и «велюровым» завитком.' }
  ],
  en: [
    { id: 'p1', name: 'GICH Grand Master Great Elf', gender: 'male', titles: 'Grand International Champion WCF', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800', description: 'Our lead sire. Possesses a perfect profile and a unique character.' },
    { id: 'p2', name: 'CH Luna Lovegood', gender: 'female', titles: 'Champion WCF', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800', description: 'Incredibly affectionate cat with amazing coat quality and "velvet" curl.' }
  ],
  ua: [
    { id: 'p1', name: 'GICH Grand Master Great Elf', gender: 'male', titles: 'Grand International Champion WCF', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800', description: 'Наш головний плідник. Володар ідеального профілю та унікального характеру.' },
    { id: 'p2', name: 'CH Luna Lovegood', gender: 'female', titles: 'Champion WCF', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800', description: 'Неймовірно лагідна кішка з приголомшливою якістю шерсті та «велюровим» завитком.' }
  ]
};

export const KITTENS_MOCK: Record<string, Kitten[]> = {
  ru: [
    {
      id: '1', name: 'Ariel Great Elf', gender: 'female', status: 'available', color: 'Sia-Point / Seal-Point', birthDate: '2023-10-15', description: 'Невероятно ласковая девочка с выразительными голубыми глазами. Настоящая принцесса.', priceClass: 'show', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Широко посаженные, низкие', coat: 'Плотный, равномерный завиток', character: 'Социальная, очень контактная' }
    },
    {
      id: '2', name: 'Benny Great Elf', gender: 'male', status: 'available', color: 'Chocolate-Point', birthDate: '2023-11-20', description: 'Маленький исследователь с шоколадным носом. Очень активный и игривый мальчик.', priceClass: 'pet', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Крупные, открытые', coat: 'Мягкий, короткий завиток', character: 'Любознательный, бесстрашный' }
    },
    {
      id: '3', name: 'Chloe Great Elf', gender: 'female', status: 'reserved', color: 'Blue-Point', birthDate: '2023-10-25', description: 'Грациозная леди с нежным характером. Уже нашла свою любящую семью.', priceClass: 'show', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Низко посаженные, корректные', coat: 'Идеальная текстура', character: 'Спокойная, ласковая' }
    }
  ],
  en: [
    {
      id: '1', name: 'Ariel Great Elf', gender: 'female', status: 'available', color: 'Sia-Point / Seal-Point', birthDate: '2023-10-15', description: 'Incredibly affectionate girl with expressive blue eyes. A true princess.', priceClass: 'show', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Wide-set, low-set ears', coat: 'Dense, even curl', character: 'Social and very communicative' }
    },
    {
      id: '2', name: 'Benny Great Elf', gender: 'male', status: 'available', color: 'Chocolate-Point', birthDate: '2023-11-20', description: 'A little explorer with a chocolate nose. Very active and playful boy.', priceClass: 'pet', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Large, open ears', coat: 'Soft, short curl', character: 'Curious and fearless' }
    },
    {
      id: '3', name: 'Chloe Great Elf', gender: 'female', status: 'reserved', color: 'Blue-Point', birthDate: '2023-10-25', description: 'A graceful lady with a gentle character. Already found her loving family.', priceClass: 'show', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Low-set, correct ears', coat: 'Perfect texture', character: 'Calm and affectionate' }
    }
  ],
  ua: [
    {
      id: '1', name: 'Ariel Great Elf', gender: 'female', status: 'available', color: 'Sia-Point / Seal-Point', birthDate: '2023-10-15', description: 'Неймовірно лагідна дівчинка з виразними блакитними очима. Справжня принцеса.', priceClass: 'show', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Широко посаджені, низькі', coat: 'Щільний, рівномірний завиток', character: 'Соціальна, дуже контактна' }
    },
    {
      id: '2', name: 'Benny Great Elf', gender: 'male', status: 'available', color: 'Chocolate-Point', birthDate: '2023-11-20', description: 'Маленький дослідник з шоколадним носиком. Дуже активний та грайливий хлопчик.', priceClass: 'pet', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Великі, відкриті', coat: 'М\'який, короткий завиток', character: 'Допитливий, безстрашний' }
    },
    {
      id: '3', name: 'Chloe Great Elf', gender: 'female', status: 'reserved', color: 'Blue-Point', birthDate: '2023-10-25', description: 'Граціозна леді з ніжним характером. Вже знайшла свою люблячу родину.', priceClass: 'show', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800',
      parameters: { ears: 'Низько посаджені, коректні', coat: 'Ідеальна текстура', character: 'Спокійна, лагідна' }
    }
  ]
};

export const FAQ_MOCK: Record<string, any[]> = {
  ru: [
    { question: "Как забронировать котенка?", answer: "Для бронирования необходимо выбрать свободного котенка и внести депозит в размере 30% от стоимости." },
    { question: "В каком возрасте котята готовы к переезду?", answer: "Котята переезжают в новый дом не ранее 3.5-4 месяцев, после полной вакцинации." }
  ],
  en: [
    { question: "How to reserve a kitten?", answer: "To reserve, you need to choose an available kitten and make a 30% deposit." },
    { question: "At what age are kittens ready to move?", answer: "Kittens move to their new home no earlier than 3.5-4 months, after full vaccination." }
  ],
  ua: [
    { question: "Як забронювати кошеня?", answer: "Для бронювання необхідно обрати вільного кошеня та внести депозит у розмірі 30% від вартості." },
    { question: "У якому віці кошенята готові до переїзду?", answer: "Кошенята переїжджають у новий дім не раніше 3.5-4 місяців, після повної вакцинації." }
  ]
};

export const ARTICLES_MOCK: Record<string, any[]> = {
  ru: [
    { id: 'a1', title: 'Стандарт породы Девон-рекс', excerpt: 'Подробный разбор внешних характеристик...', category: 'Порода' }
  ],
  en: [
    { id: 'a1', title: 'Devon Rex Breed Standard', excerpt: 'Detailed analysis of physical characteristics...', category: 'Breed' }
  ],
  ua: [
    { id: 'a1', title: 'Стандарт породи Девон-рекс', excerpt: 'Детальний розбір зовнішніх характеристик...', category: 'Порода' }
  ]
};

// Mock reviews data for the Reviews component
export const REVIEWS_MOCK: Review[] = [
  {
    id: '1',
    author: 'Елена П.',
    location: 'Днепр, Украина',
    text: 'Это не просто кот, это настоящий инопланетянин! Очень общительный и преданный.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    author: 'Michael R.',
    location: 'Berlin, Germany',
    text: 'The most amazing breed I have ever encountered. Healthy and happy kitten!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];
