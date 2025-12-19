import React from 'react';
import { ArrowUpRight, GitBranch, ArrowLeft } from 'lucide-react';

const AUTOMATION_PROJECTS = [
  {
    title: "AI Lead Qualification",
    description: "Automated workflow that captures leads from Typeform, enriches data via Clearbit, qualifies using GPT-4, and syncs to HubSpot.",
    tools: ["n8n", "OpenAI", "HubSpot", "Typeform"],
    stats: { nodes: 24, executions: "1.2k/mo", timeSaved: "15h/wk" },
    imageUrl: "https://res.cloudinary.com/dzd1r07ic/image/upload/v1765344343/Plants_lbwxze.png"
  },
  {
    title: "Content Repurposing Engine",
    description: "Watch YouTube channel for new videos, transcribe audio, generate blog posts and social snippets, and schedule to Notion.",
    tools: ["n8n", "Whisper", "Claude", "Notion"],
    stats: { nodes: 18, executions: "40/mo", timeSaved: "8h/wk" }
  },
  {
    title: "Client Onboarding System",
    description: "Orchestrates the entire onboarding process: contract generation, invoicing, folder creation, and welcome email sequence.",
    tools: ["Make", "Stripe", "Google Drive", "DocuSign"],
    stats: { nodes: 32, executions: "15/mo", timeSaved: "5h/client" }
  }
];

export const Automations: React.FC = () => {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = ''; // Clear hash to go home
  };

  return (
    <section className="min-h-screen pt-24 pb-24 bg-[#08090A] relative overflow-hidden animate-fade-in">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-8 pt-8">
        <a 
          href="#" 
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-white transition-colors group"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Automation Systems</h2>
            <p className="text-textMuted text-lg leading-relaxed">
              Scalable, self-healing workflows built to handle complex business logic. 
              Below are examples of architectures I've designed and implemented.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {AUTOMATION_PROJECTS.map((project, i) => (
            <div key={i} className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col lg:flex-row hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
              
              {/* Embed/Visual Area - Landscape Width */}
              <div className="w-full lg:w-[60%] border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.08)] bg-[#000] relative group-hover:bg-[#0A0A0A] transition-colors min-h-[300px] lg:min-h-[450px]">
                
                {project.imageUrl ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    {/* Subtle gradient overlay to make text/badges readable if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                ) : (
                  <>
                    {/* Grid Pattern Background for technical look (fallback) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                    
                    {/* Center Content / Placeholder for Embed */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-3 text-textMuted group-hover:text-white transition-colors">
                            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                 <GitBranch size={32} />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-widest opacity-60 mt-2">Workflow Preview</span>
                        </div>
                    </div>
                  </>
                )}

                {/* Status Indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-2.5 py-1.5 bg-green-500/10 border border-green-500/20 rounded-md backdrop-blur-md z-10 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-medium text-green-400">ACTIVE</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-8 lg:p-10 flex flex-col justify-center w-full lg:w-[40%] bg-gradient-to-b from-transparent to-white/[0.01]">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-white transition-colors tracking-tight">{project.title}</h3>
                  <button className="text-textMuted hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    <ArrowUpRight size={24} />
                  </button>
                </div>
                
                <p className="text-base text-textMuted leading-relaxed mb-10">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-10">
                  <h4 className="text-[10px] uppercase tracking-wider text-textMuted mb-3 font-semibold">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, t) => (
                      <span key={t} className="px-3 py-1.5 text-xs font-medium text-textMain bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/20 transition-colors cursor-default">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-3 gap-4 text-center">
                   <div>
                      <div className="text-[10px] text-textMuted uppercase tracking-wider mb-2">Nodes</div>
                      <div className="text-lg font-medium text-white">{project.stats.nodes}</div>
                   </div>
                   <div className="border-l border-[rgba(255,255,255,0.08)]">
                      <div className="text-[10px] text-textMuted uppercase tracking-wider mb-2">Execs</div>
                      <div className="text-lg font-medium text-white">{project.stats.executions}</div>
                   </div>
                   <div className="border-l border-[rgba(255,255,255,0.08)]">
                      <div className="text-[10px] text-textMuted uppercase tracking-wider mb-2">Saved</div>
                      <div className="text-lg font-medium text-white">{project.stats.timeSaved}</div>
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};