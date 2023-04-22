import { CardList } from '../../components/card-list'
import { Sort } from '../../components/sort'

import { ContentHeader } from '../../components/content-header';
import { TABS } from '../../utils/constants';
import { useSelector } from 'react-redux';

export const CatalogPage = () => {
    const goods = useSelector(state => state.products.data)

    return (
        <>
            <ContentHeader title="Каталог" textButton="Главная" to="/" />
            <Sort tabs={TABS} currentSort="discount" onChangeSort={(data) => console.log(data)} />
            <CardList goods={goods} />
        </>
    )
}