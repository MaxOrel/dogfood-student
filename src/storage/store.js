import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/products-slice';
import userReducer from './user/user-slice';
import singleProductReducer from './single-product/single-product-slice';
import api from '../utils/api';


const store = configureStore({
    reducer: {
        products: productReducer,
        user: userReducer,
        singleProduct: singleProductReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api
            }
        })

})


export default store;