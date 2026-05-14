import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { ProductCart } from './components/product-cart/product-cart';

export const routes: Routes = [
      { path: '', component: ProductList },
      { path: 'product/:id', component: ProductDetail },
      { path: 'cart', component: ProductCart },
];
