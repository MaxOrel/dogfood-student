import { CardList } from '../../components/card-list'
import { Sort } from '../../components/sort'
import { Spinner } from '../../components/spinner';

import s from './styles.module.css';

export const CatalogPage = ({ cards, handleProductLike, currentUser, isLoading }) => {
    return (
        <>
            {isLoading
                ? <Spinner />
                : <>
                    <Sort />
                    <CardList goods={cards} onProductLike={handleProductLike} currentUser={currentUser} />
                </>
            }
        </>
    )
}