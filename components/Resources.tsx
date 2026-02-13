
import React, { useState, useEffect } from 'react';

interface Resource {
  id: string;
  category: 'RevOps' | 'GTM' | 'AI' | 'Strategy';
  title: string;
  description: string;
  type: 'PDF' | 'Template' | 'Video' | 'Article';
  tag: string;
}

interface Reply {
  id: string;
  author: string;
  text: string;
  date: string;
}

interface Thread {
  id: string;
  author: string;
  authorRole: string;
  title: string;
  preview: string;
  replies: Reply[];
  participants: string[];
  category: string;
  isHot?: boolean;
}

const INITIAL_RESOURCES: Resource[] = [
  { id: '1', category: 'RevOps', title: 'Framework de Maturité RevOps 2026', description: 'Une roadmap complète pour évaluer et scaler votre fonction RevOps du stade Seed à Series C.', type: 'PDF', tag: 'Populaire' },
  { id: '2', category: 'GTM', title: 'Template de Calcul du CAC Payback', description: 'Modèle Excel avancé pour calculer précisément votre retour sur investissement par canal.', type: 'Template', tag: 'Nouveau' },
  { id: '3', category: 'AI', title: 'Guide d\'implémentation LLM en Sales', description: 'Comment intégrer des agents IA pour la prospection sans dégrader la qualité du reach-out.', type: 'Article', tag: 'Expert' },
  { id: '4', category: 'Strategy', title: 'Playbook Alignement Marketing/Ventes', description: 'Les rituels et KPIs partagés pour supprimer définitivement les silos entre vos départements.', type: 'PDF', tag: 'Fondamental' },
];

const INITIAL_THREADS: Thread[] = [
  {
    id: 't1',
    author: 'Elena R.',
    authorRole: 'Head of RevOps @ ManoMano',
    title: 'Migration HubSpot Enterprise : Quels pièges éviter ?',
    preview: 'Nous prévoyons de basculer l\'intégralité de nos workflows vers le nouveau module de Sequoia. Quelqu\'un a-t-il déjà essuyé les plâtres ?',
    replies: [
      { id: 'r1', author: 'Jean D.', text: 'Attention au mapping des propriétés personnalisées, Sequoia est plus rigide que l\'ancienne version.', date: 'Il y a 2h' }
    ],
    participants: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2'],
    category: 'Stack Tech',
    isHot: true
  },
  {
    id: 't2',
    author: 'Marc L.',
    authorRole: 'CEO @ Spendesk',
    title: 'Arbitrage CAC vs Croissance en 2026',
    preview: 'Avec la remontée des taux, comment ajustez-vous vos objectifs de LTV/CAC ? On observe une tension sur le mid-market.',
    replies: [],
    participants: ['https://i.pravatar.cc/150?u=4'],
    category: 'Finance'
  },
  {
    id: 't3',
    author: 'Julie G.',
    authorRole: 'CMO @ ContentSquare',
    title: 'L\'IA dans le Content Marketing : Volume vs Qualité',
    preview: 'On teste la génération de case studies par agents IA. Les premiers retours sont mitigés sur la nuance métier. Vos avis ?',
    replies: [
        { id: 'r2', author: 'Paul M.', text: 'Même constat, la relecture humaine reste indispensable pour garder le ton de marque.', date: 'Hier' }
    ],
    participants: ['https://i.pravatar.cc/150?u=6', 'https://i.pravatar.cc/150?u=7'],
    category: 'Marketing',
    isHot: true
  }
];

interface ResourcesProps {
  defaultTab?: 'library' | 'forum';
}

