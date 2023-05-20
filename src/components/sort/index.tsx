import cn from 'classnames';
import s from "./styles.module.css";
import { SyntheticEvent, useContext } from 'react';
import { CardsContext } from '../../contexts/card-context';
import { useDispatch, useSelector } from 'react-redux';
import { sortedProducts } from '../../storage/products/products-slice';
import { useAppSelector } from '../../storage/hook';
import { Tab } from '../../utils/constants';
interface ISortProps {
  tabs: Tab[];
}
export function Sort({ tabs = [] }: ISortProps) {
  const dispatch = useDispatch();
  const currentSort = useAppSelector(state => state.products.currentSort)
  function handleClickTab(e: SyntheticEvent<HTMLAnchorElement>, tab: Tab) {
    e.preventDefault();
    dispatch(sortedProducts(tab.id))
  }


  return (
    <div className={s.sort}>
      {tabs.map(tab => (
        <a key={tab.id}
          className={cn(s.sort__link, { [s.sort__link_selected]: currentSort === tab.id })}
          href="#"
          onClick={(e) => handleClickTab(e, tab)}>
          {tab.title}
        </a>

      ))}
    </div>
  );
}