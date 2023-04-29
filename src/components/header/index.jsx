import cn from 'classnames';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { UserContext } from '../../contexts/current-user-context';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsContext } from '../../contexts/card-context';
import { ReactComponent as FavoriteIcon } from './img/favorites.svg'
import { ReactComponent as LogoutIcon } from './img/logout.svg';
import { ReactComponent as CartIcon } from './img/cart.svg';
import { ReactComponent as ProfileIcon } from './img/profile.svg';
import { ReactComponent as UserIcon } from './img/user.svg';

import s from "./styles.module.css";
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../storage/user/user-slice';

export function Header({ children }) {
  const currentUser = useSelector(state => state.user.data);
  const favorites = useSelector(state => state.products.favoriteProducts)
  const { totalCountProducts } = useSelector(state => state.cart);
  console.log(totalCountProducts);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClickButtonEdit = () => {
    // onUpdateUser({ name: 'Вася', about: 'Ментор' })
  }

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <div className={s.iconsMenu}>
          <Link className={s.favoritesLink} to={{ pathname: '/favorites' }}>
            <FavoriteIcon />
            {favorites.length !== 0 && <span className={s.iconBubble}>{favorites.length}</span>}
          </Link>

          <Link className={s.favoritesLink} to={{ pathname: '/cart' }}>
            <CartIcon />
            {totalCountProducts !== 0 && <span className={s.iconBubble}>{totalCountProducts}</span>}
          </Link>

          {!currentUser && <Link to='/login' className={s.iconsMenuItem} replace state={{ backgroundLocation: location, initialPath: location.pathname }}>
            <UserIcon />
            Войти
          </Link>}


          {currentUser && <>
            <Link to='/profile' className={s.iconsMenuItem}>
              <ProfileIcon />
              {currentUser?.name}
            </Link>

            <Link to='/' className={s.iconsMenuItem} onClick={() => dispatch(logout())}>
              <LogoutIcon />
              Выйти
            </Link>
          </>}

        </div>
      </div>
    </header>
  );
}
