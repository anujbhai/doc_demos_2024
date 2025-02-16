import { Injectable, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList, ExerciseSetListAPI } from '../interfaces/exercise-set';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSetsService {
  private httpClient = inject(HttpClient);
  private url = `http://localhost:3000/diary`;

  constructor() { }

  getInitialList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  refreshList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  addNewItem(item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }

  updateItem(id: string, item: ExerciseSet): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  deleteItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.delete<ExerciseSet>(`${this.url}/${id}`)
  }
}
