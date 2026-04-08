"use client";

import { products, Product } from "@/lib/data";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { ShoppingCart, Heart, Share2, Check, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { use, useState } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product);
    // In a real app, redirect to /checkout
    router.push("/cart"); 
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-100 bg-zinc-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-3xl font-bold text-brand-primary">
                  {product.price.toLocaleString()} сом
                </p>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Check size={14} /> В наличии
                </span>
              </div>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 h-14 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg ${
                    isAdded ? "bg-emerald-600 text-white" : "bg-brand-primary hover:bg-zinc-800 text-white shadow-black/10"
                  }`}
                >
                  {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
                  {isAdded ? "Добавлено" : "В корзину"}
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-brand-accent hover:opacity-90 text-brand-primary h-14 rounded-full font-bold flex items-center justify-center gap-3 transition-all"
                >
                  Купить сейчас
                  <ArrowRight size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-6 text-sm font-medium text-zinc-500 justify-center md:justify-start">
                <button className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <Heart size={18} /> В избранное
                </button>
                <div className="w-px h-4 bg-zinc-200" />
                <button className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                  <Share2 size={16} /> Поделиться
                </button>
              </div>
            </div>

            {/* Specifications Section */}
            <div className="border-t border-zinc-100 pt-8 mt-auto">
              <h3 className="text-lg font-serif font-bold text-brand-primary mb-6">Характеристики</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex justify-between items-center py-2 border-b border-zinc-50">
                  <span className="text-zinc-500 text-sm">Материал</span>
                  <span className="font-medium text-brand-primary">Массив дерева</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-50">
                  <span className="text-zinc-500 text-sm">Гарантия</span>
                  <span className="font-medium text-brand-primary">24 месяца</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-50">
                  <span className="text-zinc-500 text-sm">Производство</span>
                  <span className="font-medium text-brand-primary">Бишкек</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-50">
                  <span className="text-zinc-500 text-sm">Артикул</span>
                  <span className="font-medium text-brand-primary text-xs uppercase">MK-{id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
