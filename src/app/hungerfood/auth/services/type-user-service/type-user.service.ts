import { TypeUser } from '../../model/type-user/type-user';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../../../../environments/environment";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resources';

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

  create(item: any): Observable<TypeUser> {
    return this.http.post<TypeUser>(`${this.resourcePath()}/RegistrarRol`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


  getAll(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(`${this.resourcePath()}/ListarRol`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: any): Observable<TypeUser> {
    return this.http.get<TypeUser>(`${this.resourcePath()}/ListarRol/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


}
