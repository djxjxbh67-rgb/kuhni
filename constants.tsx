
import { KitchenStyle, Benefit, Step } from './types';

export const PHONE_NUMBER = "+7 (812) 604-20-40";
export const COMPANY_NAME = "МФ КОНТРАКТ";

export const STYLES: KitchenStyle[] = [
  {
    id: 'nordic',
    name: 'Коллекция «NORDIC»',
    description: 'Идеальное воплощение скандинавского стиля для петербургских квартир. Функциональность и светлые тона.',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800',
    priceFrom: 'от 18 500 ₽/м.п.'
  },
  {
    id: 'classic-spb',
    name: 'Коллекция «ЭРМИТАЖ»',
    description: 'Неоклассика с изысканной фрезеровкой и патиной. Премиальный вид по цене производителя.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800',
    priceFrom: 'от 26 900 ₽/м.п.'
  },
  {
    id: 'high-tech',
    name: 'Коллекция «TECHNO»',
    description: 'Ультрасовременные кухни с интегрированными ручками и фасадами из акрилового пластика.',
    image: 'https://images.unsplash.com/photo-1556185731-242503d891c6?auto=format&fit=crop&q=80&w=800',
    priceFrom: 'от 29 400 ₽/м.п.'
  },
  {
    id: 'urban-loft',
    name: 'Коллекция «URBAN»',
    description: 'Индустриальный стиль с текстурами бетона и натурального дуба. Надежность и характер.',
    image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=800',
    priceFrom: 'от 22 100 ₽/м.п.'
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Собственное производство в СПб',
    description: 'Мы не перепродаем, а производим. Это гарантирует отсутствие наценок и строгий контроль качества.',
    icon: 'fa-solid fa-industry'
  },
  {
    title: 'Договор и Гарантия 10 лет',
    description: 'Работаем официально. Предоставляем расширенную гарантию на мебель и фурнитуру Blum/Hettich.',
    icon: 'fa-solid fa-file-signature'
  },
  {
    title: 'Замер и Дизайн 0 ₽',
    description: 'Наш дизайнер приедет в любой район СПб и ЛО с образцами фасадов и столешниц совершенно бесплатно.',
    icon: 'fa-solid fa-ruler-combined'
  },
  {
    title: 'Сборка «под ключ»',
    description: 'Профессиональная установка за 1 день с подключением всей бытовой техники и моек.',
    icon: 'fa-solid fa-screwdriver-wrench'
  }
];

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Вызов дизайнера',
    description: 'Оставьте заявку на бесплатный выезд замерщика-дизайнера в удобное для вас время.'
  },
  {
    number: '02',
    title: '3D-Проект и Смета',
    description: 'Создаем проект прямо на месте и фиксируем окончательную стоимость в договоре.'
  },
  {
    number: '03',
    title: 'Изготовление',
    description: 'Производим вашу кухню на автоматизированной линии в течение 14-21 рабочих дней.'
  },
  {
    number: '04',
    title: 'Монтаж и Улыбка',
    description: 'Доставляем, собираем и принимаем вашу радость от новой кухни!'
  }
];
