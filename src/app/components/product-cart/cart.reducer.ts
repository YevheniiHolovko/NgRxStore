import { createReducer, on } from '@ngrx/store';
import { Product } from '../../services/product.model';
import * as CartActions from './cart.action';

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product]
  })),
  on(CartActions.removeFromCart, (state, {productId}) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId)
  })),
  on(CartActions.clearCart, () => initialState)
);
