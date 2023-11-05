import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgradecimientoComponent } from './pages/agradecimiento/agradecimiento.component';
import { DonarAhoraComponent } from './pages/donar-ahora/donar-ahora.component';
import { AlianzasComponent } from './pages/alianzas/alianzas.component';
import { DonacionAlimentoComponent } from './pages/donacion-alimento/donacion-alimento.component';
import { DonacionEconomicaComponent } from './pages/donacion-economica/donacion-economica.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'agradecimiento',component:AgradecimientoComponent},
  {path: 'donar-ahora', component: DonarAhoraComponent},
  {path: 'donacion-alimento', component:DonacionAlimentoComponent},
  {path:'donacion-economica',component:DonacionEconomicaComponent},
  {path: 'alianzas', component: AlianzasComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
