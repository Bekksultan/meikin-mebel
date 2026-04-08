"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
            MEIKIN <span className="text-brand-accent">MEBEL</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-brand-accent transition-colors">
              Главная
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-brand-accent transition-colors">
              Магазин
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-brand-accent transition-colors">
              О нас
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-brand-accent transition-colors">
              Контакты
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative group">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/dashboard" className="p-2 hover:bg-black/5 rounded-full transition-colors text-zinc-600">
            <User size={20} />
          </Link>
          <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
