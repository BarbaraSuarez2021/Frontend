import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DonationMoney } from '../../model/donation-money/donation-money';
import {environment} from "../../../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DonateMoneyService {

  base_url = `${environment.serverBasePath}api/DonacionEconomica`;
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

  getD(): Observable<DonationMoney[]> {
    const endpoint = `${this.base_url}/Listar`;
    return this.http.get<DonationMoney[]>(endpoint, { headers: this.getHeaders() });
  }


  save(body: any) {
    const endpoint = `${this.base_url}/Registrar`;
    console.log(this.token);
    console.log(body);
    return this.http.post<DonationMoney>(endpoint, body, { headers: this.getHeaders() })
  }

}
