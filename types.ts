export interface AutomationTask {
  id: string;
  title: string;
  description: string;
  webhookUrl: string; // The n8n webhook URL
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export enum WebhookStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}