const Resources: React.FC<ResourcesProps> = ({ defaultTab = 'library' }) => {
  const [activeTab, setActiveTab] = useState<'library' | 'forum'>(defaultTab);
  const [libraryFilter, setLibraryFilter] = useState<string>('All');
  const [forumFilter, setForumFilter] = useState<string>('Tous');
  const [threads, setThreads] = useState<Thread[]>(INITIAL_THREADS);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  
  // Forum Form States
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');
  const [newTopicCategory, setNewTopicCategory] = useState('Discussion');
  const [replyText, setReplyText] = useState('');

  // Update tab when prop changes (from Navbar navigation)
  useEffect(() => {
    setActiveTab(defaultTab);
    setSelectedThread(null);
  }, [defaultTab]);

  const handleCreateTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicTitle.trim() || !newTopicContent.trim()) return;

    const newThread: Thread = {
      id: `t${Date.now()}`,
      author: 'Vous',
      authorRole: 'Leader GTM',
      title: newTopicTitle,
      preview: newTopicContent,
      replies: [],
      participants: ['https://i.pravatar.cc/150?u=me'],
      category: newTopicCategory,
    };
    setThreads([newThread, ...threads]);
    setNewTopicTitle('');
    setNewTopicContent('');
    setShowNewTopicModal(false);
  };

  const handleReply = (threadId: string) => {
    if (!replyText.trim()) return;
    const now = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    
    const updatedThreads = threads.map(t => {
      if (t.id === threadId) {
        return {
          ...t,
          replies: [...t.replies, { id: `r${Date.now()}`, author: 'Vous', text: replyText, date: `Aujourd'hui à ${now}` }]
        };
      }
      return t;
    });
    
    setThreads(updatedThreads);
    if (selectedThread?.id === threadId) {
      setSelectedThread({
        ...selectedThread,
        replies: [...selectedThread.replies, { id: `r${Date.now()}`, author: 'Vous', text: replyText, date: `Aujourd'hui à ${now}` }]
      });
    }
    setReplyText('');
  };

  const libraryCategories = ['All', 'RevOps', 'GTM', 'AI', 'Strategy'];
  const filteredResources = libraryFilter === 'All' 
    ? INITIAL_RESOURCES 
    : INITIAL_RESOURCES.filter(r => r.category === libraryFilter);

  const forumCategories = ['Tous', '🔥 Actifs', 'Stack Tech', 'Finance', 'Marketing', 'Discussion'];
  const filteredThreads = threads.filter(t => {
    if (forumFilter === 'Tous') return true;
    if (forumFilter === '🔥 Actifs') return t.isHot || t.replies.length > 0;
    return t.category === forumFilter;
  });

  return (
    <div className="py-20 animate-fade-in min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-ocobo-primary/10 text-ocobo-primary text-[10px] font-black uppercase tracking-[0.2em]">
              Espace Membres
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter">
              {activeTab === 'library' ? 'Bibliothèque' : 'Forum Leaders'}
            </h2>
          </div>
          
          {/* Internal Tab Switcher */}
          <div className="flex p-1.5 bg-white/50 backdrop-blur-md rounded-[2rem] border border-white w-fit shadow-lg h-fit">
            <button 
              onClick={() => { setActiveTab('library'); setSelectedThread(null); }}
              className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'library' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Bibliothèque
            </button>
            <button 
              onClick={() => setActiveTab('forum')}
              className={`px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                activeTab === 'forum' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              Forum
            </button>
          </div>
        </div>

        {activeTab === 'library' ? (
          <div className="animate-fade-in">
            <div className="flex flex-wrap gap-4 mb-12">
              {libraryCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setLibraryFilter(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    libraryFilter === cat 
                    ? 'bg-ocobo-primary text-white shadow-xl' 
                    : 'bg-white/50 text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map(resource => (
                <div key={resource.id} className="group bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white hover:shadow-2xl transition-all flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">{resource.type}</span>
                    <span className="text-ocobo-primary font-bold text-[10px] uppercase tracking-widest">{resource.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{resource.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-medium">{resource.description}</p>
                  <button className="w-full py-5 bg-white border border-slate-100 text-slate-900 rounded-full font-black text-[10px] uppercase tracking-widest group-hover:bg-ocobo-primary group-hover:text-white transition-all shadow-sm">
                    Télécharger
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            {selectedThread ? (
              <div className="max-w-4xl bg-white/60 backdrop-blur-md rounded-[3rem] border border-white p-12 shadow-xl animate-fade-in mx-auto">
                <button onClick={() => setSelectedThread(null)} className="mb-8 text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-slate-900">
                  ← Retour au Forum
                </button>
                <div className="mb-12">
                  <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-[8px] font-black uppercase tracking-widest mb-4 inline-block">{selectedThread.category}</span>
                  <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tighter">{selectedThread.title}</h3>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">{selectedThread.author[0]}</div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">{selectedThread.author}</p>
                      <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">{selectedThread.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">{selectedThread.preview}</p>
                </div>

                <div className="border-t border-slate-100 pt-12 space-y-8">
                  <h4 className="text-xl font-extrabold text-slate-900 mb-8">Échanges ({selectedThread.replies.length})</h4>
                  {selectedThread.replies.map(reply => (
                    <div key={reply.id} className="bg-white p-8 rounded-[2rem] border border-slate-50 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-900 text-sm">{reply.author}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{reply.date}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{reply.text}</p>
                    </div>
                  ))}

                  <div className="mt-12 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <textarea 
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Partagez votre avis ou posez une question complémentaire..."
                      className="w-full bg-white rounded-2xl p-6 text-sm border border-slate-100 focus:outline-none focus:ring-2 focus:ring-ocobo-primary min-h-[120px] mb-4"
                    />
                    <button 
                      onClick={() => handleReply(selectedThread.id)}
                      className="px-10 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-ocobo-primary transition-all shadow-lg"
                    >
                      Poster ma réponse
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                  <div className="flex flex-wrap gap-2">
                    {forumCategories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setForumFilter(cat)}
                        className={`px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
                          forumFilter === cat 
                          ? 'bg-ocobo-primary text-white shadow-lg scale-105' 
                          : 'bg-white/50 text-slate-400 hover:text-slate-900 hover:bg-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowNewTopicModal(true)}
                    className="px-8 py-4 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-ocobo-primary transition-all shadow-lg flex-shrink-0"
                  >
                    + Créer un sujet
                  </button>
                </div>

                <div className="grid gap-6">
                  {filteredThreads.length > 0 ? (
                    filteredThreads.map(thread => (
                      <div 
                        key={thread.id} 
                        onClick={() => setSelectedThread(thread)}
                        className="group bg-white/40 backdrop-blur-md p-10 rounded-[3rem] border border-white hover:bg-white hover:shadow-2xl transition-all cursor-pointer flex flex-col md:flex-row gap-8 items-center"
                      >
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-slate-900 text-white rounded-full text-[8px] font-black uppercase tracking-widest">{thread.category}</span>
                            {thread.isHot && <span className="text-orange-500 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">🔥 Populaire</span>}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-ocobo-primary transition-colors">{thread.title}</h3>
                          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{thread.author} • {thread.replies.length} réponses</p>
                        </div>
                        <div className="flex -space-x-2">
                          {thread.participants.map((p, i) => (
                            <img key={i} src={p} className="w-10 h-10 rounded-full border-2 border-white" alt="Member" />
                          ))}
                        </div>
                        <div className="text-ocobo-primary font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">Consulter →</div>
                      </div>
                    ))
                  ) : (
                    <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-[3rem] opacity-50">
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Aucune discussion trouvée dans cette catégorie.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal: New Topic */}
        {showNewTopicModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setShowNewTopicModal(false)}></div>
            <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-12 shadow-2xl animate-fade-in-up">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tighter">Lancer une discussion</h3>
              <form onSubmit={handleCreateTopic} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Titre du sujet</label>
                    <input 
                      required
                      value={newTopicTitle}
                      onChange={(e) => setNewTopicTitle(e.target.value)}
                      placeholder="ex: Comment gérez-vous le churn sur le mid-market ?" 
                      className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ocobo-primary" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Catégorie</label>
                    <select 
                      value={newTopicCategory}
                      onChange={(e) => setNewTopicCategory(e.target.value)}
                      className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ocobo-primary appearance-none font-bold text-xs"
                    >
                      <option value="Discussion">Discussion Générale</option>
                      <option value="Stack Tech">Stack Tech</option>
                      <option value="Finance">Finance</option>
                      <option value="Marketing">Marketing</option>
                      <option value="RevOps">RevOps</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Contexte / Question détaillée</label>
                  <textarea 
                    required
                    value={newTopicContent}
                    onChange={(e) => setNewTopicContent(e.target.value)}
                    placeholder="Détaillez votre problématique pour obtenir des réponses pertinentes..." 
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-ocobo-primary min-h-[150px]" 
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setShowNewTopicModal(false)} className="flex-1 py-5 border border-slate-100 text-slate-400 rounded-full font-black uppercase tracking-widest text-[10px]">Annuler</button>
                  <button type="submit" className="flex-1 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-ocobo-primary transition-all">Publier le sujet</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Universal Footer for Resources */}
        <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 text-center text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div>
              <h4 className="text-2xl font-bold mb-2">Contributeur du Club</h4>
              <p className="text-slate-400 text-sm max-w-md">Vous avez un framework ou une réflexion à partager avec les 250+ membres ?</p>
            </div>
            <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-ocobo-primary hover:text-white transition-all">
              Soumettre une proposition
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-ocobo-primary/10 blur-[80px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
