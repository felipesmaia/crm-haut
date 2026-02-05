import { Lead, Metric, ChartData } from './types';

export const MOCK_METRICS: Metric[] = [
  { label: 'Total de Leads', value: '0', change: '0%', trend: 'up' },
  { label: 'Leads Qualificados', value: '0', change: '0%', trend: 'up', isPrimary: true },
  { label: 'Taxa de Conversão', value: '0%', change: '0%', trend: 'up' },
  { label: 'Receita Total', value: 'R$ 0', change: '0%', trend: 'up' },
];

export const MOCK_CHART_DATA: ChartData[] = [
  { name: 'Seg', value: 0, leads: 0, sales: 0, visits: 0 },
  { name: 'Ter', value: 0, leads: 0, sales: 0, visits: 0 },
  { name: 'Qua', value: 0, leads: 0, sales: 0, visits: 0 },
  { name: 'Qui', value: 0, leads: 0, sales: 0, visits: 0 },
  { name: 'Sex', value: 0, leads: 0, sales: 0, visits: 0 },
  { name: 'Sáb', value: 0, leads: 0, sales: 0, visits: 0 },
  { name: 'Dom', value: 0, leads: 0, sales: 0, visits: 0 },
];

export const MOCK_LEADS: Lead[] = [];