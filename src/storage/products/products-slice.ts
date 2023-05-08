import { SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isLiked } from '../../utils/products';
import { TABS_ID } from '../../utils/constants';
import { createAppAsyncThunk } from '../hook';
import { TProductResponseDto, TProductsResponseDto, TUserResponseDto } from '../../utils/api';
import { TProduct } from '../../types';


type TProductsState = {
    data: TProductResponseDto[],
    currentSort: string,
    favoriteProducts: TProductResponseDto[],
    total: number,
    loading: boolean,
    error: SerializedError | null | unknown,
}


const initialState: TProductsState = {
    data: [],
    currentSort: "",
    favoriteProducts: [],
    total: 0,
    loading: true,
    error: null,
}

export const sliceName = 'products';


export const fetchProducts = createAppAsyncThunk<TProductsResponseDto & { currentUser: TUserResponseDto | null }, void>(
    `${sliceName}/fetchProducts`,
    async function (_, { fulfillWithValue, rejectWithValue, getState, extra: api }) {
        try {
            const { user } = await getState();
            const data = await api.getProductsList();
            return fulfillWithValue({ ...data, currentUser: user.data }); // action.payload = data = {products: [], total: 0, currentUser: {}}
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const fetchChangeLikeProduct = createAppAsyncThunk<{ product: TProductResponseDto, liked: boolean }, { likes: string[], _id: string }>(
    `${sliceName}/fetchChangeLikeProduct`,
    async function (product, { fulfillWithValue, rejectWithValue, getState, extra: api }) {
        try {
            const { user } = await getState();
            const liked = user.data ? isLiked(product.likes, user.data._id) : false;
            const data = await api.changeLikeProductStatus(product._id, liked);

            return fulfillWithValue({ product: data, liked }); // action.payload = data = {products: [], total: 0, currentUser: {}}
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)


const productSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        sortedProducts: (state, action) => {
            switch (action.payload) {
                case (TABS_ID.CHEAP):
                    state.data = state.data.sort((a, b) => a.price - b.price);
                    state.currentSort = action.payload;
                    break;
                case (TABS_ID.LOW):
                    state.data = state.data.sort((a, b) => b.price - a.price);
                    state.currentSort = action.payload;
                    break;
                case (TABS_ID.DISCOUNT):
                    state.data = state.data.sort((a, b) => b.discount - a.discount);
                    state.currentSort = action.payload;
                    break;
                default:
                    state.data = state.data.sort((a, b) => a.price - b.price);
                    state.currentSort = TABS_ID.DISCOUNT;

            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {  // { type: products/fetchProducts/pending, payload: {...}}
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {  // { type: products/fetchProducts/pending, payload: {...}}
                const { products, total, currentUser } = action.payload;
                state.data = products;
                state.total = total;
                state.favoriteProducts = products.filter(item => isLiked(item.likes, currentUser?._id))
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {  // { type: products/fetchProducts/pending, payload: {...}}
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(fetchChangeLikeProduct.fulfilled, (state, action) => {
                const { product, liked } = action.payload;
                state.data = state.data.map(cardState => {
                    return cardState._id === product._id ? product : cardState
                })

                if (!liked) {
                    state.favoriteProducts.push(product);
                } else {
                    state.favoriteProducts = state.favoriteProducts.filter(card => card._id !== product._id)
                }
                state.loading = false;
            })

            .addCase(fetchChangeLikeProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export const { sortedProducts } = productSlice.actions;
export default productSlice.reducer;