import React, { useState, useRef, useEffect } from 'react';
import { chatWithArchitect } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Titan OS Architect Console initialized. I am ready to discuss the Monolith kernel, the Matte/Ember design language, or the Ignition protocol.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await chatWithArchitect(history, userMsg.text);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "System error: No response derived."
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I cannot access the architectural schematics at this moment. Please verify your API clearance (Check API Key).",
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] border border-titan-700 bg-titan-900 rounded-sm overflow-hidden shadow-2xl">
      <div className="bg-titan-950 px-6 py-4 border-b border-titan-700 flex items-center justify-between">
        <h3 className="text-ember-500 font-display text-sm font-bold flex items-center gap-3 tracking-widest">
          <span className="w-1.5 h-1.5 bg-ember-500 shadow-glow-sm animate-pulse"></span>
          ARCHITECT_LINK_V3
        </h3>
        <span className="text-[10px] text-titan-600 font-mono uppercase">Encrypted // Titan Protocol</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-titan-900">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 text-sm ${
              msg.role === 'user' 
                ? 'bg-titan-800 border-r-2 border-ember-600 text-titan-100' 
                : msg.isError 
                  ? 'bg-red-900/20 border-l-2 border-red-800 text-red-200'
                  : 'bg-titan-850 border-l-2 border-titan-600 text-titan-300'
            }`}>
              <div className="font-mono text-[10px] text-titan-500 mb-2 uppercase tracking-wide flex justify-between">
                <span>{msg.role === 'user' ? 'Operator' : 'System'}</span>
                <span>{new Date(parseInt(msg.id) || Date.now()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
              </div>
              <div className="whitespace-pre-wrap leading-relaxed font-light">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
             <div className="bg-titan-850 border-l-2 border-titan-600 p-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-ember-500 animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-ember-500 animate-pulse delay-75"></div>
                <div className="w-1.5 h-1.5 bg-ember-500 animate-pulse delay-150"></div>
             </div>
            </div>
        )}
      </div>

      <div className="p-6 bg-titan-950 border-t border-titan-800">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Query the system architect..."
            className="flex-1 bg-titan-900 border border-titan-700 px-5 py-3 text-sm text-titan-200 focus:outline-none focus:border-ember-500 focus:shadow-glow-sm font-sans placeholder-titan-600 transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-ember-600 hover:bg-ember-500 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all shadow-glow-sm hover:shadow-glow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            Transmit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;