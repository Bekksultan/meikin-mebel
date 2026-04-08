export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Скандинавский Диван 'Nordic'",
    price: 45000,
    category: "Sofas",
    image: "/images/hero.png",
    description: "Минималистичный дизайн, вдохновленный северными лесами. Комфорт и стиль в одном флаконе.",
    isFeatured: true
  },
  {
    id: "2",
    name: "Кресло 'Velvet Royal'",
    price: 12500,
    category: "Chairs",
    image: "/images/chair.png",
    description: "Бархатное совершенство для вашего кабинета или гостиной.",
    isFeatured: true
  },
  {
    id: "3",
    name: "Обеденный Стол 'Oak Craft'",
    price: 28000,
    category: "Tables",
    image: "/images/table.png",
    description: "Массив дуба, ручная обработка. Центр притяжения всего дома.",
    isFeatured: true
  },
  {
    id: "4",
    name: "Комод 'Modern Line'",
    price: 18900,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1512918728675-ed7a9c7921d9?auto=format&fit=crop&q=80&w=800",
    description: "Функциональное решение для организации пространства.",
    isFeatured: false
  },
  {
    id: "5",
    name: "Кровать 'Cloud Dream'",
    price: 52000,
    category: "Beds",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
    description: "Ощущение полета и глубокий сон каждую ночь.",
    isFeatured: false
  },
  {
    id: "6",
    name: "Лампа 'Arc Light'",
    price: 4500,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
    description: "Мягкий свет и элегантная форма.",
    isFeatured: false
  }
];
