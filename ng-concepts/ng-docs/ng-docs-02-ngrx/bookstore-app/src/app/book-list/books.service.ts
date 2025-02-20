import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './books.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ docs: Book[] }>(
        // 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
        'https://openlibrary.org/search.json?q=oliver+sacks'
      )
      .pipe(map((books) => {
        books.docs
          ? console.log('books from api:', books.docs)
          : console.log('no books from api');
        return books.docs || []
      }));

  }
}
