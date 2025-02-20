import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { BooksService } from './book-list/books.service';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selector';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BookListComponent,
    BookCollectionComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'bookstore-app';
  private booksService = inject(BooksService);
  private store = inject(Store);
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor() {}

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
