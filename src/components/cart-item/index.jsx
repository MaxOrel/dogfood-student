import s from "./styles.module.css";
import { ReactComponent as TrashIcon } from "./img/trash.svg";
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import ButtonCount from '../button-count/button-count';
import GiftLabel from '../gift-label/gift-label';
import { ProductPrice } from '../product-price';
import { changeCartQuantity, decrementQuantity, incrementQuantity, removeProductCart } from '../../storage/cart/cart-slice';

export function CartItem({
  name,
  price,
  discount,
  wight,
  pictures,
  _id,
  quantity,
  isGift
}) {
  const addDataProduct = { _id, name, pictures, discount, price, wight, quantity }

  const dispatch = useDispatch();
  return (
    <>
      <div className={s.cartItem}>
        <div className={s.cartDesc}>
          <img src={pictures} alt={name} className={s.cartImage} />
          <Link to={`/product/${_id}`}><h2 className={s.cartTitle}>{name}</h2></Link>
          <p className={s.cartWeight}>{wight}</p>
        </div>
        {!isGift && <ButtonCount
          amount={quantity}
          handleIncrement={() => { dispatch(incrementQuantity(addDataProduct)) }}
          handleDecrement={() => { dispatch(decrementQuantity(addDataProduct)) }}
          handleCountChange={(newQuantity) => { dispatch(changeCartQuantity({ ...addDataProduct, quantity: newQuantity })) }}
        />}
        {!isGift && <div className={s.cartPrice}> <ProductPrice price={price} discount={discount} type="big" align='right' /></div>}
        {!isGift && <button className={s.bntTrash} onClick={() => { dispatch(removeProductCart(addDataProduct)) }}><TrashIcon /></button>}
        {isGift && <GiftLabel title="Подарок" text="за первый заказ!" />}
      </div>
    </>
  );
}
