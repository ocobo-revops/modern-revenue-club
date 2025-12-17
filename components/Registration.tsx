import React, { useEffect } from 'react';

const Registration: React.FC = () => {
  useEffect(() => {
    // Création et ajout du script HubSpot au chargement du composant
    const script = document.createElement('script');
    script.src = "https://js-eu1.hsforms.net/forms/embed/27107933.js";
    script.defer = true;
    document.body.appendChild(script);

    // Nettoyage si le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="register" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Réservez votre place</h2>
            <p className="text-slate-600">Les places sont limitées à La Cristallerie. Demandez votre invitation dès aujourd'hui.</p>
          </div>

          <div className="w-full flex justify-center">
            {/* Conteneur spécifique pour le formulaire HubSpot */}
            <div 
              className="hs-form-frame w-full" 
              data-region="eu1" 
              data-form-id="64c7ad90-6635-44d3-b517-68224e817717" 
              data-portal-id="27107933"
            >
              {/* Indicateur de chargement qui sera remplacé par le formulaire */}
              <div className="text-center py-12 text-slate-500 flex flex-col items-center animate-pulse">
                <span className="w-8 h-8 border-2 border-ocobo-primary border-t-transparent rounded-full animate-spin mb-4"></span>
                Chargement du formulaire sécurisé...
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-center text-xs text-slate-500">
            En remplissant ce formulaire, vous acceptez que Ocobo, Qobra et Aircall traitent vos données personnelles conformément à leur politique de confidentialité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;