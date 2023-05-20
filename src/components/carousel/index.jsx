import React, { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import "./styles.css";

register();

function Carousel({ items, component: Component, perView }) {
  const [data, setData] = useState([])
  const swiperElRef = useRef(null);
  console.log();
  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current.addEventListener('progress', (e) => {
    //   const [swiper, progress] = e.detail;
    //   console.log(progress);
    // });

    // const params = {
    //   injectStyles: [`
    //   .swiper-pagination-bullet {
    //     width: 20px;
    //     height: 20px;
    //     text-align: center;
    //     line-height: 20px;
    //     font-size: 12px;
    //     color: #000;
    //     opacity: 1;
    //     background: rgba(0, 0, 0, 0.2);
    //   }

    //   .swiper-pagination-bullet-active {
    //     color: #fff;
    //     background: #007aff;
    //   }
    //   `],
    //   pagination: {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    //   },
    // }
    Object.assign(swiperElRef.current, {
      slidesPerView: perView,
      spaceBetween: 30,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev'
      },
      virtual: {
        slides: [...items],
        // slides: (function () {
        //   console.log(Component);
        //   return items.map((dataItem, index) => (
        //     // `Slide  + ${index + 1}`
        //     <Component key={index} {...dataItem} />
        //   ))
        // })(),
        renderExternal: function (dataVirtual) {
          console.log(dataVirtual);
          setData(dataVirtual)
        },
        addSlidesAfter: 0,
        addSlidesBefore: 0
      },
    });

    // Object.assign(swiperElRef.current, params)

    // swiperElRef.current.addEventListener('slidechange', (e) => {
    //   console.log('slide changed');
    // });

    // items.length !== 0 && swiperElRef.current.initialize()
    items.length !== 0 && swiperElRef.current.initialize()
  }, [items]);

  const handleClickNextButton = () => {
    swiperElRef.current?.swiper?.slideNext();
  }

  return (
    // <swiper-container
    //   ref={swiperElRef}
    //   slides-per-view={perView}
    //   navigation="true"
    //   pagination="true"
    //   init="false"
    //   pagination-dynamic-bullets="true"
    // >
    //   {items.map((dataItem, index) => (
    //     <swiper-slide><Component key={index} {...dataItem} /></swiper-slide>
    //   ))}
    // </swiper-container>
    <>
      <button className='next'>Вперед</button>
      <button className='prev'>Назад</button>
      <swiper-container init="false" ref={swiperElRef}>
        {data?.slides?.map((dataItem, index) => (
          <swiper-slide key={dataItem._id} style={{ left: `${data.offset}px` }}><Component {...dataItem} /></swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}

export default React.memo(Carousel)