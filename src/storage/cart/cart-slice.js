import { createSelector, createSlice } from '@reduxjs/toolkit';
import { calcDiscountPrice } from '../../utils/products';
const initialState = {
    data: [],
    totalCountProducts: 0
}

export const sliceName = 'cart';

const selectCartData = (state) => state.cart.data;

export const cartInfoSelector = createSelector(selectCartData, (cart) => {
    return cart.reduce((total, item) => {
        const priceDiscount = calcDiscountPrice(item.price, item.discount);
        total['amount'] += item.price * item.quantity;
        total['amountWithDiscount'] += (priceDiscount * item.quantity);
        total['totalDiscount'] += (item.price - priceDiscount) * item.quantity;
        total['totalCount'] += item.quantity;

        return total;
    }, {
        amount: 0,
        amountWithDiscount: 0,
        totalDiscount: 0,
        totalCount: 0
    })
}
)

const cartSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        addProductCart: (state, action) => {
            const itemInCart = state.data.find(item => item._id === action.payload._id); //undefined or product
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.data.push({ ...action.payload, quantity: 1 })
            }
            state.totalCountProducts++;
        },
        removeProductCart: (state, action) => {
            state.data = state.data.filter(item => {
                if (item._id === action.payload._id) {
                    state.totalCountProducts = state.totalCountProducts - action.payload.quantity;
                }
                return item._id !== action.payload._id
            })
        },
        changeCartQuantity: (state, action) => {
            const itemInCart = state.data.find(item => item._id === action.payload._id); //undefined or product
            if (itemInCart.quantity < action.payload.quantity) {
                state.totalCountProducts += action.payload.quantity - itemInCart.quantity;
            } else {
                state.totalCountProducts -= itemInCart.quantity - action.payload.quantity;
            }

            if (itemInCart && action.payload.quantity > 0) {
                itemInCart.quantity = action.payload.quantity;
            } else {
                state.data.push({ ...action.payload, quantity: action.payload.quantity })
            }
        },
        incrementQuantity: (state, action) => {
            const itemInCart = state.data.find(item => item._id === action.payload._id); //undefined or product
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.data.push({ ...action.payload, quantity: 1 })
            }
            state.totalCountProducts++;
        },
        decrementQuantity: (state, action) => {
            const itemInCart = state.data.find(item => item._id === action.payload._id); //undefined or product
            if (itemInCart.quantity === 1) {
                itemInCart.quantity = 1;
            } else {
                itemInCart.quantity--;
                state.totalCountProducts--;
            }
        }
    }
})

export const { addProductCart, removeProductCart, incrementQuantity, decrementQuantity, changeCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;