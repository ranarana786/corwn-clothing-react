import { createContext, useState } from "react";

export const CartContext = createContext({
  iscartopen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [iscartopen, setIsCartOpen] = useState(false);
  const value = { iscartopen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
