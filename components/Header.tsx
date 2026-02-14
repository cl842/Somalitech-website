
import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { BRAND_NAME, NAV_LINKS } from '../constants';
import Dashboard from './Dashboard';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.href.replace('#', ''));
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-extrabold tracking-tight">
            <span className="gradient-text">{BRAND_NAME}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`relative text-sm font-black transition-all duration-300 uppercase tracking-widest ${
                    isActive 
                      ? 'text-blue-600' 
                      : 'text-slate-600 hover:text-blue-500'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 gradient-bg rounded-full transform scale-x-100 transition-transform duration-300"></span>
                  )}
                </a>
              );
            })}
            
            <button 
              onClick={() => setShowDashboard(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-slate-900 font-black border-2 border-slate-100 hover:bg-slate-50 transition-all text-[10px] uppercase tracking-widest ml-4 shadow-sm"
            >
              <LayoutDashboard size={14} className="text-blue-600" /> Dashboard
            </button>

            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full text-white font-black gradient-bg shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform text-[10px] uppercase tracking-widest"
            >
              Nala Xiriir
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Fididda menu-ga"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-bold transition-colors ${
                      isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-500'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <button 
                onClick={() => { setShowDashboard(true); setIsOpen(false); }}
                className="w-full py-4 bg-slate-100 rounded-2xl font-black text-slate-900 flex items-center justify-center gap-2"
              >
                <LayoutDashboard size={18} /> Dashboard
              </button>
            </nav>
          </div>
        )}
      </header>
      
      {showDashboard && <Dashboard onClose={() => setShowDashboard(false)} userTier="pro" />}
    </>
  );
};

export default Header;
