/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, Dna, Cpu } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-science-teal/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-science-teal mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header offset
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-stone-800 selection:bg-science-teal selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-science-teal rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">B</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              BacTermFinder
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Background</a>
            <a href="#methods" onClick={scrollToSection('methods')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">The Ensemble</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Results</a>
            <a href="#authors" onClick={scrollToSection('authors')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Authors</a>
            <a 
              href="https://github.com/BioinformaticsLabAtMUN/BacTermFinder" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2 bg-science-teal text-white rounded-full hover:bg-teal-700 transition-colors shadow-sm cursor-pointer"
            >
              Get Code
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Background</a>
            <a href="#methods" onClick={scrollToSection('methods')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">The Ensemble</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Results</a>
            <a href="#authors" onClick={scrollToSection('authors')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Authors</a>
            <a 
              href="https://github.com/BioinformaticsLabAtMUN/BacTermFinder" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setMenuOpen(false)} 
              className="px-6 py-3 bg-science-teal text-white rounded-full shadow-lg cursor-pointer"
            >
              Get Code
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
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
             <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>EXPLORE</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
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

        {/* The Science: Structure */}
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

        {/* The Methods: CNN Ensemble */}
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

        {/* Results */}
        <section id="results" className="py-24 bg-[#F0FDF4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Superior Recall</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        We evaluated BacTermFinder against established tools like TermNN, RhoTermPredict, and TransTermHP. BacTermFinder consistently achieves higher recall rates on independent validation sets without increasing the false positive rate.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <PerformanceMetricDiagram />
                </div>
            </div>
        </section>

        {/* Impact */}
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

        {/* Authors */}
        <section id="authors" className="py-24 bg-stone-100 border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">RESEARCH TEAM</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">The Authors</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Department of Computer Science & Department of Biology, Memorial University of Newfoundland.</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                    <AuthorCard 
                        name="Seyed Mohammad Amin Taheri Ghahfarokhi" 
                        role="Memorial University of Newfoundland" 
                        delay="0s" 
                    />
                    <AuthorCard 
                        name="Lourdes Peña-Castillo" 
                        role="Memorial University of Newfoundland" 
                        delay="0.1s" 
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">BacTermFinder</div>
                <p className="text-sm">"A Comprehensive and General Bacterial Terminator Finder using a CNN Ensemble"</p>
            </div>
            <div className="flex gap-6 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors">Paper</a>
                <a href="https://github.com/BioinformaticsLabAtMUN/BacTermFinder" className="hover:text-white transition-colors">GitHub</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            Based on research published in bioRxiv (2024). Generated by AI.
        </div>
      </footer>
    </div>
  );
};

export default App;