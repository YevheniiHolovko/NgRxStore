import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../reducers/products.reducer";

export const selectProductsState = createFeatureSelector<ProductState>('products')

export const selectAllProducts = createSelector(
    selectProductsState,
    (state) => state.items
)

export const selectProductsLoading = createSelector(
    selectProductsState,
    (state) => state.loading
)

export const selectProductsError = createSelector(
    selectProductsState,
    (state) => state.error
)