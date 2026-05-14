import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ngRxStore');
}
