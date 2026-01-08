
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="sha-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Morning%20Bourse.avif" 
                  alt="Morning Bourse - Paris" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Le Lieu</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Morning Bourse</h2>
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
                <p>
                  Situé au cœur du quartier historique de la finance, face au majestueux Palais Brongniart, Morning Bourse nous accueille dans un cadre prestigieux et inspirant. Un lieu iconique, alliant héritage architectural et modernité, pour dessiner ensemble les contours du revenu de demain.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-white">
                    <div className="bg-orange-50 p-2 rounded-xl text-ocobo-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Adresse</h4>
                      <p className="text-sm">4 Pl. de la Bourse<br/>75002 Paris</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-white">
                    <div className="bg-orange-50 p-2 rounded-xl text-ocobo-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Date & Heure</h4>
                      <p className="text-sm">12 Fév 2026<br/>À partir de 19h00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://maps.app.goo.gl/oC8f79GkaKof4rjv9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-ocobo-primary font-bold hover:text-[#d67a65] transition-colors group"
                >
                  Ouvrir dans Google Maps <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
