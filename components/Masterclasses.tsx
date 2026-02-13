
import React from 'react';

interface MasterclassProps {
  onNavigateEvents?: () => void;
  onJoinClick?: () => void;
}

const clubObjectives = [
  { id: "01", title: "Partager", desc: "Insights et bonnes pratiques sur le Revenue, les opérations et la croissance." },
  { id: "02", title: "Connecter", desc: "Créer des connexions entre experts et professionnels de l'écosystème." },
  { id: "03", title: "Innover", desc: "Expérimenter par les échanges et retours d'expérience du terrain." },
  { id: "04", title: "Accès", desc: "Contenu exclusif : workshops, études de cas, interviews d'experts." }
];

const eventFormats = [
  { 
    title: "Tables Rondes & Ateliers", 
    desc: "Des sessions de travail intensives sur des problématiques GTM précises.", 
    icon: "🎯" 
  },
  { 
    title: "Dîners & Petits-Déjeuners", 
    desc: "Le cadre idéal pour des confidences stratégiques et du partage d'expérience informel.", 
    icon: "🍽️" 
  },
  { 
    title: "Apéros Networking", 
    desc: "Connecter avec ses pairs dans une ambiance détendue mais experte.", 
    icon: "🥂" 
  }
];

const Masterclass: React.FC<MasterclassProps> = ({ onNavigateEvents, onJoinClick }) => {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-white/20">
      <div className="container mx-auto px-6">
        
        {/* Benjamin Boileux Quote - Centered & Premium */}
        <div className="mb-48 relative text-center flex flex-col items-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 text-[15rem] font-serif italic text-slate-900/[0.03] pointer-events-none select-none">“</div>
          <blockquote className="relative z-10 max-w-5xl mx-auto">
            <p className="text-4xl md:text-6xl text-slate-900 leading-[1.1] font-black tracking-tighter mb-16">
              "Peu importe la taille de l'entreprise, les défis de croissance sont <span className="text-ocobo-primary italic font-serif font-light">universels</span>. Les solutions existent, elles ne demandent qu'à être partagées."
            </p>
            
            <footer className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative">
                <img 
                  src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Benj%20-%20200X200.jpeg" 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-2xl" 
                  alt="Benjamin Boileux" 
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-ocobo-primary rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                   <span className="text-[8px] text-white font-black">CEO</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-2">Benjamin Boileux</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">CEO d'Ocobo — Fondateur du Club</p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Objectives Section */}
        <div className="py-32 border-t border-slate-900/5">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/3">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em]">
                Objectifs
              </div>
              <h2 className="text-5xl font-extrabold text-slate-900 tracking-tighter leading-none mb-8">
                Pourquoi <br/> nous rejoindre ?
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Quatre axes fondamentaux pour transformer la vision en résultats concrets et durables.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {clubObjectives.map((obj) => (
                <div key={obj.id} className="group">
                  <span className="block text-3xl font-black text-ocobo-primary/30 group-hover:text-ocobo-primary transition-colors duration-500 mb-6 font-mono">
                    {obj.id}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{obj.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="py-32 bg-slate-900/5 rounded-[4rem] px-8 md:px-20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ocobo-primary/5 blur-[100px] rounded-full"></div>
          
          <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-ocobo-primary mb-10">Le fonctionnement</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-12">L'intelligence collective, <br/> en petit comité.</h3>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              Nous organisons différents formats d’événements : tables rondes, apéros, dîners et petits-déjeuners, toujours avec un <span className="text-slate-900 font-bold">nombre limité de participants</span> pour garantir des conversations profondes, honnêtes et utiles. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 mb-16">
            {eventFormats.map((item, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <div className="text-4xl mb-8">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-ocobo-primary transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10 pt-12 border-t border-slate-900/5">
            <p className="text-lg text-slate-500 font-medium italic">
              "Chaque rencontre est construite autour de problématiques concrets de croissance, de rentabilité et de go-to-market, avec des décideurs qui partagent ce qui fonctionne vraiment… <span className="text-slate-900 font-bold">et ce qui ne fonctionne plus.</span>"
            </p>
          </div>
        </div>

        {/* Audience & Founders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-20 border-t border-slate-900/5">
          <div className="p-12 bg-white/40 backdrop-blur-md border border-white rounded-[3.5rem] shadow-xl">
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-ocobo-primary/10 text-ocobo-primary text-[9px] font-black uppercase tracking-[0.3em]">
              Qui peut rejoindre ?
            </div>
            <p className="text-xl text-slate-900 font-bold leading-relaxed mb-8">
              Le Modern Revenue Club s’adresse avant tout aux <span className="text-ocobo-primary">décideurs Revenue</span> – CRO, CMO, CEO, COO, CCO – qui font face à des questions stratégiques de structuration.
            </p>
            <p className="text-slate-500 font-medium leading-relaxed">
              Que vous dirigiez une startup en hypercroissance, une scale-up cherchant à optimiser son moteur revenue, ou une PME souhaitant adopter les méthodes modernes pour une vente plus efficace, ce club est fait pour vous.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["CRO", "CMO", "CEO", "COO", "CCO", "VP Ops"].map(role => (
                <span key={role} className="px-4 py-2 bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest rounded-full">{role}</span>
              ))}
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-slate-100 text-slate-400 text-[9px] font-black uppercase tracking-[0.3em]">
              L'Animation
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-8">
              Pionniers du Revenue <br/> Operations en France.
            </h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
              <p>
                Le club a été créé par <span className="text-slate-900 font-bold">Benjamin Boileux</span>, co-fondateur d'Ocobo, qui accompagne depuis plus de 15 ans les plus belles entreprises françaises dans l'accélération de leur croissance.
              </p>
              <p>
                <span className="text-slate-900 font-bold">Ocobo</span> est rejoint par des entreprises françaises innovantes qui s'attaquent aux vrais défis des équipes Revenue, grâce à la technologie et aux nouvelles méthodes de pilotage.
              </p>
            </div>
            <a 
              href="https://www.ocobo.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 flex items-center gap-6 group cursor-pointer no-underline"
            >
              <img src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png" alt="Ocobo" className="h-10 w-auto opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="h-px flex-1 bg-slate-100 group-hover:bg-ocobo-primary/20 transition-colors"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-ocobo-primary transition-colors">Découvrir Ocobo →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Masterclass;
