import { createReducer, on } from '@ngrx/store';
import { Product } from '../../services/product.model';
import * as CartActions from '../../store/actions/cart.action';
import { updateCartItems } from '../efects/cart.utils';

export interface CartItem extends Product {
  quantyti: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export const initialState: CartState = {
  items: [],
  isOpen: false,
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => ({
    ...state,
    items: updateCartItems(state.items, product),
  })),
  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== productId),
  })),
  on(CartActions.clearCart, () => initialState),
);
