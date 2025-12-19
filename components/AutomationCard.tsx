import React, { useState } from 'react';
import { WebhookStatus, AutomationTask } from '../types';
import { triggerWebhook } from '../services/n8nService';
import { Play, Check, AlertCircle, Loader2 } from 'lucide-react';

interface Props {
  task: AutomationTask;
}

export const AutomationCard: React.FC<Props> = ({ task }) => {
  const [status, setStatus] = useState<WebhookStatus>(WebhookStatus.IDLE);
  const [responseMsg, setResponseMsg] = useState<string>('');

  const handleRun = async () => {
    setStatus(WebhookStatus.LOADING);
    setResponseMsg('');
    
    try {
      const result = await triggerWebhook(task.webhookUrl);
      console.log(result);
      setStatus(WebhookStatus.SUCCESS);
      setResponseMsg('Workflow executed successfully.');
      
      // Reset after a few seconds
      setTimeout(() => setStatus(WebhookStatus.IDLE), 3000);
    } catch (error) {
      setStatus(WebhookStatus.ERROR);
      setResponseMsg('Failed to trigger workflow.');
    }
  };

  return (
    <div className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="p-2.5 bg-[#1A1B1E] border border-[rgba(255,255,255,0.08)] rounded-lg text-white">
           <span className="text-xl">{task.icon}</span>
        </div>
        <div className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
          status === WebhookStatus.SUCCESS ? 'bg-green-500/10 text-green-400 border-green-500/20' :
          status === WebhookStatus.ERROR ? 'bg-red-500/10 text-red-400 border-red-500/20' :
          'bg-[rgba(255,255,255,0.05)] text-textMuted border-[rgba(255,255,255,0.05)]'
        }`}>
          {status === WebhookStatus.IDLE ? 'READY' : status}
        </div>
      </div>

      <h3 className="text-lg font-medium text-white mb-2 relative z-10">{task.title}</h3>
      <p className="text-sm text-textMuted mb-6 h-10 relative z-10">{task.description}</p>

      {/* Action Area */}
      <div className="relative z-10 flex items-center justify-between mt-auto">
        <button 
          onClick={handleRun}
          disabled={status === WebhookStatus.LOADING}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
            status === WebhookStatus.SUCCESS 
              ? 'bg-green-500 text-black border-green-500'
              : status === WebhookStatus.ERROR 
              ? 'bg-red-500 text-white border-red-500'
              : 'bg-white text-black border-white hover:bg-[#EDEDEF]'
          } disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === WebhookStatus.LOADING ? (
            <Loader2 size={14} className="animate-spin" />
          ) : status === WebhookStatus.SUCCESS ? (
            <Check size={14} />
          ) : status === WebhookStatus.ERROR ? (
            <AlertCircle size={14} />
          ) : (
            <Play size={14} fill="currentColor" />
          )}
          
          {status === WebhookStatus.LOADING ? 'Running...' : 
           status === WebhookStatus.SUCCESS ? 'Done' : 
           status === WebhookStatus.ERROR ? 'Failed' : 
           'Run Automation'}
        </button>
      </div>

      {/* Status Message */}
      {responseMsg && (
         <div className="absolute bottom-6 right-6 text-[10px] text-textMuted animate-fade-in">
            {responseMsg}
         </div>
      )}
    </div>
  );
};