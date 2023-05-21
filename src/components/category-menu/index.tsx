import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './styles.module.css'
import iconCat1 from './img/ic-cat-01.svg';
import iconCat2 from './img/ic-cat-02.svg';
import iconCat3 from './img/ic-cat-03.svg';
import iconCat4 from './img/ic-cat-04.svg';
import iconCat5 from './img/ic-cat-05.svg';
import iconCat6 from './img/ic-cat-06.svg';

const dataCategory = [
    {
        title: "Наборы",
        icon: iconCat1,
        slug: "/catalog",
    },
    {
        title: "Лакомства",
        icon: iconCat2,
        slug: "/catalog",
    },
    {
        title: "Аксессуары",
        icon: iconCat3,
        slug: "/catalog",
    },
    {
        title: "Игрушки",
        icon: iconCat4,
        slug: "/catalog",
    },
    {
        title: "Рога",
        icon: iconCat5,
        slug: "/catalog",
    },
    {
        title: "Масла",
        icon: iconCat6,
        slug: "/catalog",
    }
]
interface ICategoryMenuProps {
    extraClass: string
}
function CategoryMenu({ extraClass }: ICategoryMenuProps) {
    return (
        <div className={cn('box', s.menu, { [s[extraClass]]: extraClass })}>
            <ul className={s.list}>
                {dataCategory.map((category, index) => (
                    <li key={index}>
                        <Link to={category.slug} className={s.item}>
                            <img className={s.image} src={category.icon} alt={category.title} />
                            <span className={s.title}>{category.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryMenu;