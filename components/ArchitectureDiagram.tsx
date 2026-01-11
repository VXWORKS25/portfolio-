import React from 'react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="relative w-full p-8 bg-titan-900 border border-titan-700 rounded-sm overflow-hidden shadow-2xl">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] bg-[length:24px_24px] opacity-20"></div>
      
      <div className="relative z-10 flex flex-col gap-8 items-center">
        
        {/* Layer 1: Interface */}
        <div className="w-full max-w-4xl flex gap-4">
          <div className="flex-1 bg-gradient-to-r from-titan-800 to-titan-850 p-6 border-l-4 border-ember-500 shadow-glow-sm">
            <h3 className="text-ember-500 font-display text-sm uppercase tracking-widest mb-3">Horizon Interface Layer</h3>
            <div className="flex gap-4 justify-center text-xs font-mono text-titan-300">
              <div className="px-4 py-2 bg-titan-900 border border-titan-700 hover:border-ember-500/50 transition-colors">Kinetic Engine</div>
              <div className="px-4 py-2 bg-titan-900 border border-titan-700 hover:border-ember-500/50 transition-colors">Matte Shell</div>
              <div className="px-4 py-2 bg-titan-900 border border-titan-700 hover:border-ember-500/50 transition-colors">Gesture Grid</div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="h-8 w-px bg-gradient-to-b from-ember-500/50 to-titan-700"></div>

        {/* Layer 2: Services */}
        <div className="w-full max-w-4xl flex gap-4">
          <div className="flex-1 bg-titan-850 p-8 border border-titan-700 relative overflow-hidden">
             <div className="absolute -right-4 -top-4 text-8xl font-display font-bold text-titan-800 select-none opacity-50">STRATA</div>
            <h3 className="text-titan-200 font-display text-sm uppercase tracking-widest mb-6 text-center">Strata Service Mesh</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-titan-900 border border-titan-700 rounded-sm hover:shadow-glow-sm transition-all">
                <div className="font-bold text-ember-400 mb-1">The Vault</div>
                <div className="text-[10px] text-titan-500 uppercase tracking-wide">App & Asset Store</div>
              </div>
              <div className="p-4 bg-titan-900 border border-titan-700 rounded-sm hover:shadow-glow-sm transition-all">
                <div className="font-bold text-ember-400 mb-1">Concierge AI</div>
                <div className="text-[10px] text-titan-500 uppercase tracking-wide">System Intelligence</div>
              </div>
              <div className="p-4 bg-titan-900 border border-titan-700 rounded-sm hover:shadow-glow-sm transition-all">
                <div className="font-bold text-ember-400 mb-1">Titan ID</div>
                <div className="text-[10px] text-titan-500 uppercase tracking-wide">Identity & Pay</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="h-8 w-px bg-gradient-to-b from-titan-700 to-ember-500/50"></div>

        {/* Layer 3: Kernel */}
        <div className="w-full max-w-3xl flex gap-4">
          <div className="flex-1 bg-black p-6 border-t-2 border-ember-600 shadow-glow-md">
            <h3 className="text-ember-500 font-display text-sm uppercase tracking-widest mb-2 text-center">Monolith Kernel</h3>
            <div className="flex justify-between gap-4 text-[10px] font-mono text-titan-400 text-center mt-4">
              <div className="flex-1 border border-titan-800 p-3 bg-titan-900/50">Hardware Abstraction</div>
              <div className="flex-1 border border-titan-800 p-3 bg-titan-900/50 text-ember-500">Real-Time Scheduler</div>
              <div className="flex-1 border border-titan-800 p-3 bg-titan-900/50">Security Enclave</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArchitectureDiagram;