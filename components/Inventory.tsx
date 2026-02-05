import React from 'react';
import { MOCK_LEADS } from '../constants';
import { Plus, Search, Tag } from 'lucide-react';

const Inventory: React.FC = () => {
  // Extracting unique watches from leads for demo purposes
  const watches = MOCK_LEADS.flatMap(lead => lead.interests);
  const uniqueWatches = Array.from(new Set(watches.map(w => w.model)))
    .map(model => watches.find(w => w.model === model)!);

  return (
    <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-serif font-bold text-gray-900">Estoque</h1>
            <button className="flex items-center space-x-2 px-4 py-2 bg-chronos-900 text-white rounded-lg text-sm hover:bg-chronos-800 transition-colors">
                <Plus size={16} /> <span>Adicionar Relógio</span>
            </button>
        </div>

        <div className="flex space-x-4 mb-6">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Buscar por marca, modelo ou referência..." 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-chronos-500"
                />
            </div>
            <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none">
                <option>Todas as Marcas</option>
                <option>Rolex</option>
                <option>Patek Philippe</option>
                <option>Audemars Piguet</option>
            </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {uniqueWatches.length > 0 ? uniqueWatches.map((watch, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-4 relative">
                        <img src={watch.image} alt={watch.model} className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm">
                            Em Estoque
                        </span>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{watch.brand}</p>
                                <h3 className="font-bold text-gray-900 text-lg leading-tight">{watch.model}</h3>
                            </div>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                            <Tag size={12} className="mr-1" /> Ref: {watch.reference}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-lg font-bold text-chronos-700">R$ {watch.price.toLocaleString()}</span>
                            <button className="text-xs font-semibold text-gray-900 hover:text-chronos-600">Ver Detalhes</button>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                    <div className="bg-gray-50 rounded-2xl p-10 border border-dashed border-gray-200 inline-block">
                        <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">Estoque Vazio</h3>
                        <p className="text-gray-500 mt-1">Nenhum item registrado no momento.</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default Inventory;