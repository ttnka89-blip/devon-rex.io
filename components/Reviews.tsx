
import React from 'react';
import { REVIEWS_MOCK } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2727] mb-6">Счастливые семьи</h2>
          <p className="text-gray-500 italic max-w-2xl mx-auto">Выпускники питомника Great Elf живут в разных уголках мира и дарят радость своим владельцам каждый день.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {REVIEWS_MOCK.map(review => (
            <div key={review.id} className="p-10 bg-[#FCFAFA] rounded-sm relative">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.author} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#2D2727]">{review.author}</h4>
                  <p className="text-sm text-[#8D7B68]">{review.location}</p>
                </div>
                <div className="ml-auto flex text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed font-light italic">"{review.text}"</p>
              <div className="absolute top-10 right-10 text-6xl text-gray-100 font-serif -z-0">“</div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          {Array.from({ length: 6 }).map((_, i) => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/grad${i}/300/300`} 
              alt="Graduate" 
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-sm shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
