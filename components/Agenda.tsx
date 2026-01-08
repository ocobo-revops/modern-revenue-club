
import React from 'react';
import { AgendaItem } from '../types';

const agendaItems: AgendaItem[] = [
  {
    id: 1,
    time: "19:00",
    title: "Accueil & Networking",
    description: "Ouverture des portes et premier cocktail de bienvenue."
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
    title: "Cocktail Dînatoire par Amarsi",
    description: "Expérience culinaire et networking approfondi entre pairs."
  },
  {
    id: 4,
    time: "23:00",
    title: "Clôture",
    description: "Fin de l'événement."
  }
];

const Agenda: React.FC = () => {
  return (
    <section id="agenda" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-ocobo-primary/10 border border-ocobo-primary/20">
            <span className="text-ocobo-primary text-xs font-bold uppercase tracking-widest">Le Programme</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Agenda de la soirée</h2>
          <p className="text-slate-600 text-lg">Un format conçu pour l'échange et l'inspiration.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {agendaItems.map((item, index) => (
              <div key={item.id} className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-ocobo-primary rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(254,156,135,0.5)] group-hover:scale-150 transition-transform duration-300"></div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-[45%]">
                  <div className={`p-6 rounded-3xl transition-all duration-300 border ${
                    item.isMainEvent 
                      ? 'bg-white shadow-xl border-ocobo-primary/30 ring-1 ring-ocobo-primary/5' 
                      : 'bg-white/40 backdrop-blur-md border-white/60 hover:bg-white/60'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-ocobo-primary font-bold font-mono text-sm">{item.time}</span>
                      {item.isMainEvent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-ocobo-primary text-white tracking-wider">Temps Fort</span>
                      )}
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${item.isMainEvent ? 'text-slate-900' : 'text-slate-800'}`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
