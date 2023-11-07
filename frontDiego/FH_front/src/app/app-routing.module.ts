import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarDonanteFechaComponent } from './componenets/buscar-donante-fecha/buscar-donante-fecha.component';
import { UsuariosComponent } from './componenets/usuarios/usuarios.component';
import { AdministradorComponent } from './componenets/administrador/administrador.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'listaFecha', component: BuscarDonanteFechaComponent},
  {path:'listUsuario', component: UsuariosComponent},
  {path:'', component: AdministradorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
