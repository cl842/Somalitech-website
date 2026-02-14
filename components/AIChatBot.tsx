
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, X, Send, Bot, User, Loader2, Sparkles, 
  BrainCircuit, Code, Lightbulb, Image as ImageIcon, 
  Globe, Shield, Cpu, LogIn, LogOut, Search, Zap, 
  Terminal, Palette, Trash2, ChevronRight, Info, Lock, Crown,
  Layers, Settings2, History, Database, Wand2, Sliders, Monitor
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { BRAND_NAME, SERVICES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
  sources?: any[];
  isStreaming?: boolean;
  isThinking?: boolean;
}

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  tier: 'free' | 'pro';
}

type ExpertMode = 'studio' | 'uiux' | 'security' | 'server' | 'logic';
type StudioConfig = {
  temperature: number;
  engine: 'flash' | 'pro';
  grounding: boolean;
};

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [expertMode, setExpertMode] = useState<ExpertMode>('studio');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'config' | 'history'>('chat');
  const [studioConfig, setStudioConfig] = useState<StudioConfig>({
    temperature: 0.7,
    engine: 'flash',
    grounding: true
  });
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isAuthenticated, isOpen, activeTab]);

  const handleGoogleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      const mockUser: UserProfile = {
        name: "Ahmed Mohamed",
        email: "ahmed.m@enterprise.so",
        avatar: "https://i.pravatar.cc/150?u=ahmed",
        tier: 'free'
      };
      setUserProfile(mockUser);
      setIsAuthenticated(true);
      setIsLoggingIn(false);
      setMessages([
        { 
          role: 'model', 
          text: `Asc ${mockUser.name}! Kusoo dhawaaw **SomaliTech Studio Engine (v6.0)**. 

Kani waa xarunta maamulka digital-ka. Hadda waxaad maamuli kartaa:
• **AI Behavior**: Dooro heerka hal-abuurka.
• **Expert Logic**: Adeegso khubaro kala duwan.
• **Cloud Integration**: Xiriir xaqiiqo ah.

Habkaaga hadda waa **Free Tier**. Si aad u furto awoodda **Pro Engine** (v3.5), riix badhanka Pro.` 
        }
      ]);
    }, 1500);
  };

  const handleUpgrade = () => {
    if (userProfile) {
      setUserProfile({ ...userProfile, tier: 'pro' });
      setStudioConfig({ ...studioConfig, engine: 'pro' });
      setShowUpgradeModal(false);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Hambalyo! Hadda waxaad maamulaysaa **Enterprise Pro Studio**. Awoodda Gemini 3 Pro iyo Google Search Grounding hadda waa kuu diyaar. Ma bilaabnaa shaqada?" 
      }]);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userProfile?.tier !== 'pro') {
      setShowUpgradeModal(true);
      return;
    }
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading || !isAuthenticated) return;

    const userMessage = input.trim();
    const userImage = selectedImage;
    const isPro = userProfile?.tier === 'pro';
    
    setInput('');
    setSelectedImage(null);
    setMessages(prev => [...prev, { role: 'user', text: userMessage, image: userImage || undefined }]);
    setIsLoading(true);

    setMessages(prev => [...prev, { role: 'model', text: '', isThinking: true }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const modelName = isPro && studioConfig.engine === 'pro' ? 'gemini-3-pro-preview' : 'gemini-3-flash-preview';
      
      const parts: any[] = [];
      if (userImage && isPro) {
        parts.push({
          inlineData: { mimeType: "image/jpeg", data: userImage.split(',')[1] }
        });
      }
      
      const promptContext = `[STUDIO_ENGINE: v6.0] [MODE: ${expertMode.toUpperCase()}] [TEMP: ${studioConfig.temperature}]
      User Request: ${userMessage || "Deep technical analysis of multimodal input."}`;
      parts.push({ text: promptContext });

      const result = await ai.models.generateContentStream({
        model: modelName,
        contents: [{ role: 'user', parts }],
        config: {
          tools: (isPro && studioConfig.grounding) ? [{ googleSearch: {} }] : [],
          temperature: studioConfig.temperature,
          systemInstruction: `Waxaad tahay SomaliTech Studio Master Engine. 
          Kani waa jawi premium ah.
          - Markasta bixi jawaabo leh structure farsamo (JSON blocks, Mermaid diagrams, tables).
          - Luqadda: Somali (Primary), English (Technical terms).
          - Noqo mid dhiirigelin leh laakiin si weyn u hufan xagga xogta.`,
        },
      });

      let fullText = '';
      let firstChunk = true;

      for await (const chunk of result) {
        if (firstChunk) {
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].isThinking = false;
            newMessages[newMessages.length - 1].isStreaming = true;
            return newMessages;
          });
          firstChunk = false;
        }

        fullText += chunk.text || '';
        setMessages(prev => {
          const newMessages = [...prev];
          const lastIdx = newMessages.length - 1;
          newMessages[lastIdx] = { 
            ...newMessages[lastIdx], 
            text: fullText,
            sources: chunk.candidates?.[0]?.groundingMetadata?.groundingChunks
          };
          return newMessages;
        });
      }

      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].isStreaming = false;
        return newMessages;
      });

    } catch (error) {
      console.error('Studio Engine Failure:', error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].isThinking = false;
        newMessages[newMessages.length - 1].text = 'Cilad farsamo: Studio Engine waxa uu u baahan yahay in dib loo kiciyo.';
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setInput('');
    setSelectedImage(null);
    if (isAuthenticated && userProfile) {
      setMessages([{ role: 'model', text: `Nidaamka waa la nadiifiyey. Studio Engine hadda waa diyaar.` }]);
    }
  };

  const expertModes = [
    { id: 'studio', icon: <Monitor size={14} />, label: 'Main Control', color: 'bg-indigo-600' },
    { id: 'logic', icon: <Cpu size={14} />, label: 'Deep Logic', color: 'bg-emerald-600' },
    { id: 'security', icon: <Shield size={14} />, label: 'SecOps', color: 'bg-rose-600' },
    { id: 'server', icon: <Database size={14} />, label: 'Infra', color: 'bg-slate-800' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-[210] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-3xl animate-in fade-in">
          <div className="w-full max-w-xl bg-white rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 border border-white/20">
            <div className="p-12 gradient-bg text-white text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 animate-pulse"><Crown size={150} className="opacity-10" /></div>
              <div className="w-24 h-24 bg-white/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 backdrop-blur-2xl border border-white/30 shadow-2xl">
                <Crown size={56} className="text-yellow-300" />
              </div>
              <h3 className="text-5xl font-black mb-4 tracking-tighter italic">Studio Pro</h3>
              <p className="text-lg opacity-90 font-medium">U kici nidaamka digital-ka ee ugu sareeya dunida.</p>
            </div>
            <div className="p-12">
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <Zap size={18} />, text: "Instant Response" },
                  { icon: <Globe size={18} />, text: "Real-time Search" },
                  { icon: <ImageIcon size={18} />, text: "Multimodal Vision" },
                  { icon: <Shield size={18} />, text: "Private Nodes" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={handleUpgrade} className="w-full py-7 gradient-bg text-white rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-[1.02] transition-all">
                Activate Studio Pro Access
              </button>
              <button onClick={() => setShowUpgradeModal(false)} className="w-full py-4 mt-4 text-slate-400 font-bold hover:text-slate-600">Sii wad bilaashka</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Studio Workspace */}
      {isOpen && (
        <div className="mb-6 w-[95vw] sm:w-[900px] lg:w-[1100px] h-[85vh] max-h-[950px] bg-white rounded-[4.5rem] shadow-[0_80px_160px_-20px_rgba(0,0,0,0.45)] border border-slate-200 flex overflow-hidden animate-fade-in-up ring-1 ring-slate-100">
          
          {/* Studio Sidebar (Control Panel) */}
          <div className="hidden md:flex w-80 bg-slate-50 border-r border-slate-100 flex-col p-10 shrink-0">
             <div className="flex items-center gap-4 mb-14">
               <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white shadow-2xl">
                 <Wand2 size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] leading-none mb-2">Master Core</p>
                 <h4 className="text-lg font-black text-slate-900 tracking-tighter italic">Studio v6</h4>
               </div>
             </div>

             <nav className="space-y-3 flex-grow">
               <button onClick={() => setActiveTab('chat')} className={`w-full flex items-center gap-4 px-6 py-5 rounded-[2rem] transition-all ${activeTab === 'chat' ? 'bg-white text-blue-600 shadow-2xl shadow-slate-200 border border-slate-100 font-black' : 'text-slate-400 hover:bg-white/50 font-bold'}`}>
                 <MessageSquare size={20} /> Chat Desk
               </button>
               <button onClick={() => setActiveTab('config')} className={`w-full flex items-center gap-4 px-6 py-5 rounded-[2rem] transition-all ${activeTab === 'config' ? 'bg-white text-blue-600 shadow-2xl shadow-slate-200 border border-slate-100 font-black' : 'text-slate-400 hover:bg-white/50 font-bold'}`}>
                 <Sliders size={20} /> Core Config
               </button>
               <button onClick={() => setActiveTab('history')} className={`w-full flex items-center gap-4 px-6 py-5 rounded-[2rem] transition-all ${activeTab === 'history' ? 'bg-white text-blue-600 shadow-2xl shadow-slate-200 border border-slate-100 font-black' : 'text-slate-400 hover:bg-white/50 font-bold'}`}>
                 <History size={20} /> Session Log
               </button>
             </nav>

             <div className="mt-auto">
                <div className="p-8 gradient-bg rounded-[3rem] text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-80 mb-3 text-white">System Status</p>
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                       <span className="text-sm font-black">Online / Optimised</span>
                    </div>
                    <button onClick={() => setShowUpgradeModal(true)} className="w-full py-4 bg-white text-[#6C8CFF] rounded-[1.5rem] text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Upgrade Engine</button>
                  </div>
                  <Cpu size={150} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
                </div>
             </div>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-grow flex flex-col bg-white">
            
            {/* Header */}
            <div className="p-10 border-b border-slate-50 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-5">
                 <div className="md:hidden w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center text-white">
                   <Monitor size={32} />
                 </div>
                 <div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tighter flex items-center gap-3">
                     {activeTab === 'chat' ? (expertModes.find(m => m.id === expertMode)?.label + ' Desktop') : 'Core Configuration'}
                     {userProfile?.tier === 'pro' && <Crown size={24} className="text-yellow-400" />}
                   </h3>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span> Studio Terminal: Connected
                   </p>
                 </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="p-4 bg-slate-50 rounded-[1.5rem] hover:bg-rose-50 hover:text-rose-500 text-slate-400 transition-all active:scale-90"><X size={28} /></button>
            </div>

            {!isAuthenticated ? (
              /* High-end Auth Landing */
              <div className="flex-grow flex flex-col items-center justify-center p-20 text-center">
                 <div className="w-36 h-36 bg-slate-50 rounded-[4rem] flex items-center justify-center mb-14 border border-slate-100 shadow-2xl relative group">
                   <div className="absolute -inset-4 bg-blue-100 rounded-[4.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                   <LogIn size={64} className="text-indigo-600 relative z-10" />
                 </div>
                 <h2 className="text-5xl font-[900] text-slate-900 mb-8 tracking-tighter italic leading-none">Handle the Studio.</h2>
                 <p className="text-slate-500 max-w-sm mx-auto mb-16 font-medium text-lg leading-relaxed">
                   Si aad u maamusho xogta farsamada ee SomaliTech, fadlan ku gal nidaamka xogtaada Gmail.
                 </p>
                 <button onClick={handleGoogleLogin} disabled={isLoggingIn} className="w-full max-w-sm py-7 bg-white border-2 border-slate-100 rounded-[3rem] flex items-center justify-center gap-5 shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-400 transition-all group active:scale-95 disabled:opacity-70">
                   {isLoggingIn ? <Loader2 size={28} className="animate-spin text-indigo-600" /> : (
                     <>
                        <svg className="w-8 h-8" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        <span className="font-black text-slate-700 tracking-tight text-xl">Sign-in Master Core</span>
                     </>
                   )}
                 </button>
              </div>
            ) : (
              <>
                {activeTab === 'chat' ? (
                  <>
                    <div className="px-10 py-5 bg-slate-50 border-b border-slate-100 flex gap-4 overflow-x-auto no-scrollbar shrink-0">
                      {expertModes.map((mode) => (
                        <button
                          key={mode.id}
                          onClick={() => setExpertMode(mode.id as ExpertMode)}
                          className={`flex items-center gap-3 px-7 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border shadow-sm ${
                            expertMode === mode.id 
                              ? `${mode.color} text-white border-transparent shadow-xl scale-105` 
                              : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-400'
                          }`}
                        >
                          {mode.icon} {mode.label}
                        </button>
                      ))}
                    </div>

                    <div ref={scrollRef} className="flex-grow p-12 overflow-y-auto space-y-12 custom-scrollbar bg-slate-50/20">
                      {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                          <div className={`flex gap-8 max-w-[92%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-14 h-14 rounded-3xl flex-shrink-0 flex items-center justify-center shadow-2xl ring-4 ring-white ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-white text-indigo-600 border border-slate-100'}`}>
                              {msg.role === 'user' ? (
                                userProfile?.avatar ? <img src={userProfile.avatar} className="w-full h-full object-cover" /> : <User size={28} />
                              ) : <Bot size={28} />}
                            </div>
                            <div className={`p-10 rounded-[3.5rem] text-[16px] leading-[1.8] shadow-xl relative group ${
                              msg.role === 'user' 
                                ? 'bg-slate-900 text-white rounded-tr-none' 
                                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                            }`}>
                              {msg.image && (
                                <div className="mb-8 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl transition-transform hover:scale-[1.02]">
                                  <img src={msg.image} alt="Studio Input" className="max-w-full h-auto block" />
                                </div>
                              )}
                              
                              {msg.isThinking ? (
                                <div className="flex flex-col gap-5 min-w-[280px]">
                                  <div className="flex items-center gap-4 text-indigo-600">
                                    <Loader2 size={24} className="animate-spin" />
                                    <span className="text-xs font-black uppercase tracking-[0.3em] italic">Engine Reasoning...</span>
                                  </div>
                                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 animate-[loading_2s_infinite]"></div>
                                  </div>
                                </div>
                              ) : (
                                <div className="whitespace-pre-wrap font-medium">
                                  {msg.text}
                                  {msg.isStreaming && <span className="inline-block w-2.5 h-5 ml-2 bg-indigo-500 animate-pulse align-middle"></span>}
                                </div>
                              )}

                              {msg.sources && msg.sources.length > 0 && (
                                <div className="mt-10 pt-10 border-t border-slate-50">
                                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-5 flex items-center gap-3">
                                    <Globe size={14} /> Grounding Network Result
                                  </p>
                                  <div className="flex flex-wrap gap-3">
                                    {msg.sources.map((source: any, idx: number) => (
                                      source.web && <a key={idx} href={source.web.uri} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs bg-slate-50 border border-slate-100 text-slate-500 px-6 py-3 rounded-[1.2rem] hover:border-indigo-400 hover:text-indigo-600 transition-all font-bold shadow-sm">{source.web.title || 'Studio Node'}</a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Studio Input Desk */}
                    <div className="p-12 bg-white border-t border-slate-50 shrink-0">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <button onClick={resetChat} className="p-4 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-[1.5rem] transition-all border border-slate-100 shadow-sm" title="Purge Session"><Trash2 size={24} /></button>
                          {selectedImage && (
                            <div className="flex items-center gap-4 px-5 py-2.5 bg-indigo-50 rounded-[1.5rem] border border-indigo-100 animate-in zoom-in-95">
                              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white shadow-md"><img src={selectedImage} className="w-full h-full object-cover" /></div>
                              <p className="text-xs font-black text-indigo-700 uppercase tracking-widest italic">Vision Active</p>
                              <button onClick={() => setSelectedImage(null)} className="text-indigo-400 hover:text-indigo-600"><X size={18} /></button>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-3 px-5 py-2 bg-slate-50 rounded-xl border border-slate-100">
                             <Zap size={14} className="text-blue-500" />
                             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{studioConfig.engine === 'pro' ? 'Pro Engine' : 'Lite Engine'}</span>
                          </div>
                          {userProfile?.tier === 'free' && (
                            <button onClick={() => setShowUpgradeModal(true)} className="flex items-center gap-3 px-6 py-2.5 bg-yellow-50 text-yellow-700 rounded-[1.2rem] border border-yellow-100 text-[10px] font-black uppercase tracking-widest hover:bg-yellow-100 transition-all shadow-md">
                              <Crown size={14} /> Go Studio Pro
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-[3.5rem] blur-3xl opacity-0 group-focus-within:opacity-20 transition-all duration-1000"></div>
                        <div className="relative flex items-center gap-5">
                          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageSelect} className="hidden" />
                          <button 
                            onClick={() => {
                              if (userProfile?.tier === 'pro') fileInputRef.current?.click();
                              else setShowUpgradeModal(true);
                            }}
                            className={`p-6 bg-slate-50 text-slate-500 rounded-[2.5rem] hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-200 flex-shrink-0 shadow-sm ${userProfile?.tier !== 'pro' ? 'cursor-not-allowed opacity-40' : 'active:scale-95'}`}
                          >
                            {userProfile?.tier === 'pro' ? <ImageIcon size={32} /> : <Lock size={32} />}
                          </button>
                          <div className="relative flex-grow">
                            <textarea 
                              rows={1}
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSend();
                                }
                              }}
                              placeholder="Fasir nidaamka ama i weydii wax kasta oo farsamo ah..."
                              className="w-full pl-10 pr-24 py-7 bg-slate-50 border border-slate-200 rounded-[3.5rem] text-lg font-bold focus:ring-0 focus:border-indigo-400 focus:bg-white transition-all outline-none shadow-inner resize-none overflow-hidden"
                            />
                            <button 
                              onClick={handleSend} 
                              disabled={(!input.trim() && !selectedImage) || isLoading} 
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-6 bg-slate-900 text-white rounded-full hover:bg-indigo-600 disabled:opacity-50 transition-all shadow-2xl active:scale-90"
                            >
                              {isLoading ? <Loader2 size={28} className="animate-spin" /> : <Send size={28} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Configuration Studio Desk */
                  <div className="p-20 flex-grow bg-slate-50/20 overflow-y-auto custom-scrollbar">
                     <div className="max-w-2xl mx-auto space-y-12">
                        <h2 className="text-4xl font-[900] tracking-tighter italic mb-10">Studio Parameters.</h2>
                        
                        <div className="space-y-4">
                           <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Hal-abuurka Engine (Temperature): {studioConfig.temperature}</label>
                           <input 
                              type="range" 
                              min="0" max="1" step="0.1" 
                              value={studioConfig.temperature}
                              onChange={(e) => setStudioConfig({...studioConfig, temperature: parseFloat(e.target.value)})}
                              className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                           />
                           <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                              <span>Exact (Farsamo)</span>
                              <span>Creative (Hal-abuur)</span>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                           <div className="space-y-4">
                              <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Grounding Source</label>
                              <button 
                                onClick={() => setStudioConfig({...studioConfig, grounding: !studioConfig.grounding})}
                                className={`w-full py-6 rounded-[2rem] border-2 font-black text-sm transition-all ${studioConfig.grounding ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-100 text-slate-400'}`}
                              >
                                {studioConfig.grounding ? 'Live Google Search: ON' : 'Live Google Search: OFF'}
                              </button>
                           </div>
                           <div className="space-y-4">
                              <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Engine Selection</label>
                              <button 
                                onClick={() => {
                                  if (userProfile?.tier === 'pro') setStudioConfig({...studioConfig, engine: studioConfig.engine === 'flash' ? 'pro' : 'flash'});
                                  else setShowUpgradeModal(true);
                                }}
                                className={`w-full py-6 rounded-[2rem] border-2 font-black text-sm transition-all ${studioConfig.engine === 'pro' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-slate-100 text-slate-400'}`}
                              >
                                {studioConfig.engine === 'pro' ? 'Gemini 3 Pro Active' : 'Flash Engine Active'}
                              </button>
                           </div>
                        </div>

                        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl">
                           <p className="text-sm font-bold text-slate-500 mb-6 leading-relaxed italic">
                             "Configuralkan waxa uu bedelayaa habka Studio Engine u falanqeynayo mashaariicdaada. Hubi inaad Pro noqoto si aad u hesho xawaaraha iyo tayada ugu sareysa."
                           </p>
                           <div className="flex items-center gap-4">
                              <Info size={16} className="text-blue-500" />
                              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Master Core Settings v6.0.4</span>
                           </div>
                        </div>
                     </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Studio Core Trigger */}
      <div className="group relative">
        <div className={`absolute -inset-8 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-1000 animate-pulse ${isOpen ? 'bg-slate-900' : 'bg-indigo-600'}`}></div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-28 h-28 rounded-full flex items-center justify-center text-white shadow-[0_50px_100px_-20px_rgba(79,70,229,0.8)] transform transition-all duration-700 hover:scale-110 active:scale-95 z-50 relative border-8 border-white ${isOpen ? 'bg-slate-900 rotate-90 scale-90' : 'gradient-bg'}`}
        >
          {isOpen ? <X size={48} /> : <Wand2 size={48} />}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 flex h-12 w-12">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-12 w-12 bg-indigo-600 border-4 border-white items-center justify-center text-[10px] font-black uppercase tracking-[0.2em]">Studio</span>
            </div>
          )}
        </button>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AIChatBot;
