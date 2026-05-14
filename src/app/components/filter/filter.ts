import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Products } from '../../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  @Input() categories: string[] = [];
  @Output() categoryChanged = new EventEmitter<string>();

  private productService = inject(Products);
  categories$ = this.productService.getCategories();

  public onChanged(event: Event): any {
    const value = (event.target as HTMLSelectElement).value;
    this.categoryChanged.emit(value);
  }
}
