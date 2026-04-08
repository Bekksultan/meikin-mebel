import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tighter mb-6 block">
            MEIKIN <span className="text-brand-accent">MEBEL</span>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Мы создаем мебель, которая служит поколениям. С любовью из Бишкека.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
              <Mail size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Категории</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/shop?cat=sofas" className="hover:text-white transition-colors">Диваны</Link></li>
            <li><Link href="/shop?cat=chairs" className="hover:text-white transition-colors">Стулья</Link></li>
            <li><Link href="/shop?cat=tables" className="hover:text-white transition-colors">Столы</Link></li>
            <li><Link href="/shop?cat=beds" className="hover:text-white transition-colors">Кровати</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Помощь</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/shipping" className="hover:text-white transition-colors">Доставка</Link></li>
            <li><Link href="/returns" className="hover:text-white transition-colors">Возврат</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Приватность</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Контакты</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-accent" />
              <span>г. Бишкек, ул. Мебельная 123</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent" />
              <span>+996 555 123 456</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent" />
              <span>info@meikin.kg</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs">
        <p>© {new Date().getFullYear()} MEIKIN MEBEL. Все права защищены.</p>
      </div>
    </footer>
  );
}
