
import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="процесс" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-slate-400">Прозрачный процесс от замера до первой чашки кофе на вашей новой кухне.</p>
          </div>
          <div className="text-indigo-500 font-bold text-lg hidden md:block">
            04 ЭТАПА ДО МЕЧТЫ
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 hidden lg:block -translate-y-12"></div>
          
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-black shadow-2xl shadow-indigo-600/30">
                {step.number}
              </div>
              <h4 className="text-xl font-bold">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
