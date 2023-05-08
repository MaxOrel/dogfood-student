import { useContext } from 'react';
import { CardsContext } from '../../contexts/card-context';
import { Card } from "../card";
import "./styles.css";
import { TProductResponseDto } from '../../utils/api';
interface TCardListProps {
  goods: TProductResponseDto[]
}
export function CardList({ goods }: TCardListProps) {
  return (
    <div className="cards content__cards">
      {goods.map((dataItem, index) => (
        <Card key={index} {...dataItem} />
      ))}
    </div>
  );
}
