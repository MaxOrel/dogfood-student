import { useContext } from 'react';
import { CardsContext } from '../../contexts/card-context';
import { Card } from "../card";
import "./styles.css";

export function CardList() {
  const { cards: goods } = useContext(CardsContext)
  return (
    <div className="cards content__cards">
      {goods.map((dataItem, index) => (
        <Card key={index} {...dataItem} />
      ))}
    </div>
  );
}
