import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Movie {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieList = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    console.log('data:', this.movieList);
    return this.http.get<Movie[]>(this.movieList);
  }
}
