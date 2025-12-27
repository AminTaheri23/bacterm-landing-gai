/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dna, BarChart2, GitMerge } from 'lucide-react';

// --- TERMINATOR STRUCTURE DIAGRAM ---
export const SurfaceCodeDiagram: React.FC = () => {
  // Simulating Intrinsic Terminator Detection
  // Poly-U tail and GC-rich stem
  
  const [hoveredBase, setHoveredBase] = useState<number | null>(null);

  // Simplified sequence containing a hairpin loop and poly-U tail
  // GC-Rich region: indices 4-9 and 15-20
  // Poly-U: indices 22-28
  const sequence = "ATTCGCCGGCAATTTGGCCGCTTTTTTTAT";
  
  const getBaseColor = (index: number) => {
      // GC Rich Stem
      if ((index >= 4 && index <= 9) || (index >= 15 && index <= 20)) {
          return "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
      }
      // Poly U
      if (index >= 22 && index <= 28) {
          return "bg-yellow-100 text-yellow-800 border-yellow-300 font-bold";
      }
      return "bg-white text-stone-400 border-stone-200";
  };

  const getLabel = (index: number) => {
      if (index >= 4 && index <= 9) return "Stem (GC-rich)";
      if (index >= 15 && index <= 20) return "Stem (Complement)";
      if (index >= 22 && index <= 28) return "Poly-U Tail";
      if (index >= 10 && index <= 14) return "Loop";
      return "";
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8 w-full">
      <h3 className="font-serif text-xl mb-2 text-stone-800">Intrinsic Terminator Structure</h3>
      <p className="text-sm text-stone-500 mb-8 text-center max-w-md">
        An intrinsic terminator forms a hairpin structure followed by a U-rich sequence, causing RNA polymerase to stall.
      </p>
      
      {/* Sequence Visualization */}
      <div className="flex flex-wrap justify-center gap-1 mb-12 max-w-2xl">
          {sequence.split('').map((base, i) => (
              <div key={i} className="relative group">
                  <motion.div
                    className={`w-6 h-8 md:w-8 md:h-10 border rounded flex items-center justify-center text-xs md:text-sm cursor-default ${getBaseColor(i)}`}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    onHoverStart={() => setHoveredBase(i)}
                    onHoverEnd={() => setHoveredBase(null)}
                  >
                      {base}
                  </motion.div>
                  {/* Tooltip */}
                  {hoveredBase === i && getLabel(i) && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-stone-800 text-white text-[10px] rounded whitespace-nowrap z-20">
                          {getLabel(i)}
                      </div>
                  )}
              </div>
          ))}
      </div>

      {/* Schematic Representation */}
      <div className="relative h-32 w-full max-w-xs flex items-end justify-center">
          {/* Stem Left */}
          <div className="w-2 h-20 bg-emerald-500 rounded-full rotate-[-15deg] origin-bottom absolute bottom-0 left-[35%]"></div>
          {/* Stem Right */}
          <div className="w-2 h-20 bg-emerald-500 rounded-full rotate-[15deg] origin-bottom absolute bottom-0 right-[35%]"></div>
          {/* Loop */}
          <div className="w-12 h-12 border-4 border-emerald-300 rounded-full absolute top-2 left-1/2 -translate-x-1/2"></div>
          {/* Poly U */}
          <div className="h-1 w-20 bg-yellow-400 absolute bottom-0 left-[65%] rounded-full"></div>
          
          <div className="absolute -bottom-8 text-xs font-mono text-stone-400">Hairpin Formation Schematic</div>
      </div>
    </div>
  );
};

