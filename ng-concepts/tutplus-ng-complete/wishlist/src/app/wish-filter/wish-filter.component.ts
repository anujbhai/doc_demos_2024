import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WishList } from '../../shared/models/wishItem';

const filters = [
  (item: WishList) => item,
  (item: WishList) => !item.isComplete,
  (item: WishList) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter: any = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
