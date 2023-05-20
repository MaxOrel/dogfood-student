import { useSelector } from 'react-redux';
import { CartInfo } from '../../components/cart-info';
import s from './styles.module.css';
import { CartList } from '../../components/cart-list';
import { CartAmount } from '../../components/cart-amount';
import { NotFound } from '../../components/not-found';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../storage/hook';
function CartPage() {
    const productsCart = useAppSelector(state => state.cart.data);
    const navigate = useNavigate();
    return (
        <>
            {productsCart.length === 0
                ? <NotFound buttonText='На главную' title="В корзине нет товаров" buttonAction={() => { navigate('/') }} />
                : (
                    <div className={s.contentCart}>
                        <CartInfo />
                        <CartList productsCart={productsCart} />
                        <CartAmount />
                    </div>
                )
            }
        </>

    );
}

export default CartPage;