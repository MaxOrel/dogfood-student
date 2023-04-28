import { getLocalData } from './localStorage';

class Api {
    #baseurl;
    #headers;
    constructor({ baseUrl, headers }) {
        this.#baseurl = baseUrl;
        this.#headers = headers;
    }

    #onResponse(res) {
        return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
    }

    getAllInfo() {
        return Promise.all([this.getProductsList(), this.getUserInfo()])
    }

    getProductsList() {
        return fetch(`${this.#baseurl}/products`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse)
    }

    getUserInfo() {
        return fetch(`${this.#baseurl}/users/me`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse)
    }

    search(searchQuery) {
        return fetch(`${this.#baseurl}/products/search?query=${searchQuery}`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse)
    }

    setUserInfo({ name, about }) {
        return fetch(`${this.#baseurl}/users/me`, {
            method: 'PATCH',
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
            body: JSON.stringify({ name, about })
        })
            .then(this.#onResponse)
    }

    changeLikeProductStatus(productID, like) {
        return fetch(`${this.#baseurl}/products/likes/${productID}`, {
            method: like ? 'DELETE' : 'PUT',
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse)
    }

    getProductById(idProduct) {
        return fetch(`${this.#baseurl}/products/${idProduct}`, {
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
        })
            .then(this.#onResponse)
    }

    getInfoProduct(idProduct) {
        return Promise.all([this.getProductById(idProduct), this.getUserInfo()])
    }


    createReviewProduct(productId, reviewData) {
        return fetch(`${this.#baseurl}/products/review/${productId}`, {
            method: 'POST',
            headers: { ...this.#headers, authorization: `Bearer ${getLocalData('token')}` },
            body: JSON.stringify(reviewData)
        })
            .then(this.#onResponse)
    }


    register(bodyData) {
        return fetch(`${this.#baseurl}/signup`, {
            method: 'POST',
            headers: this.#headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.#onResponse)
    }

    authorize(bodyData) {
        return fetch(`${this.#baseurl}/signin`, {
            method: 'POST',
            headers: this.#headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.#onResponse)
    }

    checkToken(token) {
        return fetch(`${this.#baseurl}/users/me`, {
            headers: { ...this.#headers, authorization: `Bearer ${token}` },
        })
            .then(this.#onResponse)
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