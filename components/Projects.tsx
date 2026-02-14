
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Mashaariicda</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Shaqooyinkii aan u soo qabanay macaamiisheena</h3>
          </div>
          <a 
            href="#" 
            className="px-8 py-3 rounded-full border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
          >
            Dhammaan Mashariicda
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-80 mb-1 uppercase tracking-widest">{project.category}</p>
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <p className="text-slate-500">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
