import { createReducer, on } from "@ngrx/store";

import * as MovieAction from "../actions/movie.actions";
import { Movie } from "../../movies.service";

export interface MovieState {
  movies: Movie[];
  error: string | null;
}

export const initialState: MovieState = {
  movies: [],
  error: null,
};

export const movieReducer = createReducer(
  initialState,
  on(MovieAction.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies
  })),
  on(MovieAction.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error
  })),
)

