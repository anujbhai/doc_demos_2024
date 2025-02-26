import { Injectable, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList, ExerciseSetListAPI } from '../interfaces/exercise-set';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSetsService {
  private httpClient = inject(HttpClient);
  // private authService = inject(AuthService);
  // private url = `http://localhost:3000/diary`;
  private url = `diary`;

  constructor() { }

  getInitialList(): Observable<ExerciseSetListAPI> {
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer: ${ this.authService.token }`,
    // });
    // return this.httpClient.get<ExerciseSetListAPI>(this.url, { headers });
    const headers = new HttpHeaders().set('X-TELEMETRY', 'true');
    return this.httpClient.get<ExerciseSetListAPI>(this.url, { headers });
  }

  refreshList(): Observable<ExerciseSetListAPI> {
    return this.httpClient.get<ExerciseSetListAPI>(this.url);
  }

  addNewItem(item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url, item);
  }

  updateItem(id: string, item: Partial<ExerciseSet>): Observable<ExerciseSet> {
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  getItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.get<ExerciseSet>(`${this.url}/${id}`);
  }

  deleteItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.delete<ExerciseSet>(`${this.url}/${id}`)
  }
}
