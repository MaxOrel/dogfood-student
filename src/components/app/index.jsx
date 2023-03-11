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
// import styled from 'styled-components';

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

  // const Title = styled.h1`
  //   font-size: 1.5em;
  //   text-align: center;
  //   color: palevioletred;
  // `;

  // const Button = styled.button`
  //   background: ${props => props.primary ? "palevioletred" : "white"};
  //   color: ${props => props.primary ? "white" : "palevioletred"};

  //   font-size: 1em;
  //   margin: 1em;
  //   padding: 0.25em 1em;
  //   border: 2px solid palevioletred;
  //   border-radius: 3px;
  // `;


  // const TomatoButton = styled(Button)`
  //   color: tomato;
  //   border-color: tomato;
  // `;

  // const StyledLink = styled(Logo)`
  //   color: palevioletred;
  //   font-weight: bold;
  // `;

  // const LayoutStyled = styled.div`
  //   .container  {
  //     background: red;

  //     &:hover {
  //       background: green;
  //     }
  //   }

  // `

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
        {/* <Title>Стилизованный заголовок</Title>
        <Button>Купить</Button>
        <Button primary>Отложить</Button>
        <TomatoButton as="a" href="#">Удалить</TomatoButton>
        <StyledLink>Ссылка</StyledLink> */}
        {/* <h1 style={headerStyle}>Стилизованный заголовок</h1>
        <Button htmlType='button' type="primary" extraClass={s.button}>Купить</Button>
        <Button htmlType='button' type="secondary">Отложить</Button>
        <Button htmlType='button' type="error" extraClass={s.button}>Купить</Button> */}
        <Sort />
        <CardList goods={cards} />
      </main>
      <Footer />
    </>
  );
}
