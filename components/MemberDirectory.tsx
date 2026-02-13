
import React, { useState } from 'react';
import { Member } from '../types';

const MOCK_MEMBERS: Member[] = [
  { id: '1', name: 'Sophie Martin', role: 'CRO', company: 'PayFit', location: 'Paris', expertise: ['Scaling', 'GTM'], imageUrl: 'https://i.pravatar.cc/150?u=sophie' },
  { id: '2', name: 'Thomas Dubois', role: 'VP Sales', company: 'Swile', location: 'Lyon', expertise: ['Outbound', 'CRM'], imageUrl: 'https://i.pravatar.cc/150?u=thomas' },
  { id: '3', name: 'Elena Rossi', role: 'Head of RevOps', company: 'ManoMano', location: 'Paris', expertise: ['Data', 'HubSpot'], imageUrl: 'https://i.pravatar.cc/150?u=elena' },
  { id: '4', name: 'Marc Lefebvre', role: 'CEO', company: 'Spendesk', location: 'Paris', expertise: ['Fintech', 'Strategy'], imageUrl: 'https://i.pravatar.cc/150?u=marc' },
  { id: '5', name: 'Julie Girard', role: 'CMO', company: 'ContentSquare', location: 'Paris', expertise: ['Demand Gen', 'Brand'], imageUrl: 'https://i.pravatar.cc/150?u=julie' },
  { id: '6', name: 'Nicolas Petit', role: 'VP RevOps', company: 'Alan', location: 'Remote', expertise: ['Automation', 'LTV'], imageUrl: 'https://i.pravatar.cc/150?u=nicolas' },
];

const MemberDirectory: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredMembers = MOCK_MEMBERS.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tighter mb-4">Network</h2>
          <p className="text-slate-500 font-medium">Connectez-vous avec les leaders du Revenue de l'écosystème.</p>
        </div>

        <div className="mb-12">
          <input 
            type="text" 
            placeholder="Rechercher un membre, une entreprise..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-8 py-4 bg-white/50 border border-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-ocobo-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map(member => (
            <div key={member.id} className="bg-white/40 backdrop-blur-md p-8 rounded-[3rem] border border-white hover:shadow-2xl transition-all group">
              <div className="flex items-center gap-6 mb-8">
                <img src={member.imageUrl} className="w-20 h-20 rounded-full border-4 border-white shadow-lg" alt={member.name} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-ocobo-primary font-bold text-sm">{member.role} @ {member.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {member.expertise.map(exp => (
                  <span key={exp} className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">{exp}</span>
                ))}
              </div>

              <button className="w-full py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-widest group-hover:bg-ocobo-primary transition-colors">
                Contacter
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberDirectory;
