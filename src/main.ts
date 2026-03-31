import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { ProductList } from './app/components/product-list/product-list';
import { ProductDetail } from './app/product-detail/product-detail';
import { ProductCart } from './app/components/product-cart/product-cart';
export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetail },
  {path: 'cart', component: ProductCart}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(withFetch())],
}).catch((err) => console.error(err));
