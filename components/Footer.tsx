
import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="контакты" className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 text-slate-900 rounded-xl flex items-center justify-center font-black italic">
                КЗ
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Крупнейшая фабрика мебели в центральном регионе. 12 лет создаем уют на ваших кухнях без переплат.
            </p>
            <div className="flex gap-4">
              {['instagram', 'vk', 'telegram'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-400 hover:text-slate-900 transition-all">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-yellow-400 mb-8">Наши услуги</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Кухни на заказ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Шкафы-купе</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мебель для офиса</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дизайн-проекты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-yellow-400 mb-8">Информация</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">О фабрике</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Наше производство</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гарантия и сервис</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
            <h4 className="font-black uppercase tracking-widest text-xs text-yellow-400 mb-6">Свяжитесь с нами</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-yellow-400 text-xl"></i>
                <div>
                  <div className="text-lg font-black">{PHONE_NUMBER}</div>
                  <div className="text-[10px] uppercase font-bold text-green-400">Круглосуточно</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-location-dot text-yellow-400 text-xl"></i>
                <div className="text-xs font-bold text-slate-300">
                  Москва, МКАД 41-й км, <br />Строительный рынок «Мельница»
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} {COMPANY_NAME}. Информация на сайте не является публичной офертой.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
