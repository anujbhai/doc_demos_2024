import { Component, OnInit } from '@angular/core';

import { WishList } from '../../models/wishItem';
import { EventService } from '../../services/EventService';
import { WishService } from './wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-wish',
  imports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
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
