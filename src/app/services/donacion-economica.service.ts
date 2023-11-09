import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonacionEconomica } from '../models/donacionEconomica';

const base_url = "http://localhost:3000/donacionEconomica"

@Injectable({
  providedIn: 'root'
})
export class DonacionEconomicaService {

  constructor( private http: HttpClient) { }

  getD() {1
    const endpoint = `${base_url}/`;
    return this.http.get<DonacionEconomica>(endpoint)
  }
  getDById(id: any) {
    const endpoint = `${base_url}/${id}`;
    return this.http.get<DonacionEconomica[]>(endpoint)
  }
  save(body: any) {
    const endpoint = `${base_url}/`;
    return this.http.post<DonacionEconomica>(endpoint, body)
  }
}
