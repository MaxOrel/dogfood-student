import cn from 'classnames';
import Hero from '../../components/hero';
import CategoryMenu from '../../components/category-menu';
import s from './styles.module.css';
import Banner, { BannerSize } from '../../components/banner';
import imageGift from './img/gift.png';
import imageSets from './img/set.png';
import imageMix from './img/mix.png';
import imageTurkey from './img/turkey.png';
import imageHorns from './img/horns.png';
import Carousel from '../../components/carousel';
import { useAppSelector } from '../../storage/hook';
import { Card } from '../../components/card';
import { getProducts } from '../../storage/products/selectors';

export const MainPage = () => {
    const products = useAppSelector(getProducts)
    return (
        <>
            <Hero />
            <div className={cn("content container", s.mainPage)}>
                <CategoryMenu extraClass='home' />
                <Banner
                    size={BannerSize.big}
                    title='Подарок за первый заказ!'
                    subtitle='Легкое говяжье - пластины'
                    colorBg='#FF8F27'
                    bg={imageGift} />
                <Carousel title="Хиты" items={products.slice(0, 10)} perView={4} component={Card} />
                <div className={s.bannerWrapper}>
                    <Banner
                        size={BannerSize.middle}
                        title='Наборы'
                        subtitle='для дрессировки'
                        price='от 840 ₽'
                        colorBg='#D8A217'
                        bg={imageSets} />
                    <Banner
                        size={BannerSize.middle}
                        title='Микс масел'
                        subtitle='пищевая здоровая натуральная добавка'
                        colorBg='#24B5BE'
                        bg={imageMix} />
                </div>
                <Carousel title="Лакомства" items={products.slice(10, 20)} perView={4} component={Card} />

                <div className={s.bannerWrapper}>
                    <Banner
                        size={BannerSize.middle}
                        title='Рога северного оленя'
                        subtitle='от 10 до 30 кг.'
                        colorBg='#9CCD55'
                        bg={imageHorns} />
                    <Banner
                        size={BannerSize.middle}
                        title='Слипы из шеи индейки'
                        subtitle='100 % натуральное'
                        colorBg='#DB6825'
                        bg={imageTurkey} />
                </div>
                <Banner
                    size={BannerSize.big}
                    title='Подарок за первый заказ!'
                    subtitle='Легкое говяжье - пластины'
                    colorBg='#FF8F27'
                    bg={imageGift} />
                <Carousel title="Вы смотрели" items={products.slice(20, 30)} perView={4} component={Card} />
            </div>
        </>
    )
}