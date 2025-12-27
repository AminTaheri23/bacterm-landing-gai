import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
              <div className="text-white font-serif font-bold text-2xl mb-2">BacTermFinder</div>
              <p className="text-sm">"A comprehensive and general bacterial terminator finder using a CNN ensemble"</p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
              <a href="https://academic.oup.com/nargab/article/7/1/lqaf016/8063809" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Paper</a>
              <a href="https://doi.org/10.1093/nargab/lqaf016" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DOI</a>
              <a href="https://github.com/BioinformaticsLabAtMUN/BacTermFinder" className="hover:text-white transition-colors">GitHub</a>
          </div>
      </div>
      <div className="text-center mt-12 text-xs text-stone-600">
          Taheri Ghahfarokhi, S. M. A., & Peña-Castillo, L. (2025). BacTermFinder: a comprehensive and general bacterial terminator finder using a CNN ensemble. <em>NAR Genomics and Bioinformatics</em>, 7(1), lqaf016.
      </div>
    </footer>
  );
};

export default Footer;