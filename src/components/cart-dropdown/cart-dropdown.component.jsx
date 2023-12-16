import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
export const CartDropdown = () => {
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>CheckOut</Button>
    </div>
  );
};
