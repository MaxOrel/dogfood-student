import { CardList } from "../card-list";
import { Footer } from "../footer";
import { Header } from "../header";
import { Sort } from "../sort";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <main className="content container">
        <Sort />
        <CardList />
      </main>
      <Footer />
    </>
  );
}