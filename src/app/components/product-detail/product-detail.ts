import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Products } from '../../services/products';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
private route = inject(ActivatedRoute)
private productService = inject(Products)

product$ = this.route.paramMap.pipe(
  switchMap(params => {
    const id = params.get('id')
    return this.productService.getProductById(id!)
  })
)
}
