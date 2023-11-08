import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {User} from "../../model/user/user";
import {environment} from "../../../../../environments/environment";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
      this.resourceEndpoint = 'api/auth/Usuario';
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

  // Create Resource
  create(item: any): Observable<User> {
    return this.http.post<User>(`${this.resourcePath()}/Registrar`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete Resource
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update Resource
  update(id: any, item: any): Observable<User> {
    return this.http.put<User>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get All Resources
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.resourcePath()}/Listar`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getByUsername(username: string): Observable<User> {

    return this.http.get<User>(`${this.resourcePath()}/ListarByUsername/${username}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: any): Observable<User> {
    return this.http.get<User>(`${this.resourcePath()}/ListarById/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
