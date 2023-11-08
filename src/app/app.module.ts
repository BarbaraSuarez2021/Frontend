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

import { LoginService } from './hungerfood/auth/services/login-service/login.service';
import { UserService } from './hungerfood/auth/services/user-service/user.service';
import { HotToastModule } from '@ngneat/hot-toast';

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
    HomeUserComponent
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
