import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cartSlice";

const CartItem = (props) => {
  const { id, title, quantity, price, totalPrice } = props.item;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartAction.increment());
    dispatch(cartAction.addToCart({ id, title, quantity, price, totalPrice }));
  };

  const removeFromCartHandler = () => {
    dispatch(
      cartAction.removeFromCart({ id, title, quantity, price, totalPrice })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
