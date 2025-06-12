export interface Product {
  id: number;
  name: string;
  description?: string;
  size?: string;
  otherInfo?: {};
  price: number;
  img: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    img: "/icons/product-placeholder.svg",
    name: "Qualità Oro - Caffè d'Altura Grani",
    description: "On fertile mountain terrain up to 2,000m, the finest Arabica varieties grow and combine to create a coffee with character and personality. A dark-colored blend with fruity and floral notes and a long-lasting crema.",
    otherInfo: {
      View: "Golden cream and warm color",
      Nose: "Full-bodied",
      Taste: "Velvety",
      AromaNotes: "Fruit",
      Toastiness: "Medium",
      Composition: "100% Arabica",
      Origin: "Central and South America, Ethiopia"
    },
    size: "1KG",
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