import { createAction, props } from "@ngrx/store";
import { Product } from "../../services/product.model";

export const loadProducts = createAction('[Product list] Load products')

export const loadProductsSuccess = createAction(
    '[Product API] Load success',
    props<{products: Product[]}>()
)
export const loadProductsFailure = createAction(
    '[Product API] Load failure',
    props<{error: string}>()
)
export const filterByCategory = createAction(
    '[Product List] Filter by category',
    props<{category: string}>()
)