import { Component, OnInit, Input} from '@angular/core';
import { NgFor, NgIf } from '@angular/common'

import { WishList } from '../../../models/wishItem';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'wish-list',
  imports: [NgFor, NgIf, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishList[] = [];

  constructor() {}

  ngOnInit(): void {}
}
