import { useSelector } from 'react-redux';
import { CartInfo } from '../../components/cart-info';
import s from './styles.module.css';
import { CartList } from '../../components/cart-list';
import { CartAmount } from '../../components/cart-amount';
import { NotFound } from '../../components/not-found';
import { useNavigate } from 'react-router-dom';
function CartPage() {
    const productsCart = useSelector(state => state.cart.data);
    const navigate = useNavigate();
    return (
        <>
            {productsCart.length === 0
                ? <NotFound buttonText='На главную' title="В корзине нет товаров" buttonAction={() => { navigate('/') }} />
                : (
                    <div className={s.contentCart}>
                        <CartInfo className={s.cartInfo} />
                        <CartList productsCart={productsCart} className={s.productCart} />
                        <CartAmount className={s.cartAmount} />
                    </div>
                )
            }
        </>

    );
}

export default CartPage;