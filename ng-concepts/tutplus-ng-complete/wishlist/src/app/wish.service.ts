import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private jsonUrl = 'assets/wishes.json';

  constructor(private http: HttpClient) { }

  // private getStandardOptions(): any {
  //   return {
  //     header: new HttpHeaders
  //   };
  // }

  getWishes(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
