import { CartItem, Product } from '@/src/types';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

type CartType = {
  items: CartItem[],
  addItem: (product: Product, size: CartItem['size']) => void;
}

const CartContext = createContext({});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // const addItem = ()

  return (
    <CartContext.Provider value={{ items, onAddItem: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
