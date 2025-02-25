import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, of } from "rxjs";
import { MoviesService } from "../../movies.service";
import * as MovieActions from "../actions/movie.actions";

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private movieService = inject(MoviesService);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap(() =>
        this.movieService.getAll().pipe(
          map(movies => MovieActions.loadMoviesSuccess({ movies })),
          catchError(error => of(MovieActions.loadMoviesFailure({ error: error.message })))
        )
      )
    )
  )

  // constructor(private actions$: Actions, private movieService: MoviesService) {}
}

