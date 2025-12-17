import React from 'react';
import type { Masterclass } from '../types';

const classes: Masterclass[] = [
  {
    id: 1,
    time: "19:30",
    title: "L'évolution des Revenue Operations",
    speaker: "Expert Industrie",
    description: "Plongée au cœur des RevOps comme moteur stratégique des scale-ups modernes."
  },
  {
    id: 2,
    time: "20:00",
    title: "Rémunération variable en 2026",
    speaker: "Direction Qobra",
    description: "Aligner les incitations avec la croissance long terme : nouveaux modèles pour une nouvelle ère."
  },
  {
    id: 3,
    time: "20:30",
    title: "Modélisation prédictive du revenu",
    speaker: "Direction Ocobo",
    description: "Exploiter la donnée pour prévoir avec précision dans un marché imprévisible."
  }
];

const Masterclass: React.FC = () => {
  return (
    <section id="masterclass" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Masterclass</h2>
          <p className="text-slate-600 text-lg">Trois sessions exclusives pour affiner votre vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((item) => (
            <div key={item.id} className="group p-8 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-ocobo-primary/10 text-ocobo-primary text-sm font-bold font-mono mb-6">
                {item.time}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
              <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-wide border-t border-slate-200/50 pt-4">
                <span className="w-2 h-2 rounded-full bg-ocobo-primary mr-2"></span>
                {item.speaker}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masterclass;