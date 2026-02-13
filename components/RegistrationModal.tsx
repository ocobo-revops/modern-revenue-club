
import React, { useEffect } from 'react';

interface RegistrationModalProps {
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js-eu1.hsforms.net/forms/embed/27107933.js";
    script.defer = true;
    document.body.appendChild(script);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="p-8 md:p-12 overflow-y-auto">
          <div className="flex justify-between items-start mb-8">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Candidater au Club</h2>
              <p className="text-slate-500 font-medium mt-2">Rejoignez l'élite des leaders du revenu.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="w-full flex justify-center">
            <div 
              className="hs-form-frame w-full" 
              data-region="eu1" 
              data-form-id="64c7ad90-6635-44d3-b517-68224e817717" 
              data-portal-id="27107933"
            >
              <div className="text-center py-20 text-slate-400 flex flex-col items-center animate-pulse">
                <span className="w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mb-4"></span>
                <span className="font-bold tracking-widest text-[10px] uppercase">Chargement du formulaire de candidature...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
