import { ReactComponent as ShopingBag } from "../../assets/shopping-bag.svg";

import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export const CartIcon = () => {
  const { iscartopen, setIsCartOpen, cartCount } = useContext(CartContext);
  console.log(iscartopen);

  const toogleIsCartOpen = () => setIsCartOpen(!iscartopen);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        console.log("clicked", iscartopen);
        toogleIsCartOpen();
      }}
    >
      <ShopingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
