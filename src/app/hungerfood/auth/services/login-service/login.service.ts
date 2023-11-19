import { Login } from '../../model/login/login';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../../../../environments/environment";
import { Injectable } from '@angular/core';
import { AuthResponse } from '../auth-response/authresponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
      this.resourceEndpoint = 'api/auth/login';
   }

   handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned core ${error.status}, body was ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(() => new Error('Something happened with request, please try again later.'));
  }

  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }


  authenticateUser(login: Login): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.resourcePath(), login, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  login(username: string, password: string): Observable<AuthResponse> {
    const credentials = {
      username: username,
      password: password
    };

    return this.http.post<AuthResponse>(this.resourcePath(), credentials);
  }


}
