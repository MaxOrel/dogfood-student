import "./styles.css";

import { ReactComponent as CloseIcon } from "./assets/ic-close-input.svg";
import { ReactComponent as SeachIcon } from "./assets/ic-search.svg";
import { ChangeEvent, FormEvent } from 'react';
interface ISearchProps {
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void,
  handleInputChange: (value: string) => void
}
export function Search({ handleFormSubmit, handleInputChange }: ISearchProps) {
  return (
    <form className="search" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="search__input"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        placeholder="Поиск"
      />
      <button className="search__btn">
        <SeachIcon />
        <CloseIcon />
      </button>
    </form>
  );
}
