"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Все", "Sofas", "Chairs", "Tables", "Beds", "Storage", "Lighting"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Все" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-4">Наш Каталог</h1>
          <p className="text-zinc-500 max-w-2xl text-lg font-sans">
            Откройте для себя нашу коллекцию мебели премиум-класса, созданную для вашего вдохновения и комфорта.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 items-center">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
                  selectedCategory === cat
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-brand-accent"
                }`}
              >
                {cat === "Все" ? "Все" : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            </div>
            <button className="flex items-center gap-2 p-2 rounded-lg border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 transition-colors">
              <SlidersHorizontal size={20} />
              <span className="hidden sm:inline font-medium">Фильтры</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-zinc-300">
            <div className="text-zinc-400 mb-4 inline-block p-6 bg-zinc-50 rounded-full">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-primary mb-2">Ничего не найдено</h3>
            <p className="text-zinc-500">Попробуйте изменить категорию или параметры поиска.</p>
            <button 
              onClick={() => {setSelectedCategory("Все"); setSearchQuery("");}}
              className="mt-6 text-brand-accent font-bold hover:underline"
            >
              Сбросить все фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
