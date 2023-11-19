import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from "./public/components/navbar/navbar.component";
import { HomeComponent } from './public/pages/home/home.component';
import { DonationsComponent } from './public/pages/donations/donations.component';
import { AboutComponent } from './public/pages/about/about.component';
import { SignInComponent } from './hungerfood/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './hungerfood/auth/pages/sign-up/sign-up.component';
import { SignInFormComponent } from './hungerfood/auth/components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './hungerfood/auth/components/sign-up-form/sign-up-form.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { HomeAdminComponent } from './hungerfood/admin/pages/home-admin/home-admin.component';
import { HomeUserComponent } from './hungerfood/user/pages/home-user/home-user.component';
import { GratefulnessComponent } from './hungerfood/user/pages/gratefulness/gratefulness.component';
import { DonateFoodComponent } from './hungerfood/user/pages/donate-food/donate-food.component';
import { DonateMoneyComponent } from './hungerfood/user/pages/donate-money/donate-money.component';
import { DonateNowUserComponent } from './hungerfood/user/pages/donate-now-user/donate-now-user.component';
import { AlliancesComponent } from './hungerfood/user/pages/alliances/alliances.component';
import { UsuariosComponent } from './hungerfood/admin/pages/usuarios/usuarios.component';
import { EditarUComponent } from './hungerfood/admin/components/editar-u/editar-u.component';
import { Report2AdminComponent } from './hungerfood/admin/pages/report2-admin/report2-admin.component';
import { Report1AdminComponent } from './hungerfood/admin/pages/report1-admin/report1-admin.component';
import { NavbarAdminComponent } from './hungerfood/admin/components/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './hungerfood/user/components/navbar-user/navbar-user.component';
import { BuscarDonanteFechaComponent } from './hungerfood/admin/pages/buscar-donante-fecha/buscar-donante-fecha.component';
import { AdministradorComponent } from './hungerfood/admin/components/administrador/administrador.component';

import { LoginService } from './hungerfood/auth/services/login-service/login.service';
import { UserService } from './hungerfood/auth/services/user-service/user.service';
import { HotToastModule } from '@ngneat/hot-toast';
import { DonateMoneyService } from './hungerfood/user/services/donate-money-service/donate-money.service';
import { RegisterDonationFoodService } from './hungerfood/user/services/register-donation-food-service/register-donation-food.service';
import { FoodHungerService } from './hungerfood/admin/services/food-hunger-service/food-hunger.service';
import { Reporte1Service } from './hungerfood/admin/services/reporte1-service/reporte1.service';
import { Reporte2Service } from './hungerfood/admin/services/reporte2-service/reporte2.service';
import {LocalStorageService} from "./public/services/local-storage-service/local-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DonationsComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    SignInFormComponent,
    SignUpFormComponent,
    PageNotFoundComponent,
    HomeAdminComponent,
    HomeUserComponent,
    GratefulnessComponent,
    DonateFoodComponent,
    DonateMoneyComponent,
    DonateNowUserComponent,
    AlliancesComponent,
    UsuariosComponent,
    EditarUComponent,
    Report2AdminComponent,
    Report1AdminComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    BuscarDonanteFechaComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HotToastModule.forRoot()
  ],
  providers: [
    UserService,
    LoginService,
    DonateMoneyService,
    RegisterDonationFoodService,
    FoodHungerService,
    Reporte1Service,
    Reporte2Service,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
