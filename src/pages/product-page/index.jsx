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
import { useDispatch, useSelector } from 'react-redux';
import { changeLikeState, fetchSingleProduct } from '../../storage/single-product/single-product-slice';
import { fetchChangeLikeProduct } from '../../storage/products/products-slice';


// const ID_PRODUCT = '622c77e877d63f6e70967d22';

export const ProductPage = () => {
    const dispatch = useDispatch()
    const { productID } = useParams();

    const { data: product, loading: isLoading, error: errorState } = useSelector(state => state.singleProduct)

    function handleProductLike(product) {
        dispatch(fetchChangeLikeProduct(product)).then(updateCard => {
            if (updateCard?.payload?.product) {
                dispatch(changeLikeState(updateCard.payload.product))
            }
        });
    }
    useEffect(() => {
        dispatch(fetchSingleProduct(productID))
    }, [dispatch, productID])


    return (
        <>
            {isLoading
                ? <Spinner />
                : !errorState && <Product onProductLike={handleProductLike} />
            }

            {!isLoading && errorState && <NotFound title="Товар не найден" />}
        </>
    )
}