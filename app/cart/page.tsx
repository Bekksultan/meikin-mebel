"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 px-6 text-center min-h-screen">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-300">
            <ShoppingBag size={40} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-brand-primary mb-4">Ваша корзина пуста</h1>
          <p className="text-zinc-500 mb-8">Посмотрите наш каталог, чтобы найти что-то особенное для вашего дома.</p>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-all">
            <ArrowLeft size={18} /> Вернуться в магазин
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-zinc-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-brand-primary mb-12">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl border border-zinc-100 flex gap-6 shadow-sm">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif font-bold text-lg text-brand-primary truncate">{item.name}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-300 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{item.category}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 border border-zinc-100 rounded-full p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-zinc-50 rounded-full text-zinc-500 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-zinc-50 rounded-full text-zinc-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-bold text-brand-primary">
                      {(item.price * item.quantity).toLocaleString()} сом
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-black/5 sticky top-32">
              <h2 className="text-xl font-serif font-bold text-brand-primary mb-6">Итог заказа</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-zinc-500">
                  <span>Товары ({totalItems})</span>
                  <span>{totalPrice.toLocaleString()} сом</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Доставка</span>
                  <span className="text-emerald-600 font-medium">Бесплатно</span>
                </div>
                <div className="border-t border-zinc-100 pt-4 flex justify-between items-center text-xl font-bold text-brand-primary">
                  <span>К оплате</span>
                  <span>{totalPrice.toLocaleString()} сом</span>
                </div>
              </div>
              <button className="w-full bg-brand-primary text-white h-14 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
                Оформить заказ
              </button>
              <p className="text-center text-xs text-zinc-400 mt-6 px-4">
                Нажимая кнопку, вы соглашаетесь с условиями публичной оферты и политикой конфиденциальности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
