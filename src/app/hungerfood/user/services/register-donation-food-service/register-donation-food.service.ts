import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { DonationFood } from '../../model/donation-food/donation-food';
import { environment } from 'src/environments/environment';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthServiceService} from "../../../auth/services/auth-service/auth-service.service";

const base_url = `${environment.serverBasePath}`;

@Injectable({
  providedIn: 'root'
})
export class RegisterDonationFoodService {

  basePath: string = `${base_url}api/AlimentoDonado`;
  ListarEndpoint: string = '/Listar';
  RegistrarEndpoint: string = '/Registrar';

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

  getDonacion_Alimentos() {
    const endpoint = `${this.basePath}${this.ListarEndpoint}`;
    return this.http.get<DonationFood[]>(endpoint);
  }

  saveDonacion_Alimento(body: any) {
    const endpoint = `${this.basePath}${this.RegistrarEndpoint}`;
    console.log(this.token);
    console.log(body);
    return this.http.post<DonationFood>(endpoint, body, { headers: this.getHeaders() });
  }

}
