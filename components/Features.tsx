
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface AutomationExample {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const EXAMPLES: AutomationExample[] = [
  {
    id: '1',
    title: 'Client Onboarding Automation',
    description: 'This workflow demonstrates an end to end client onboarding process after a successful membership payment. It is triggered by a webhook that represents a payment provider such as Stripe. Once the payment is confirmed, the system automatically sends the client an email with an account creation link, notifies the internal team, and records the client in the CRM.\n\nThe automation continues to track onboarding progress through scheduled follow ups. If the account is not created after 3 and 5 days, the workflow sends internal notifications to ensure no client is overlooked. Once the account creation is completed, an AI agent generates and sends a personalized confirmation email to the client and updates the CRM with the final status.\n\nThis automation is designed to reduce manual onboarding tasks while maintaining clear visibility and consistent follow through during the client activation process.\n\nImpact: Reduced missed onboarding steps and manual follow ups by turning client activation into a fully tracked and automated workflow.',
    imageUrl: 'https://res.cloudinary.com/dzd1r07ic/image/upload/v1766171366/Onboarding_smztdg.png'
  },
  {
    id: '2',
    title: 'Document Based Q&A (RAG Workflow)',
    description: 'This workflow demonstrates a simple retrieval augmented generation setup using uploaded PDF documents as a knowledge source. When a PDF file such as a FAQ is uploaded to Google Drive, the workflow automatically downloads the file, processes its contents, and breaks it into smaller chunks. These chunks are converted into embeddings and stored in a vector database to support semantic search. Once the document is indexed, an AI agent can answer user questions using the uploaded PDF as a reference. The agent retrieves relevant context from the vector store to ensure responses are based on the provided content rather than assumptions. A Postgres based chat memory is included so the agent can remember previous messages and maintain conversation context. The workflow also uses a fallback AI model to handle model failures and practice basic reliability and error handling patterns. This automation is designed to build a practical foundation for document aware AI systems that can be extended to real world use cases. \n\nImpact: Enabled accurate and consistent question answering from uploaded documents without manual searching or custom model training.',
    imageUrl: 'https://res.cloudinary.com/dzd1r07ic/image/upload/v1766172143/RAGS_retvyk.png'
  },
  {
    id: '3',
    title: 'Plant Health and Disease Identifier',
    description: 'This workflow powers a plant health and disease identification web application built using Lovable. It allows users to upload an image of a plant leaf and receive an automated analysis of the plant’s health status and potential diseases. The first part of the workflow is triggered when a user uploads an image. A webhook captures the image, extracts the file data using a code node, and sends it to a plant identification API through an HTTP request. This step focuses on identifying the plant type and assessing its overall health condition based on the uploaded leaf image. The second part of the workflow is activated when the user selects the “Check Diseases” option. It reuses the previously uploaded image and sends it to a disease identification endpoint to retrieve more detailed diagnostic information. The response is processed, simplified, and returned to the frontend in a structured format that is easy for users to understand. This automation demonstrates how backend workflows can support real time image based analysis by integrating external AI services instead of building complex models from scratch. \n\nImpact: Enabled real time plant health and disease analysis through a seamless frontend and backend automation pipeline.',
    imageUrl: 'https://res.cloudinary.com/dzd1r07ic/image/upload/v1766172623/plantito_pwz39f.png'
  },
  {
    id: '4',
    title: 'Shopify Digital Art Fulfillment Automation',
    description: 'This workflow automates the full delivery process for a digital art product sold through Shopify. When a customer places an order, the Shopify trigger captures the purchase details and extracts the data needed for image generation. The workflow sends the order information to an AI image generation service using Nano Banana Pro to create the digital artwork. Since image generation runs asynchronously, the automation includes a wait step and conditional checks to confirm that the image creation is completed before moving forward. Once the final image is ready, the workflow downloads the generated file, uploads it to cloud storage, applies the correct sharing permissions, and sends a personalized email to the customer with access to their digital product. This removes manual fulfillment steps while ensuring a consistent and reliable delivery process. \n\nImpact: Automated end to end digital product fulfillment from purchase to delivery without manual intervention.',
    imageUrl: 'https://res.cloudinary.com/dzd1r07ic/image/upload/v1766172952/Shopify_Digital_Art_bh0bxa.png'
  }
];

export const Features: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<AutomationExample | null>(null);

  const closeModal = () => setSelectedExample(null);

  return (
    <section id="automations" className="py-24 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Automation Examples</h2>
          <p className="text-textMuted max-w-2xl text-lg">
            Engineering seamless workflows to solve complex real-world challenges with n8n and modern AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXAMPLES.map((example) => (
            <div 
              key={example.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedExample(example)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-2 shadow-2xl">
                <img 
                  src={example.imageUrl} 
                  alt={example.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                    <ZoomIn size={16} className="text-white" />
                    <span className="text-xs font-medium text-white">View Project</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 px-2">
                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-white/80 transition-colors">
                  {example.title}
                </h3>
                <p className="text-sm text-textMuted line-clamp-3 leading-relaxed">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Overlay */}
      {selectedExample && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md animate-fade-in" 
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-6xl bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
              {/* Image Section */}
              <div className="lg:w-[55%] bg-[#050505] flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-white/10 relative">
                <img 
                  src={selectedExample.imageUrl} 
                  alt={selectedExample.title}
                  className="w-full h-auto object-contain rounded-xl shadow-2xl"
                />
              </div>
              
              {/* Content Section */}
              <div className="lg:w-[45%] p-8 md:p-12 flex flex-col bg-[#080808]">
                <div className="mb-4">
                   <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Technical Breakdown</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {selectedExample.title}
                </h3>
                <div className="h-0.5 w-12 bg-white/20 mb-8 rounded-full" />
                
                <div className="space-y-6">
                  <div className="text-textMuted text-base md:text-lg leading-relaxed space-y-4">
                    {selectedExample.description.split('\n\n').map((paragraph, idx) => {
                      const isImpact = paragraph.startsWith('Impact:');
                      return (
                        <p key={idx} className={isImpact ? 'text-white font-medium border-l-2 border-white/20 pl-4 py-1' : ''}>
                          {isImpact ? (
                            <>
                              <span className="text-white/60">Impact:</span> {paragraph.replace('Impact:', '')}
                            </>
                          ) : (
                            paragraph
                          )}
                        </p>
                      );
                    })}
                  </div>
                  
                  <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-xs text-white/60">
                      <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      Status: Live
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/60">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      Engine: n8n
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