// --- CNN ENSEMBLE ARCHITECTURE DIAGRAM ---
export const TransformerDecoderDiagram: React.FC = () => {
  // Visualizing the Ensemble of CNNs
  const [activePath, setActivePath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setActivePath(prev => (prev + 1) % 5); // 0-3 are individual models, 4 is ensemble
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const models = [
      { name: "CNN 1", feat: "PS2", color: "bg-blue-100 border-blue-300" },
      { name: "CNN 2", feat: "ENAC", color: "bg-green-100 border-green-300" },
      { name: "CNN 3", feat: "One-Hot", color: "bg-purple-100 border-purple-300" },
      { name: "CNN 4", feat: "NCP", color: "bg-orange-100 border-orange-300" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-[#F0FDF4] rounded-xl border border-stone-200 my-8 w-full">
      <h3 className="font-serif text-xl mb-4 text-stone-900">The CNN Ensemble</h3>
      <p className="text-sm text-stone-600 mb-8 text-center max-w-md">
        BacTermFinder processes DNA through four independent CNNs, each trained on different sequence representations, then averages their predictions.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-3xl justify-center">
          
          {/* Input */}
          <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border-2 border-stone-300 rounded-lg flex items-center justify-center shadow-sm">
                  <Dna size={24} className="text-stone-600"/>
              </div>
              <span className="text-xs mt-2 font-bold text-stone-500 uppercase">Input Sequence</span>
          </div>

          {/* Arrows Splitting */}
          <div className="flex flex-col gap-2">
              {models.map((_, i) => (
                  <motion.div 
                    key={`arrow-in-${i}`}
                    className="w-8 h-1 bg-stone-300 rounded-full"
                    animate={{ backgroundColor: activePath === i || activePath === 4 ? "#0D9488" : "#d6d3d1" }}
                  />
              ))}
          </div>

          {/* Models Column */}
          <div className="flex flex-col gap-3">
              {models.map((m, i) => (
                  <motion.div 
                    key={i}
                    className={`w-32 p-3 rounded-lg border-2 flex flex-col items-center justify-center transition-all ${m.color}`}
                    animate={{ scale: activePath === i || activePath === 4 ? 1.05 : 1, opacity: activePath === i || activePath === 4 ? 1 : 0.6 }}
                  >
                      <span className="text-xs font-bold text-stone-800">{m.name}</span>
                      <span className="text-[10px] text-stone-500">{m.feat} Features</span>
                  </motion.div>
              ))}
          </div>

          {/* Arrows Merging */}
          <div className="flex flex-col justify-center items-center h-full relative w-8">
             <GitMerge size={32} className={`text-stone-300 rotate-[-90deg] ${activePath === 4 ? 'text-science-teal animate-pulse' : ''}`} />
          </div>

          {/* Output */}
          <div className="flex flex-col items-center">
               <motion.div 
                 className="w-20 h-20 bg-science-teal text-white rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white"
                 animate={{ scale: activePath === 4 ? 1.1 : 1 }}
               >
                   <span className="text-xs uppercase font-bold opacity-80">Score</span>
                   <span className="text-xl font-serif">0.98</span>
               </motion.div>
               <span className="text-xs mt-2 font-bold text-stone-500 uppercase">Prediction</span>
          </div>

      </div>
    </div>
  );
};

// --- PERFORMANCE CHART ---
export const PerformanceMetricDiagram: React.FC = () => {
    // Comparing Recall on Independent Validation Data (Table 8 summary)
    // Values roughly based on: BacTermFinder ~0.57, TermNN ~0.46, TransTermHP ~0.25
    
    const [view, setView] = useState<'overall' | 'species'>('overall');

    const data = {
        overall: [
            { tool: "BacTermFinder", val: 0.57, color: "bg-science-teal" },
            { tool: "TermNN", val: 0.46, color: "bg-stone-400" },
            { tool: "RhoTermPredict", val: 0.15, color: "bg-stone-300" },
            { tool: "TransTermHP", val: 0.25, color: "bg-stone-300" }
        ],
        species: [
            // Example for S. gardneri (high GC)
            { tool: "BacTermFinder", val: 0.60, color: "bg-science-teal" },
            { tool: "TermNN", val: 0.36, color: "bg-stone-400" },
            // Example for S. agalactiae (low GC)
            { tool: "BacTermFinder (Low GC)", val: 0.82, color: "bg-emerald-500" },
            { tool: "TermNN (Low GC)", val: 0.77, color: "bg-stone-400" },
        ]
    };

    const currentData = view === 'overall' ? data.overall : data.species;

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-white text-stone-800 rounded-xl my-8 border border-stone-200 shadow-lg">
            <div className="flex-1 min-w-[240px]">
                <h3 className="font-serif text-xl mb-2 text-science-teal">Benchmarking Recall</h3>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                    BacTermFinder achieves higher recall rates compared to existing tools like TermNN and TransTermHP, while maintaining a low false positive rate.
                </p>
                
                <div className="flex gap-2 mb-4">
                    <button 
                        onClick={() => setView('overall')}
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${view === 'overall' ? 'bg-science-teal text-white' : 'bg-stone-100 text-stone-500'}`}
                    >
                        Overall Mean Recall
                    </button>
                    <button 
                         onClick={() => setView('species')}
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${view === 'species' ? 'bg-science-teal text-white' : 'bg-stone-100 text-stone-500'}`}
                    >
                        Specific Species
                    </button>
                </div>

                <div className="mt-2 font-mono text-[10px] text-stone-400 flex items-center gap-2">
                    <BarChart2 size={12} /> 
                    <span>RECALL @ VARIOUS OVERLAP THRESHOLDS</span>
                </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                {currentData.map((item, i) => (
                    <div key={i} className="w-full">
                        <div className="flex justify-between text-xs font-bold mb-1">
                            <span className="text-stone-600">{item.tool}</span>
                            <span className="text-stone-900">{item.val.toFixed(2)}</span>
                        </div>
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                            <motion.div 
                                className={`h-full rounded-full ${item.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.val * 100}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}