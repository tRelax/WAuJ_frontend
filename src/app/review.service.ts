import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewUrl = 'http://localhost:8080/reviews';

  httpOptions = {
    hearders: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  

  constructor(
    private http: HttpClient
  ) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewUrl)
    .pipe(
      tap(_ => console.log('fetched hardwares')),
      catchError(this.handleError<Review[]>('findAllReviews', []))
    );
  }

  getReview(naslov: string): Observable<Review> {
    const url = `${this.reviewUrl}/${naslov}`;
    return this.http.get<Review>(url)
    .pipe(
      tap(_ => console.log(`fetched hardware code=${naslov}`)),
      catchError(this.handleError<Review>(`getReviews code=${naslov}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }
}
