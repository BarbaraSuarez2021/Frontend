import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Donacion_Alimento} from '../models/donacion_de_alimento';

const base_url = 'http://localhost:3000/tipoAlimentos';

@Injectable({
  providedIn: 'root'
})
export class RegistroDonacionAlimentoService {
  constructor(private http: HttpClient) { }

  getDonacion_Alimentos() {
    const endpoint = `${base_url}/`;
    return this.http.get<Donacion_Alimento[]>(endpoint);
  }

  saveDonacion_Alimento(body: any) {
    const endpoint = `${base_url}/`;
    return this.http.post<Donacion_Alimento>(endpoint, body);
  }
}
