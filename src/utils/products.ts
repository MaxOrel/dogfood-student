import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { TProductInCart } from '../types';
dayjs.locale('ru');


export function formattedDate(date: Date) {
    const data = dayjs(date).format("DD MMM YYYY");
    return data.replace('.', "");
}

export const isLiked = (likes: string[], userId: string | undefined) => likes?.some(id => id === userId)
export const calcDiscountPrice = (price: number, discount: number) => Math.round(price - (price * discount) / 100);


export const checkProductInCart = (cartProducts: (TProductInCart & { quantity: number })[], idProduct: string) => {
    const productInCart = cartProducts.find(item => item._id === idProduct);
    if (productInCart && productInCart?.quantity) {
        return { quantity: productInCart.quantity, exist: true }
    }
    return { quantity: 0, exist: false }
}