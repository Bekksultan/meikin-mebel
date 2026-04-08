"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import { 
  BarChart3, 
  Package, 
  Users, 
  ShoppingBag, 
  Bell, 
  Search, 
  Plus,
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  Settings
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("products");

  const stats = [
    { label: "Всего продаж", value: "84,000 сом", icon: ShoppingBag, color: "bg-blue-500", trend: "+12.5%" },
    { label: "Заказы", value: "24", icon: Package, color: "bg-purple-500", trend: "+5.2%" },
    { label: "Покупатели", value: "156", icon: Users, color: "bg-emerald-500", trend: "+18.3%" },
    { label: "Просмотры", value: "1.2k", icon: BarChart3, color: "bg-orange-500", trend: "+24.1%" },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-200 hidden lg:flex flex-col">
        <div className="p-6">
          <div className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-6">Меню</div>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-brand-primary text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
            >
              <BarChart3 size={20} />
              Обзор
            </button>
            <button 
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === 'products' ? 'bg-brand-primary text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
            >
              <Package size={20} />
              Продукты
            </button>
            <button 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-100 transition-all"
            >
              <ShoppingBag size={20} />
              Заказы
            </button>
            <button 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-100 transition-all"
            >
              <Users size={20} />
              Клиенты
            </button>
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-zinc-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-100 transition-all">
            <Settings size={20} />
            Настройки
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-serif font-bold text-brand-primary">Панель управления</h1>
            <p className="text-zinc-500 text-sm">Добро пожаловать в Meikin CMS.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 bg-white p-1 pr-4 border border-zinc-200 rounded-lg">
              <div className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center text-white font-bold text-xs">AD</div>
              <span className="text-sm font-medium text-brand-primary">Админ</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.color} text-white`}>
                  <stat.icon size={20} />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                  <TrendingUp size={12} />
                  {stat.trend}
                </div>
              </div>
              <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-2xl font-serif font-bold text-brand-primary">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Products List Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-serif font-bold text-brand-primary">Список товаров</h2>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <input 
                  type="text" 
                  placeholder="Поиск товара..." 
                  className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all"
                />
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              </div>
              <button className="bg-brand-primary hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                <Plus size={18} />
                <span>Добавить</span>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-50 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Товар</th>
                  <th className="px-6 py-4">Категория</th>
                  <th className="px-6 py-4">Цена</th>
                  <th className="px-6 py-4">Статус</th>
                  <th className="px-6 py-4">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-zinc-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-zinc-100 flex-shrink-0">
                          <Image src={product.image} alt={product.name} fill sizes="48px" className="object-cover" />
                        </div>
                        <span className="font-medium text-brand-primary text-sm line-clamp-1">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-zinc-500 text-sm">{product.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-brand-primary">
                      {product.price.toLocaleString()} сом
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">В продаже</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 text-zinc-400 hover:text-brand-primary transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-zinc-100 bg-zinc-50 text-center text-xs text-zinc-400">
            Показано {products.length} товаров из {products.length}
          </div>
        </div>
      </main>
    </div>
  );
}
