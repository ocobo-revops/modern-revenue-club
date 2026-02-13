
import React from 'react';

interface FinalCTAProps {
  onAction: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onAction }) => {
  return (
    <section className="py-40 bg-white/40 backdrop-blur-sm border-t border-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none grayscale">
         <img src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
           <div className="inline-block mb-10 px-6 py-2 rounded-full border border-ocobo-primary/20 text-ocobo-primary text-[10px] font-black uppercase tracking-[0.4em]">
             L'aventure commence ici
           </div>
           <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-10 tracking-tighter leading-tight">
             Construisons ensemble la <br/> <span className="text-ocobo-primary italic font-serif font-light">vente de demain.</span> 🚀
           </h2>
           <p className="text-slate-500 text-xl mb-16 font-medium max-w-2xl mx-auto">
             Rejoignez le cercle restreint des décideurs Revenue et transformez vos défis technologiques en moteurs de performance.
           </p>
           <button 
             onClick={onAction}
             className="px-16 py-7 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-ocobo-primary transform hover:-translate-y-1 transition-all duration-500"
           >
             Découvrir tous nos évènements →
           </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
