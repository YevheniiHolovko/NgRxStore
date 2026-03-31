import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal } from './cart.selectors';
import * as CartActions from './cart.action'

@Component({
  selector: 'app-product-cart',
  imports: [CommonModule],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.scss',
})
export class ProductCart {
  private store = inject(Store)

  items$ = this.store.select(selectCartItems)
  total$ = this.store.select(selectCartTotal)

  onRemove(productId: number) {
    this.store.dispatch(CartActions.removeFromCart({productId}))
  }
  onClear() {
    this.store.dispatch(CartActions.clearCart())
  }
}
