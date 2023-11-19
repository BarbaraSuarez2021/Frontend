import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TotalAlimentosdonados } from '../../model/report2/report2';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from "@auth0/angular-jwt";

const base_url=environment.serverBasePath

@Injectable({
  providedIn: 'root'
})
export class Reporte2Service {

  private url=`${base_url}api/auth/Usuario/TotalAlimentosDonadosPorUsuario`;

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

  listTotalAlimentosDonadosPorUsuario(){
    return this.http.get<TotalAlimentosdonados[]>(this.url);
  }

}
