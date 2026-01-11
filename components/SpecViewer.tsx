import React from 'react';
import { SpecSection } from '../types';

interface SpecViewerProps {
  data: SpecSection;
}

const SpecViewer: React.FC<SpecViewerProps> = ({ data }) => {
  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="border-b border-titan-700 pb-6">
        <h2 className="text-4xl font-display font-bold text-white mb-3 tracking-wide uppercase">{data.title}</h2>
        <p className="text-xl text-ember-500 font-light tracking-wider">{data.subtitle}</p>
      </div>

      <div className="grid gap-8">
        {data.content.map((block, idx) => (
          <div key={idx} className="bg-titan-850 p-8 border-l-2 border-titan-700 hover:border-ember-500 transition-colors shadow-lg">
            <h3 className="text-lg font-bold text-titan-100 mb-4 flex items-center gap-3">
              <span className="text-ember-500 font-mono text-xs">0{idx + 1} //</span> {block.heading}
            </h3>
            {block.body.map((p, i) => (
              <p key={i} className="text-titan-400 leading-relaxed mb-4 text-sm md:text-base font-light">
                {p}
              </p>
            ))}
            {block.bullets && (
              <ul className="space-y-3 mt-6 ml-1 border-l border-titan-700 pl-6">
                {block.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-titan-300">
                    <span className="w-1.5 h-1.5 bg-ember-500 mt-1.5 shadow-glow-sm"></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecViewer;