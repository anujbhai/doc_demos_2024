import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "../reducers/movie.reducer";

export const selectMovieState = createFeatureSelector<MovieState>('movies');

export const selectMovies = createSelector(
  selectMovieState,
  (state) => state.movies
);

