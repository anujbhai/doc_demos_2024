import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../book-list/books.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    var res = collection.map((id) => books.find((book) => book.cover_edition_key === id)!);
    if (res) {
      console.log('res:', res);
    } else {
      console.log('Something wrong');
    }
    // return collection.map((id) => books.find((book) => book.id === id)!);
    return res;
  }
);

