import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EventService } from "../shared/services/EventService"
import { WishList } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishService } from './wish.service';

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
export class AppComponent implements OnInit {
  // items: WishList[] = [
  //   new WishList('To learn Angular', false),
  //   new WishList('Wait for Vacumatic', true),
  //   new WishList('Clean pens')
  // ];
  items: WishList[] = [];
  filter: any;

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      // remove wish from item
      console.log("clicked on remove wish", wish);
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (err: any) => {
        alert(err.message);
      }
    );
  }
}
