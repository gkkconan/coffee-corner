import type { Product } from "./products";

export interface cartItem extends Product {
  quantity: number;
};

const cartItems: cartItem[] = [
  {
      img: "/icons/product-placeholder.svg",
      name: "Qualità Oro - Caffè d'Altura Grani",
      price: 11.69,
      quantity: 1
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "¡Tierra! For Amazonia Grani",
      price: 11.69,
      quantity: 1
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "Espresso Barista Intenso Grani",
      price: 19.99,
      quantity: 5
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "¡Tierra! Wellness Caffè Decerato Grani",
      price: 23.09,
      quantity: 3
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "Qualità Oro Gran Riserva Grani",
      price: 23.99,
      quantity: 1
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "Espresso Barista Organic Grani",
      price: 22.99,
      quantity: 1
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "Crema Gusto Espresso Classico Grani",
      price: 8.49,
      quantity: 2
  },
  {
      img: "/icons/product-placeholder.svg",
      name: "¡Tierra! For Planet Grani",
      price: 11.69,
      quantity: 1
  }
];

export default cartItems;