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

export const selectSelectedCategory = createSelector(
    selectProductsState,
    (state) => state.selectedCategory
)

export const selectFilteredProducts = createSelector(
    selectAllProducts,
    selectSelectedCategory,
    (products, category) => {
        if(category === 'all') return products
        return products.filter(p => p.category === category)
    }
)

export const selectAllCategories = createSelector(
    selectAllProducts,
    (product) => {
        return [...new Set(product.map(product => product.category))]
    }
)

export const selectProductById = (productId: number) => createSelector(
    selectAllProducts,
    (products) => products.find(p => p.id === productId)
)