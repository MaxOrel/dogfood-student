import React, { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import cn from 'classnames';
import "./styles.css";
import s from "./styles.module.css";
import { ReactComponent as ArrowIcon } from './img/arrow.svg';

register();

function Carousel({ items, component: Component, perView, virtual = false, title }) {
  const [data, setData] = useState([])
  const swiperElRef = useRef(null);
  console.log();
  useEffect(() => {
    const mainOptionSlider = {
      slidesPerView: perView,
      spaceBetween: 30,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev'
      },
    }
    if (virtual) {
      Object.assign(swiperElRef.current, {
        ...mainOptionSlider,
        virtual: {
          slides: [...items],
          renderExternal: function (dataVirtual) {
            console.log(dataVirtual);
            setData(dataVirtual)
          },
          addSlidesAfter: 0,
          addSlidesBefore: 0
        },
      });
    } else {
      Object.assign(swiperElRef.current, {
        ...mainOptionSlider,
      });
    }

    items.length !== 0 && swiperElRef.current.initialize()
  }, [items]);


  return (
    <div>
      <div className={s.header}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.buttonWrap}>
          <button className={cn('prev', s.button)} aria-label='Прокрутить слайдер назад'>
            <ArrowIcon style={{ transform: "rotate(180deg)" }} />
            <span className='visually-hidden'>Прокрутить слайдер назад</span>
          </button>
          <button className={cn('next', s.button)} aria-label='Прокрутить слайдер вперед'>
            <ArrowIcon />
            <span className='visually-hidden'>Прокрутить слайдер вперед</span>
          </button>
        </div>
      </div >
      <swiper-container init="false" ref={swiperElRef} >
        {
          virtual
            ? data?.slides?.map((dataItem, index) => (
              <swiper-slide key={dataItem._id} style={{ left: `${data.offset}px` }}><Component {...dataItem} /></swiper-slide>
            ))
            : items.map((dataItem, index) => (
              <swiper-slide><Component key={index} {...dataItem} /></swiper-slide>
            ))
        }
      </swiper-container>
    </div>
  );
}

export default React.memo(Carousel)