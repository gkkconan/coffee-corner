export interface CartItem {
  id: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  {
    id: 1,
    quantity: 1
  },
  {
    id: 3,
    quantity: 1
  },
  {
    id: 5,
    quantity: 1
  },
  {
    id: 7,
    quantity: 2
  }
];

export default cartItems;