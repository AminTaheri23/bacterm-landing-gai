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
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">CNN Ensemble</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        To create a robust predictor, we developed an ensemble of Convolutional Neural Networks (CNNs). We explored thousands of features and selected the best representations: One-hot encoding, Electron-Ion Interaction Potential (EIIP), Nucleotide Chemical Property (NCP), and more.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        By training on data from RNA-seq studies across species with GC-content ranging from 28% to 71%, BacTermFinder learns generalized patterns that single-species models miss.
                    </p>
                 </div>
            </div>
        </div>
    </section>
  );
};

export default MethodsSection;