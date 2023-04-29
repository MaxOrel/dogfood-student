import s from './index.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { useEffect } from 'react';

function ButtonCount({ amount = 0, handleIncrement, handleDecrement, handleCountChange }) {
  const [value, setValue] = useState(0);
  const MIN_COUNT_IN_CART = 1;

  function handleBlurInput(e) {
    const countInCart = Number(e.target.value);
    if (countInCart > 0) {
      handleCountChange(countInCart)
    } else {
      handleCountChange(MIN_COUNT_IN_CART);
    }
  }

  function handleChangeInput(e) {
    const countInCart = Number(e.target.value);
    if (countInCart > 0) {
      setValue(countInCart)
    } else {
      setValue(MIN_COUNT_IN_CART);
    }
  }

  useEffect(() => {
    setValue(amount)
  }, [amount])

  return (
    <div className={s.wrap}>
      <button
        className={s.minus}
        disabled={value <= 1}
        onClick={() => {
          handleDecrement && handleDecrement();
          setValue(prevState => prevState - 1)
        }}>-</button>
      <input type="number" className={s.num} value={value} onChange={handleChangeInput} onBlur={handleBlurInput} />
      <button
        className={s.plus}
        onClick={() => {
          handleIncrement && handleIncrement();
          setValue(prevState => prevState + 1)
        }}>+</button>
    </div>
  )
}

export default ButtonCount;
