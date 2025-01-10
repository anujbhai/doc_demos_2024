import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { WishList } from '../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {
  private jsonUrl = 'assets/wishes.json';

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        "ContentType": "application/json",
      }),
    };
  }

  getWishes(): Observable<any> {
    let options = this.getStandardOptions();
    
    // params handling demo
    options.params = new HttpParams({
      fromObject: { format: 'json' }
    });

    return this.http.get(this.jsonUrl, options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error:', error.error);
    }

    return throwError(() => new Error('Cannot fetch wishes from the server. Please try again!'));
  }

  // for demo purpose only
  private addWish(wish: WishList) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-needed-for-auth');
    this.http.post(this.jsonUrl, wish, options);
  }
}
