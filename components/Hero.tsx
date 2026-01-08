
import React from 'react';

const Hero: React.FC = () => {
  const PartnerLogos = () => (
    <>
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

      <div className="h-8 w-px bg-slate-300"></div>


      {/* LOGO AMARSI */}
      <img 
        src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logo_Amarsi_Aperitivo_3200x.webp" 
        alt="Amarsi" 
        className="h-8 md:h-12 w-auto object-contain hover:opacity-80 transition-opacity"
      />
    </>
  );

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
          Une soirée d'exception mêlant débats stratégiques et networking premium. Une table ronde exclusive suivie d'un cocktail dînatoire pour définir le futur du revenu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#register"
            className="w-full sm:w-auto px-8 py-4 bg-ocobo-primary hover:bg-ocobo-primary-hover text-white rounded-full font-bold transition-all shadow-xl hover:shadow-orange-500/20 transform hover:-translate-y-1"
          >
            Demander une invitation
          </a>
          <a 
            href="#agenda"
            className="w-full sm:w-auto px-8 py-4 bg-white/60 hover:bg-white text-slate-900 border border-white rounded-full font-bold transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
          >
            Découvrir l'agenda
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-6 overflow-hidden w-full">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Organisé par</div>
          
          {/* Mobile Marquee / Desktop Static */}
          <div className="relative w-full overflow-hidden md:overflow-visible">
            {/* Desktop: Static and centered */}
            <div className="hidden md:flex items-center justify-center gap-12 opacity-90">
               <PartnerLogos />
            </div>

            {/* Mobile: Infinite Marquee */}
            <div className="md:hidden flex w-full">
              <div className="flex items-center gap-12 animate-marquee whitespace-nowrap px-6 opacity-90">
                <PartnerLogos />
                <div className="h-8 w-px bg-slate-300"></div>
                {/* Doubled for seamless loop */}
                <PartnerLogos />
                <div className="h-8 w-px bg-slate-300"></div>
              </div>
            </div>

            {/* Fading edges for mobile ticker */}
            <div className="md:hidden absolute inset-y-0 left-0 "></div>
            <div className="md:hidden absolute inset-y-0 right-0 "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
