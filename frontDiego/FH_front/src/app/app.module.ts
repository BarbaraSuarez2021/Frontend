import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { AdministradorComponent } from './componenets/administrador/administrador.component';
import { BuscarDonanteFechaComponent } from './componenets/buscar-donante-fecha/buscar-donante-fecha.component';
import { UsuariosComponent } from './componenets/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarUComponent } from './componenets/editar-u/editar-u.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdministradorComponent,
    BuscarDonanteFechaComponent,
    UsuariosComponent,
    EditarUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
