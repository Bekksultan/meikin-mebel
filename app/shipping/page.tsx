export default function ShippingPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-brand-primary mb-8 text-center">Доставка</h1>
        <div className="prose prose-lg mx-auto text-zinc-600 leading-relaxed font-sans">
          <p className="mb-6">Мы осуществляем доставку мебели по всему Бишкеку и Чуйской области. Наша команда заботится о том, чтобы ваш заказ прибыл в целости и сохранности.</p>
          <h3 className="text-2xl font-serif font-bold text-brand-primary mt-8 mb-4">Условия доставки</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Бесплатная доставка по Бишкеку при заказе от 50,000 сом.</li>
            <li>Доставка в регионы рассчитывается индивидуально.</li>
            <li>Подъем на этаж оплачивается отдельно при отсутствии лифта.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
