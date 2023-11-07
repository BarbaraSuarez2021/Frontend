import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { HomeAdminComponent } from './components/administrador/home-admin/home-admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Reporte1AdministradorComponent } from './components/administrador/reporte1-administrador/reporte1-administrador.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    HomeAdminComponent,
    Reporte1AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
