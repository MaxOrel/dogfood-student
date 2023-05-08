import { TProductInCart } from '../../types';
import { CartItem } from '../cart-item';
import s from "./styles.module.css";
interface ICartListProps {
  productsCart: (TProductInCart & { isGift: boolean; })[];
}
export function CartList({ productsCart }: ICartListProps) {
  return (
    <div className={s.cartList}>
      {productsCart.map((dataItem, index) => (
        <CartItem key={index} {...dataItem} />
      ))}
    </div>
  );
}
