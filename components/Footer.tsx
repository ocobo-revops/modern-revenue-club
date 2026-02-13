
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-12 md:mb-0">
            <img 
              src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Logo%20complet-blanc.png" 
              alt="Modern Revenue Club" 
              className="h-12 w-auto mb-6 opacity-90"
            />
            <p className="text-sm max-w-xs leading-relaxed font-medium">
              La communauté d'élite pour les leaders du revenu qui façonnent la croissance de demain.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            <a href="#about" className="hover:text-white transition-colors">Le Club</a>
            <a href="#events-page" className="hover:text-white transition-colors">Événements</a>
            <a 
              href="https://www.ocobo.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Ocobo
            </a>
            <a 
              href="https://www.ocobo.co/fr/contact" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
          <p>© 2025 Modern Revenue Club. Tous droits réservés.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#">Confidentialité</a>
            <a href="#">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
