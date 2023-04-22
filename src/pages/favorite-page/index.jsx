import { useContext } from 'react';
import { CardList } from '../../components/card-list'
import { Spinner } from '../../components/spinner';

import { CardsContext } from '../../contexts/card-context';
import { ContentHeader } from '../../components/content-header';
import { useSelector } from 'react-redux';

export const FavoritesPage = () => {
    const goods = useSelector(state => state.products.favoriteProducts)

    return (
        <>
            <ContentHeader title="Избранное" textButton="Назад" />
            <CardList goods={goods} />
        </>
    )
}