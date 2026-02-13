
import React from 'react';
import { Speaker } from '../types';

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Benjamin Boileux",
    role: "Co-founder & CEO",
    company: "Ocobo",
    companyLogoUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png",
    imageUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Benj%20-%20200X200.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/benjaminboileux/"
  },
  {
    id: 2,
    name: "Antoine Fort",
    role: "Co-founder & CEO",
    company: "Qobra",
    companyLogoUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/qobra-logo.jpeg",
    imageUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Antoine%20Fort%20(CEO).jpg",
    linkedinUrl: "https://www.linkedin.com/in/antoine-fort/"
  },
  {
    id: 3,
    name: "Pierre Antoine Canova",
    role: "VP Revenue Operations",
    company: "Zenchef",
    companyLogoUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/zenchef%20logo.png",
    imageUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Pierre%20Antoine%20Canova.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/pierre-antoine-canova-64985161/"
  },
  {
    id: 4,
    name: "Léa Lejolly",
    role: "VP Revenue Operations",
    company: "Aircall",
    companyLogoUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/aircall_logo_black_rgb-Maggie-Mccarthy-1440x543.png",
    imageUrl: "https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Lea%20Lejolly.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/l%C3%A9a-lejolly-6a9ab4a1/"
  }
];

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-ocobo-primary/10 border border-ocobo-primary/20">
            <span className="text-ocobo-primary text-xs font-bold uppercase tracking-widest">Intervenants</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Les voix du Revenue Forward</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Rencontrez les leaders qui façonnent les stratégies de croissance des plus belles entreprises de la French Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <a 
              key={speaker.id} 
              href={speaker.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block focus:outline-none focus:ring-2 focus:ring-ocobo-primary focus:ring-offset-4 rounded-[2.5rem]"
              aria-label={`Voir le profil LinkedIn de ${speaker.name}`}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white/40 border border-white/60 backdrop-blur-md shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={speaker.imageUrl} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 text-center flex flex-col items-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{speaker.name}</h3>
                  <p className="text-ocobo-primary font-semibold text-sm mb-4">{speaker.role}</p>
                  
                  {/* Company Logo Area */}
                  <div className="h-8 flex items-center justify-center mb-2">
                    {speaker.companyLogoUrl ? (
                      <img 
                        src={speaker.companyLogoUrl} 
                        alt={speaker.company} 
                        className="max-h-full w-auto max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Logo {speaker.company}</span>
                    )}
                  </div>
                  
                  {/* LinkedIn Icon - Always visible on mobile, hover effect on desktop */}
                  <div className="mt-4 flex justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                    <div className="p-2.5 bg-slate-100 group-hover:bg-ocobo-primary group-hover:text-white rounded-full transition-all shadow-sm group-hover:shadow-md text-slate-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
