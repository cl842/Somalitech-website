
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Su'aalaha badanaa nala weydiiyo</h3>
            <p className="text-slate-600 mb-8">
              Halkan waxaad ka heli kartaa jawaabaha su'aalaha ugu muhiimsan ee dadku iska weydiiyaan adeegyadeena IT-ga.
            </p>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="font-bold text-blue-900 mb-2">Su'aal kale ma haysaa?</p>
              <p className="text-sm text-blue-700 mb-4">Haddii aadan halkan ka helin jawaabtaada, fadlan nala soo xiriir.</p>
              <a href="#contact" className="inline-block text-sm font-bold text-blue-600 hover:underline">Nala xiriir hadda &rarr;</a>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-blue-400 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`text-lg font-bold ${openIndex === index ? 'text-blue-900' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
