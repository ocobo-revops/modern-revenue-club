import type React from "react";
import Agenda from "./components/Agenda";
import ComingSoon from "./components/ComingSoon";
import Concierge from "./components/Concierge";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Speakers from "./components/Speakers";

const App: React.FC = () => {
	const showComingSoon = import.meta.env.VITE_SHOW_COMING_SOON === "true";

	if (showComingSoon) {
		return <ComingSoon />;
	}

	return (
		<div className="mesh-gradient text-slate-900 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
			<Navbar />
			<main>
				<Hero />
				<Speakers />
				<Agenda />
				<Location />
				<Registration />
			</main>
			<Footer />
			<Concierge />
		</div>
	);
};

export default App;
