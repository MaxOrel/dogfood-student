import cn from 'classnames';

import "./styles.css";
import { ReactComponent as LikeIcon } from "../../images/save.svg";
import { calcDiscountPrice, isLiked } from '../../utils/products';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardsContext } from '../../contexts/card-context';
import ContentLoader from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangeLikeProduct } from '../../storage/products/products-slice';

export function Card({
  name,
  price,
  discount,
  wight,
  description,
  pictures,
  tags,
  likes,
  _id,
  ...props
}) {
  const dispatch = useDispatch();
  const discount_price = calcDiscountPrice(price, discount)
  const currentUser = useSelector(state => state.user.data);

  const isLoading = useSelector(state => state.products.loading)
  const like = isLiked(likes, currentUser?._id)


  function handleClickButtonLike() {
    return dispatch(fetchChangeLikeProduct({ likes, _id }))

  }

  return (

    <>
      {isLoading
        ? <ContentLoader
          speed={2}
          width={186}
          height={385}
          viewBox="0 0 186 385"
          backgroundColor="#d4cece"
          foregroundColor="#dbdbdb"
        >
          <path d="M 0 0 h 185.6 v 187 H 0 z M 0 203 h 186 v 14 H 0 z M 0 233 h 186 v 56 H 0 z M 0 305 h 186 v 24 H 0 z" />
          <rect x="0" y="345" rx="20" ry="20" width="121" height="40" />
        </ContentLoader>
        : <article className="card">
          <div className="card__sticky card__sticky_type_top-left">
            {discount !== 0 && (
              <span className="card__discount">{`-${discount}%`}</span>
            )}
            {tags && tags.map(tagName => (
              <span key={tagName} className={cn('tag', { [`tag_type_${tagName}`]: true })}>
                {tagName}
              </span>
            )
            )}
          </div>
          <div className="card__sticky card__sticky_type_top-right">
            <button className={cn('card__favorite', { 'card__favorite_is-active': like })} onClick={handleClickButtonLike}>
              <LikeIcon className="card__favorite-icon" />
              {/* <img src={likeIcon} alt="" className="card__favorite-icon" /> */}
            </button>
          </div>

          <Link to={`/product/${_id}`} className="card__link">
            <img src={pictures} alt={name} className="card__image" loading="lazy" />
            <div className="card__desc">
              {discount !== 0 ? (
                <>
                  <span className="card__old-price">{price}&nbsp;₽</span>
                  <span className="card__price card__price_type_discount">
                    {discount_price}&nbsp;₽
                  </span>
                </>
              ) : (
                <span className="card__price">{price}&nbsp;₽</span>
              )}
              <span className="card__wight">{wight}</span>
              <h3 className="card__name">{name}</h3>
            </div>
          </Link>
          <a href="#" className="card__cart btn btn_type_primary">
            В корзину
          </a>
        </article>
      }
    </>
  );
}
