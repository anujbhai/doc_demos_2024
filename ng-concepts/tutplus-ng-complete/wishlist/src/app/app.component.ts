import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WishList } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishList[] = [
    new WishList('To learn Angular', false),
    new WishList('Wait for Vacumatic', true),
    new WishList('Clean pens')
  ];

  filter: any;
}
