import { Lead, LeadStatus } from '../types';
import { MOCK_LEADS } from '../constants';

// In a real app, this would import the supabase client
// import { supabase } from '../supabaseClient';

// Simulating network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class SupabaseService {
  private leads: Lead[] = []; // Inicia vazio
  // Armazena os callbacks dos ouvintes (subscribers)
  private subscribers: ((leads: Lead[]) => void)[] = [];

  // Simula a inscrição em um canal Realtime do Supabase
  subscribeToLeads(onUpdate: (leads: Lead[]) => void): () => void {
    this.subscribers.push(onUpdate);
    
    // Retorna função de limpeza (unsubscribe)
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== onUpdate);
    };
  }

  // Notifica todos os ouvintes com os dados mais recentes
  private notifySubscribers() {
    // Em um cenário real, o Supabase envia o payload da mudança.
    // Aqui enviamos o estado atualizado completo para simplificar.
    this.subscribers.forEach(callback => callback([...this.leads]));
  }

  async getLeads(): Promise<Lead[]> {
    await delay(300); // Simulate API call
    return [...this.leads];
  }

  async getLeadById(id: string): Promise<Lead | undefined> {
    await delay(300);
    return this.leads.find(l => l.id === id);
  }

  async updateLeadStatus(id: string, status: LeadStatus): Promise<Lead | undefined> {
    await delay(200);
    const leadIndex = this.leads.findIndex(l => l.id === id);
    if (leadIndex > -1) {
      this.leads[leadIndex] = { 
        ...this.leads[leadIndex], 
        status,
        lastStatusChange: new Date().toISOString() // Atualiza data de mudança
      };
      
      // Dispara evento de "Realtime"
      this.notifySubscribers();
      
      return this.leads[leadIndex];
    }
    return undefined;
  }
  
  async addNote(leadId: string, noteContent: string): Promise<void> {
    await delay(200);
    const lead = this.leads.find(l => l.id === leadId);
    if(lead) {
        lead.notes.push({
            id: Math.random().toString(36),
            content: noteContent,
            author: 'Você',
            createdAt: 'Agora mesmo',
            isMe: true
        });
        // Dispara evento de "Realtime" se houver alterações relevantes
        this.notifySubscribers();
    }
  }

  async deleteLead(id: string): Promise<void> {
    await delay(200);
    this.leads = this.leads.filter(l => l.id !== id);
    // Dispara evento de "Realtime"
    this.notifySubscribers();
  }

  async deleteLeads(ids: string[]): Promise<void> {
    await delay(300);
    this.leads = this.leads.filter(l => !ids.includes(l.id));
    this.notifySubscribers();
  }
}

export const supabaseService = new SupabaseService();