import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HeroScene } from '../QuantumScene';

interface HeroSectionProps {
  onScrollToSection: (id: string) => (e: React.MouseEvent) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,249,249,0.85)_0%,rgba(249,249,249,0.5)_50%,rgba(249,249,249,0.2)_100%)]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-science-teal text-science-teal text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
          Computational Biology • 2024
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[1.1] mb-8 text-stone-900 drop-shadow-sm">
          BacTermFinder <br/><span className="italic font-normal text-stone-600 text-3xl md:text-4xl block mt-4">General Bacterial Terminator Prediction</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
          A comprehensive ensemble of Convolutional Neural Networks for identifying both intrinsic and factor-dependent transcription terminators.
        </p>
        
        <div className="flex justify-center">
           <a href="#introduction" onClick={onScrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
              <span>EXPLORE</span>
              <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                  <ArrowDown size={16} />
              </span>
           </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;