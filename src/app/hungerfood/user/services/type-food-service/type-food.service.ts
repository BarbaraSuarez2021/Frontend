import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TypeFoodService {

  private apiUrl = `${environment.serverBasePath}api/TipoAlimento/Listar`;
  storedToken = localStorage.getItem('authToken');
  token = this.storedToken !== null ? this.storedToken : null;
  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient) {
    this.jwtHelper = new JwtHelperService();
  }

  private validateToken(): boolean {
    console.log(this.token);
    if (!this.token) {
      return false;
    }

    const decodedToken = this.jwtHelper.decodeToken(this.token);
    const isTokenExpired = this.jwtHelper.isTokenExpired(this.token);
    console.log('validated token');
    return !isTokenExpired && decodedToken;
  }

  private getHeaders(): HttpHeaders {
    if (!this.validateToken()) {
      throw new Error('Invalid token');
    }

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  }

  getTypesOfFood(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {headers: this.getHeaders()});
  }


}
