
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Adeegyada</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Maxaan u qabannaa macaamiisheena?</h3>
          <p className="text-slate-600 text-lg">
            Waxaan bixinaa adeegyo kala duwan oo loogu talagalay inay ganacsigaaga ka dhigaan mid ka muuqda suuqa, laguna kalsoonaan karo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
