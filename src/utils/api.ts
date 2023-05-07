import { TProduct, TReview, TUser } from '../types';
import { getLocalData } from './localStorage';
type ApiConfig = {
    baseUrl: string,
    headers: any
}

export type UserBodyDto = {
    about: string;
    name: string;
}

export type UserAuthBodyDto = {
    email: string;
    password: string;
}

export type UserRegisterBodyDto = {
    group: string;
    email: string;
    password: string;
} & UserAuthBodyDto & Partial<UserBodyDto>


export type ReviewBodyDto = {
    text: string;
    rating: number;
    city: string;
}

type ServerResponse<T> = {
    created_at?: Date,
    updated_at?: Date,
    __v: number
} & T;

export type TUserResponseDto = ServerResponse<TUser>;
export type TProductResponseDto = ServerResponse<TProduct>;
export type TReviewResponseDto = ServerResponse<TReview>;

export type TAuthResponseDto = {
    data: TUserResponseDto,
    token: string;
}

export type TProductsResponseDto = {
    products: TProductResponseDto[],
    total: number;
}

export class Api {
    #baseurl;
    #headers;
    constructor({ baseUrl, headers }: ApiConfig) {
        this.#baseurl = baseUrl;
        this.#headers = headers;
    }

    #onResponse<T>(res: Response): Promise<T> {
        return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
    }

    getProductsList() {
        return fetch(`${this.#baseurl}/products`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse<TProductsResponseDto>)
    }

    getUserInfo() {
        return fetch(`${this.#baseurl}/users/me`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse<TUserResponseDto>)
    }

    search(searchQuery: string) {
        return fetch(`${this.#baseurl}/products/search?query=${searchQuery}`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse<TProductResponseDto[]>)
    }

    setUserInfo({ name, about }: UserBodyDto) {
        return fetch(`${this.#baseurl}/users/me`, {
            method: 'PATCH',
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
            body: JSON.stringify({ name, about })
        })
            .then(this.#onResponse<TUserResponseDto>)
    }

    changeLikeProductStatus(productID: string, like: boolean) {
        return fetch(`${this.#baseurl}/products/likes/${productID}`, {
            method: like ? 'DELETE' : 'PUT',
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse<TProductResponseDto>)
    }

    getProductById(idProduct: string) {
        return fetch(`${this.#baseurl}/products/${idProduct}`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse<TProductResponseDto>)
    }

    createReviewProduct(productId: string, reviewData: ReviewBodyDto) {
        return fetch(`${this.#baseurl}/products/review/${productId}`, {
            method: 'POST',
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
            body: JSON.stringify(reviewData)
        })
            .then(this.#onResponse<TProductResponseDto>)
    }


    register(bodyData: UserRegisterBodyDto) {
        return fetch(`${this.#baseurl}/signup`, {
            method: 'POST',
            headers: this.#headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.#onResponse<TUserResponseDto>)
    }

    authorize(bodyData: UserAuthBodyDto) {
        return fetch(`${this.#baseurl}/signin`, {
            method: 'POST',
            headers: this.#headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.#onResponse<TAuthResponseDto>)
    }

    checkToken(token: string) {
        return fetch(`${this.#baseurl}/users/me`, {
            headers: { ...this.#headers, authorization: `Bearer ${token}` },
        })
            .then(this.#onResponse<TUserResponseDto>)
    }

}


const api = new Api({
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        //authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4OTgiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQzLCJleHAiOjE3MTAzMzg0NDN9.Y7nuAVWeA_CGJipJNTktP9raSdpM41B3s-z4l-8rE70'
    }
})


export default api;