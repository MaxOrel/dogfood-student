import cn from 'classnames';
import s from "./styles.module.css";
import { calcDiscountPrice } from '../../utils/products';
export function ProductPrice({ discount, price, type, align = "left" }) {
  const discount_price = calcDiscountPrice(price, discount);

  return (
    <div className={cn({ [s[`${type}Price`]]: type }, s.priceWrap)}>
      <span className={cn({ [s.oldPrice]: discount, [s.price]: !discount, [s[align]]: align })}>{price}&nbsp;₽</span>
      {discount !== 0 && <span className={cn(s.price, s.priceDiscount)}>{discount_price}&nbsp;₽</span>}
    </div>
  );
}