import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';

export interface FavoritesResponse {
  id: string,
  title: string,
  authors: Array<string>,
  thumbnail: string,
  textSnippet: string,
  infoLink: string,
  favorite: boolean
}

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  configUrl:string = 'http://localhost:3001/'

  constructor(private http: HttpClient) { }

  // getConfigResponse(): Observable<HttpResponse<FavoritesResponse>> {
  //   return this.http.get<FavoritesResponse>(
  //     this.configUrl, { observe: 'response' });
  // }

  getConfigResponse() {
    return this.http.get<FavoritesResponse>(this.configUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
