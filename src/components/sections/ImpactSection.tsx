import React from 'react';
import { QuantumComputerScene } from '../QuantumScene';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 relative">
                <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                    <QuantumComputerScene />
                    <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Genomic landscape visualization</div>
                </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">IMPACT</div>
                <h2 className="font-serif text-4xl mb-6 text-stone-900">Beyond Bacteria</h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    One of the most striking results is BacTermFinder's ability to generalize. It successfully identifies terminators in Archaea, even though it was trained exclusively on Bacterial data.
                </p>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    With an average recall of 0.57 ± 0.21 on independent validation sets, BacTermFinder sets a new standard for genome-wide terminator prediction, aiding in the annotation of new genomes and the design of synthetic genetic circuits.
                </p>
                
                <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg border-l-4 border-l-science-teal">
                    <p className="font-serif italic text-xl text-stone-800 mb-4">
                        "BacTermFinder outperforms all other four approaches in terms of average recall without increasing the number of false positives."
                    </p>
                    <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Ghahfarokhi & Peña-Castillo (2024)</span>
                </div>
            </div>
         </div>
    </section>
  );
};

export default ImpactSection;