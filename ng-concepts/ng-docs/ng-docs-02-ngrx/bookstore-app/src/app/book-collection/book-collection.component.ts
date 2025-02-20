import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  imports: [
    CommonModule,
  ],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.css'
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
