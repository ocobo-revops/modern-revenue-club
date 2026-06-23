
import React from 'react';

interface EventsPageProps {
  onSelectEvent: (id: string) => void;
}

const events = [
  {
    id: 'diner-mrc-juillet-2026',
    title: 'Dîner MRC',
    date: '21 Juillet 2026',
    location: 'The Hoxton, Paris',
    image: '/images/hoxton-paris.jpg',
    tag: 'À venir'
  },
  {
    id: 'rf2026',
    title: 'Revenue Forward 2026',
    date: '12 Février 2026',
    location: 'Morning Bourse, Paris',
    image: 'https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Morning%20Bourse.avif',
    tag: 'Passé'
  }
];

const EventsPage: React.FC<EventsPageProps> = ({ onSelectEvent }) => {
  return (
    <div className="min-h-screen py-16 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-extrabold text-slate-900 tracking-tighter mb-6">Événements</h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
            Explorez nos rendez-vous passés et futurs. Chaque événement est une opportunité unique de croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div 
              key={event.id}
              onClick={() => onSelectEvent(event.id)}
              className="group cursor-pointer bg-white/40 backdrop-blur-md rounded-[3rem] border border-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">{event.tag}</span>
                </div>
              </div>
              <div className="p-10">
                <p className="text-ocobo-primary font-bold text-sm mb-2">{event.date}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{event.title}</h3>
                <p className="text-slate-500 text-sm mb-8 font-medium">{event.location}</p>
                <button className="text-slate-900 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  {event.tag === 'À venir' ? 'En savoir plus' : 'Consulter le compte-rendu'} <span>→</span>
                </button>
              </div>
            </div>
          ))}

          {/* Empty State / Coming Soon */}
          <div className="border-2 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center opacity-60">
             <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
             </div>
             <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Plus d'événements<br/>bientôt annoncés</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
