import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardList } from '../../components/card-list'
import { NotFound } from '../../components/not-found';
import Product from '../../components/product';
import { Sort } from '../../components/sort'
import { Spinner } from '../../components/spinner';
import { CardsContext } from '../../contexts/card-context';
import api from '../../utils/api';
import { isLiked } from '../../utils/products';
import { useApi } from '../../hooks';
import { UserContext } from '../../contexts/current-user-context';


// const ID_PRODUCT = '622c77e877d63f6e70967d22';

export const ProductPage = () => {
    const { productID } = useParams();

    const handleGetProduct = useCallback(() => api.getProductById(productID), [productID]);
    const { data: product, loading: isLoading, error: errorState, setData: setProduct } = useApi(handleGetProduct);
    const { handleLike } = useContext(CardsContext)

    function handleProductLike(product) {
        handleLike(product).then(updateCard => {
            setProduct(updateCard)
        });
    }

    return (
        <>
            {isLoading
                ? <Spinner />
                : !errorState && <Product {...product} onProductLike={handleProductLike} />
            }

            {!isLoading && errorState && <NotFound title="Товар не найден" />}
        </>
    )
}