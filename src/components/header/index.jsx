import { Logo } from '../logo';
import { Search } from '../search';

import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <Logo />
        <Search />
      </div>
    </header>
  );
}