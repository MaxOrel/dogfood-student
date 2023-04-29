import cn from 'classnames';

import { calcDiscountPrice, isLiked } from '../../utils/products';
import { Button } from '../button';
import s from './styles.module.css';
import { ReactComponent as LikeIcon } from "../../images/save.svg";
import truck from "../../images/truck.svg";
import quality from "../../images/quality.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ContentHeader } from '../content-header';
import Rating from '../rating';
import FormReview from '../form-review';
import { useDispatch, useSelector } from 'react-redux';
import { Review } from '../review';
import { addProductCart } from '../../storage/cart/cart-slice';
import { ProductPrice } from '../product-price';


function Product({ onProductLike }) {
    const { _id, name, pictures, description, wight, discount, price, likes = [], reviews } = useSelector(state => state.singleProduct.data);
    const addDataProduct = { _id, name, pictures, discount, price, wight }

    const currentUser = useSelector(state => state.user.data)
    const [currentRating, setCurrentRating] = useState(5);

    const dispatch = useDispatch();

    const discount_price = calcDiscountPrice(price, discount);
    const like = isLiked(likes, currentUser?._id);
    function handleLikeClick() {
        onProductLike({ likes, _id })
    }

    function handleCartClick(e) {
        dispatch(addProductCart(addDataProduct))
    }

    function createMarkupDescription() {
        return { __html: description };
    }

    return (
        <>
            <ContentHeader textButton="Назад" title={name}>
                <p className={s.acticul}>Артикул: <b>2388907</b></p>
                <Rating currentRating={currentRating} />
            </ContentHeader>
            <div className={s.product}>
                <div className={s.imgWrapper}>
                    <img src={pictures} alt={`Изображение ${name}`} />
                </div>
                <div className={s.desc}>
                    <ProductPrice discount={discount} price={price} type="big" />
                    <div className={s.btnWrap}>
                        <div className={s.left}>
                            <button className={s.minus}>-</button>
                            <span className={s.num}>0</span>
                            <button className={s.plus}>+</button>
                        </div>
                        <Button href="#" type="primary" action={handleCartClick} >В корзину</Button>
                    </div>
                    <button className={cn(s.favorite, { [s.favoriteActive]: like })} onClick={handleLikeClick}>
                        <LikeIcon />
                        {like ? 'В избранном' : 'В избранное'}
                    </button>
                    <div className={s.delivery}>
                        <img src={truck} alt="truck" />
                        <div className={s.right}>
                            <h3 className={s.name}>Доставка по всему Миру!</h3>
                            <p className={s.text}>
                                Доставка курьером —{" "}
                                <span className={s.bold}> от 399 ₽</span>
                            </p>
                            <p className={s.text}>
                                Доставка в пункт выдачи —{" "}
                                <span className={s.bold}> от 199 ₽</span>
                            </p>
                        </div>
                    </div>
                    <div className={s.delivery}>
                        <img src={quality} alt="quality" />
                        <div className={s.right}>
                            <h3 className={s.name}>Гарантия качества</h3>
                            <p className={s.text}>
                                Если Вам не понравилось качество нашей продукции, мы вернем
                                деньги, либо сделаем все возможное, чтобы удовлетворить ваши
                                нужды.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={s.box}>
                <h2 className={s.title}>Описание</h2>
                <p className={s.subtitle} dangerouslySetInnerHTML={createMarkupDescription()}></p>
                <h2 className={s.title}>Характеристики</h2>
                <div className={s.grid}>
                    <div className={s.naming}>Вес</div>
                    <div className={s.description}>1 шт 120-200 грамм</div>
                    <div className={s.naming}>Цена</div>
                    <div className={s.description}>490 ₽ за 100 грамм</div>
                    <div className={s.naming}>Польза</div>
                    <div className={s.description}>
                        <p>
                            Большое содержание аминокислот и микроэлементов оказывает
                            положительное воздействие на общий обмен веществ собаки.
                        </p>
                        <p>Способствуют укреплению десен и жевательных мышц.</p>
                        <p>
                            Развивают зубочелюстной аппарат, отвлекают собаку во время смены
                            зубов.
                        </p>
                        <p>
                            Имеет цельную волокнистую структуру, при разжевывание получается
                            эффект зубной щетки, лучше всего очищает клыки собак.
                        </p>
                        <p>Следует учесть высокую калорийность продукта.</p>
                    </div>
                </div>
            </div>

            {reviews.length !== 0 && <div className={s.reviews}> {reviews.map(reviewData => <Review {...reviewData} />)}</div>}
            <FormReview title={`Отзыв о товаре ${name}`} productId={_id} />
        </>
    );
}

export default Product;