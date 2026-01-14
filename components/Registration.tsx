import React, { useEffect } from "react";

const Registration: React.FC = () => {
	useEffect(() => {
		// Création et ajout du script HubSpot au chargement du composant
		const script = document.createElement("script");
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
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
							Réservez votre place
						</h2>
						<p className="text-slate-600">
							Les places sont limitées au Morning Bourse. Demandez votre
							invitation dès aujourd'hui.
						</p>
					</div>

					<div className="w-full flex justify-center overflow-hidden rounded-2xl bg-white/50 border border-slate-100 shadow-inner">
						<iframe
							src="https://luma.com/embed/event/evt-fUvHAFWTpCv6X66/simple"
							width="100%"
							height="600"
							frameBorder="0"
							style={{ border: "none" }}
							allow="fullscreen; payment"
							aria-hidden="false"
							title="Registration Luma"
						></iframe>
					</div>

					<p className="mt-8 text-center text-xs text-slate-500">
						En remplissant ce formulaire, vous acceptez que Ocobo, Qobra et
						Aircall traitent vos données personnelles conformément à leur
						politique de confidentialité.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Registration;
