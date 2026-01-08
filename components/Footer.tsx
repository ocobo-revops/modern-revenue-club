import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-white font-bold text-xl mb-2 tracking-wider">MODERN REVENUE CLUB</div>
            <p className="text-sm opacity-70">Revenue Forward 2026</p>
          </div>

          <div className="flex space-x-8 text-sm font-medium">
            <p>© 2025 Ocobo. Tous droits réservés.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;