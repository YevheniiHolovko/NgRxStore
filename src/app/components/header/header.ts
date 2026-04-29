import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import * as CartSelectors from '../../store/selectors/cart.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private store = inject(Store);

  count$ = this.store.select(CartSelectors.selectCartCount);

  onContact() {
    alert('+380....67');
  }
}
