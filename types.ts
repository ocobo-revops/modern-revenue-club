export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogoUrl: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface AgendaItem {
  id: number;
  time: string;
  title: string;
  description?: string;
  isMainEvent?: boolean;
}
