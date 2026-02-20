
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" 
          alt="Кухни Контракт СПб" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-indigo-600 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl border border-indigo-400/30">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
            Мебельная фабрика полного цикла в СПб
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            КУХНИ С ДУШОЙ <br/>
            <span className="text-indigo-500">ОТ ЗАВОДА</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-200 max-w-2xl font-light leading-relaxed">
            Создаем индивидуальные решения в Санкт-Петербурге с 2010 года. <span className="font-bold text-white">Цены на 35% ниже</span> розничных за счет отсутствия посредников.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#quiz" className="group px-12 py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl text-xl shadow-[0_20px_50px_rgba(79,70,229,0.4)] transition-all transform hover:scale-105 text-center uppercase tracking-tight flex items-center justify-center gap-3">
              Рассчитать стоимость
              <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
            </a>
            <div className="flex flex-col justify-center px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-yellow-400 font-black text-lg">
                <i className="fa-solid fa-gift"></i>
                <span>ПОДАРОК ЗА РАСЧЕТ</span>
              </div>
              <div className="text-white/60 text-xs uppercase tracking-widest font-bold">Мойка или сертификат 10.000₽</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
            {[
              { label: 'Гарантия', val: '10 ЛЕТ' },
              { label: 'Замер по СПб', val: '0 ₽' },
              { label: 'Рассрочка', val: '0%' },
              { label: 'Сборка', val: 'В ПОДАРОК' }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="text-white font-black text-2xl leading-none group-hover:text-indigo-400 transition-colors">{item.val}</div>
                <div className="text-[10px] text-slate-400 uppercase font-black mt-2 tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
