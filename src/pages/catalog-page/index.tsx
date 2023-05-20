import { CardList } from '../../components/card-list'
import { Sort } from '../../components/sort'

import { ContentHeader } from '../../components/content-header';
import { TABS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../storage/hook';

export const CatalogPage = () => {
    const goods = useAppSelector(state => state.products.data)

    return (
        <>
            <ContentHeader title="Каталог" textButton="Главная" to="/" />
            <Sort tabs={TABS} />
            <CardList goods={goods} />
        </>
    )
}