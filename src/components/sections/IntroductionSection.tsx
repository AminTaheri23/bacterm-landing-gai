import React from 'react';

const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Background</div>
          <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Ending Transcription</h2>
          <div className="w-16 h-1 bg-science-teal mb-6"></div>
        </div>
        <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
          <p>
            <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-science-teal">T</span>ranscription is the process of synthesizing RNA from a DNA template. It begins at the promoter and ends at the <strong>Terminator</strong>, a specific DNA segment that signals the RNA polymerase to stop.
          </p>
          <p>
            Accurately identifying these terminators is crucial for understanding operon structures and gene regulation. However, existing computational tools are often specialized for specific bacteria (like <em>E. coli</em>) or specific terminator types (Intrinsic vs Factor-Dependent), lacking a truly general solution.
          </p>
          <p>
            <strong>BacTermFinder</strong> bridges this gap. By training on over 41,000 terminators from 22 diverse bacterial species, it provides a general-purpose model capable of detecting multiple terminator types with high accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;