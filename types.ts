export interface Masterclass {
  id: number;
  title: string;
  speaker: string;
  time: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}