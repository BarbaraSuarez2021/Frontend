import { Reporte1AdministradorComponent } from './components/administrador/reporte1-administrador/reporte1-administrador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';

const routes: Routes = [
  {
    path: 'administrador', component: AdministradorComponent, children: [
      { path: 'reporte', component: Reporte1AdministradorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
