import { useAppSelector } from '../../storage/hook';
import s from "./styles.module.css";
import { useSelector } from 'react-redux';

export function CartInfo() {
  const { totalCountProducts } = useAppSelector(state => state.cart);

  return (
    <div className={s.cartTitle}>
      <span>{totalCountProducts} товаров</span> в корзине
    </div>
  );
}