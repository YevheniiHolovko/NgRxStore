import { createReducer, on } from "@ngrx/store";
import { Product } from "../../services/product.model";
import * as productsAction from '../actions/products.action'

export interface ProductState {
    items: Product[]
    loading: boolean
    error: string | null
}

export const initialState: ProductState = {
    items: [],
    loading: false,
    error: null
}

export const productReducer = createReducer(
    initialState,
    on(productsAction.loadProducts, (state) => ({...state, loading: true})),
    on(productsAction.loadProductsSuccess, (state, {products}) => ({
        ...state,
        items: products,
        loading: false
    })),
    on(productsAction.loadProductsFailure, (state, {error}) => ({
        ...state,
        error,
        loading: false
    }))

)