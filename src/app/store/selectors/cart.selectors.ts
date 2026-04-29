import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../reducers/cart.reducer";

export const selectCartState = createFeatureSelector<CartState>('cart')

export const selectCartItems = createSelector(
    selectCartState,
    (state) => state.items
)

export const selectCartCount = createSelector(
    selectCartItems,
    (items) => items.length
)

export const selectCartTotal = createSelector(
    selectCartItems,
    (items) => items.reduce((acc, item) => acc + item.price, 0)
)