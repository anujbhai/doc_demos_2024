import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

import { WishList } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {
  @Input() wishText!: string;
  @Input() fulfilled!: boolean;

  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return this.fulfilled ? 'strikeout text-muted' : '';
  }

  constructor() {}

  ngOnInit(): void {}

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
