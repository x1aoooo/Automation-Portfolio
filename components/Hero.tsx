
import React from 'react';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-textMuted uppercase tracking-wider">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              <span className="block">Hello there,</span>
              <span className="block text-white/60">I'm Prince.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-medium mb-8">
              AI automation specialist building real world workflows with n8n and modern AI.
            </p>

            <div className="space-y-6 text-base md:text-lg text-textMuted max-w-2xl mb-12 leading-relaxed font-light">
              <p className="text-white/90 font-normal italic">
                I share my journey below. My hands-on work and experience start in the section that follows.
              </p>
              
              <p>
                I grew up in Lower Pulacan, a small barangay in Zamboanga del Sur where internet access was limited and technology felt out of reach. I was curious, so I saved my daily allowance, peso by peso, just to rent a computer and explore the digital world.
              </p>
              
              <p>
                At 13, I started doing side hustles to support my mom. Those early years taught me discipline, resourcefulness, and grit.
              </p>
              
              <p>
                By 2023, I landed a role at Pareto. I worked my way up to Expert, evaluating AI responses alongside PhDs and industry professionals. That experience strengthened my skills in context analysis and prompt engineering, and helped me realize that I belong in spaces where the future is being built.
              </p>
              
              <p>
                I then applied everything I learned to n8n automation. For the past 11 months, I have been deep in documentation, building workflows, and solving real problems. I know I still have a lot to learn, but I am committed to growing and proving what I can do.
              </p>

              <p className="text-white font-normal">
                If you are looking for someone with hustle, heart, and growing technical expertise, let’s connect.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Button href="#automations" size="lg" className="group w-full sm:w-auto">
                View Automation Examples
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <a href="https://www.linkedin.com/in/princesasao-ai-help/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-all transform hover:scale-110"><Linkedin size={22} /></a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end sticky top-32">
            <div className="relative w-72 h-72 md:w-[480px] md:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full p-1 border border-white/10 bg-white/5 backdrop-blur-md">
                 <div className="w-full h-full rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(255,255,255,0.05)]">
                    <img 
                      src="https://res.cloudinary.com/dzd1r07ic/image/upload/v1766166480/FINAL_PHOTO_afp1aw.png" 
                      alt="Prince - AI Automation Engineer" 
                      className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
