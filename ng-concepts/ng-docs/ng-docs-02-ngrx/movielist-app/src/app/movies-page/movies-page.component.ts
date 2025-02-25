import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie, MoviesService } from '../movies.service';
import * as MovieActions from '../store/actions/movie.actions';
import { selectMovies } from '../store/selectors/movies.selectors';

@Component({
  selector: 'app-movies-page',
  imports: [
    CommonModule,
    AsyncPipe,
  ],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent implements OnInit {
  store = inject(Store);
  movies$: Observable<Movie[]> = this.store.select(selectMovies);

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.store.dispatch(MovieActions.loadMovies());
  }

}
