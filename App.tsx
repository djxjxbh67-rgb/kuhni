
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Benefits from './components/Benefits';
import Catalog from './components/Catalog';
import Process from './components/Process';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-indigo-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Quiz />
        <Benefits />
        
        {/* Banner with urgency */}
        <section className="bg-yellow-400 py-6 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee space-x-12 items-center">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-slate-900 font-black text-xl uppercase italic">
                Успейте заказать со скидкой 30% до 31 августа! • Каменная мойка в подарок! • Сборка за 1 день! • Без переплат салонам! •
              </span>
            ))}
          </div>
        </section>

        <Catalog />
        
        <Process />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Отзывы наших заказчиков</h2>
              <p className="text-slate-500">Уже более 3000 выполненных проектов по всей области</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  <div className="flex text-yellow-500 gap-1">
                    {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-xs"></i>)}
                  </div>
                  <p className="text-slate-600 italic">"Заказывали кухню серии Эмаль. Привезли точно в срок. Монтажник Сергей просто золотые руки — за 6 часов всё собрал, подключил технику и даже за собой убрал. Спасибо!"</p>
                  <div className="flex items-center gap-4 pt-4">
                    <img src={`https://picsum.photos/id/${20+i}/50/50`} className="rounded-full w-12 h-12" alt="Client" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Марина Волкова</div>
                      <div className="text-xs text-slate-400">Договор №1544/23</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIAssistant />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
