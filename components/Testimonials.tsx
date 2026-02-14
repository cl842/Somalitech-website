
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Macaamiisheena</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Maxay yiraahdeen dadka aan u adeegnay?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                <Quote size={40} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-50" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple Trust Banner */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <span className="text-2xl font-black tracking-tighter text-slate-400">GLOBAL LOGISTICS</span>
           <span className="text-2xl font-black tracking-tighter text-slate-400">FINTECH SOM</span>
           <span className="text-2xl font-black tracking-tighter text-slate-400">CITY UNI</span>
           <span className="text-2xl font-black tracking-tighter text-slate-400">DARYEEL BANK</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
