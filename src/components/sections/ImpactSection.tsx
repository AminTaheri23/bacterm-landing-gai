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
                    One of the most striking results is BacTermFinder's ability to generalize. It successfully identifies terminators in Archaea, even though it was trained exclusively on Bacterial data. BacTermData represents the largest collection of experimentally-identified bacterial terminators assembled to date.
                </p>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    With an average recall of 0.57 ± 0.21 on independent validation sets, BacTermFinder sets a new standard for genome-wide terminator prediction, aiding in the annotation of new genomes and the design of synthetic genetic circuits. It also provides insights into terminator motifs per species through saliency map visualization.
                </p>

                <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg border-l-4 border-l-science-teal mb-6">
                    <p className="font-serif italic text-xl text-stone-800 mb-4">
                        "BacTermFinder outperforms all other four approaches in terms of average recall without increasing the number of false positives."
                    </p>
                    <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Taheri Ghahfarokhi & Peña-Castillo (2025)</span>
                </div>

                <div className="p-6 bg-science-teal/5 border border-science-teal/20 rounded-lg">
                    <p className="text-stone-700 leading-relaxed">
                        <strong>Available at:</strong> <a href="https://github.com/BioinformaticsLabAtMUN/BacTermFinder" target="_blank" rel="noopener noreferrer" className="text-science-teal hover:underline">github.com/BioinformaticsLabAtMUN/BacTermFinder</a>
                    </p>
                    <p className="text-stone-700 mt-2">
                        <strong>Published in:</strong> <a href="https://academic.oup.com/nargab/article/7/1/lqaf016/8063809" target="_blank" rel="noopener noreferrer" className="text-science-teal hover:underline">NAR Genomics and Bioinformatics</a>
                    </p>
                </div>
            </div>
         </div>
    </section>
  );
};

export default ImpactSection;