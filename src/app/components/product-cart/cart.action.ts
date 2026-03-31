import{createAction, props} from '@ngrx/store'
import { Product } from '../../services/product.model'

export const  addToCart = createAction(
    '[Product Cart] add to cart',
    props<{product: Product}>()
)
export const removeFromCart = createAction(
    '[Cart Page] remove from cart',
    props<{productId: number}>()
)
export const clearCart = createAction(
    '[Cart Page] clear cart'
)