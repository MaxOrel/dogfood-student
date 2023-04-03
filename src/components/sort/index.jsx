import cn from 'classnames';
import s from "./styles.module.css";
import { useContext } from 'react';
import { CardsContext } from '../../contexts/card-context';

export function Sort({ tabs = [] }) {
  const { currentSort, setCurrentSort, onSortData } = useContext(CardsContext)
  function handleClickTab(e, tab) {
    e.preventDefault();
    setCurrentSort(tab.id)
    onSortData(tab.id)
  }


  return (
    <div className={s.sort}>
      {tabs.map(tab => (
        <a
          className={cn(s.sort__link, { [s.sort__link_selected]: currentSort === tab.id })}
          href="#"
          onClick={(e) => handleClickTab(e, tab)}>
          {tab.title}
        </a>

      ))}
    </div>
  );
}