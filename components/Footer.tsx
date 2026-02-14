
import React, { useState } from 'react';
import { BRAND_NAME, NAV_LINKS } from '../constants';
import { Twitter, Facebook, Instagram, Linkedin, Github, Share2, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };
  
  /**
   * Enhanced icon base classes:
   * - overflow-hidden: Necessary for the background expansion effect.
   * - relative: To position the background span.
   */
  const iconBaseClass = "group relative w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 overflow-hidden transform-gpu animate-fade-in-up hover:text-white transition-all duration-500";

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-extrabold tracking-tight mb-6 inline-block">
              <span className="gradient-text">{BRAND_NAME}</span>
            </a>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Waxaan dhisnaa mustaqbalka digital-ka ah ee ganacsigaaga. Annagu kaliya ma samayno mareegaha, waxaan dhisnaa guusha.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {/* Twitter/X */}
              <a 
                href="https://twitter.com/example" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${iconBaseClass} hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(29,161,242,0.4)]`}
                aria-label="Nagala soco barta Twitter (X)"
                style={{ animationDelay: '100ms' }}
              >
                <span className="absolute inset-0 bg-[#1DA1F2] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <Twitter size={20} className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/example" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${iconBaseClass} hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]`}
                aria-label="Nagala soco barta Facebook"
                style={{ animationDelay: '200ms' }}
              >
                <span className="absolute inset-0 bg-[#1877F2] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <Facebook size={20} className="relative z-10 transition-transform duration-300 group-hover:-rotate-12" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/example" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${iconBaseClass} hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(238,42,123,0.4)]`}
                aria-label="Nagala soco barta Instagram"
                style={{ animationDelay: '300ms' }}
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                <Instagram size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* LinkedIn - Specific Enhanced Animation */}
              <a 
                href="https://linkedin.com/example" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${iconBaseClass} hover:scale-125 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(10,102,194,0.6)] ring-0 hover:ring-2 hover:ring-[#0A66C2]/30 transition-all duration-500`}
                aria-label="Nagala soco barta LinkedIn"
                style={{ animationDelay: '400ms' }}
              >
                <span className="absolute inset-0 bg-[#0A66C2] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
                <Linkedin size={22} className="relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/example" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${iconBaseClass} hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
                aria-label="Ka eeg mashaariicdeena barta GitHub"
                style={{ animationDelay: '500ms' }}
              >
                <span className="absolute inset-0 bg-[#333] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <Github size={20} className="relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
              </a>

              <div className="flex flex-wrap gap-3 w-full mt-4">
                {/* Custom Share Button */}
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-bold shadow-lg animate-fade-in-up"
                  style={{ animationDelay: '600ms' }}
                  aria-label="Koobiyeey xiriirka mareegta"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
                  {copied ? 'Waa la koobiyeeyay!' : 'Copy Link'}
                </button>

                {/* LinkedIn Quick Share */}
                <button 
                  onClick={handleLinkedInShare}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] hover:text-white hover:bg-[#0A66C2] hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-bold shadow-md hover:shadow-[#0A66C2]/20 animate-fade-in-up"
                  style={{ animationDelay: '700ms' }}
                  aria-label="Ku wadaag mareegta barta LinkedIn"
                >
                  <Linkedin size={16} />
                  Post to LinkedIn
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Xiriir Degdeg ah</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Adeegyada</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="hover:text-blue-400 transition-colors cursor-default">Web Development</li>
              <li className="hover:text-blue-400 transition-colors cursor-default">Mobile Applications</li>
              <li className="hover:text-blue-400 transition-colors cursor-default">Graphic Design</li>
              <li className="hover:text-blue-400 transition-colors cursor-default">Search Engine Optimization</li>
              <li className="hover:text-blue-400 transition-colors cursor-default">UI/UX Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Ku biir liiska farriimaha si aad u hesho xogta ugu dambaysa.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email-kaaga" 
                aria-label="Email-kaaga si aad isugu qorto wargayska"
                className="flex-grow px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 focus:bg-white/10 text-sm text-white transition-all"
              />
              <button 
                aria-label="Iska qor wargayska"
                className="px-5 py-3 bg-blue-600 rounded-xl font-bold text-sm text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} {BRAND_NAME}. Xuquuqda oo dhan waa dhowran tahay.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
