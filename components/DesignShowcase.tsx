import React from 'react';

const PROJECTS = [
  {
    title: "Finance Dashboard",
    category: "SaaS Interface",
    gradient: "from-[#222] to-[#111]"
  },
  {
    title: "E-Commerce Mobile",
    category: "App Design",
    gradient: "from-[#333] to-[#1a1a1a]"
  },
  {
    title: "Developer Docs",
    category: "Technical Writing",
    gradient: "from-[#1a1a1a] to-[#000]"
  }
];

export const DesignShowcase: React.FC = () => {
  return (
    <section id="design" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
           <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Selected Work</h2>
           <p className="text-textMuted max-w-lg">A collection of interfaces designed with precision and focused on user experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container */}
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${project.gradient} border border-[rgba(255,255,255,0.08)] mb-4 overflow-hidden relative transition-all duration-300 group-hover:border-[rgba(255,255,255,0.2)]`}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                   {/* Placeholder Graphic - Abstract UI */}
                   <div className="w-3/4 h-3/4 bg-[#08090A] border border-[rgba(255,255,255,0.08)] rounded-lg transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-500 shadow-2xl flex flex-col overflow-hidden">
                      <div className="h-8 border-b border-[rgba(255,255,255,0.05)] flex items-center px-3 gap-1.5 bg-white/[0.02]">
                        <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.2)]"></div>
                        <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.1)]"></div>
                        <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.1)]"></div>
                      </div>
                      <div className="flex-1 p-4 space-y-3 relative">
                         {/* Abstract UI Lines */}
                         <div className="w-1/3 h-2 bg-[rgba(255,255,255,0.15)] rounded-sm"></div>
                         <div className="w-full h-24 bg-gradient-to-b from-white/[0.03] to-transparent rounded-sm border border-white/[0.02]"></div>
                         <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-white/[0.02] rounded-sm"></div>
                            <div className="h-12 bg-white/[0.02] rounded-sm"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                   <h3 className="text-white font-medium text-lg group-hover:text-white/90 transition-colors">{project.title}</h3>
                   <p className="text-textMuted text-sm">{project.category}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 text-white">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};