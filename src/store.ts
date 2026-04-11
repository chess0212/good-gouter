import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  flavor: string;
  weight: string;
  price: number;
  image: string;
  ingredients: string[];
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'chocolat-180',
    name: 'Good Goûter Chocolat',
    flavor: 'Chocolat',
    weight: '180 g',
    price: 1500, // Estimated price in CFA
    image: '/img/good.jpeg',
    ingredients: ['Blé transformé', 'Arôme naturel', 'Cacao'],
    description: 'Des céréales gourmandes parfaites pour se faire plaisir à tout moment.'
  },
  {
    id: 'chocolat-180',
    name: 'Good Goûter Chocolat',
    flavor: 'Chocolat',
    weight: '180 g',
    price: 1500, // Estimated price in CFA
    image: '/img/good1.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
   {
    id: 'chocolat-180',
    name: 'Good Goûter Chocolat',
    flavor: 'Chocolat',
    weight: '180 g',
    price: 1500, // Estimated price in CFA
    image: '/img/good2.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
   {
    id: 'chocolat-180',
    name: 'Good Goûter Chocolat',
    flavor: 'Chocolat',
    weight: '180 g',
    price: 1500, // Estimated price in CFA
    image: '/img/good3.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
   {
    id: 'cacahuete-200',
    name: 'Good Goûter Cacahuète',
    flavor: 'Cacahuète',
    weight: '200 g',
    price: 2000, // Estimated price in CFA
    image: '/img/good5.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
  {
    id: 'cacahuete-200',
    name: 'Good Goûter Cacahuète',
    flavor: 'Cacahuète',
    weight: '200 g',
    price: 2000, // Estimated price in CFA
    image: '/img/good4.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
   {
    id: 'cacahuete-200',
    name: 'Good Goûter Cacahuète',
    flavor: 'Cacahuète',
    weight: '200 g',
    price: 2000, // Estimated price in CFA
    image: '/img/good6.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
   {
    id: 'cacahuete-200',
    name: 'Good Goûter Cacahuète',
    flavor: 'Cacahuète',
    weight: '200 g',
    price: 2000, // Estimated price in CFA
    image: '/img/good7.jpeg',
    ingredients: ['Blé', 'Cacahuète', 'Arôme naturel'],
    description: 'Idéal au petit-déjeuner, au goûter ou en encas. À consommer tel quel ou accompagné de lait.'
  },
  
];

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existing = state.items.find(item => item.id === product.id);
    if (existing) {
      return {
        items: state.items.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    return { items: [...state.items, { ...product, quantity: 1 }] };
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0)
  })),
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
}));
