//mock api data

import { INITIAL_PRODUCT } from "@/store/product-store"

export interface Thumbnail {
    id:string
    url:string
}


export interface Product {
    id:number
    name:string,
    price:number,
    rating:number
    maxRating:number
    reviews:number
    desc:string
    stock:number
    thumbnails:Thumbnail[]
}


export const useGetProductById=():Product=>{


    return INITIAL_PRODUCT
}