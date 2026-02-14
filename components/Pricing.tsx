
import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
// Added CheckCircle2 to the imports from lucide-react
import { Check, X, Shield, CreditCard, Wallet, Smartphone, Landmark, Loader2, CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [paymentStep, setPaymentStep] = useState<'method' | 'details' | 'processing' | 'success'>('method');
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const handleOpenPayment = (plan: any) => {
    setSelectedPlan(plan);
    setPaymentStep('method');
    setIsPaymentOpen(true);
  };

  const processPayment = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 2500);
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Pricing Studio</h2>
          <h3 className="text-3xl md:text-5xl font-[900] text-slate-900 mb-6 tracking-tighter">
            Dooro xirmada kugu habboon
          </h3>
          <p className="text-slate-500 text-lg font-medium">
            Maalgashi ku samee mustaqbalka ganacsigaaga digital-ka ah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-12 rounded-[3.5rem] border transition-all duration-500 hover:-translate-y-3 ${plan.popular ? 'border-blue-500 bg-white shadow-[0_40px_80px_-15px_rgba(108,140,255,0.15)] ring-1 ring-blue-100' : 'border-slate-100 bg-white shadow-sm hover:shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 gradient-bg text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">
                  Best Value
                </div>
              )}
              
              <div className="mb-10">
                <h4 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter">${plan.price}</span>
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">/project</span>
                </div>
                <p className="mt-5 text-sm text-slate-500 font-medium leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-blue-600" />
                    </div>
                    <span className="text-[13px] text-slate-600 font-bold leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleOpenPayment(plan)}
                className={`w-full py-6 rounded-3xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                  plan.popular 
                    ? 'gradient-bg text-white shadow-blue-200 hover:shadow-blue-300' 
                    : 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-slate-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* World-Class Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-xl bg-white rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95">
            <div className="p-10 gradient-bg text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10 rotate-12"><CreditCard size={200} /></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black tracking-tight mb-1">Xaqiiji Lacagta</h3>
                <p className="text-[10px] opacity-80 uppercase tracking-[0.3em] font-black">SomaliTech Secure Terminal v4.0</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="relative z-10 p-3 hover:bg-white/20 rounded-2xl transition-all">
                <X size={28} />
              </button>
            </div>

            <div className="p-10">
              {paymentStep === 'method' && (
                <div className="animate-in slide-in-from-bottom-5">
                  <div className="mb-10 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Xirmada La Doortay</p>
                      <p className="text-lg font-black text-slate-900">{selectedPlan?.name}</p>
                    </div>
                    <p className="text-3xl font-black text-blue-600 tracking-tighter">${selectedPlan?.price}</p>
                  </div>

                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Dooro Habka Bixinta</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { id: 'card', name: 'Master / Visa', icon: <CreditCard size={20} />, sub: 'International' },
                      { id: 'mobile', name: 'EVC / Sahal', icon: <Smartphone size={20} />, sub: 'Local Som' },
                      { id: 'bank', name: 'Premier / Ibs', icon: <Landmark size={20} />, sub: 'Direct Bank' },
                      { id: 'crypto', name: 'USDT / Crypto', icon: <Smartphone size={20} />, sub: 'Fast Payout' }
                    ].map((method) => (
                      <button 
                        key={method.id}
                        onClick={() => { setActiveMethod(method.id); setPaymentStep('details'); }}
                        className="p-6 border-2 border-slate-100 rounded-[2rem] flex items-center gap-4 hover:border-blue-400 hover:bg-blue-50/50 transition-all text-left group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          {method.icon}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-800">{method.name}</p>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{method.sub}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {paymentStep === 'details' && (
                <div className="animate-in slide-in-from-right-5">
                  <button onClick={() => setPaymentStep('method')} className="mb-6 text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2 hover:underline">
                    &larr; Ku laabo hababka bixinta
                  </button>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-2">Faahfaahinta {activeMethod === 'card' ? 'Kaarka' : 'Mobilka'}</label>
                      <input 
                        type="text" 
                        placeholder={activeMethod === 'card' ? "0000 0000 0000 0000" : "+252 61 XXX XXXX"}
                        className="w-full px-7 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold text-lg focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
                      />
                    </div>
                    {activeMethod === 'card' && (
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/YY" className="w-full px-7 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold text-lg focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                        <input type="text" placeholder="CVC" className="w-full px-7 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold text-lg focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                      </div>
                    )}
                    <button 
                      onClick={processPayment}
                      className="w-full py-6 gradient-bg text-white rounded-[2rem] font-black text-lg shadow-2xl hover:scale-[1.02] active:scale-95 transition-all mt-4"
                    >
                      Bixi Hadda (${selectedPlan?.price})
                    </button>
                  </div>
                </div>
              )}

              {paymentStep === 'processing' && (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-in zoom-in-95">
                  <div className="relative mb-10">
                    <div className="w-24 h-24 border-8 border-slate-100 border-t-blue-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                      <Shield size={32} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Xaqiijinta Amniga...</h4>
                  <p className="text-slate-500 font-medium italic">Fadlan ha xirin bogga, lacagta ayaa la dirayaa akoonkaaga Studio-ga.</p>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-in bounce-in">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/10">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Guul! Lacagta waa la helay.</h4>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto mb-10 leading-relaxed">
                    Xirmadaada waa la hawlgeliyey. Lacagta waxaa lagu shubay akoonkaaga **Studio Hub**.
                  </p>
                  <button 
                    onClick={() => setIsPaymentOpen(false)}
                    className="px-12 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
                  >
                    Bilow Mashruuca
                  </button>
                </div>
              )}

              <div className="flex items-center gap-3 justify-center py-6 text-slate-400 border-t border-slate-50 mt-4">
                <Shield size={16} className="text-emerald-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">100% Encrypted & Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
