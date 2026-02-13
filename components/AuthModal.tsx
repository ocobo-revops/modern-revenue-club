
import React, { useState } from 'react';
import { User } from '../types';

interface AuthModalProps {
  onClose: () => void;
  onAuthSuccess: (user: User) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful authentication
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: name || email.split('@')[0],
      isMember: true
    };
    onAuthSuccess(mockUser);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white rounded-[3rem] p-12 shadow-2xl animate-fade-in-up">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tighter">
          {isLogin ? 'Bon retour' : 'Rejoindre le Club'}
        </h2>
        <p className="text-slate-500 mb-8 font-medium">L'espace privé des leaders GTM.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Nom complet</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jean Revenue" 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ocobo-primary" 
              />
            </div>
          )}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Email Professionnel</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jean@entreprise.com" 
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ocobo-primary" 
            />
          </div>
          <button className="w-full py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-xs shadow-xl hover:bg-ocobo-primary transition-all">
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-bold text-slate-400 hover:text-ocobo-primary transition-colors"
          >
            {isLogin ? "Pas encore membre ? Postulez ici" : "Déjà membre ? Connectez-vous"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
