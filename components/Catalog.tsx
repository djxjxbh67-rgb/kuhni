
import React from 'react';
import { STYLES } from '../constants';

const Catalog: React.FC = () => {
  return (
    <section id="каталог" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-slate-900 uppercase">Популярные модели 2024</h2>
          <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Выберите направление, а мы создадим индивидуальный проект под ваши размеры за 15 минут.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STYLES.map((style) => (
            <div key={style.id} className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg">
                  Хит продаж
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-black mb-2 text-slate-900">{style.name}</h4>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed line-clamp-2">
                  {style.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Цена под ключ:</div>
                    <div className="text-xl font-black text-indigo-600">{style.priceFrom}</div>
                  </div>
                  <button className="bg-slate-900 hover:bg-indigo-600 text-white w-12 h-12 rounded-2xl transition-all flex items-center justify-center">
                    <i className="fa-solid fa-calculator text-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-12 py-4 rounded-2xl font-black text-sm uppercase transition-all tracking-widest">
            Смотреть весь каталог (более 200 моделей)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
