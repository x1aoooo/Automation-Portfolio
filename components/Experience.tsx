
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Professional Experience</h2>
              <p className="text-textMuted">A timeline of growth, from learning foundations to building real automation systems.</p>
            </div>

            <div className="relative border-l border-[rgba(255,255,255,0.1)] ml-3 md:ml-6 space-y-16">
                
                {/* Job 1 */}
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#000] border border-[rgba(255,255,255,0.3)] group-hover:border-white group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-medium text-white">Automation Solutions Developer</h3>
                        <p className="text-sm text-white/50 font-mono mt-1">Independent Specialist | January 2025 – Present</p>
                    </div>
                    
                    <ul className="space-y-3">
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Designed and built multiple n8n workflows primarily for tutorials, learning projects, and technical documentation.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Studied n8n deeply through official documentation, community resources, and hands on experimentation with different automation patterns.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Researched and integrated various API endpoints to understand request structures, authentication, data mapping, and response handling.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Built sample end to end automation flows for lead intake, data enrichment, and content generation to practice real world use cases.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Focused on understanding error handling, validation logic, and workflow reliability, even when systems were not yet deployed in live production.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Actively preparing to transition these foundations into production ready workflows by seeking real world usage and team environments.</span>
                        </li>
                    </ul>
                </div>

                 {/* Job 2 */}
                <div className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#000] border border-[rgba(255,255,255,0.3)] group-hover:border-white group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-medium text-white">AI Data Specialist (Expert Tier)</h3>
                        <p className="text-sm text-white/50 font-mono mt-1">Pareto.AI | June 2024 – October 2025</p>
                    </div>
                    
                    <ul className="space-y-3">
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-white shrink-0 shadow-[0_0_5px_white]"></span>
                            <span className="text-white font-medium">Ranked in the top 5 performers out of 100+ global contributors based on accuracy and consistency.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Evaluated and trained advanced AI models in collaboration with PhD level researchers for OpenAI and Amazon projects.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Specialized in prompt engineering and deep context analysis, maintaining 99%+ accuracy in high risk evaluation tasks.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Developed strong analytical discipline, attention to detail, and quality standards that now inform my approach to automation work.</span>
                        </li>
                        <li className="text-textMuted text-base leading-relaxed flex items-start gap-3">
                            <span className="mt-2.5 w-1 h-1 rounded-full bg-[rgba(255,255,255,0.3)] shrink-0"></span>
                            <span>Transitioned from AI evaluation to focus full time on n8n automation and system building.</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
  );
};
