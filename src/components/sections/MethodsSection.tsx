import React from 'react';
import { Cpu } from 'lucide-react';
import { TransformerDecoderDiagram } from '../Diagrams';

const MethodsSection: React.FC = () => {
  return (
    <section id="methods" className="py-24 bg-white text-stone-900 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <TransformerDecoderDiagram />
                 </div>
                  <div className="order-1 lg:order-2">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-science-teal text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-teal-600">
                        <Cpu size={14} /> METHODOLOGY
                     </div>
                     <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">CNN Ensemble Architecture</h2>
                     <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                         BacTermFinder uses an ensemble of four independent Convolutional Neural Networks, each trained on different sequence representations. We explored thousands of features from 28 feature sets (6208 features total) and used SHAP and Gini importance measures to select the most informative ones.
                     </p>

                     <div className="space-y-6">
                        <div className="pl-4 border-l-4 border-science-teal">
                            <h3 className="font-bold text-stone-900 mb-2">Training Data</h3>
                            <p className="text-stone-600">
                                <strong>41,168 bacterial terminators</strong> from 25 strains across 4 phyla, with 36,542 sequences used for training. GC content ranges from 28% to 71%. Each sequence is 100 nucleotides (50nt on either side of the transcription termination site).
                            </p>
                        </div>

                        <div className="pl-4 border-l-4 border-stone-300">
                            <h3 className="font-bold text-stone-900 mb-2">Feature Representations</h3>
                            <ul className="space-y-2 text-stone-600">
                                <li><strong>PS2 (Pseudo-Dinucleotide)</strong> - Captures dinucleotide patterns</li>
                                <li><strong>ENAC (Enhanced Nucleotide Acid Composition)</strong> - Preserves spatial location</li>
                                <li><strong>One-Hot Encoding</strong> - Binary representation preserving position</li>
                                <li><strong>NCP (Nucleotide Chemical Property)</strong> - Chemical properties of nucleotides</li>
                            </ul>
                        </div>

                        <div className="pl-4 border-l-4 border-stone-300">
                            <h3 className="font-bold text-stone-900 mb-2">CNN Architecture</h3>
                            <p className="text-stone-600">
                                3 Conv1D layers (64 filters each, kernel size 10, PReLU activation), followed by AveragePooling, BatchNormalization, and Dropout (0.1). Fully connected layers: 500→600→600→200→200 units with PReLU activation and dropout (0.3-0.4). Final layer uses sigmoid activation.
                            </p>
                        </div>

                        <div className="pl-4 border-l-4 border-science-teal">
                            <h3 className="font-bold text-stone-900 mb-2">Model Selection</h3>
                            <p className="text-stone-600">
                                We evaluated 11 ML approaches including CNN variants, fully connected neural networks, and LightGBM. The ensemble of four single CNNs achieved the highest average precision (0.7080 ± 0.0248) using stratified Monte Carlo cross-validation.
                            </p>
                        </div>
                     </div>
                  </div>
            </div>
        </div>
    </section>
  );
};

export default MethodsSection;