
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Nala Soo Xiriir</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Ma haystaa fikrad? <br />
              Aan u bedelno <span className="text-blue-400 italic">Xaqiiqo</span>.
            </h3>
            <p className="text-slate-400 text-lg mb-12">
              Haddii aad qabto su'aal, aad u baahan tahay qiimayn, ama aad rabto inaad nala bilowdo mashruuc cusub, foomkan hoose buuxi ama nagala soo xiriir xogta dhinaca midig.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-xl font-bold">hello@somalitech.so</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Tel / WhatsApp</p>
                  <p className="text-xl font-bold">+252 61 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Address</p>
                  <p className="text-xl font-bold">Maka Al-Mukarama, Mogadishu</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form action="https://formspree.io/f/example" method="POST" className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Magacaaga</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Tusaale: Ahmed"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Email-kaaga</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="ahmed@mail.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-300 mb-2">Mowduuca</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Maxaad noogala soo xiriiraysaa?"
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-300 mb-2">Farriintaada</label>
                <textarea 
                  name="message"
                  rows={5}
                  placeholder="Halkan ku qor faahfaahinta..."
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl gradient-bg text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-blue-500/20"
              >
                Dir Farriinta <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
