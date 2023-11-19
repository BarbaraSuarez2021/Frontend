import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  constructor(private router: Router) {}
  navegarAReporte1() {
    this.router.navigate(['/listaFecha']);
  }
  navegarAReporte2() {
    this.router.navigate(['/listUsuario']);
  }
}
