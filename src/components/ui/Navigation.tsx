import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onScrollToSection: (id: string) => (e: React.MouseEvent) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, menuOpen, setMenuOpen, onScrollToSection }) => {
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-science-teal rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">B</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              BacTermFinder
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduction" onClick={onScrollToSection('introduction')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Background</a>
            <a href="#methods" onClick={onScrollToSection('methods')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">The Ensemble</a>
            <a href="#results" onClick={onScrollToSection('results')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Results</a>
            <a href="#authors" onClick={onScrollToSection('authors')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Authors</a>
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

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#introduction" onClick={onScrollToSection('introduction')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Background</a>
            <a href="#methods" onClick={onScrollToSection('methods')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">The Ensemble</a>
            <a href="#results" onClick={onScrollToSection('results')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Results</a>
            <a href="#authors" onClick={onScrollToSection('authors')} className="hover:text-science-teal transition-colors cursor-pointer uppercase">Authors</a>
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
    </>
  );
};

export default Navigation;