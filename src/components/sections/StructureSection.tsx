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
                       <strong>Intrinsic terminators</strong> are characterized by a distinct "hairpin" structure in the RNA transcript. This forms due to a GC-rich region (cytosine and guanine nucleotides) that binds with itself, followed by a poly-thymine (poly-U in RNA) sequence. The weak base pairing between adenines in the DNA template and uridines in the RNA transcript allows the transcript to detach, terminating transcription.
                    </p>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        <strong>Factor-dependent terminators</strong> are more complex, requiring both cis-acting RNA elements and proteins like Rho to halt transcription. The Rho utilization (rut) site is typically 60–90 nucleotides upstream of the terminator. Rho mediates termination through three distinct mechanisms, making these terminators more challenging to predict.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        BacTermFinder is designed to recognize the sequence motifs and cis-acting elements underlying both mechanisms. It can identify both intrinsic and factor-dependent terminators across diverse bacterial species.
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