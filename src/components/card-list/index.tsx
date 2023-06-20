import { useContext } from "react";
import { CardsContext } from "../../contexts/card-context";
import { Card } from "../card";
import "./styles.css";
import { TProductResponseDto } from "../../utils/api";
import { useAppDispath, useAppSelector } from "../../storage/hook";
import { getProducts } from "../../storage/products/selectors";
import { Paginate } from "../paginate";
import {
  onClickCurrentPage,
  onPaginateNext,
  onPaginatePrev,
} from "../../storage/products/products-slice";
interface TCardListProps {
  goods: TProductResponseDto[];
  isPaginate?: boolean;
}
export function CardList({ goods, isPaginate = false }: TCardListProps) {
  const dispatch = useAppDispath();
  const products = useAppSelector(getProducts);
  const totalProducts = useAppSelector((state) => state.products.total);
  const currentPage = useAppSelector((state) => state.products.currentPage);
  const productPerPage = useAppSelector(
    (state) => state.products.productPerPage
  );

  const totalPages = Math.ceil(totalProducts / productPerPage);
  // const pages = [...Array(totalPages + 1).keys()].slice(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;

  const productsView = products.slice(indexFirstProduct, indexLastProduct);

  function onClickNext() {
    if (currentPage !== totalPages) dispatch(onPaginateNext());
  }

  function onClickPrev() {
    if (currentPage !== 1) dispatch(onPaginatePrev());
  }
  function onClickPage(page: number) {
    dispatch(onClickCurrentPage(page));
  }
  return (
    <>
      <div className="cards content__cards">
        {isPaginate
          ? productsView.map((dataItem, index) => (
              <Card
                key={index}
                {...dataItem}
              />
            ))
          : goods.map((dataItem, index) => (
              <Card
                key={index}
                {...dataItem}
              />
            ))}
      </div>
      {isPaginate && (
        <Paginate
          pages={pages}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          onClickPage={onClickPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
