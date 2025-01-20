import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { WishList } from '../../../models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishList>();
  constructor() {}

  ngOnInit(): void {}

  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishList(this.newWishText))
    this.newWishText = '';
  }
}
