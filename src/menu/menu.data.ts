import { MenuPanel } from './menu.types';

// Transcribed verbatim from the original static site's index.html (#panel-food,
// #panel-cafe, #panel-bar) — do not alter names/prices without checking the source.
export const MENU_PANELS: MenuPanel[] = [
  {
    key: 'food',
    label: 'Food',
    active: true,
    blocks: [
      {
        type: 'category',
        title: 'Starters',
        items: [
          { name: 'French Fries', price: '200' },
          { name: 'Chilli Chips', price: '245' },
          { name: 'Honey Chilli Potato', price: '275' },
          { name: 'Kaju Fry', price: '295' },
          { name: 'Veg Pakauda', price: '185' },
          { name: 'Onion Garam Pakauda', price: '185' },
          { name: 'Paneer Pakauda', price: '345' },
          { name: 'Paneer Chilli', price: '345' },
          { name: 'Sweet Corn Salt / Pepper', price: '195 / 245' },
          { name: 'Boiled Veg', price: '245' },
          { name: 'Onion Rings', price: '245' },
          { name: 'Aloo Timmur / Thicheko Aloo', price: '195' },
          { name: 'Aloo Jeera', price: '150' },
          { name: 'Crispy Fried Chicken', price: '345' },
          { name: 'Chicken Roast', price: '375' },
          { name: 'Chicken Lollipop', price: '295' },
          { name: 'Chicken Chilli', price: '345' },
          { name: 'Chicken Drumstick', price: '295' },
          { name: 'Chicken Tawa', price: '295' },
          { name: 'Hot Wings', price: '375' },
          { name: 'Buff Chilli', price: '345' },
          { name: 'Buff Sukuti', price: '295' },
          { name: 'Sausage <small>(per plate)</small>', price: '295' },
        ],
      },
      {
        type: 'category',
        title: 'Chowmein',
        items: [
          { name: 'Veg Chowmein', price: '165' },
          { name: 'Egg Chowmein', price: '180' },
          { name: 'Chicken / Buff Chowmein', price: '200' },
          { name: 'Mix Chicken Chowmein', price: '275' },
          { name: 'Mix Non-Veg Chowmein', price: '345' },
        ],
      },
      {
        type: 'category',
        title: 'Rice',
        items: [
          { name: 'Veg Fried Rice', price: '175' },
          { name: 'Chicken / Buff Fried Rice', price: '245' },
          { name: 'Egg Rice', price: '195' },
          { name: 'Chicken Mix Fried Rice', price: '295' },
          { name: 'Mix Non-Veg Fried Rice', price: '345' },
        ],
      },
      {
        type: 'category',
        title: 'Biryani',
        items: [
          { name: 'Veg Biryani', price: '345' },
          { name: 'Egg Biryani', price: '395' },
          { name: 'Chicken Biryani', price: '445' },
        ],
      },
      {
        type: 'category',
        title: 'Curry',
        items: [
          { name: 'Veg Mix Curry', price: '275' },
          { name: 'Chicken Curry', price: '345' },
        ],
      },
      {
        type: 'category',
        title: 'Sadeko Items',
        items: [
          { name: 'Aloo Sadeko', price: '150' },
          { name: 'Peanuts Sadeko', price: '150' },
          { name: 'Bhatmas Sadeko', price: '150' },
          { name: 'Sweet Corn Sadeko', price: '195' },
          { name: 'Veg Momo Sadeko', price: '185' },
          { name: 'Wai Wai Sadeko <small>(Plain)</small>', price: '145' },
          { name: 'Wai Wai Sadeko <small>(Buff / Chicken)</small>', price: '245' },
          { name: 'Chicken Boiled / Fried Sadeko', price: '345' },
          { name: 'Chicken Momo Sadeko', price: '225' },
          { name: 'Buff Sadeko', price: '295' },
          { name: 'Buff Sadeko Momo', price: '225' },
          { name: 'Sausage Sadeko', price: '195' },
        ],
      },
      {
        type: 'category',
        title: 'Breads',
        items: [
          { name: 'Tawa Roti', price: '30' },
          { name: 'Aloo Paratha', price: '95' },
          { name: 'Paneer Paratha', price: '145' },
          { name: 'Cheese Aloo Paratha', price: '195' },
          { name: 'Egg Paratha', price: '145' },
          { name: 'Chicken Paratha', price: '225' },
        ],
      },
      {
        type: 'category',
        title: 'Egg Items',
        items: [
          { name: 'Plain Omelette <small>(2 pcs)</small>', price: '95' },
          { name: 'Sunny Side Up <small>(2 pcs)</small>', price: '95' },
          { name: 'Masala Omelette <small>(2 pcs)</small>', price: '115' },
        ],
      },
      {
        type: 'category',
        title: 'Burger',
        items: [
          { name: 'Veg Burger', price: '245' },
          { name: 'Chicken Grilled Burger', price: '275' },
          { name: 'Chicken Crunchy Burger', price: '295' },
        ],
      },
      {
        type: 'category',
        title: 'Rolls',
        items: [
          { name: 'Paneer Kathi Roll', price: '250' },
          { name: 'Egg Roll', price: '195' },
          { name: 'Chicken Kathi Roll', price: '275' },
        ],
      },
      {
        type: 'category',
        title: 'Choila Items',
        items: [
          { name: 'Veg Choila Pakauda', price: '245' },
          { name: 'Paneer Choila', price: '295' },
          { name: 'Chicken Choila', price: '295' },
          { name: 'Buff Choila', price: '295' },
        ],
      },
      {
        type: 'category',
        title: 'Grilled Items',
        items: [
          { name: 'Veg Grill', price: '295' },
          { name: 'Whole Grilled Fish', price: '600' },
        ],
      },
      {
        type: 'category',
        title: 'Combo & Khaja',
        items: [
          { name: 'Mo:Mo Platter <small>(Veg)</small>', price: '275' },
          { name: 'Mo:Mo Platter <small>(Chicken / Buff)</small>', price: '325' },
          { name: 'Door&rsquo;s Combo Set <small>(Chicken)</small>', price: '595' },
          { name: 'Veg Khaja Set', price: '350' },
          { name: 'Chicken Khaja Set', price: '450' },
          { name: 'Chicken Tawa Set', price: '345' },
          { name: 'Buff Khaja Set', price: '400' },
        ],
      },
      {
        type: 'table',
        title: 'Mo:Mo',
        wide: true,
        columns: ['Type', 'Steam', 'Jhol', 'Fry', 'Kothey', 'Choila', 'Chilli', 'C', 'Crunchy'],
        rows: [
          { label: 'Veg', values: ['120', '140', '145', '175', '180', '185', '185', '195'] },
          { label: 'Chicken', values: ['160', '175', '185', '195', '195', '225', '225', '245'] },
          { label: 'Buff', values: ['160', '175', '185', '195', '195', '225', '225', '245'] },
        ],
      },
    ],
  },
  {
    key: 'cafe',
    label: 'Caf&eacute; &amp; Mocktails',
    blocks: [
      {
        type: 'category',
        title: 'Refreshing Drinks',
        items: [
          { name: 'Mint Lime Refresher', price: '95' },
          { name: 'Lemon Soda', price: '95' },
          { name: 'Lemon Water', price: '75' },
        ],
      },
      {
        type: 'category',
        title: 'Lemonade',
        items: [
          { name: 'Mint Lemonade', price: '160' },
          { name: 'Plain Lemonade', price: '125' },
          { name: 'Watermelon Lemonade', price: '175' },
        ],
      },
      {
        type: 'category',
        title: 'Mojito',
        items: [
          { name: 'Virgin Mojito', price: '245' },
          { name: 'Watermelon Mojito', price: '275' },
          { name: 'Red Bull Mojito', price: '275' },
        ],
      },
      {
        type: 'category',
        title: 'Angels',
        items: [
          { name: 'Red Angel', price: '245' },
          { name: 'Blue Angel', price: '245' },
        ],
      },
      {
        type: 'category',
        title: 'Mocktails',
        items: [
          { name: 'Sunset', price: '245' },
          { name: 'Sunrise', price: '245' },
          { name: 'Black Ocean Sea', price: '245' },
        ],
      },
      {
        type: 'category',
        title: 'Cold Drinks',
        items: [
          { name: 'Coke <small>/ Masala</small>', price: '80 / 120' },
          { name: 'Sprite <small>/ Masala / Lemon</small>', price: '80 / 120' },
          { name: 'Fanta', price: '80' },
          { name: 'Real Juice', price: '150' },
        ],
      },
      {
        type: 'category',
        title: 'Coffee & Tea',
        items: [
          { name: 'Milk Tea', price: '50' },
          { name: 'Black Tea <small>/ Masala</small>', price: '30 / 35' },
          { name: 'Lemon Tea', price: '35' },
          { name: 'Hot Lemon <small>(Sugar)</small>', price: '65' },
          { name: 'Hot Lemon <small>(Honey-Ginger)</small>', price: '125' },
          { name: 'Peach Tea', price: '85' },
          { name: 'Peach Ice Tea', price: '145' },
          { name: 'Lemon Ice Tea', price: '95' },
          { name: 'Hot Chocolate', price: '225' },
        ],
      },
      {
        type: 'category',
        title: 'Milk Shakes',
        items: [{ name: 'Chocolate Milk Shake', price: '245' }],
      },
      {
        type: 'category',
        title: 'Lassi',
        items: [
          { name: 'Plain Lassi', price: '120' },
          { name: 'Sweet Lassi', price: '140' },
          { name: 'Chocolate Lassi', price: '160' },
        ],
      },
      {
        type: 'category',
        title: 'Hookah',
        items: [{ name: 'Mint Hookah', price: '500' }],
      },
    ],
  },
  {
    key: 'bar',
    label: 'Bar',
    blocks: [
      {
        type: 'category',
        title: 'Shots',
        items: [
          { name: 'J&auml;germeister', price: '450' },
          { name: 'J&auml;gerbomb', price: '600' },
          { name: 'Tequila', price: '575' },
        ],
      },
      {
        type: 'category',
        title: 'Cocktails',
        items: [
          { name: 'Vodka Mojito', price: '595' },
          { name: 'Hot Rum Punch', price: '450' },
          { name: 'Sunset Cocktail', price: '625' },
          { name: 'Sunrise Cocktail', price: '625' },
          { name: 'Black Ocean Sea Cocktail', price: '595' },
        ],
      },
      {
        type: 'category',
        title: 'Wine',
        items: [
          { name: 'Big Master <small>(Red / White)</small>', price: '1,400' },
          { name: 'J.P. Chenet <small>(R / W)</small>', price: '3,100' },
          { name: 'Robertson', price: '2,600' },
        ],
      },
      {
        type: 'category',
        title: 'Beer',
        items: [
          { name: 'Gorkha', price: '475' },
          { name: 'Tuborg', price: '575' },
          { name: 'Barahsinghe Pilsner', price: '575' },
          { name: 'Barahsinghe Hazy', price: '600' },
          { name: 'Barahsinghe Draught <small>(Pilsner) per 🍺</small>', price: '400' },
          { name: 'Carlsberg', price: '675' },
        ],
      },
      {
        type: 'table',
        title: 'Vodka',
        wide: true,
        columns: ['Label', '30 ml', '60 ml', '90 ml', '180 ml', 'Half', 'Full'],
        rows: [
          { label: '8848', values: ['145', '290', '435', '850', '1,700', '3,400'] },
          { label: 'Absolut Vodka', values: ['335', '670', '1,000', '2,000', '4,000', '10,000 (1L)'] },
        ],
      },
      {
        type: 'table',
        title: 'Whiskey',
        wide: true,
        columns: ['Label', '30 ml', '60 ml', '90 ml', '180 ml', 'Half', 'Full'],
        rows: [
          { label: 'Old Durbar', values: ['175', '350', '525', '1,050', '2,100', '4,200'] },
          { label: 'Old Durbar Black', values: ['200', '400', '600', '1,200', '2,400', '4,800'] },
          { label: 'Himalayan Reserve', values: ['200', '400', '600', '1,200', '2,400', '4,800'] },
          { label: 'Jack Daniel&rsquo;s', values: ['400', '800', '1,190', '2,375', '4,750', '9,500'] },
          { label: 'Black Label', values: ['425', '850', '1,250', '2,500', '5,000', '10,000'] },
          { label: 'Double Black Label', values: ['485', '970', '1,450', '2,900', '5,800', '14,500'] },
        ],
      },
    ],
  },
];
