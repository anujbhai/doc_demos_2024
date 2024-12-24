import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.updateFilter('0')
  }

  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
