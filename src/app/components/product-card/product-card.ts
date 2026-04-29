import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../services/product.model';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/actions/cart.action';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  private store = inject(Store);

  onAddToCart(event: Event) {
    event.stopPropagation();
    this.store.dispatch(CartActions.addToCart({ product: this.product }));
  }
}
