
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { getJewelryStylingAdvice } from '../services/gemini';

const AIStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Aurelia Luxe. I am your personal jewelry concierge. How may I assist you in finding your next masterpiece today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const aiResponse = await getJewelryStylingAdvice(userMessage, "Luxury, minimal, elegant, platinum lovers");

    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "Our concierge is momentary unavailable. Please try again." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-[#0F0F0F] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border border-white/10"
        >
          <Sparkles className="animate-pulse" size={24} strokeWidth={1.5} />
          <span className="absolute -top-12 right-0 bg-white text-[#0F0F0F] text-[10px] uppercase tracking-widest px-3 py-1 border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            AI Stylist
          </span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white border border-[#0F0F0F]/10 shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-[#0F0F0F] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Sparkles size={18} strokeWidth={1.5} />
              <h3 className="text-[12px] uppercase tracking-[0.3em] font-light">Styling Concierge</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-6 bg-[#FAFAFA]"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-[13px] leading-relaxed shadow-sm ${m.role === 'user'
                    ? 'bg-[#0F0F0F] text-white'
                    : 'bg-white text-[#2B2B2B] border border-black/5'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 border border-black/5">
                  <Loader2 className="animate-spin text-[#B5B5B5]" size={16} />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-black/5 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for styling advice..."
              className="flex-grow bg-transparent text-[13px] py-2 focus:outline-none placeholder:text-black/30"
            />
            <button
              type="submit"
              disabled={loading}
              className="text-[#0F0F0F] disabled:opacity-30 hover:opacity-60 transition-opacity"
            >
              <Send size={18} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIStylist;
