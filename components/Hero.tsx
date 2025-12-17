import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-sm">
          <span className="text-slate-800 text-xs font-bold tracking-wider uppercase">12 Février 2026 • Paris</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
          Revenue Forward<br />
          <span className="text-mesh-color">2026</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Rejoignez l'élite de l'écosystème French Tech. <br/>
          Une soirée premium composée de masterclasses, de networking et de cocktails pour définir le futur du revenu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#register"
            className="w-full sm:w-auto px-8 py-4 bg-ocobo-primary hover:bg-ocobo-primary-hover text-white rounded-full font-bold transition-all shadow-xl hover:shadow-orange-500/20 transform hover:-translate-y-1"
          >
            Demander une invitation
          </a>
          <a 
            href="#masterclass"
            className="w-full sm:w-auto px-8 py-4 bg-white/60 hover:bg-white text-slate-900 border border-white rounded-full font-bold transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
          >
            Découvrir le programme
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-4">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Organisé par</div>
          <div className="flex items-center gap-8 opacity-90">
            {/* LOGO OCOBO */}
            <img 
              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png" 
              alt="Ocobo" 
              className="h-8 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
            />
            
            <div className="h-8 w-px bg-slate-300"></div>
            
            {/* LOGO QOBRA */}
            <img 
              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/qobra-logo.jpeg" 
              alt="Qobra" 
              className="h-8 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
            />

            <div className="h-8 w-px bg-slate-300"></div>

            {/* LOGO AIRCALL */}
            <img 
              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/aircall_logo_black_rgb-Maggie-Mccarthy-1440x543.png" 
              alt="Aircall" 
              className="h-8 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;