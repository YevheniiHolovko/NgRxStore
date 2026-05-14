import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Products } from '../../services/products';
import * as productsAction from '../actions/products.action';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productService = inject(Products);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsAction.loadProducts),
      mergeMap(() =>
        this.productService.getData().pipe(
          map((products) => productsAction.loadProductsSuccess({ products })),
          catchError((error) => of(productsAction.loadProductsFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
