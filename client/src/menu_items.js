import brewed_coffee from './menu_photos/brewed_coffee.jpg';
import cappuccino from './menu_photos/cappuccino.jpg';
import cold_brew from './menu_photos/cold_brew.jpg';
import espresso from './menu_photos/espresso.jpg';
import latte from './menu_photos/latte.jpg';
import pour_over from './menu_photos/pour_over.jpg';
import iced_coffee from './menu_photos/iced_coffee.jpg';

export const MENU_ITEMS = [
  {
    id: 'hot_coffee',
    title: 'Hot Coffee',
    items: [
      {
        id: 'coffee',
        short_name: 'Coffee',
        picture: brewed_coffee,
        name: 'Brewed Coffee',
        price: 0.75,
        description:
          'A smooth, well-balanced coffee with rich flavors of chocolate and toasted nuts. Brewed fresh for you.',
      },
      {
        id: 'espresso',
        short_name: 'Espresso',
        picture: espresso,
        name: 'Shot of Espresso',
        price: 2.5,
        description:
          'Our smooth signature Espresso with rich flavor and caramelly sweetness is at the heart of everything we do.',
      },
      {
        id: 'latte',
        short_name: 'Latte',
        picture: latte,
        name: 'Latte',
        price: 3.25,
        description:
          'Rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.',
      },
      {
        id: 'cappuccino',
        short_name: 'Cappuccino',
        picture: cappuccino,
        name: 'Cappuccino',
        price: 0.75,
        description:
          'Dark, rich espresso lies in wait under a smooth and stretched layer of thick milk foam. A alchemy of barist artistry and craft.',
      },
      {
        id: 'pour_over',
        short_name: 'Pour Over',
        picture: pour_over,
        name: 'Pour Over',
        price: 3.0,
        description: 'The coffee you love, made with care and precision.',
      },
    ],
  },
  {
    id: 'cold_coffee',
    title: 'Cold Coffee',
    items: [
      {
        id: 'cold_brew',
        short_name: 'Cold Brew',
        picture: cold_brew,
        name: 'Cold Brew',
        price: 2.75,
        description:
          "Slow-stepped in cool water for 20 hours, our cold brew coffee is the smoothest coffee you'll find.",
      },
      {
        id: 'iced_coffee',
        short_name: 'Iced Coffee',
        picture: iced_coffee,
        name: 'Iced Coffee',
        price: 2.5,
        description:
          'Your favorite coffee, chilled and sweeteend over ice. A refreshing lift to any day.',
      },
    ],
  },
];
