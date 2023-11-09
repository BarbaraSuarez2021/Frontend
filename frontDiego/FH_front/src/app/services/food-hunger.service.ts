import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuscarFecha } from '../models/BuscarFecha';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class FoodHungerService {
  private baseUrl = 'http://localhost:8080/api/auth/Alimentos_donados_por_Donante/ListarPorDonanteAndFecha';
  private UrlUsuario = 'http://localhost:8080/api/auth/Usuario/Listar'
  private UrlDUsuario = 'http://localhost:8080/api/auth/Usuario'  

  constructor(private http: HttpClient) { }

  buscarDonacionesPorFecha(idDonante: number, fechaInicio: string, fechaFin: string): Observable<BuscarFecha[]> {
    const url = `${this.baseUrl}/${idDonante}/${fechaInicio}/${fechaFin}`;
    return this.http.get<BuscarFecha[]>(url);
  }
  getUsuario(){
    const endpoint = `${this.UrlUsuario}/`;
    return this.http.get<Usuario[]>(endpoint)
  }
  DeleteUsuario(id: number): Observable<void> {
    const endpoint = `${this.UrlDUsuario}/${id}`;
    return this.http.delete<void>(endpoint);
  }
  updateUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    const endpoint = `${this.UrlDUsuario}/${id}`;
    return this.http.put<Usuario>(endpoint, usuario);
  }
}
