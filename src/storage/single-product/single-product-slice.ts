import { SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../hook';
import { ReviewBodyDto, TProductResponseDto } from '../../utils/api';

type TProductState = {
    data: TProductResponseDto | null,
    loading: boolean,
    error: SerializedError | null | unknown,
}


const initialState: TProductState = {
    data: null,
    loading: true,
    error: null,
}

export const sliceName = 'single-product';


export const fetchSingleProduct = createAppAsyncThunk<TProductResponseDto, string>(
    `${sliceName}/fetchSingleProduct`,
    async function (productId, { fulfillWithValue, rejectWithValue, extra: api }) {
        try {
            const data = await api.getProductById(productId);
            return fulfillWithValue(data);
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const fetchCreateReview = createAppAsyncThunk<TProductResponseDto, { productId: string, data: ReviewBodyDto }>(
    `${sliceName}/fetchCreateReview`,
    async function ({ productId, data: body }, { fulfillWithValue, rejectWithValue, extra: api }) {
        try {
            const data = await api.createReviewProduct(productId, body);
            return fulfillWithValue(data);
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)


const singleProductSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        changeLikeState: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(fetchCreateReview.fulfilled, (state, action) => {
                state.data = action.payload
            })

            .addCase(fetchCreateReview.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
})

export const { changeLikeState } = singleProductSlice.actions;
export default singleProductSlice.reducer;