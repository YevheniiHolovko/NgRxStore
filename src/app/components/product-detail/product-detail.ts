import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Products } from '../../services/products';
import { filter, Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CartAction from '../../store/actions/cart.action';
import * as ProductSelector from '../../store/selectors/products.selectors';
import { Product } from '../../services/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  public product$!: Observable<Product | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.store.select(ProductSelector.selectProductById(id));
    console.log(id);
  }
  public onAddToCart(product: Product): any {
    this.store.dispatch(CartAction.addToCart({ product }));
  }
}
