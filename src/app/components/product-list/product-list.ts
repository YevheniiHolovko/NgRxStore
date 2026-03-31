import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Products } from '../../services/products';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Filter } from "../filter/filter";

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, CommonModule, Filter],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  @Input() products!: any;

  private productsService = inject(Products);

  
  product$ = this.productsService.categorySelected$.pipe(
    switchMap(category => {
      if(category === 'all') {
        return this.productsService.getData()
      }
      return this.productsService.getProductByCategory(category)
    })
  )

}
