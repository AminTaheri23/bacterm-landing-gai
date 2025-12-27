import React from 'react';

interface AuthorCardProps {
  name: string;
  role: string;
  delay: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ name, role, delay }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-science-teal/50" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-science-teal mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const AuthorsSection: React.FC = () => {
  return (
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
  );
};

export default AuthorsSection;