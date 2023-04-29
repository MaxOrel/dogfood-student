import cn from 'classnames';
import { cartInfoSelector } from '../../storage/cart/cart-slice';
import s from "./styles.module.css";
import { useSelector } from 'react-redux';

export function CartAmount() {
  const state = useSelector(state => state);
  const { amount, amountWithDiscount, totalDiscount, totalCount } = cartInfoSelector(state);
  console.log(amount, amountWithDiscount, totalDiscount, totalCount);
  return (
    <div className={s.cartAmount}>
      <h1 className={s.title}>Ваша корзина</h1>
      <div className={s.table}>
        <div className={s.tableRow}>
          <span className={s.tableTitle}>Товары ({totalCount})</span>
          <span className={s.tableValue}>{amount} ₽</span>
        </div>
        {totalDiscount !== 0 && (<div className={s.tableRow}>
          <span className={s.tableTitle}>Скидка</span>
          <span className={cn(s.tableValue, s.tableValueDiscount)}>- {totalDiscount} ₽</span>
        </div>)}
      </div>
      <div className={s.totalCost}>
        <h2 className={s.totalCostTitle}>Общая стоимость</h2>
        <span className={s.totalCostValue}>{amountWithDiscount} ₽</span>
      </div>
      <div className="btn btn_type_primary btn_type_wide">Оформить заказ</div>
    </div>
  );
}