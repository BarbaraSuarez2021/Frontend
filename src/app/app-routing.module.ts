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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donations', component: DonationsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth/sign-in', component: SignInComponent},
  {path: 'auth/sign-up', component: SignUpComponent},
  {path: 'admin/home', component: HomeAdminComponent},
  {path: 'user/home', component: HomeUserComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
