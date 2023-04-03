import { useContext } from 'react';
import { CardList } from '../../components/card-list'
import { Spinner } from '../../components/spinner';

import { CardsContext } from '../../contexts/card-context';
import { ContentHeader } from '../../components/content-header';

export const FavoritesPage = () => {
    const { favorites: goods } = useContext(CardsContext)

    return (
        <>
            <ContentHeader title="Избранное" textButton="Назад" />
            <CardList goods={goods} />
        </>
    )
}