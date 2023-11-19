import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BuscarFecha } from '../../model/buscar-fecha/buscar-fecha';
import {catchError, Observable, throwError} from 'rxjs';
import { User } from 'src/app/hungerfood/auth/model/user/user';
import {environment} from "../../../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class FoodHungerService {

  private baseUrl = `${environment.serverBasePath}api/Alimentos_donados_por_Donante/ListarPorDonanteAndFecha`;
  private UrlUsuario = `${environment.serverBasePath}api/auth/Usuario/Listar`;
  private UrlDUsuario = `${environment.serverBasePath}api/auth/Usuario`;

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

  buscarDonacionesPorFecha(idDonante: number, fechaInicio: any, fechaFin: any): Observable<BuscarFecha[]> {
    const url = `${this.baseUrl}/${idDonante}/${fechaInicio}/${fechaFin}`;
    const headers = this.getHeaders();

    return this.http.get<BuscarFecha[]>(url, { headers }).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Por favor, inténtelo de nuevo más tarde.');
      })
    );
  }

  getUsuario(){
    const endpoint = `${this.UrlUsuario}`;
    return this.http.get<User[]>(endpoint)
  }
  DeleteUsuario(id: number): Observable<void> {
    const endpoint = `${this.UrlDUsuario}/${id}`;
    return this.http.delete<void>(endpoint);
  }
  updateUsuario(id: number, usuario: User): Observable<User> {
    const endpoint = `${this.UrlDUsuario}/${id}`;
    return this.http.put<User>(endpoint, usuario);
  }

}
