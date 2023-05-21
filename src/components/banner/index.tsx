import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './styles.module.css'

export enum BannerSize {
    "big" = "big",
    "middle" = "middle",
    "small" = "small",
}

interface IBannerProps {
    size: BannerSize;
    title: string;
    subtitle?: string;
    bg?: string;
    colorBg: string;
    extraClass?: string;
    price?: string;
}
function Banner({ title, size, subtitle, bg, colorBg, extraClass, price }: IBannerProps) {
    return (
        <div className={cn(s.banner,
            {
                [s[extraClass as string]]: !!extraClass,
                [s[size]]: !!size
            })} style={{ backgroundColor: colorBg, backgroundImage: `url('${bg}')` }}>
            <h2 className={s.title}>{title}</h2>
            {subtitle && <p className={s.subtitle}>{subtitle}</p>}
            {price && <p className={s.price}>{price}</p>}
        </div>
    );
}

export default Banner;