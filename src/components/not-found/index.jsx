import { ReactComponent as NotFoundIcon } from './img/ic-notfound.svg';

import { Button, ButtonVariant } from '../button'
import s from "./styles.module.css";
export function NotFound({ children, title, buttonText = "На главную", buttonAction }) {
  return (
    <div className={s.notfound}>
      <NotFoundIcon className={s.image} aria-hidden="true" />
      <h1 className={s.title}>{title}</h1>
      {children && children}
      {buttonAction
        ? <Button variant={ButtonVariant.border} href="#" action={buttonAction}>{buttonText}</Button>
        : <Button variant={ButtonVariant.border} href="/">{buttonText}</Button>
      }
    </div>
  );
}