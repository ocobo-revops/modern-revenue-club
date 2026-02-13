
import React from 'react';

interface HeroProps {
  onNavigateEvents: () => void;
  onJoinClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateEvents, onJoinClick }) => {
  return (
    <div className="flex flex-col">
      {/* --- SECTION HERO (AERIAL) --- */}
      <section id="about" className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          {/* Logo */}
          <div className="mb-14 animate-fade-in-up">
            <img 
              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Logo%20complet-noir.png" 
              alt="Modern Revenue Club" 
              className="h-20 md:h-32 mx-auto w-auto"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-black text-slate-900 mb-6 tracking-tighter leading-[0.85] animate-fade-in-up">
            Sortir du bruit. <br/> 
            Décider vite. <br/>
            <span className="text-mesh-color italic font-serif font-light">Exécuter juste.</span>
          </h1>

          {/* Action Button */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <button 
              onClick={onNavigateEvents}
              className="px-14 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.25em] text-[10px] shadow-2xl hover:bg-ocobo-primary transform hover:-translate-y-1 transition-all duration-500"
            >
              Découvrir nos évènements →
            </button>
          </div>

          {/* Powered by Signature */}
          <div className="mt-16 flex flex-col items-center opacity-75 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-4">
              Propulsé par
            </p>
            <img 
              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png" 
              alt="Ocobo" 
              className="h-12 mx-auto grayscale" 
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* --- SECTION VISION (THE 3 LEVELS) --- */}
      <section className="py-24 md:py-40 relative bg-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* NIVEAU 1 : LES 2 RÉVOLUTIONS (DIAGNOSTIC) */}
            <div className="mb-40">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                <div className="lg:w-1/2">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-ocobo-primary mb-10">L'État des Lieux</h2>
                  <p className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                    Nous vivons deux révolutions en parallèle.
                  </p>
                </div>
                <div className="lg:w-1/2 space-y-16">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-900/10"></div>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                      Les marchés se contractent : l’ère de la croissance à tout prix est derrière nous, la priorité est à la <span className="text-slate-900 font-bold">rentabilité</span>.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-900/10"></div>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                      En même temps, une révolution technologique majeure portée par l’IA bouscule les playbooks : <span className="text-slate-900 font-bold">ce qui fonctionnait hier ne suffit déjà plus</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NIVEAU 2 : LE MANIFESTE (PARAGRAPHE DE VALEUR) - JUSTIFIÉ AU CENTRE */}
            <div className="mb-40 py-24 border-y border-slate-900/5 text-center">
              <div className="max-w-5xl mx-auto">
                <p className="text-2xl md:text-4xl lg:text-[2.75rem] font-black text-slate-900 leading-[1.2] tracking-tight mb-12">
                  Le <span className="text-mesh-color italic font-serif font-light">Modern Revenue Club</span> rassemble des décideurs Revenue qui veulent naviguer à travers ces révolutions avec lucidité : comprendre quoi déployer, pourquoi, et dans quel ordre.
                </p>
                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
                  En s’appuyant sur des <span className="text-slate-900 border-b-2 border-slate-900/10 pb-1">retours d’expérience concrets</span> plutôt que sur des promesses théoriques.
                </p>
              </div>
            </div>

            {/* NIVEAU 3 : LES 3 POINTS CLÉS (ACTIONNABLES) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                { 
                  title: "Des pairs", 
                  desc: "Rencontrez des décideurs Revenue confrontés aux mêmes arbitrages rentabilité / croissance au quotidien que vous.",
                  tag: "Retours Terrain"
                },
                { 
                  title: "Du concret", 
                  desc: "Accédez à des cas réels, des benchmarks anonymisés, et des exemples sur ce qui marche et ce qui ne marche plus sur le terrain.",
                  tag: "Reality Check"
                },
                { 
                  title: "Actionnable", 
                  desc: "Des retours terrains clairs et des frameworks applicables à votre contexte dès le lendemain.",
                  tag: "Impact Immédiat"
                }
              ].map((point, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-ocobo-primary mb-8">{point.tag}</span>
                  <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{point.title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">{point.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
