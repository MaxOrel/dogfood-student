import "./styles.css";

import { ReactComponent as CloseIcon } from './assets/ic-close-input.svg';
import { ReactComponent as SeachIcon } from './assets/ic-search.svg';


export function Search() {
  return (
    <form className="search">
      <input type="text" className="search__input" placeholder="Поиск" />
      <button className="search__btn">
        <SeachIcon />
        <CloseIcon />
      </button>
    </form>
  );
}