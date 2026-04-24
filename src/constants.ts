/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'fries', name: 'Fries', icon: '🍟' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'combos', name: 'Combos', icon: '📦' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'b1',
    name: 'Big Macca',
    price: 8.99,
    description: 'Double beef, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'burgers',
    isPopular: true,
  },
  {
    id: 'b2',
    name: 'Quarter Pounder',
    price: 7.49,
    description: 'Quarter pound of 100% fresh beef that’s cooked when you order.',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    category: 'burgers',
  },
  {
    id: 'b3',
    name: 'Flaming Hot Chicken',
    price: 6.99,
    description: 'Crispy spicy chicken fillet with lettuce and mayo.',
    imageUrl: 'https://images.unsplash.com/photo-1513185158878-8d8c196b8962?q=80&w=800&auto=format&fit=crop',
    category: 'burgers',
    isLimitedTime: true,
  },
  {
    id: 'f1',
    name: 'World Famous Fries',
    price: 3.49,
    description: 'Golden, crispy, and perfectly salted.',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    category: 'fries',
    isPopular: true,
  },
  {
    id: 'f2',
    name: 'Waffle Fries',
    price: 4.29,
    description: 'Crispy lattice-cut potatoes with seasoned salt.',
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop',
    category: 'fries',
    isLimitedTime: true,
  },
  {
    id: 'd1',
    name: 'Cola Chill',
    price: 2.49,
    description: 'Ice-cold fountain soda to quench your thirst.',
    imageUrl: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop',
    category: 'drinks',
  },
  {
    id: 'd2',
    name: 'Vanilla Shake',
    price: 4.99,
    description: 'Thick and creamy vanilla milkshake.',
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    category: 'drinks',
    isPopular: true,
  },
  {
    id: 'c1',
    name: 'Big Macca Combo',
    price: 12.99,
    description: 'Big Macca, Large Fries, and Medium Drink.',
    imageUrl: 'https://images.unsplash.com/photo-1623231278245-c75122e96414?q=80&w=800&auto=format&fit=crop',
    category: 'combos',
    isPopular: true,
  },
];
