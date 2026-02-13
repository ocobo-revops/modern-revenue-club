
import React from 'react';
import { AgendaItem } from '../types';

const agendaItems: AgendaItem[] = [
  {
    id: 1,
    time: "19:00",
    title: "Accueil & Networking",
    description: "Lancement officiel du Club et premier cocktail de bienvenue."
  },
  {
    id: 2,
    time: "19:30",
    title: "Table Ronde : Le Futur du Revenu",
    description: "Une heure d'échanges exclusifs avec nos experts sur les tendances 2026.",
    isMainEvent: true
  },
  {
    id: 3,
    time: "20:30",
    title: "Expérience Amarsi",
    description: "Cocktail dînatoire gastronomique et networking entre membres."
  },
  {
    id: 4,
    time: "23:00",
    title: "Clôture",
    description: "Fin de l'événement inaugural."
  }
];

const Agenda: React.FC = () => {
  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
          Évènement #1
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Revenue Forward 2026</h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {agendaItems.map((item, index) => (
            <div key={item.id} className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-slate-900 rounded-full transform -translate-x-1/2 z-10"></div>
              <div className="ml-10 md:ml-0 md:w-[45%]">
                <div className={`p-8 rounded-[2rem] border ${item.isMainEvent ? 'bg-white shadow-xl border-slate-200' : 'bg-transparent border-slate-100'}`}>
                  <span className="text-ocobo-primary font-black font-mono text-sm">{item.time}</span>
                  <h4 className="text-xl font-bold mt-1 mb-2 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
