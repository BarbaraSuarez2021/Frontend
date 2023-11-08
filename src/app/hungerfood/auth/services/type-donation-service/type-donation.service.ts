import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {TypeDonation} from "../../model/type-donation/type-donation";
import {environment} from "../../../../../environments/environment";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeDonationService {

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

  // Create Resource
  create(item: any): Observable<TypeDonation> {
    return this.http.post<TypeDonation>(`${this.resourcePath()}/RegistrarTipoDonacion`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get All Resources
  getAll(): Observable<TypeDonation[]> {
    return this.http.get<TypeDonation[]>(`${this.resourcePath()}/ListarTipoDonacion`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get Resource By Id
  getById(id: any): Observable<TypeDonation> {
    return this.http.get<TypeDonation>(`${this.resourcePath()}/ListarTipoDonacion/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

}
