import { Component, inject } from '@angular/core';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
private productService = inject(Products)
categories$ = this.productService.getCategories()

onChanged(event: Event) {
  const value = (event.target as HTMLSelectElement).value
  this.productService.changeCaetegory(value)
}
}
