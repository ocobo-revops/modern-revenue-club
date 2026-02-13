import type React from "react";
import Location from "./Location";
import Speakers from "./Speakers";

interface EventDetailProps {
	eventId: string;
	onBack: () => void;
	onHome: () => void;
	onJoinClick: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({
	eventId,
	onBack,
	onHome,
	onJoinClick,
}) => {
	if (eventId !== "rf2026") {
		return (
			<div className="container mx-auto px-6 py-40 text-center">
				<h2 className="text-4xl font-bold mb-8">Événement non trouvé</h2>
				<button
					onClick={onBack}
					className="text-ocobo-primary font-bold underline"
				>
					Retourner à la liste
				</button>
			</div>
		);
	}

	const PartnerLogos = () => (
		<div className="mt-12 pt-12 border-t border-slate-100">
			<p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
				EVENEMENT SOUTENU PAR :
			</p>
			<div className="grid grid-cols-2 gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
				<img
					src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png"
					alt="Ocobo"
					className="h-16 w-auto object-contain object-left"
				/>
				<img
					src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/qobra-logo.jpeg"
					alt="Qobra"
					className="h-16 w-auto object-contain object-left"
				/>
				<img
					src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/aircall_logo_black_rgb-Maggie-Mccarthy-1440x543.png"
					alt="Aircall"
					className="h-16 w-auto object-contain object-left"
				/>
				<img
					src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logo_Amarsi_Aperitivo_3200x.webp"
					alt="Amarsi"
					className="h-16 w-auto object-contain object-left"
				/>
			</div>
		</div>
	);

	return (
		<div className="animate-fade-in pb-32">
			{/* Header / Hero Section */}
			<div className="relative pt-24 pb-12 overflow-hidden">
				<div className="container mx-auto px-6 relative z-10">
					<button
						onClick={onBack}
						className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors mb-8"
					>
						<span>←</span> Retour aux événements
					</button>

					<div className="max-w-4xl">
						<div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
							Évènement Terminé
						</div>
						<h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-none">
							Revenue <br /> Forward 2026
						</h1>
						<p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-4">
							Le 12 Février 2026, plus de 60 leaders du GTM se sont réunis au
							Morning Bourse pour définir les nouveaux standards de la
							croissance durable.
						</p>
						<button
							onClick={onHome}
							className="text-ocobo-primary font-black text-xs uppercase tracking-widest hover:underline transition-all"
						>
							En savoir plus sur le Club &rarr;
						</button>
					</div>
				</div>

				{/* Background Accent */}
				<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ocobo-primary/5 to-transparent pointer-events-none"></div>
			</div>

			{/* Main Content Sections */}
			<div className="container mx-auto px-6 space-y-32">
				{/* Insights & Recap Section */}
				<section id="insights" className="scroll-mt-32">
					<div className="flex flex-col lg:flex-row gap-20 items-start">
						<div className="lg:w-1/3 lg:sticky lg:top-40">
							<h2 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tighter">
								Compte Rendu <br /> & Insights
							</h2>
							<p className="text-slate-500 text-lg leading-relaxed mb-6">
								Découvrez les points clés abordés lors des tables rondes et les
								frameworks partagés par nos experts du Revenu.
							</p>

							<PartnerLogos />
						</div>

						<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									id: "01",
									title: "Architecture & vision",
									desc: "L’évolution du rôle de CRO et pourquoi la maitrise du système devient en 2026 plus importante que le rôle de coach commercial.",
								},
								{
									id: "02",
									title: "Système & IA",
									desc: "Comment alimenter efficacement le système ? L'IA est un accélérateur, mais aussi un amplificateur de symptômes déjà existant !",
								},
								{
									id: "03",
									title: "Exécution & Facteur Humain",
									desc: "C’est la clé en 2026 - quel devient notre rôle, et celui des équipes dans cette notion de système ? (Passage : Léa → Pierre-Antoine → Antoine)",
								},
								{
									id: "04",
									title: "Performance & Variable",
									desc: "La rémunération variable, c'est le dernier kilomètre de l'architecture. C'est là que la stratégie devient concrète pour l'individu.",
								},
							].map((insight) => (
								<div
									key={insight.id}
									className="group bg-white/50 backdrop-blur-sm p-10 rounded-[3rem] border border-white/60 hover:border-ocobo-primary/30 transition-all shadow-sm hover:shadow-xl"
								>
									<span className="text-ocobo-primary font-black text-3xl mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">
										{insight.id}
									</span>
									<h4 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">
										{insight.title}
									</h4>
									<p className="text-slate-500 text-sm leading-relaxed font-medium">
										{insight.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Gallery Section */}
				<section id="gallery" className="py-20 border-t border-slate-100">
					<div className="mb-12">
						<p className="text-[10px] font-black uppercase tracking-[0.4em] text-ocobo-primary mb-4">
							L'atmosphère du Club
						</p>
						<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
							L'évènement en images
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
						{/* Photo 1: Wide Audience (Top Left) */}
						<div className="md:col-span-8 md:row-span-1 rounded-[3rem] overflow-hidden group shadow-lg">
							<img
								src="/images/act-1-01.jpg"
								alt="Table ronde au Morning Bourse"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>

						{/* Photo 2: Benjamin Close Up (Top Right) */}
						<div className="md:col-span-4 md:row-span-1 rounded-[3rem] overflow-hidden group shadow-lg">
							<img
								src="/images/act-1-02.jpg"
								alt="Benjamin Boileux et Antoine Fort"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>

						{/* Photo 3: Lea Close Up (Bottom Left) */}
						<div className="md:col-span-4 md:row-span-1 rounded-[3rem] overflow-hidden group shadow-lg">
							<img
								src="/images/act-1-03.jpg"
								alt="Léa Lejolly en intervention"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>

						{/* Photo 4: Room View (Bottom Right) */}
						<div className="md:col-span-8 md:row-span-1 rounded-[3rem] overflow-hidden group shadow-lg">
							<img
								src="/images/act-1-04.jpg"
								alt="Vue globale de la conférence"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
					</div>
				</section>

				{/* Re-using polished components but in a page flow */}
				<div className="border-t border-slate-200/50 pt-20">
					<Speakers />
				</div>

				<div className="border-t border-slate-200/50 pt-20">
					<Location />
				</div>

				{/* Bottom CTA for next events */}
				<section className="text-center py-20 bg-slate-900 rounded-[4rem] text-white overflow-hidden relative">
					<div className="relative z-10 px-6">
						<h3 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter">
							Vous avez manqué cet événement ?
						</h3>
						<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
							Le club organise régulièrement des rencontres de ce format.
							Rejoingnez pour être informé des prochaines sessions.
						</p>
						<button
							onClick={onBack}
							className="px-12 py-6 bg-ocobo-primary text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1"
						>
							Découvrir tous nos évènements
						</button>
					</div>
					<div className="absolute top-0 right-0 w-64 h-64 bg-ocobo-primary/20 blur-[100px] rounded-full"></div>
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
				</section>
			</div>
		</div>
	);
};

export default EventDetail;
