
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Habka Shaqada</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Sideen u fulinaa mashaariicda?</h3>
          <p className="text-slate-600 text-lg">
            Waxaan raacnaa nidaam cad oo tillaabo tillaabo ah si aan u hubino in macaamiisheena ay helaan natiijooyin tayo leh.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center mb-6 group-hover:border-blue-100 group-hover:scale-110 transition-all duration-300 shadow-lg relative">
                  <div className="w-16 h-16 rounded-full gradient-bg text-white flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center border-4 border-white">
                    0{index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
