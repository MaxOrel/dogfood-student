export type TUser = {
    name: string,
    about: string,
    avatar: string,
    _id: string,
    email: string,
    group?: string,
}

export type TReview = {
    rating: number;
    city?: string;
    _id: string;
    text: string;
    author: TUser,
    product: string;
}

export type TProduct = {
    discount: number,
    stock: number,
    available: boolean,
    pictures: string,
    likes: string[],
    reviews: TReview[],
    tags: string[],
    isPublished: boolean,
    _id: string,
    name: string,
    author: TUser,
    price: number,
    wight: string,
    description: string
}