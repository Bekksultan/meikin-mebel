import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-12 text-center">Свяжитесь с нами</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-brand-primary mb-8">Наши контакты</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-secondary rounded-2xl text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary mb-1">Наш адрес</h4>
                  <p className="text-zinc-500">г. Бишкек, ул. Мебельная 123</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-secondary rounded-2xl text-brand-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary mb-1">Телефон</h4>
                  <p className="text-zinc-500">+996 555 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-secondary rounded-2xl text-brand-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary mb-1">Email</h4>
                  <p className="text-zinc-500">info@meikin.kg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Ваше имя</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all" placeholder="Алексей" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">Ваш телефон</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all" placeholder="+996 ..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Сообщение</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-all h-32" placeholder="Опишите ваши пожелания..."></textarea>
              </div>
              <button className="w-full bg-brand-primary hover:bg-zinc-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                Отправить <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
