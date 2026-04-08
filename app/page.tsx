"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Premium Furniture"
            fill
            sizes="100vw"
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              MEIKIN: Мы Производим <br />
              <span className="text-brand-accent italic">Мебель</span>, Которая Служит Годы
            </h1>
            <p className="text-xl text-zinc-200 mb-10 leading-relaxed max-w-lg">
              Собственное производство в Бишкеке — гарантия вашего уюта и качества. 
              Индивидуальный подход к каждому интерьеру.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/shop" 
                className="bg-brand-accent hover:bg-white text-brand-primary px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group"
              >
                В магазин
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all"
              >
                О компании
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm shadow-brand-accent/20">
                <ShieldCheck className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Гарантия Качества</h3>
              <p className="text-zinc-500 text-sm">Используем только проверенные материалы и фурнитуру.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm shadow-brand-accent/20">
                <Truck className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Быстрая Доставка</h3>
              <p className="text-zinc-500 text-sm">Доставляем по всему Бишкеку и области точно в срок.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm shadow-brand-accent/20">
                <Clock className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Сроки</h3>
              <p className="text-zinc-500 text-sm">Производство от 7 рабочих дней в зависимости от сложности.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm shadow-brand-accent/20">
                <Star className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Мастера</h3>
              <p className="text-zinc-500 text-sm">Наша команда состоит из профессионалов с 10-летним стажем.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Лучшие предложения</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">
                Наши Популярные <span className="italic">Модели</span>
              </h2>
            </div>
            <Link href="/shop" className="text-brand-primary font-bold border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">
              Посмотреть всё
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden bg-brand-primary text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent opacity-10 blur-[100px] rounded-full translate-x-1/2" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Готовы Преобразить Ваш <span className="text-brand-accent italic">Интерьер</span>?
          </h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Оставьте заявку на бесплатную консультацию и замер. Мы поможем создать дом вашей мечты.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button className="bg-brand-accent hover:bg-white text-brand-primary px-10 py-4 rounded-full font-bold transition-all">
              Заказать замер
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-all">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
