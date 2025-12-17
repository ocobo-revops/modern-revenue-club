import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Masterclasses from './components/Masterclasses';
import Location from './components/Location';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

const App: React.FC = () => {
  return (
    <div className="mesh-gradient text-slate-900 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Masterclasses />
        <Location />
        <Registration />
      </main>
      <Footer />
      <Concierge />
    </div>
  );
};

export default App;