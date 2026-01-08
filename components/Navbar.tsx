
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4'
        : 'bg-transparent py-6 border-b border-transparent'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Logo%20complet-noir.png"
            alt="Modern Revenue Club"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#speakers" className="text-slate-700 hover:text-ocobo-primary transition-colors text-sm font-semibold tracking-tight">Intervenants</a>
          <a href="#agenda" className="text-slate-700 hover:text-ocobo-primary transition-colors text-sm font-semibold tracking-tight">Agenda</a>
          <a href="#location" className="text-slate-700 hover:text-ocobo-primary transition-colors text-sm font-semibold tracking-tight">Lieu</a>
          <a
            href="#register"
            className="bg-ocobo-primary hover:bg-ocobo-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5"
          >
            Réserver une place
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
