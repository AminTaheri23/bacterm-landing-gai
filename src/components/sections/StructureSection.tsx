import React from 'react';
import { Dna } from 'lucide-react';
import { SurfaceCodeDiagram } from '../Diagrams';

const StructureSection: React.FC = () => {
  return (
    <section id="structure" className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                        <Dna size={14}/> THE BIOLOGY
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">The Signal in the Sequence</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                       Intrinsic terminators are characterized by a distinct "hairpin" structure in the RNA transcript. This forms due to a GC-rich region in the DNA that binds to itself, followed by a sequence of Uracils (Poly-U).
                    </p>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Factor-dependent terminators are more complex and require proteins like Rho to halt transcription. BacTermFinder is designed to recognize the sequence motifs underlying both mechanisms.
                    </p>
                </div>
                <div>
                    <SurfaceCodeDiagram />
                </div>
            </div>
        </div>
    </section>
  );
};

export default StructureSection;