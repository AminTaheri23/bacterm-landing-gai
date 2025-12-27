import React from 'react';
import { PerformanceMetricDiagram } from '../Diagrams';

const ResultsSection: React.FC = () => {
  return (
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
  );
};

export default ResultsSection;