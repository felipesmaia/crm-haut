import React from 'react';
import { MOCK_CHART_DATA } from '../constants';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Legend 
} from 'recharts';
import { TrendingUp, MousePointerClick, Users, BadgeDollarSign, CalendarDays } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900">Análises de Performance</h1>
                <p className="text-gray-500 mt-1">Visão geral do funil de vendas e tráfego.</p>
            </div>
            <div className="flex bg-white border border-gray-200 rounded-xl p-1">
                <button className="px-4 py-1.5 bg-gray-100 text-gray-900 rounded-lg text-sm font-medium shadow-sm">7 Dias</button>
                <button className="px-4 py-1.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">30 Dias</button>
                <button className="px-4 py-1.5 text-gray-500 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">90 Dias</button>
            </div>
        </div>

        {/* Top KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <MousePointerClick size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Visitas Totais</p>
                    <p className="text-xl font-bold text-gray-900">1.150</p>
                </div>
            </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                    <Users size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Leads Gerados</p>
                    <p className="text-xl font-bold text-gray-900">118</p>
                </div>
            </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                    <BadgeDollarSign size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Vendas Totais</p>
                    <p className="text-xl font-bold text-gray-900">36</p>
                </div>
            </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                    <TrendingUp size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Taxa Conv.</p>
                    <p className="text-xl font-bold text-gray-900">3.1%</p>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 1: Vendas vs Leads */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-[450px] flex flex-col">
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <BadgeDollarSign size={18} className="text-chronos-600"/> Vendas / Leads
                    </h3>
                    <p className="text-sm text-gray-500">Correlação entre novos leads e vendas fechadas.</p>
                </div>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={MOCK_CHART_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                dy={10}
                            />
                            <YAxis 
                                yAxisId="left" 
                                orientation="left" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            />
                            <YAxis 
                                yAxisId="right" 
                                orientation="right" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }}/>
                            <Bar yAxisId="left" dataKey="leads" name="Novos Leads" fill="#60a5fa" radius={[4, 4, 0, 0]} barSize={30} />
                            <Line yAxisId="right" type="monotone" dataKey="sales" name="Vendas Fechadas" stroke="#16a34a" strokeWidth={3} dot={{ r: 4, fill: '#16a34a', strokeWidth: 2, stroke: '#fff' }} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>

             {/* Chart 2: Visitas vs Leads */}
             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-[450px] flex flex-col">
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <MousePointerClick size={18} className="text-blue-600"/> Visitas / Leads
                    </h3>
                    <p className="text-sm text-gray-500">Eficiência do tráfego na geração de oportunidades.</p>
                </div>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MOCK_CHART_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                dy={10}
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            />
                            <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }}/>
                            <Bar dataKey="visits" name="Visitas do Site" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="leads" name="Leads Convertidos" fill="#34b371" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Analytics;