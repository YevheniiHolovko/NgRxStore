import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Filter } from '../filter/filter';
import { Store } from '@ngrx/store';
import * as productsSelector from '../../store/selectors/products.selectors';
import * as productsAction from '../../store/actions/products.action';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, CommonModule, Filter, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private store = inject(Store);

  products$ = this.store.select(productsSelector.selectFilteredProducts);
  loading$ = this.store.select(productsSelector.selectProductsLoading);
  error$ = this.store.select(productsSelector.selectProductsError);
  allCategories$ = this.store.select(productsSelector.selectAllCategories)

  public ngOnInit(): any {
    this.store.dispatch(productsAction.loadProducts());
  }
  public onCategotyChange(category: string): any {
    this.store.dispatch(productsAction.filterByCategory({category}))

  }
}
