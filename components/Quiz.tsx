
import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => step < totalSteps && setStep(step + 1);

  return (
    <section id="quiz" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[48px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] flex flex-col md:flex-row min-h-[650px] border border-slate-100">
          {/* Левая панель - Статус и бонусы */}
          <div className="md:w-1/3 bg-indigo-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 uppercase leading-tight tracking-tighter">Онлайн-расчёт <br /><span className="text-yellow-400">стоимости</span></h3>
              <p className="text-indigo-100 text-sm mb-10 font-medium leading-relaxed">Ответьте на 4 вопроса, и мы пришлем вам 3 варианта сметы (эконом, стандарт, премиум) под ваш бюджет.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 bg-white/10 p-5 rounded-3xl border border-white/20 backdrop-blur-md">
                  <div className="w-14 h-14 bg-yellow-400 text-indigo-900 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform -rotate-3">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Ваша выгода:</div>
                    <div className="text-xs text-yellow-400 font-black uppercase tracking-widest">Сертификат 10 000 ₽</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 mb-3">
                <span>Завершено: {Math.round((step / totalSteps) * 100)}%</span>
                <span>Шаг {step} из {totalSteps}</span>
              </div>
              <div className="w-full h-2 bg-indigo-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 transition-all duration-1000 shadow-[0_0_20px_rgba(250,204,21,0.6)]" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
              </div>
            </div>
          </div>

          {/* Правая панель - Вопросы */}
          <div className="md:w-2/3 p-6 sm:p-12 md:p-20 relative bg-white">
            {step === 1 && (
              <div className="animate-fade-in space-y-6 sm:space-y-10">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight italic">01. Выберите конфигурацию:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                  {[
                    { name: 'Прямая', icon: 'fa-square' },
                    { name: 'Угловая (Г)', icon: 'fa-chart-area' },
                    { name: 'П-образная', icon: 'fa-table-cells-large' },
                    { name: 'С островом', icon: 'fa-border-all' },
                    { name: 'Двухрядная', icon: 'fa-grip-lines' },
                    { name: 'В нишу', icon: 'fa-maximize' }
                  ].map((item, idx) => (
                    <button key={idx} onClick={nextStep} className="p-4 sm:p-8 border-2 border-slate-50 rounded-2xl sm:rounded-[32px] hover:border-indigo-600 hover:bg-indigo-50/50 transition-all group flex flex-col items-center gap-2 sm:gap-4 active:scale-95 shadow-sm hover:shadow-xl">
                      <i className={`fa-solid ${item.icon} text-2xl sm:text-4xl text-slate-200 group-hover:text-indigo-600 transition-colors`}></i>
                      <span className="font-bold text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-slate-500 group-hover:text-slate-900 text-center">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-6 sm:space-y-10">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight italic">02. Какой материал фасада?</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  {[
                    { name: 'Пластик (HPL/FENIX)', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400' },
                    { name: 'Эмаль (Краска)', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400' },
                    { name: 'Пленка ПВХ (Soft-touch)', img: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=400' },
                    { name: 'Массив дерева', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400' }
                  ].map((item, idx) => (
                    <button key={idx} onClick={nextStep} className="relative h-28 sm:h-40 rounded-2xl sm:rounded-[32px] overflow-hidden group border-4 border-transparent hover:border-indigo-600 active:scale-95 transition-all shadow-md">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end justify-center p-3 sm:p-6">
                        <span className="text-white font-black text-[9px] sm:text-xs text-center uppercase leading-tight tracking-[0.05em] sm:tracking-[0.1em]">{item.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-6 sm:space-y-10">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight italic">03. Когда планируете монтаж?</h4>
                <div className="grid gap-4">
                  {[
                    'Как можно быстрее (нужна кухня сейчас)',
                    'В течение 1-2 месяцев',
                    'После завершения ремонта',
                    'Просто прицениваюсь'
                  ].map((range, idx) => (
                    <button key={idx} onClick={nextStep} className="w-full p-6 border-2 border-slate-50 rounded-2xl hover:border-indigo-600 hover:bg-indigo-50 font-black text-left transition-all uppercase text-xs tracking-widest flex justify-between items-center group active:scale-95 shadow-sm">
                      {range}
                      <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-indigo-600 flex items-center justify-center transition-colors">
                        <i className="fa-solid fa-chevron-right text-slate-300 group-hover:text-white text-[10px]"></i>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in flex flex-col items-center justify-center text-center py-6">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-4xl mb-10 shadow-inner">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="text-4xl font-black mb-4 uppercase leading-none tracking-tighter">Почти готово!</h4>
                <p className="text-slate-500 mb-10 max-w-sm font-medium">Введите ваш номер телефона. Мы отправим расчет в WhatsApp и закрепим за вами <span className="text-indigo-600 font-black">сертификат 10 000 ₽</span>.</p>
                <div className="w-full max-w-sm space-y-4">
                  <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full px-8 py-6 bg-slate-50 border-none rounded-3xl text-2xl font-black outline-none ring-4 ring-transparent focus:ring-indigo-100 transition-all text-center placeholder:text-slate-300" />
                  <button className="w-full bg-indigo-600 text-white font-black py-6 rounded-3xl text-xl shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-all transform hover:scale-[1.03] active:scale-95 uppercase tracking-widest">
                    Получить расчет в WhatsApp
                  </button>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter flex items-center justify-center gap-2">
                    <i className="fa-solid fa-lock"></i>
                    Ваши данные защищены и не передаются третьим лицам
                  </p>
                </div>
              </div>
            )}

            {step < totalSteps && (
              <div className="mt-16 flex justify-start">
                <button
                  onClick={() => step > 1 && setStep(step - 1)}
                  className={`text-slate-300 hover:text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 transition-colors ${step === 1 ? 'invisible' : ''}`}
                >
                  <i className="fa-solid fa-arrow-left"></i> Назад
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
