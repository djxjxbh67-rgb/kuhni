
import React, { useState, useRef, useEffect } from 'react';
import { getKitchenAdvice } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Здравствуйте! Я ваш ИИ-дизайнер. Помогу выбрать стиль или цвет вашей будущей кухни. О чем хотите спросить?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getKitchenAdvice(userText);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-xl`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[350px] md:w-[400px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div>
              <div className="font-bold">ИИ-Дизайнер</div>
              <div className="text-[10px] uppercase opacity-70">Artisan Kitchens AI</div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2.5 rounded-2xl shadow-sm border border-slate-100 rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ваш вопрос дизайнеру..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <button 
              onClick={handleSend}
              className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center hover:bg-indigo-700 transition-colors"
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
