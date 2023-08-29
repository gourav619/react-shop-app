import classes from "./CartButton.module.css";
import { cartAction } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const show = useSelector((state) => state.cart.showCart);
  const numberOfItems = useSelector((state) => state.cart.numberOfItem);

  const dispatch = useDispatch();

  const showHideCartHandler = () => {
    if (show) dispatch(cartAction.show());
    dispatch(cartAction.hide());
  };

  return (
    <button className={classes.button} onClick={showHideCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
