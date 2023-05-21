import { CardList } from '../../components/card-list'
import { Sort } from '../../components/sort'

import { ContentHeader } from '../../components/content-header';
import { TABS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../storage/hook';
import { getProducts } from '../../storage/products/selectors';

export const CatalogPage = () => {
    const goods = useAppSelector(getProducts)

    return (
        <div className="content container">
            <ContentHeader title="Каталог" textButton="Главная" to="/" />
            <Sort tabs={TABS} />
            <CardList goods={goods} />
        </div>
    )
}