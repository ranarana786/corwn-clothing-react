import "./cart-dropdown.style.scss";
import Button from "../button/button.component";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>CheckOut</Button>
    </div>
  );
};
