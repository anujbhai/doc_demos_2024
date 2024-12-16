import { Component, OnInit, Input} from '@angular/core';
import { NgFor, NgIf } from '@angular/common'

import { WishList } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  imports: [NgFor, NgIf],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes: WishList[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleItem(item: WishList) {
    item.isComplete = !item.isComplete;
    console.log('clicked toggle:', item);
  }
}
