
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Masterclass from './components/Masterclasses';
import EventsPage from './components/EventsPage';
import EventDetail from './components/EventDetail';
import MemberDirectory from './components/MemberDirectory';
import Resources from './components/Resources';
import RegistrationModal from './components/RegistrationModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import Concierge from './components/Concierge';
import FinalCTA from './components/FinalCTA';
import { User } from './types';

const App: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'events' | 'event-detail' | 'network' | 'resources'>('home');
  const [resourceTab, setResourceTab] = useState<'library' | 'forum'>('library');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isResDropdownOpen, setIsResDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('mrc_user');
    if (savedUser) setUser(JSON.parse(savedUser));

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#event/')) {
        const id = hash.replace('#event/', '');
        setSelectedEventId(id);
        setCurrentPage('event-detail');
      } else if (hash === '#events-page') {
        setCurrentPage('events');
        setSelectedEventId(null);
      } else if (hash === '#network') {
        setCurrentPage('network');
        setSelectedEventId(null);
      } else if (hash === '#resources') {
        setCurrentPage('resources');
        setSelectedEventId(null);
      } else if (hash === '#forum') {
        setCurrentPage('resources');
        setResourceTab('forum');
        setSelectedEventId(null);
      } else {
        setCurrentPage('home');
        setSelectedEventId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'events' | 'network' | 'resources' | 'forum', eventId: string | null = null) => {
    if (eventId) {
      window.location.hash = `event/${eventId}`;
    } else {
      window.location.hash = page === 'events' ? 'events-page' : page === 'network' ? 'network' : page === 'resources' ? 'resources' : page === 'forum' ? 'forum' : '';
    }
    if (page === 'forum') {
      setResourceTab('forum');
    } else if (page === 'resources') {
      setResourceTab('library');
    }
    window.scrollTo(0, 0);
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem('mrc_user', JSON.stringify(userData));
    setIsAuthModalOpen(false);
    navigateTo('network');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('mrc_user');
    navigateTo('home');
  };

  return (
    <div className="mesh-gradient text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] max-w-7xl`}>
        <div className={`flex justify-between items-center px-6 md:px-10 py-4 rounded-[2rem] border border-white/40 shadow-xl backdrop-blur-xl bg-white/40`}>
          <div className="flex items-center cursor-pointer group" onClick={() => navigateTo('home')}>
            <img src="https://27107933.fs1.hubspotusercontent-eu1.net/hubfs/27107933/Logos-ModernRevenueClub-web_Logo%20complet-noir.png" alt="MRC" className="h-8 md:h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateTo('home')} className={`text-[10px] font-black uppercase tracking-widest ${currentPage === 'home' ? 'text-ocobo-primary' : 'text-slate-900'}`}>Le Club</button>
            
            {user && (
              <>
                <button onClick={() => navigateTo('network')} className={`text-[10px] font-black uppercase tracking-widest ${currentPage === 'network' ? 'text-ocobo-primary' : 'text-slate-900'}`}>Network</button>
                
                {/* Ressources Dropdown */}
                <div 
                  className="relative group py-2"
                  onMouseEnter={() => {
                    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                    setIsResDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimerRef.current = window.setTimeout(() => setIsResDropdownOpen(false), 200);
                  }}
                >
                  <button className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${currentPage === 'resources' ? 'text-ocobo-primary' : 'text-slate-900'}`}>
                    Ressources
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3"/></svg>
                  </button>
                  
                  {isResDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white p-2 animate-fade-in origin-top">
                      <button 
                        onClick={() => navigateTo('resources')}
                        className="w-full text-left px-6 py-4 text-[9px] font-black uppercase tracking-widest hover:bg-slate-50 rounded-2xl flex items-center gap-3 transition-colors"
                      >
                        <span className="text-base">📚</span> Bibliothèque
                      </button>
                      <button 
                        onClick={() => navigateTo('forum')}
                        className="w-full text-left px-6 py-4 text-[9px] font-black uppercase tracking-widest hover:bg-slate-50 rounded-2xl flex items-center gap-3 transition-colors"
                      >
                        <span className="text-base">💬</span> Forum Leaders
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => navigateTo('events')} 
                className={`bg-ocobo-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all ${currentPage === 'events' ? 'ring-2 ring-ocobo-primary/50' : ''}`}
              >
                Nos évènements
              </button>

              {user ? (
                <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <button onClick={handleLogout} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors">Déconnexion</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-28">
        {currentPage === 'home' && (
          <>
            <Hero onNavigateEvents={() => navigateTo('events')} onJoinClick={() => setIsRegModalOpen(true)} />
            <Masterclass />
            <FinalCTA onAction={() => navigateTo('events')} />
          </>
        )}
        
        {currentPage === 'events' && (
          <EventsPage onSelectEvent={(id) => navigateTo('events', id)} />
        )}

        {currentPage === 'event-detail' && selectedEventId && (
          <EventDetail 
            eventId={selectedEventId} 
            onBack={() => navigateTo('events')} 
            onHome={() => navigateTo('home')}
            onJoinClick={() => setIsRegModalOpen(true)}
          />
        )}

        {currentPage === 'network' && (
          user ? <MemberDirectory /> : <div className="py-40 text-center"><h2 className="text-3xl font-bold">Veuillez vous connecter pour accéder au network.</h2><button onClick={() => setIsAuthModalOpen(true)} className="mt-8 text-ocobo-primary underline font-bold">Connexion</button></div>
        )}

        {currentPage === 'resources' && (
          user ? <Resources defaultTab={resourceTab} /> : <div className="py-40 text-center"><h2 className="text-3xl font-bold">Veuillez vous connecter pour accéder aux ressources.</h2><button onClick={() => setIsAuthModalOpen(true)} className="mt-8 text-ocobo-primary underline font-bold">Connexion</button></div>
        )}
      </main>

      <Footer />
      <Concierge />
      
      {isRegModalOpen && <RegistrationModal onClose={() => setIsRegModalOpen(false)} />}
      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} onAuthSuccess={handleAuthSuccess} />}
    </div>
  );
};

export default App;
