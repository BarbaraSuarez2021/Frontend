import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import{Observable, Subject} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanXtipoAlimento } from '../models/reporte1';
const base_url=environment

@Injectable({
  providedIn: 'root'
})
export class Reporte1Service {
  private url = `${base_url}/TipoAlimento`

  constructor(private http:HttpClient){}

  cantAlimentosXtipo(): Observable<CanXtipoAlimento[]>{
    return this.http.get<CanXtipoAlimento[]>(`${this.url}/CantidadDeAlimentosXtipoAlimento`, {headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
