import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { SignInComponent } from './hungerfood/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './hungerfood/auth/pages/sign-up/sign-up.component';
import { AboutComponent } from './public/pages/about/about.component';
import { DonationsComponent } from './public/pages/donations/donations.component';
import { HomeAdminComponent } from './hungerfood/admin/pages/home-admin/home-admin.component';
import { HomeUserComponent } from './hungerfood/user/pages/home-user/home-user.component';
import { GratefulnessComponent } from './hungerfood/user/pages/gratefulness/gratefulness.component';
import { DonateNowUserComponent } from './hungerfood/user/pages/donate-now-user/donate-now-user.component';
import { DonateFoodComponent } from './hungerfood/user/pages/donate-food/donate-food.component';
import { DonateMoneyComponent } from './hungerfood/user/pages/donate-money/donate-money.component';
import { AlliancesComponent } from './hungerfood/user/pages/alliances/alliances.component';
import {AdministradorComponent} from "./hungerfood/admin/components/administrador/administrador.component";
import {UsuariosComponent} from "./hungerfood/admin/pages/usuarios/usuarios.component";
import {
  BuscarDonanteFechaComponent
} from "./hungerfood/admin/pages/buscar-donante-fecha/buscar-donante-fecha.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donations', component: DonationsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth/sign-in', component: SignInComponent},
  {path: 'auth/sign-up', component: SignUpComponent},
  {path: 'admin/home', component: HomeAdminComponent},
  {path: 'admin/listaFecha', component: BuscarDonanteFechaComponent},
  {path: 'admin/listUsuario', component: UsuariosComponent},
  {path: 'admin/administrador', component: AdministradorComponent},
  {path: 'user/home', component: HomeUserComponent},
  {path: 'user/gratefulness',component:GratefulnessComponent},
  {path: 'user/donate-now', component: DonateNowUserComponent},
  {path: 'user/donate-food', component:DonateFoodComponent},
  {path: 'user/donate-money',component:DonateMoneyComponent},
  {path: 'user/alliances', component: AlliancesComponent },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
