export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-8 text-center">О компании MEIKIN</h1>
        <div className="prose prose-lg mx-auto text-zinc-600 leading-relaxed font-sans">
          <p className="mb-6">
            Meikin Mebel — это история о качестве, стиле и домашнем уюте. Мы начали свой путь в Бишкеке с мечтой создавать мебель, которая будет не просто предметом интерьера, а частью истории вашей семьи.
          </p>
          <p className="mb-6">
            Каждое наше изделие проходит через руки опытных мастеров, которые ценят массив дерева и качественную фурнитуру так же сильно, как и мы сами. Мы верим в долговечность и экологичность.
          </p>
          <div className="bg-brand-secondary p-8 rounded-3xl my-12 border border-brand-accent/20">
            <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Наши ценности</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">01.</span>
                <span>Бескомпромиссное качество материалов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">02.</span>
                <span>Эргономика и комфорт в каждой линии</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-accent font-bold">03.</span>
                <span>Прозрачность производства и сроков</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
