import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

// import events from '../../shared/services/EventService'
import { WishList } from '../../../models/wishItem';
import { EventService } from '../../../services/EventService';

@Component({
  selector: 'wish-list-item',
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {
  @Input() wish!: WishList;
  // @Input() fulfilled!: boolean;
  //
  // @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return this.wish.isComplete ? 'strikeout text-muted' : '';
  }

  constructor(private events: EventService) {}

  ngOnInit(): void {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
    // this.fulfilledChange.emit(this.fulfilled);
  }
}
