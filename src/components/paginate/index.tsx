import { ReactComponent as NotFoundIcon } from './img/ic-notfound.svg';
import cn from 'classnames';
import { Button, ButtonVariant } from '../button'
import s from "./styles.module.css";
import { ReactNode } from 'react';
import classNames from 'classnames';

interface IPaginateProps {
  onClickNext: () => void,
  onClickPrev: () => void,
  onClickPage: (numberPage: number) => void
  pages: number[],
  currentPage: number
}
export function Paginate({ onClickNext, onClickPrev, pages, currentPage, onClickPage }: IPaginateProps) {

  function handleClickPage(e: React.MouseEvent<HTMLAnchorElement>, page: number) {
    e.preventDefault()
    onClickPage(page);
  }
  return (
    <div className={s.paginate}>
      <Button variant={ButtonVariant.border} action={onClickPrev} disabled={currentPage === 1}>Назад</Button>
      <ul className={s.list}>
        {pages.map(page => (
          <li className={cn(s.item, { [s.active]: currentPage === page })}>
            <a className={s.link} href={`/catalog?page=${page}`} onClick={(e) => handleClickPage(e, page)}>{page}</a>
          </li>
        ))}
      </ul>
      <Button variant={ButtonVariant.border} action={onClickNext} disabled={currentPage === pages.length}>Вперед</Button>
    </div>

  );
}