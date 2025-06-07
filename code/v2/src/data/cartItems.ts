import type { Product } from "./products";

export interface CartItem extends Product {
  quantity: number;
};

const cartItems: CartItem[] = [
  {
    id: 0,
    name: "Qualità Oro - Caffè d'Altura Grani",
    img: "/icons/product-placeholder.svg",
    price: 11.69,
    quantity: 1
  },
  {
    id: 1,
    name: "¡Tierra! For Amazonia Grani",
    img: "/icons/product-placeholder.svg",
    price: 11.69,
    quantity: 1
  },
  {
    id: 2,
    name: "Espresso Barista Intenso Grani",
    img: "/icons/product-placeholder.svg",
    price: 19.99,
    quantity: 5
  },
  {
    id: 3,
    name: "¡Tierra! Wellness Caffè Decerato Grani",
    img: "/icons/product-placeholder.svg",
    price: 23.09,
    quantity: 3
  },
  {
    id: 4,
    name: "Qualità Oro Gran Riserva Grani",
    img: "/icons/product-placeholder.svg",
    price: 23.99,
    quantity: 1
  },
  {
    id: 5,
    name: "Espresso Barista Organic Grani",
    img: "/icons/product-placeholder.svg",
    price: 22.99,
    quantity: 1
  },
  {
    id: 6,
    name: "Crema Gusto Espresso Classico Grani",
    img: "/icons/product-placeholder.svg",
    price: 8.49,
    quantity: 2
  },
  {
    id: 7,
    name: "¡Tierra! For Planet Grani",
    img: "/icons/product-placeholder.svg",
    price: 11.69,
    quantity: 1
  }
];

export default cartItems;