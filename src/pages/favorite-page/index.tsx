import { useContext } from 'react';
import { CardList } from '../../components/card-list'
import { Spinner } from '../../components/spinner';

import { CardsContext } from '../../contexts/card-context';
import { ContentHeader } from '../../components/content-header';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../storage/hook';

export const FavoritesPage = () => {
    const goods = useAppSelector(state => state.products.favoriteProducts)

    return (
        <div className="content container">
            <ContentHeader title="Избранное" textButton="Назад" />
            <CardList goods={goods} />
        </div>
    )
}