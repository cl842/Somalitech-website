
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    "Dhisidda mareego xawaarahoodu aad u sareeyo (High Performance).",
    "Ilaalinta amniga digital-ka ee heerka caalami.",
    "Naqshadaynta Apps-ka oo leh UI/UX casri ah.",
    "Maamulista Networking-ka iyo Server-yada shirkadaha."
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-50 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                alt="Kooxdayada IT-ga" 
                className="relative rounded-[2rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block animate-pulse-subtle">
                <p className="text-5xl font-black gradient-text mb-1">100%</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Kalsooni & Tayo</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-sm font-[800] text-blue-600 uppercase tracking-[0.25em] mb-4 letter-wide">Hiigsigayaga</h2>
            <h3 className="text-4xl md:text-5xl font-[900] text-[#0F172A] mb-8 leading-[1.2] text-balance">
              Waxaan u dhisnaa <span className="text-blue-600">tignoolajiyad</span> loo qaabeeyey guushaada.
            </h3>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">
              SomaliTech waa hoyga xalalka IT-ga ee dalka. Waxaan aaminsannahay in ganacsi kasta uu mudan yahay nidaam digital ah oo fududeeya shaqada, sugana xogta, soona jiita macaamiil badan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors group">
                  <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-[#0F172A] font-bold text-sm leading-snug">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a 
                href="#process" 
                className="inline-flex items-center gap-3 text-[#0F172A] font-[800] hover:text-blue-600 transition-colors group"
              >
                Baro sida aan u shaqayno <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
