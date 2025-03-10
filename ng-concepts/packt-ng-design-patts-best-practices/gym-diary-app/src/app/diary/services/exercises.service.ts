import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ExerciseList, ExerciseListAPI } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private httpClient = inject(HttpClient);
  private url = 'exercises';

  getExercises(filter?: string): Observable<ExerciseList> {
    const headers = new HttpHeaders().set('X-LOADING', 'false');

    filter = filter ? `?filter=${filter}` : '';

    return this.httpClient
      .get<ExerciseListAPI>(`${ this.url }${ filter }`, { headers })
      .pipe(map((api) => api?.items));
  }

  constructor() { }
}
