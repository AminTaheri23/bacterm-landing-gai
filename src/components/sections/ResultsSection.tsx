import React from 'react';
import { PerformanceMetricDiagram } from '../Diagrams';

const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-[#F0FDF4]">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Superior Recall</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                    We evaluated BacTermFinder against established tools: TermNN, RhoTermPredict, TransTermHP, and ITerm-PseKNC. BacTermFinder consistently achieves higher recall rates on independent validation sets without increasing the false positive rate.
                </p>
            </div>
            <div className="max-w-3xl mx-auto mb-16">
                <PerformanceMetricDiagram />
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-6 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-xl text-stone-900 mb-4">Overall Performance</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-stone-600">BacTermFinder</span>
                            <span className="font-bold text-science-teal">0.57 ± 0.21</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone-600">TermNN</span>
                            <span className="text-stone-600">0.46 ± 0.23</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone-600">RhoTermPredict</span>
                            <span className="text-stone-600">0.15 ± 0.10</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone-600">TransTermHP</span>
                            <span className="text-stone-600">0.25 ± 0.20</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-stone-200">
                    <h3 className="font-bold text-xl text-stone-900 mb-4">Species-Specific Results</h3>
                    <div className="space-y-3 text-sm">
                        <div className="border-b border-stone-100 pb-2">
                            <div className="font-bold text-stone-900">Streptococcus agalactiae</div>
                            <div className="text-stone-600">BacTermFinder: 0.82 ± 0.30</div>
                        </div>
                        <div className="border-b border-stone-100 pb-2">
                            <div className="font-bold text-stone-900">Synechocystis PCC 6803</div>
                            <div className="text-stone-600">BacTermFinder: 0.54 ± 0.18</div>
                        </div>
                        <div className="border-b border-stone-100 pb-2">
                            <div className="font-bold text-stone-900">Streptomyces gardneri</div>
                            <div className="text-stone-600">BacTermFinder: 0.60 ± 0.22</div>
                        </div>
                        <div>
                            <div className="font-bold text-stone-900">Mycobacterium tuberculosis</div>
                            <div className="text-stone-600">BacTermFinder: 0.23 ± 0.12</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-stone-800 text-white p-8 rounded-xl mb-16">
                <h3 className="font-serif text-2xl mb-4 text-center">Archaeal Generalization</h3>
                <p className="text-stone-300 text-center mb-6">
                    BacTermFinder generalizes to archaeal terminators, despite being trained exclusively on bacterial data
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-science-teal mb-2">0.32 ± 0.20</div>
                        <div className="text-sm text-stone-300">Haloferax volcanii</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-science-teal mb-2">0.57 ± 0.25</div>
                        <div className="text-sm text-stone-300">Methanococcus maripaludis</div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <h3 className="font-serif text-3xl text-stone-900 mb-6">Case Study: Rhodobacter capsulatus puc Operon</h3>
                <div className="bg-white p-6 rounded-xl border border-stone-200 text-left">
                    <p className="text-stone-600 mb-4">
                        Using the puc operon of <em>Rhodobacter capsulatus SB 1003</em>, which has two experimentally-identified termination sites, we compared all tools:
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-science-teal rounded-full"></div>
                            <span className="font-bold text-stone-900">BacTermFinder</span>
                            <span className="text-science-teal font-bold">2/2 sites (100%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
                            <span className="font-bold text-stone-900">InterPin</span>
                            <span className="text-stone-600">2/2 sites (100%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-stone-300 rounded-full"></div>
                            <span className="font-bold text-stone-900">RhoTermPredict & TermNN</span>
                            <span className="text-stone-600">1/2 sites (50%)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ResultsSection;