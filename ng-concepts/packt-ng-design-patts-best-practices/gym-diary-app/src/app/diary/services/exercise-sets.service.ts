import { Injectable, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList, ExerciseSetListAPI } from '../interfaces/exercise-set';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
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
  // private setList?: ExerciseSetList;

  // getInitialList(): ExerciseSetList {
  //   this.setList = [
  //     { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
  //     { id: '2', date: new Date(), exercise: 'Parallel bar dips', reps: 15, sets: 3 },
  //     { id: '3', date: new Date(), exercise: 'Pull ups', reps: 10, sets: 3 },
  //   ];

  //   return this.setList;
  // }

  // refreshList(): ExerciseSetList {
  //   this.setList = [
  //     { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
  //     { id: '2', date: new Date(), exercise: 'Parallel bar dips', reps: 15, sets: 3 },
  //     { id: '3', date: new Date(), exercise: 'Pull ups', reps: 10, sets: 3 },
  //     { id: '4', date: new Date(), exercise: 'Jump ropes', reps: 300, sets: 1 },
  //   ];

  //   return this.setList;
  // }

  addNewItem(item: ExerciseSet): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }

  updateItem(id: string, item: ExerciseSet): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  deleteItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.delete<ExerciseSet>(`${this.url}/${id}`)
  }
}
