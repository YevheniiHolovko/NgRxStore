import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay} from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';
  private categorySelectedSubject = new BehaviorSubject<string>('all')

  categorySelected$ = this.categorySelectedSubject.asObservable()
  product$!: Observable<Product[]>;

  getData() {
    return (this.product$ = this.http.get<Product[]>(this.apiUrl).pipe(shareReplay(1)));

  }
  getProductById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
  getCategories() {
    return this.http.get<string[]>(`${this.apiUrl}/categories`)
  }
  getProductByCategory(category: string) {
    return this.http.get<any[]>(`${this.apiUrl}/category/${category}`)
  }
  changeCaetegory(category: string) {
    this.categorySelectedSubject.next(category)
  }

}

