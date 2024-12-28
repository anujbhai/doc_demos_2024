import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import events from "../shared/services/EventService"
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

  constructor() {
    events.listen('removeWish', (wish: any) => {
      // remove wish from item
      console.log("clicked on remove wish", wish);
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  filter: any;
}
