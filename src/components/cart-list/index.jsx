import { CartItem } from '../cart-item';
import s from "./styles.module.css";

export function CartList({ productsCart }) {
  return (
    <div className={s.cartList}>
      {productsCart.map((dataItem, index) => (
        <CartItem key={index} {...dataItem} />
      ))}
    </div>
  );
}
