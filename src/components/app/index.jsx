import { useState, useEffect } from "react";
import { CardList } from "../card-list";
import { Footer } from "../footer";
import { Header } from "../header";
import { Sort } from "../sort";
import { Logo } from "../logo";
import { Search } from "../search";
import { dataCard } from "../../data";
import s from "./styles.module.css";
import { Button } from '../button';

export function App() {
  const [cards, setCards] = useState(dataCard);
  const [searchQuery, setSearchQuery] = useState("");

  function handleRequest() {
    const filterCards = dataCard.filter((item) =>
      item.name.includes(searchQuery)
    );
    setCards(filterCards);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  function handleInputChange(dataInput) {
    setSearchQuery(dataInput);
  }

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);
  const margin = 40;
  const headerStyle = {
    color: "red",
    margin: `${margin}px`,
  }

  return (
    <>
      <Header>
        <Logo />
        <Search
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      </Header>
      <main className="content container">
        {/* <h1 style={headerStyle}>Стилизованный заголовок</h1>
        <Button htmlType='button' type="primary" extraClass={s.button}>Купить</Button>
        <Button htmlType='button' type="secondary">Отложить</Button>
        <Button htmlType='button' type="error" extraClass={s.button}>Купить</Button> */}

        <Button htmlType='button'>Купить</Button>
        <Sort />
        <CardList goods={cards} />
      </main>
      <Footer />
    </>
  );
}
