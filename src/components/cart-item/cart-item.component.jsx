import "./cart-item.style.scss";
export const CartItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};
