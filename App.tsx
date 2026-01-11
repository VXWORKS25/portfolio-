import React, { useState } from 'react';
import { SPEC_DATA, SYSTEM_NAME, SYSTEM_VERSION } from './constants';
import { SectionId } from './types';
import SpecViewer from './components/SpecViewer';
import ChatInterface from './components/ChatInterface';
import ArchitectureDiagram from './components/ArchitectureDiagram';

const NavButton = ({ 
  id, 
  active, 
  onClick, 
  label, 
  icon 
}: { 
  id: string, 
  active: boolean, 
  onClick: () => void, 
  label: string,
  icon: React.ReactNode 
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-5 py-3.5 mb-2 transition-all duration-300 flex items-center gap-4 group relative overflow-hidden border-l-2 ${
      active 
        ? 'border-ember-500 bg-gradient-to-r from-titan-800 to-transparent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' 
        : 'border-transparent text-titan-500 hover:text-titan-200 hover:bg-titan-850/50'
    }`}
  >
    {/* Active Glow Ambient */}
    {active && <div className="absolute left-0 top-0 bottom-0 w-24 bg-ember-500/10 blur-xl pointer-events-none"></div>}
    
    <span className={`transition-all duration-300 relative z-10 ${active ? 'text-ember-500 scale-110 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'group-hover:text-titan-300'}`}>
      {icon}
    </span>
    
    <span className={`font-display text-[10px] tracking-[0.2em] uppercase relative z-10 transition-all duration-300 ${active ? 'text-white translate-x-1 font-bold' : ''}`}>
      {label}
    </span>
    
    {/* Tech decor for active state */}
    {active && <div className="absolute right-2 w-1 h-1 bg-ember-500 rounded-full shadow-glow-sm"></div>}
  </button>
);

const Icons = {
  Vision: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  Arch: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  Design: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  Install: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Eco: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>,
  Service: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  Security: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  Landing: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  Roadmap: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
  Chat: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.VISION);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-titan-950 text-titan-200 font-sans selection:bg-ember-500 selection:text-white overflow-hidden">
      
      {/* Sidebar - Dark, Metal-like */}
      <aside className="w-full md:w-80 bg-titan-950 border-r border-titan-800 flex flex-col shrink-0 relative z-20 shadow-2xl">
        <div className="p-10 border-b border-titan-800 bg-gradient-to-b from-titan-900 to-titan-950">
          <h1 className="text-3xl font-display font-bold tracking-tighter text-white flex items-center gap-3">
            <span className="w-3 h-3 bg-ember-500 shadow-glow-sm rotate-45"></span>
            {SYSTEM_NAME}
          </h1>
          <p className="text-[10px] text-titan-500 font-mono mt-3 uppercase tracking-widest pl-6 border-l border-titan-800 ml-1.5">
            {SYSTEM_VERSION}
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 pr-6 pl-2 scrollbar-thin">
          <NavButton id={SectionId.VISION} active={activeSection === SectionId.VISION} onClick={() => setActiveSection(SectionId.VISION)} label="Vision" icon={<Icons.Vision />} />
          <NavButton id={SectionId.ARCHITECTURE} active={activeSection === SectionId.ARCHITECTURE} onClick={() => setActiveSection(SectionId.ARCHITECTURE)} label="Architecture" icon={<Icons.Arch />} />
          <NavButton id={SectionId.DESIGN} active={activeSection === SectionId.DESIGN} onClick={() => setActiveSection(SectionId.DESIGN)} label="Design & UX" icon={<Icons.Design />} />
          <NavButton id={SectionId.INSTALLATION} active={activeSection === SectionId.INSTALLATION} onClick={() => setActiveSection(SectionId.INSTALLATION)} label="Ignition" icon={<Icons.Install />} />
          <NavButton id={SectionId.ECOSYSTEM} active={activeSection === SectionId.ECOSYSTEM} onClick={() => setActiveSection(SectionId.ECOSYSTEM)} label="The Vault" icon={<Icons.Eco />} />
          <NavButton id={SectionId.SERVICES} active={activeSection === SectionId.SERVICES} onClick={() => setActiveSection(SectionId.SERVICES)} label="Services" icon={<Icons.Service />} />
          <NavButton id={SectionId.SECURITY} active={activeSection === SectionId.SECURITY} onClick={() => setActiveSection(SectionId.SECURITY)} label="Security" icon={<Icons.Security />} />
          <NavButton id={SectionId.LANDING_PAGE} active={activeSection === SectionId.LANDING_PAGE} onClick={() => setActiveSection(SectionId.LANDING_PAGE)} label="Web Portal" icon={<Icons.Landing />} />
          <NavButton id={SectionId.ROADMAP} active={activeSection === SectionId.ROADMAP} onClick={() => setActiveSection(SectionId.ROADMAP)} label="Roadmap" icon={<Icons.Roadmap />} />
          
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-titan-800 to-transparent mx-5" />
          
          <NavButton id={SectionId.CHAT} active={activeSection === SectionId.CHAT} onClick={() => setActiveSection(SectionId.CHAT)} label="Architect Console" icon={<Icons.Chat />} />
        </nav>

        <div className="p-6 border-t border-titan-800 bg-titan-950">
          <div className="text-[10px] text-titan-600 font-mono text-center opacity-60 flex flex-col gap-1">
             <span>TITAN SYSTEMS CORP.</span>
             <span className="tracking-[0.3em]">CONFIDENTIAL</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden bg-titan-900">
        {/* Decorative Background Elements - Enhanced */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ember-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-titan-700/10 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 pointer-events-none"></div>

        <div className="h-full overflow-y-auto p-8 md:p-20 relative z-10 scroll-smooth">
          <div className="max-w-6xl mx-auto">
            
            {/* If Architecture section is selected, show Diagram + Text */}
            {activeSection === SectionId.ARCHITECTURE && (
              <div className="mb-20 animate-slideUp">
                <ArchitectureDiagram />
              </div>
            )}

            {/* Render Spec Viewer for standard sections */}
            {activeSection !== SectionId.CHAT && SPEC_DATA[activeSection] && (
              <SpecViewer data={SPEC_DATA[activeSection]} />
            )}

            {/* Render Chat Interface */}
            {activeSection === SectionId.CHAT && (
              <div className="animate-fadeIn w-full max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                  <h2 className="text-5xl font-display font-bold text-white mb-3 drop-shadow-lg">Architect's Console</h2>
                  <p className="text-titan-400 font-light text-xl tracking-wide">Direct secure uplink to the Titan Core.</p>
                </div>
                <ChatInterface />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;