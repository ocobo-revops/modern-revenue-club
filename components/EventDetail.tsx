import type React from "react";
import Location from "./Location";
import Speakers from "./Speakers";
import type { Speaker } from "../types";

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
	if (eventId === "up-bordeaux-novembre-2026") {
		const imgDir = "/images/up-bordeaux-novembre-2026";
		const registrationUrl =
			"https://up.locomotiv.com/evenements/table-ronde-repenser-son-equipe-revenue";
		const ocoboLogo =
			"https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/logo-ocobo-web_full-main%20color.png";
		const intervenants: Speaker[] = [
			{ id: 1, name: "Agnès Dargent", role: "Revenue Enablement Manager", company: "Sellsy", companyLogoUrl: `${imgDir}/logos/sellsy.png`, imageUrl: `${imgDir}/agnes-dargent.jpg` },
			{ id: 2, name: "Jean-Philippe Perrier", role: "Fondateur", company: "NextCRO", companyLogoUrl: `${imgDir}/logos/nextcro.jpg`, imageUrl: `${imgDir}/jean-philippe-perrier.jpg` },
			{ id: 3, name: "Ophélie Fonseca-Zin", role: "CMO", company: "Nalo", companyLogoUrl: `${imgDir}/logos/nalo.png`, imageUrl: `${imgDir}/ophelie-fonseca-zin.jpg` },
			{ id: 4, name: "Ségolène Chauvet", role: "Consultante Expérience client", company: "", imageUrl: `${imgDir}/segolene-chauvet.jpg` },
			{ id: 5, name: "Benjamin Boileux", role: "CEO et cofondateur", company: "Ocobo", companyLogoUrl: ocoboLogo, imageUrl: `${imgDir}/benjamin-boileux.jpg`, linkedinUrl: "https://www.linkedin.com/in/benjaminboileux/", badge: "Animation" },
		];
		const takeaways = [
			"Des repères concrets pour structurer et aligner vos équipes marketing, sales, équipe client et finance",
			"Des retours d'expérience terrain sur l'intégration de l'IA dans les organisations",
			"Des clés pour accompagner vos équipes dans le changement",
			"De nouvelles connexions avec l'écosystème business bordelais",
		];

		return (
			<div className="animate-fade-in pb-32">
				<div className="relative pt-24 pb-12 overflow-hidden">
					<div className="container mx-auto px-6 relative z-10">
						<button
							onClick={onBack}
							className="flex items-center gap-2 text-slate-400 hover:text-slate-900 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors mb-8"
						>
							<span>←</span> Retour aux événements
						</button>
						<div className="max-w-4xl">
							<div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-ocobo-primary text-white text-[10px] font-black uppercase tracking-[0.2em]">
								À venir · 26 Novembre 2026 · Bordeaux
							</div>
							<h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-10 tracking-tighter leading-none">
								Comment orchestrer en 2027 les équipes qui génèrent la croissance ?
							</h1>
							<div className="flex flex-wrap items-center gap-6">
								<a
									href={registrationUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:bg-ocobo-primary transition-all transform hover:-translate-y-1"
								>
									Je m'inscris
								</a>
								<button
									onClick={onHome}
									className="text-ocobo-primary font-black text-xs uppercase tracking-widest hover:underline transition-all"
								>
									En savoir plus sur le Club &rarr;
								</button>
							</div>
							<div className="mt-12 flex flex-wrap items-center gap-8">
								<img src={ocoboLogo} alt="Ocobo" className="h-10 w-auto object-contain" />
								<span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
									En partenariat avec
								</span>
								<img src={`${imgDir}/logos/up.png`} alt="Communauté UP'" className="h-14 w-auto object-contain" />
							</div>
						</div>
					</div>
					<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ocobo-primary/5 to-transparent pointer-events-none"></div>
				</div>

				<div className="container mx-auto px-6 space-y-32">
					{/* Programme */}
					<section id="programme" className="scroll-mt-32">
						<div className="flex flex-col lg:flex-row gap-20 items-center">
							<div className="lg:w-1/2">
								<h2 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tighter">
									Programme
								</h2>
								<p className="text-slate-500 text-lg leading-relaxed mb-6">
									La Communauté UP' s'associe au Modern Revenue Club pour vous proposer une table ronde et un temps de networking autour d'une question clé : comment orchestrer en 2027 les équipes qui génèrent la croissance ?
								</p>
								<p className="text-slate-500 text-lg leading-relaxed mb-6">
									Les cycles d'achat s'allongent, la croissance est plus difficile à aller chercher, et l'IA transforme déjà les métiers. Pourtant, le marketing, les sales et le service client travaillent encore trop souvent chacun de leur côté.
								</p>
								<p className="text-slate-500 text-lg leading-relaxed mb-6">
									Comment les aligner autour d'un même objectif de croissance ? Quels nouveaux rôles émergent, lesquels se transforment ? Comment embarquer ses équipes dans l'adoption de l'IA, et qu'est-ce qui doit rester profondément humain ?
								</p>
								<p className="text-slate-500 text-lg leading-relaxed">
									Animée par <strong className="text-slate-900 font-bold">Benjamin Boileux</strong>, CEO et cofondateur d'Ocobo, la table ronde réunit quatre intervenants qui pilotent la croissance au quotidien, chacun sur un pan de l'organisation : marketing, sales, service client et accompagnement des équipes. Pendant 40 minutes, ils partageront leurs retours d'expérience concrets, réussites comme erreurs à éviter, avant un temps d'échange avec la salle.
								</p>
							</div>

							<div className="lg:w-1/2 rounded-[3rem] overflow-hidden shadow-xl">
								<img
									src={`${imgDir}/visuel.jpg`}
									alt="Table ronde Modern Revenue Club x UP' à Bordeaux, le 26 novembre 2026"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</section>

					{/* Takeaways */}
					<section className="py-20 border-t border-slate-100">
						<div className="mb-12">
							<p className="text-[10px] font-black uppercase tracking-[0.4em] text-ocobo-primary mb-4">
								Ce que vous allez en retirer
							</p>
							<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
								Vous repartirez avec
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{takeaways.map((item, i) => (
								<div
									key={item}
									className="group bg-white/50 backdrop-blur-sm p-10 rounded-[3rem] border border-white/60 hover:border-ocobo-primary/30 transition-all shadow-sm hover:shadow-xl"
								>
									<span className="text-ocobo-primary font-black text-3xl mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">
										{String(i + 1).padStart(2, "0")}
									</span>
									<p className="text-slate-700 text-lg leading-relaxed font-semibold">
										{item}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Intervenants */}
					<div className="border-t border-slate-200/50 pt-20">
						<Speakers
							speakers={intervenants}
							title="Les voix de la table ronde"
							subtitle="Quatre intervenants qui pilotent la croissance au quotidien, chacun sur un pan de l'organisation : marketing, sales, service client et accompagnement des équipes."
						/>
					</div>

					{/* Location */}
					<div className="border-t border-slate-200/50 pt-20">
						<Location
							venueName="Locomotiv, Bordeaux"
							imageUrl={`${imgDir}/locomotiv.jpg`}
							imageAlt="L'espace Locomotiv à Bordeaux pendant une table ronde"
							description="Rendez-vous chez Locomotiv, en plein centre de Bordeaux, pour une soirée table ronde et networking avec l'écosystème business bordelais."
							address="4 cours de l'Intendance, 33000 Bordeaux"
							dateTime="Jeudi 26 Novembre 2026, de 18h30 à 22h30"
							stacked
							mapsUrl="https://www.google.com/maps/search/?api=1&query=Locomotiv+4+cours+de+l'Intendance+Bordeaux"
						/>
					</div>

					{/* Bottom CTA */}
					<section className="text-center py-20 bg-slate-900 rounded-[4rem] text-white overflow-hidden relative">
						<div className="relative z-10 px-6">
							<h3 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter">
								On vous garde une place ?
							</h3>
							<p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
								Jeudi 26 novembre, 18h30, chez Locomotiv à Bordeaux.
							</p>
							<a
								href={registrationUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block px-12 py-6 bg-ocobo-primary text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1"
							>
								Je m'inscris
							</a>
						</div>
						<div className="absolute top-0 right-0 w-64 h-64 bg-ocobo-primary/20 blur-[100px] rounded-full"></div>
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
					</section>
				</div>
			</div>
		);
	}

	if (eventId === "diner-mrc-juillet-2026") {
		return (
			<div className="animate-fade-in pb-32">
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
								Évènement Terminé · 21 Juillet 2026
							</div>
							<h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-none">
								Dîner MRC
							</h1>
							<p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-4">
								Le 21 juillet 2026, quinze leaders du Revenue se sont retrouvés autour d'une même table, au Hoxton Paris.
							</p>
							<button
								onClick={onHome}
								className="text-ocobo-primary font-black text-xs uppercase tracking-widest hover:underline transition-all"
							>
								En savoir plus sur le Club &rarr;
							</button>
						</div>
					</div>
					<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ocobo-primary/5 to-transparent pointer-events-none"></div>
				</div>

				<div className="container mx-auto px-6 space-y-32">
					{/* Concepts */}
					<section id="insights" className="scroll-mt-32">
						<div className="flex flex-col lg:flex-row gap-20 items-center">
							<div className="lg:w-1/2">
								<h2 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tighter">
									Concept
								</h2>
								<p className="text-slate-500 text-lg leading-relaxed mb-6">
									Le Modern Revenue Club réunit, autour d'une même table, des gens qui font vraiment du Revenue. Pas qui en parlent.
								</p>
								<p className="text-slate-500 text-lg leading-relaxed mb-6">
									Format intimiste : un dîner d'une quinzaine de personnes, un thème unique et une règle simple. On partage notre réalité, ce qui marche et ce qui coince, entre pairs qui vivent les mêmes questions.
								</p>
								<p className="text-slate-500 text-lg leading-relaxed mb-6">
									Le dîner #2 avait pour thème <strong className="text-slate-900 font-bold">l'IA appliquée au Revenue</strong> : où en est chacun, ce qui fonctionne, les problèmes identifiés, le niveau de maturité. Un apéritif informel pour lancer les échanges, puis des conversations qui suivent naturellement.
								</p>
								<p className="text-slate-500 text-lg leading-relaxed">
									L'objectif : repartir en y voyant un peu plus clair, et rester en lien.
								</p>
							</div>

							<div className="lg:w-1/2 rounded-[3rem] overflow-hidden shadow-xl">
								<img
									src="/images/hoxton-paris.jpg"
									alt="The Hoxton Paris"
									className="w-full h-full object-cover"
								/>
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

						<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
							<div className="relative md:col-span-7 md:row-span-1 min-h-[300px] rounded-[3rem] overflow-hidden group shadow-lg">
								<img
									src="/images/diner-mrc-juillet-2026/diner-3.jpg"
									alt="La table du Dîner MRC au complet"
									className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
							</div>
							<div className="md:col-span-5 md:row-span-1 grid grid-rows-2 gap-6 min-h-[300px]">
								<div className="relative rounded-[3rem] overflow-hidden group shadow-lg">
									<img
										src="/images/diner-mrc-juillet-2026/diner-1.jpg"
										alt="Échanges dans la cour du Hoxton Paris"
										className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
								<div className="relative rounded-[3rem] overflow-hidden group shadow-lg">
									<img
										src="/images/diner-mrc-juillet-2026/diner-2.jpg"
										alt="Cocktail avant le dîner"
										className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>
					</section>

					{/* Location */}
					<div className="border-t border-slate-200/50 pt-20">
						<Location
							venueName="The Hoxton, Paris"
							imageUrl="/images/hoxton-paris.jpg"
							imageAlt="The Hoxton Paris"
							description="Au cœur du 2ème arrondissement, le Hoxton Paris nous a accueillis dans ses salons pour une soirée intimiste entre leaders du Revenue."
							address={"30-32 Rue du Sentier\n75002 Paris"}
							dateTime={"21 Juillet 2026\nSoirée"}
							mapsUrl="https://www.google.com/maps/search/?api=1&query=The+Hoxton+Paris"
						/>
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
	}

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
