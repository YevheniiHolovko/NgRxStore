import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal } from '../../store/selectors/cart.selectors';
import * as CartActions from '../../store/actions/cart.action';

@Component({
  selector: 'app-product-cart',
  imports: [CommonModule],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.scss',
})
export class ProductCart {
  private store = inject(Store);

  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotal);

  public onRemove(productId: number): any {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }
  public onClear(): any {
    this.store.dispatch(CartActions.clearCart());
  }
}
