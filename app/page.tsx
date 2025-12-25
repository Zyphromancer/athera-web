"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Brain, ArrowRight, Zap, Fingerprint, BookOpen, Wallet, Activity, Sparkles, FileText, CheckCircle2, Layers, Repeat, Target, Quote, User, Bell, Star, Terminal
} from "lucide-react";

export default function AtheraRefinedHub() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const perks = [
    "Priority access to Private Beta test units",
    "Weekly 'Build Log' directly from the founder",
    "Behind-the-scenes neuro-science research data",
    "Lifetime 'Founding Member' status & badges",
    "Early-bird pricing on all future hardware",
    "Direct line to suggest and vote on new features"
  ];

  const projects = [
    {
      title: "Stemcious",
      tagline: "The Non-Linear STEM Hub",
      desc: "Engineered to bypass executive dysfunction and turn complex STEM logic into intuitive visual maps.",
      features: ["Cognitive Scaffolding", "Visual Logic Mapping", "Voice-to-Equation"],
      color: "from-purple-500 to-blue-500",
      icon: <Brain size={24} className="text-purple-400" />
    },
    {
      title: "Athera Intel",
      tagline: "Cognitive OS",
      desc: "A personal AI agent that learns your specific neuro-type to filter noise and bridge the 'starting gap'.",
      features: ["Priority Sculpting", "Neural Noise Filtering", "Dopamine-First UI"],
      color: "from-blue-600 to-cyan-400",
      icon: <Cpu size={24} className="text-blue-400" />
    },
    {
      title: "Athera Finance",
      tagline: "Impulse-Proof Banking",
      desc: "The world's first fintech app built for ADHD. Managing money through friction-based design.",
      features: ["Impulse Guardrails", "Visual Cash Flow", "Executive Guardrail"],
      color: "from-emerald-500 to-teal-400",
      icon: <Wallet size={24} className="text-emerald-400" />
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Deconstruction",
      desc: "We strip away the 'Neurotypical Tax'—the friction in modern software that drains executive function.",
      icon: <Layers className="text-purple-500" size={20} />
    },
    {
      step: "02",
      title: "Neural Mapping",
      desc: "We build interfaces that mirror non-linear thought patterns rather than forcing top-down lists.",
      icon: <Target className="text-blue-500" size={20} />
    },
    {
      step: "03",
      title: "Active Scaffolding",
      desc: "Our tools act as an external pre-frontal cortex, providing structure during high-load states.",
      icon: <Repeat className="text-emerald-500" size={20} />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500 overflow-x-hidden font-sans antialiased">
      
      {/* --- CINEMATIC GLOW LAYER (UNCHANGED) --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 100, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
          style={{ background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.1), transparent 80%)` }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      </div>

      {/* --- NAV --- */}
      <nav className="relative z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/10 sticky top-0">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Fingerprint size={18} className="text-white" />
          </div>
          <span className="flex items-baseline gap-1.5 italic">ATHERA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-black text-[9px] tracking-[0.2em] uppercase not-italic">Solutions</span></span>
        </div>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">System Live</span>
            </div>
            <button className="px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/50 text-[9px] font-bold tracking-widest uppercase text-purple-400 hover:bg-purple-600 hover:text-white transition-all shadow-sm">
            The Blueprint
            </button>
        </div>
      </nav>

      {/* --- HERO (SCALED DOWN) --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[8px] font-bold tracking-[0.4em] text-purple-400 uppercase mb-8"
          >
             Venture Laboratory for Neuro-Inclusion
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
            Engineering for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 italic">Non-Linear Mind.</span>
          </h1>

          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed italic">
            "The world wasn't built for our brains — <span className="text-white not-italic font-medium">so we're building a new one."</span> 
          </p>

          {/* --- MAIN TOP CTA CARD (SCALED DOWN) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl mx-auto bg-white/[0.05] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-2xl shadow-xl relative overflow-hidden group"
          >
              <motion.div 
                animate={{ x: [-400, 800] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Star className="text-purple-500" size={16} />
                    <h3 className="text-lg font-black mb-0 tracking-tight text-white uppercase tracking-[0.2em]">Join The Blueprint</h3>
                    <Star className="text-purple-500" size={16} />
                </div>
                
                {!submitted ? (
                    <>
                        <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mb-8 text-left">
                            {perks.map((item) => (
                                <div key={item} className="flex items-start gap-2">
                                    <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                                    <span className="text-[13px] font-medium text-gray-300 tracking-tight leading-tight">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
                            <input 
                                type="email" 
                                required 
                                placeholder="name@your-engine.com" 
                                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-purple-500 transition-all text-white text-sm" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <button type="submit" className="px-8 py-3.5 bg-white text-black font-black rounded-xl hover:bg-purple-600 hover:text-white transition-all uppercase tracking-widest text-[10px]">
                                Claim Access
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-6 text-purple-400 font-black uppercase tracking-[0.4em] text-sm">Neural Bridge Established.</div>
                )}
              </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER'S STORY SECTION (SCALED DOWN) --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative bg-[#080808] border border-white/10 p-8 rounded-[32px] shadow-lg">
              <User size={30} className="text-purple-500 mb-6" />
              <Quote size={40} className="text-white/5 absolute top-8 right-8" />
              <h2 className="text-2xl font-black italic tracking-tighter mb-6 uppercase">The Origin.</h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light italic mb-6">
                "I spent years fighting my own brain, trying to fit a non-linear thought process into a linear world. I realized the 'deficit' wasn't in us—it was in the tools we were forced to use."
              </p>
              <div className="h-0.5 w-12 bg-purple-500 mb-4" />
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500">Founder, Athera Solutions</p>
            </div>
          </div>
          <div>
            <span className="text-[9px] font-bold tracking-[0.4em] text-purple-500 uppercase block mb-4">Manifesto v1.0</span>
            <h3 className="text-3xl font-black tracking-tighter italic mb-6 uppercase">A Venture Studio <br/>with a Pulse.</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Athera is a **Venture Laboratory**. We identify the structural failures in education and productivity software that punish neurodivergence.
            </p>
            <p className="text-gray-400 text-base leading-relaxed italic">
              Our team believes ADHD and Dyslexia aren't bugs to be patched, but operating systems that require custom hardware.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW WE THINK (SCALED DOWN) --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-white/5 bg-white/[0.01]">
        <div className="text-center mb-12">
          <span className="text-[9px] font-bold tracking-[0.4em] text-gray-500 uppercase">Strategic Protocol</span>
          <h2 className="text-3xl font-black italic tracking-tighter mt-4 uppercase">How we <span className="text-purple-500">Think.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {methodology.map((m, i) => (
            <div key={i} className="relative group">
              <div className="text-5xl font-black text-white/[0.03] absolute -top-8 -left-4 group-hover:text-purple-500/10 transition-colors">{m.step}</div>
              <div className="relative">
                <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/20 transition-all">{m.icon}</div>
                <h4 className="text-lg font-bold mb-3 tracking-tight uppercase italic">{m.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS GRID (SCALED DOWN) --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <h2 className="text-3xl font-black tracking-tighter italic uppercase text-center mb-12">Active <span className="text-purple-500">Prototypes</span></h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white/[0.02] p-8 rounded-[32px] border border-white/10 hover:border-purple-500/30 transition-all group flex flex-col">
              <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500 transition-all">{proj.icon}</div>
              <h3 className="text-2xl font-black mb-1 tracking-tighter italic">{proj.title}</h3>
              <p className={`text-[9px] font-bold bg-gradient-to-r ${proj.color} bg-clip-text text-transparent uppercase tracking-[0.2em] mb-4`}>{proj.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{proj.desc}</p>
              <div className="space-y-2 mb-6">
                {proj.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest"><Zap size={12} className="text-purple-500" /> {f}</div>
                ))}
              </div>
              <button className="w-full py-3 bg-white/5 border border-white/10 text-white text-[9px] font-black rounded-xl group-hover:bg-white group-hover:text-black transition-all uppercase tracking-widest">View Blueprint</button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CLOSING CTA --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center border-t border-white/5">
        <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-6 leading-tight">Build the future <br/>with us.</h2>
            <p className="max-w-md mx-auto text-gray-400 text-base font-light italic mb-10">
                Join the private collective engineering the tools your brain deserves.
            </p>

            {!submitted ? (
                <div className="flex flex-col items-center gap-6">
                    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col md:flex-row gap-2">
                        <input type="email" required placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-purple-500 text-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" className="px-8 py-3.5 bg-white text-black font-black rounded-xl hover:bg-purple-600 hover:text-white transition-all uppercase tracking-widest text-[10px]">Initialize</button>
                    </form>
                    <div className="flex gap-6 text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em]">
                        <span className="flex items-center gap-1.5"><Terminal size={12} /> Secured Architecture</span>
                        <span className="flex items-center gap-1.5"><Activity size={12} /> Real-time Builds</span>
                    </div>
                </div>
            ) : (
                <div className="text-lg text-purple-400 font-black uppercase tracking-[0.4em]">Node Sync Complete.</div>
            )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 p-12 text-center border-t border-white/5 bg-black">
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-gray-600 text-[8px] font-bold tracking-[0.4em] uppercase">
                <span>Athera</span>
                <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                <span>Solutions</span>
                <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                <span>Global Lab</span>
            </div>
            <p className="text-gray-700 text-[8px] tracking-[0.5em] font-light uppercase">© 2025 ATHERA SOLUTIONS</p>
        </div>
      </footer>
    </div>
  );
}