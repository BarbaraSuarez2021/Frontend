import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donacion_Alimento } from '../models/donacion_de_alimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroDonacionAlimentoService {
  
  basePath: string = `${environment.serverBasePath}/AlimentoDonado`;
  ListarEndpoint: string = '/Listar';
  RegistrarEndpoint: string = '/Registrar';
 

  constructor(private http: HttpClient) { }

  getDonacion_Alimentos() {
    const endpoint = `${this.basePath}${this.ListarEndpoint}`;
    return this.http.get<Donacion_Alimento[]>(endpoint);
  }

  saveDonacion_Alimento(body: any) {
    const endpoint = `${this.basePath}${this.RegistrarEndpoint}`;
    return this.http.post<Donacion_Alimento>(endpoint, body);
  }
}
