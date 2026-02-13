
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { generateEventAnswer } from '../services/geminiService';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Bienvenue au Modern Revenue Club. Je suis votre concierge dédié. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const userText = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);
    setIsTyping(true);
    const aiResponseText = await generateEventAnswer(userText);
    setIsTyping(false);
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: aiResponseText }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className={`flex items-center bg-slate-900 hover:bg-slate-800 text-white shadow-2xl transition-all duration-700 ease-in-out transform hover:-translate-y-2 overflow-hidden ${
            isExpanded ? 'px-8 py-5 rounded-full gap-4' : 'w-16 h-16 rounded-full justify-center'
          }`}
        >
          <span className={`font-black text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-700 ${isExpanded ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
            Concierge MRC
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] w-80 sm:w-[420px] flex flex-col h-[650px] overflow-hidden border border-slate-100 animate-fade-in-up">
          <div className="bg-slate-900 p-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-2.5 h-2.5 bg-ocobo-primary rounded-full animate-pulse"></div>
               <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">MRC Concierge</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-5 rounded-[2rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-xl font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex justify-start">
                <div className="bg-white text-slate-400 px-6 py-5 rounded-[2rem] rounded-tl-none border border-slate-100 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 bg-ocobo-primary rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-ocobo-primary rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-ocobo-primary rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-8 bg-white border-t border-slate-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message au concierge..."
                className="flex-1 px-8 py-4 border border-slate-100 bg-slate-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-800 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full transition-all disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Concierge;
