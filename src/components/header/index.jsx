import cn from 'classnames';
import { Button } from '../button';

import s from "./styles.module.css";

export function Header({ children, user, onUpdateUser }) {

  const handleClickButtonEdit = () => {
    onUpdateUser({ name: 'Вася', about: 'Ментор' })
  }

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <span>{user?.name}: {user?.about}</span>
        <span>{user?.email}</span>
        <Button action={handleClickButtonEdit}>
          Изменить
        </Button>
      </div>

    </header>
  );
}
