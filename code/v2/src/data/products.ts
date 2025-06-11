export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    img: "/icons/product-placeholder.svg",
    name: "Qualità Oro - Caffè d'Altura Grani",
    price: 11.69,
    rating: 4.5
  },
  {
    id: 2,
    img: "/icons/product-placeholder.svg",
    name: "¡Tierra! For Amazonia Grani",
    price: 11.69,
    rating: 4.5
  },
  {
    id: 3,
    img: "/icons/product-placeholder.svg",
    name: "Espresso Barista Intenso Grani",
    price: 19.99,
    rating: 4.5
  },
  {
    id: 4,
    img: "/icons/product-placeholder.svg",
    name: "¡Tierra! Wellness Caffè Decerato Grani",
    price: 23.09,
    rating: 4.5
  },
  {
    id: 5,
    img: "/icons/product-placeholder.svg",
    name: "Qualità Oro Gran Riserva Grani",
    price: 23.99,
    rating: 5.0
  },
  {
    id: 6,
    img: "/icons/product-placeholder.svg",
    name: "Espresso Barista Organic Grani",
    price: 22.99,
    rating: 4.0
  },
  {
    id: 7,
    img: "/icons/product-placeholder.svg",
    name: "Crema Gusto Espresso Classico Grani",
    price: 8.49,
    rating: 4.5
  },
  {
    id: 8,
    img: "/icons/product-placeholder.svg",
    name: "¡Tierra! For Planet Grani",
    price: 11.69,
    rating: 5.0
  }
];

export default products;