
import React from 'react';
import { ArrowRight, Sparkles, Cpu, Shield, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 -z-10 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full bg-white border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] shadow-xl shadow-blue-500/5">
              <Sparkles size={16} className="text-blue-500 animate-spin-slow" /> 
              Enterprise AI Studio 2025
            </div>
            
            <h1 className="text-6xl md:text-8xl font-[900] text-[#0F172A] leading-[1] mb-10 tracking-tighter">
              Awoodda <br />
              <span className="gradient-text">Studio Engine</span>
            </h1>
            
            <p className="max-w-xl text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Waxaan u dhisnaa ganacsigaaga nidaamyo digital ah oo leh caqli dabiici ah (AI). Mareegaha, Apps-ka, iyo Amniga oo hal meel ku wada jira.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-12 py-6 rounded-[2rem] bg-[#0F172A] text-white font-black text-lg flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-slate-400 active:scale-95"
              >
                Nala Bilow <ArrowRight size={24} />
              </a>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="Client" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 shadow-lg">+1k</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in-up [animation-delay:200ms]">
            <div className="relative z-10 p-4 bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/50 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop" 
                alt="AI Interface" 
                className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating Tech Cards */}
              <div className="absolute -top-10 -right-10 p-8 glass rounded-[2.5rem] shadow-2xl animate-bounce-subtle">
                <Cpu size={40} className="text-blue-600 mb-3" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</p>
                <p className="text-2xl font-black text-slate-900">99.9%</p>
              </div>

              <div className="absolute bottom-20 -left-12 p-8 glass rounded-[2.5rem] shadow-2xl animate-bounce-subtle [animation-delay:1s]">
                <Shield size={40} className="text-emerald-500 mb-3" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Security</p>
                <p className="text-2xl font-black text-slate-900">Ironclad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s infinite ease-in-out;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
