
import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
             <i className="fa-solid fa-layer-group text-2xl"></i>
          </div>
          <div className="flex flex-col">
            <span className={`text-3xl font-black tracking-tighter leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              {COMPANY_NAME}
            </span>
            <span className={`text-[9px] font-black uppercase tracking-[0.3em] mt-1 ${isScrolled ? 'text-indigo-600' : 'text-indigo-400'}`}>Мебельный завод СПб</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
          {['Каталог', 'Преимущества', 'Процесс', 'Контакты'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`hover:text-indigo-500 transition-all relative group ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-indigo-600 transition-all group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end">
            <div className={`text-xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>{PHONE_NUMBER}</div>
            <div className={`text-[9px] font-black ${isScrolled ? 'text-green-600' : 'text-green-400'} flex items-center gap-2 uppercase tracking-widest`}>
              <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></span>
              Принимаем заказы 24/7
            </div>
          </div>
          <button className="bg-white text-slate-900 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl text-xs font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest">
            Заказать замер
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
