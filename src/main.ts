import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {  Routes } from '@angular/router';
import { ProductList } from './app/components/product-list/product-list';
import { ProductDetail } from './app/components/product-detail/product-detail';
import { ProductCart } from './app/components/product-cart/product-cart';
import { appConfig } from './app/app.config';
export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: ProductCart },
];

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
