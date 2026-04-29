import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './store/efects/products.effect';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { productReducer } from './store/reducers/products.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      cart: cartReducer,
      products: productReducer,
    }),
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideEffects([ProductsEffects]),
  ],
};
