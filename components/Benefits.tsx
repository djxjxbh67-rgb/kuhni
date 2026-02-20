
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="преимущества" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <i className={`${benefit.icon} text-2xl text-indigo-600 group-hover:text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
