import React from 'react';
import { MOCK_METRICS, MOCK_CHART_DATA, MOCK_LEADS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, CartesianGrid, Legend } from 'recharts';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Users, 
  Briefcase, 
  ShoppingBag, 
  DollarSign, 
  Filter, 
  Download, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ChevronRight,
  PlusCircle,
  Calendar as CalendarIcon,
  CheckCircle2,
  BellRing,
  Clock,
  Inbox
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const hours = new Date().getHours();
  const greeting = hours < 12 ? 'Bom dia' : hours < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header & Context */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col space-y-2">
          <p className="text-xs font-bold text-chronos-600 uppercase tracking-wider flex items-center gap-2">
            <Clock size={14} /> {currentDate}
          </p>
          <h1 className="text-3xl font-serif font-bold text-gray-900">{greeting}, Alex.</h1>
          <p className="text-gray-500">Você tem <span className="font-bold text-gray-900">0 tarefas</span> pendentes e <span className="font-bold text-gray-900">0 novos leads</span> hoje.</p>
        </div>
        
        {/* Quick Actions */}
        <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2.5 bg-chronos-900 text-white rounded-xl text-sm font-medium hover:bg-chronos-800 transition-all shadow-lg shadow-chronos-900/20">
                <PlusCircle size={18} /> Novo Lead
             </button>
             <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all">
                <CalendarIcon size={18} /> Agendar
             </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_METRICS.map((metric, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 duration-300 ${
              metric.isPrimary 
                ? 'bg-gradient-to-br from-chronos-900 to-chronos-800 text-white border-chronos-900 shadow-xl shadow-chronos-900/20' 
                : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${metric.isPrimary ? 'bg-white/10 backdrop-blur-sm' : 'bg-gray-50'}`}>
                {idx === 0 && <Users size={20} className={metric.isPrimary ? 'text-white' : 'text-chronos-600'} />}
                {idx === 1 && <Briefcase size={20} className={metric.isPrimary ? 'text-white' : 'text-chronos-600'} />}
                {idx === 2 && <ShoppingBag size={20} className={metric.isPrimary ? 'text-white' : 'text-chronos-600'} />}
                {idx === 3 && <DollarSign size={20} className={metric.isPrimary ? 'text-white' : 'text-chronos-600'} />}
              </div>
              <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
                metric.isPrimary 
                  ? 'bg-white/20 text-white' 
                  : metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {metric.trend === 'up' ? <ArrowUpRight size={14} className="mr-1"/> : <ArrowDownRight size={14} className="mr-1"/>}
                {metric.change}
              </div>
            </div>
            <h3 className={`text-sm font-medium ${metric.isPrimary ? 'text-gray-200' : 'text-gray-500'}`}>{metric.label}</h3>
            <p className="text-3xl font-bold mt-1 tracking-tight">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Main Chart Section - Expanded to full width */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <div>
            <h2 className="text-lg font-bold text-gray-900">Performance de Vendas</h2>
            <p className="text-sm text-gray-500">Receita vs. Quantidade de Leads (Últimos 7 dias)</p>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-2 text-xs font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-chronos-500"></span> Receita
                    <span className="w-2 h-2 rounded-full bg-blue-400 ml-2"></span> Leads
                </div>
                <select className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-chronos-500 text-gray-600">
                    <option>Esta Semana</option>
                    <option>Este Mês</option>
                    <option>Este Ano</option>
                </select>
            </div>
        </div>
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34b371" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#34b371" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                </linearGradient>
                </defs>
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
                    cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area yAxisId="left" type="monotone" dataKey="value" name="Receita" stroke="#34b371" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                <Area yAxisId="right" type="monotone" dataKey="leads" name="Leads" stroke="#60a5fa" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
            </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div>
                <h2 className="text-lg font-bold text-gray-900">Leads para Ação Imediata</h2>
                <p className="text-sm text-gray-500">Priorize estes contatos hoje.</p>
            </div>
            <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                    <Filter size={16} /> <span>Filtrar</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                    <Download size={16} /> <span>Exportar</span>
                </button>
            </div>
        </div>
        <div className="overflow-x-auto">
          {MOCK_LEADS.length > 0 ? (
            <table className="w-full">
                <thead className="bg-gray-50/50">
                <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-4">Nome do Cliente</th>
                    <th className="px-6 py-4">Interesse</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Ação Rápida</th>
                    <th className="px-6 py-4 text-right">Detalhes</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {MOCK_LEADS.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                    <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                        <img src={lead.avatar} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                        <div>
                            <div className="text-sm font-bold text-gray-900">{lead.name}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${lead.status === 'Novo Lead' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
                                {lead.lastActive}
                            </div>
                        </div>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 font-medium">
                            {lead.interests.length > 0 ? lead.interests[0].brand : 'Indeciso'}
                        </div>
                        <div className="text-xs text-gray-500">
                            {lead.interests.length > 0 ? lead.interests[0].model : 'Procurando opções'}
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wide border
                            ${lead.status === 'Em Negociação' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 
                            lead.status === 'Qualificado' ? 'bg-green-50 text-green-700 border-green-100' : 
                            lead.status === 'Agendou Visita' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                            'bg-gray-50 text-gray-700 border-gray-100'}`}>
                        {lead.status}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex space-x-2">
                            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Enviar Email">
                                <Mail size={18} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Ligar">
                                <Phone size={18} />
                            </button>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <button className="text-chronos-600 hover:text-chronos-800 font-medium text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Ver <ArrowUpRight size={16} />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          ) : (
             <div className="p-10 text-center flex flex-col items-center text-gray-500">
                 <Inbox size={40} className="text-gray-300 mb-3" />
                 <p className="font-medium">Nenhum lead pendente</p>
                 <p className="text-sm">Você está em dia com suas atividades.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;