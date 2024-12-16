import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { WishList } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishList[] = [
    new WishList('To learn Angular', false),
    new WishList('Wait for Vacumatic', true),
    new WishList('Clean pens')
  ];

  visibleItems : WishList[] = this.items;

  listFilter: String = '0';

  newWishText = '';

  title = 'wishText';

  addNewWish() {
    this.items.push(new WishList(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value: any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
    console.log(value)
  }

  toggleItem(item: WishList) {
    item.isComplete = !item.isComplete;
    console.log('clicked toggle:', item);
  }
}
