import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';
const initialState = {
    data: null,
    loading: true,
    error: null,
}

export const sliceName = 'user';


export const fetchUser = createAsyncThunk(
    `${sliceName}/fetchUser`,
    async function (_, { fulfillWithValue, rejectWithValue, extra: api }) {
        try {
            const data = await api.getUserInfo();
            return fulfillWithValue(data); // action.payload = data = {products: [], total: 0}
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

// console.log(fetchProducts);

//fetchProducts = {
// pending: () => {type: products/fetchUser/pending , payload},
// fullfilled: () => {type: products/fetchUser/fullfilled , payload}
// rejected: () => {type: products/fetchUser/rejected , payload}
//}


// dispatchEvent(fetchProducts())


const userSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {  // { type: products/fetchUser/pending, payload: {...}}
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {  // { type: products/fetchUser/pending, payload: {...}}
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {  // { type: products/fetchUser/pending, payload: {...}}
                state.error = action.payload;
                state.loading = false;
            })
    }
})


export default userSlice.reducer;